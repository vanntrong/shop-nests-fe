export type TMonthYear = {
  year: number;
  month?: number;
};

export type T = any;

export enum ETokenName {
  ACCESS_TOKEN = "access_token",
  REFRESH_TOKEN = "refresh_token",
}

export interface IPaginationResponse<T> {
  message?: string;
  offset: number;
  limit: number;
  total: number;
  data: T[];
  hasNext: boolean;
}

export interface IPaginationParams {
  offset?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  keyword?: string;
}

export interface IResultResponse<T> {
  message?: string;
  data: T;
}

export type TSearchParams = {
  keyword?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  offset?: number;
  limit?: number;
};
