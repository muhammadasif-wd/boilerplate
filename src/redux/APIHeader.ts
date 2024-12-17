/* eslint-disable no-undef */
/* eslint-disable object-curly-spacing */
/* eslint-disable prettier/prettier */
"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TResponse } from "../interface/response.interface";

const baseQuery = fetchBaseQuery({
  // baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers) => {
    // const token = getCookie("access_token");
    const token = localStorage.getItem("access_token");

    headers.set("ngrok-skip-browser-warning", "true");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);

      return headers;
    }
  },
});

const formatErrorResponse = (code: number, message?: string, errors?: any) => {
  return {
    error: {
      success: false,
      code: code,
      message: message,
      errors: errors ?? null,
    },
  };
};

const baseQueryWithReactAuth = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  let result: any = await baseQuery(args, api, extraOptions);

  if (!window.navigator.onLine) {
    // check internet connections
    return formatErrorResponse(
      503,
      "You're offline. Check your internet connection.",
    );
  }

  if (result?.error?.status === 401) {
    // User Unauthorized
    localStorage.removeItem("is_loggedIn");
    const response_data = result?.error?.data as TResponse;

    return formatErrorResponse(
      result?.error?.status,
      response_data?.message,
      response_data?.errors,
    );
  }
  if (
    parseInt(result?.error?.status) < 600 &&
    parseInt(result?.error?.status) > 200
  ) {
    // Server Connection Not Found
    return formatErrorResponse(
      result?.error?.status,
      result?.error?.data?.message,
      result?.error?.data?.errors,
    );
  }
  if (result?.error?.status === "FETCH_ERROR") {
    // Server Connection Not Found
    localStorage.removeItem("is_loggedIn");

    return formatErrorResponse(
      503,
      `Failed to fetch! Check server connections`,
      result?.error?.error,
    );
  }
  return result;
};

const APIHeader = createApi({
  baseQuery: baseQueryWithReactAuth,
  endpoints: () => ({}),
});

export default APIHeader;
