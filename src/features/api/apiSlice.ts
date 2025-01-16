import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getByAmount: builder.query({
      query: (amount: any) => {
        const searchParams = new URLSearchParams(amount).toString();
        return {
          url: `?amount=${searchParams}`,
          method: "GET",
        };
      },
    }),
    getByCategory: builder.query({
      query: (category: any) => {
        const searchParams = new URLSearchParams(category).toString();
        return {
          url: `?category=${searchParams}`,
          method: "GET",
        };
      },
    }),
    getByDifficulty: builder.query({
      query: (difficulty: any) => {
        const searchParams = new URLSearchParams(difficulty).toString();
        return {
          url: `?difficulty=${searchParams}`,
          method: "GET",
        };
      },
    }),
    getByType: builder.query({
      query: (type: any) => {
        const searchParams = new URLSearchParams(type).toString();
        return {
          url: `?type=${searchParams}`,
          method: "GET",
        };
      },
    }),
  }),
});
