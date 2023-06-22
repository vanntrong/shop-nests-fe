import axios, { InternalAxiosRequestConfig } from "axios";
import queryString from "query-string";

import { ETokenName, T } from "@/types/common";
import {
  createHandlerChain,
  otherErrorHandler,
  requestErrorHandler,
  serverErrorHandler,
  unauthorizedErrorHandler,
  userErrorHandler,
} from "@/utils/errorHandler";

import { getCookie } from "./cookies";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    serialize: function (params: T) {
      return queryString.stringify(params);
    },
  },
});

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = getCookie(ETokenName.ACCESS_TOKEN);
  // if (token) {
  config.headers.authorization = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpbTEifQ.eyJlbWFpbCI6InRyb25nQGdtYWlsLmNvbSIsImlkIjoiNDQ4N2FiZjQtMDE2YS00OGFkLTliYjQtZTRlYjE3OWYyMzhlIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNjg3NDM4NjIyLCJleHAiOjE2ODc2MTE0MjJ9.VEEwiJRs2It5qgjhgZ25hfwhtFhJet4tpIQRQzGzHaI"}`;
  // }
  config.headers.Accept = "application/json";

  return config;
}

function parseResultsHandler(response: T) {
  return response.data;
}

axiosInstance.interceptors.request.use(authRequestInterceptor);
axiosInstance.interceptors.response.use(
  parseResultsHandler,
  createHandlerChain([
    serverErrorHandler,
    userErrorHandler,
    unauthorizedErrorHandler,
    requestErrorHandler,
    otherErrorHandler,
  ])
);
