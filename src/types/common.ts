export type TMonthYear = {
  year: number;
  month?: number;
};

export type T = any;

export enum ETokenName {
  ACCESS_TOKEN = "access-token",
  REFRESH_TOKEN = "refresh-token",
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
}

export interface IResultResponse<T> {
  message?: string;
  data: T;
}
