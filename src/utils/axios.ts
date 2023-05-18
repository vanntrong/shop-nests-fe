import axios, { InternalAxiosRequestConfig } from "axios";
import queryString from "query-string";

import { API_URL } from "@/configs/app.config";
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
  baseURL: API_URL,
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
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
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
