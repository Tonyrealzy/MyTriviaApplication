import { createApi } from "@reduxjs/toolkit/query";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getByParams: builder.query({
      query: (param: any) => {
        // This dynamically creates the query string parameters....
        const searchParams = new URLSearchParams(param).toString();
        return {
          url: `?${searchParams}`,
          method: "GET",
        };
      },
      keepUnusedDataFor: 60,
    }),
    // All you have to do is pass an object with keys corresponding to the query parameters you want say,
    // { amount: "10", category: "sports", difficulty: "easy", type: 'multiple'}
    // To make the API call, simply run the following, for example:
    // const {data, isLoading} = useGetByParamsQuery({amount: "10", category: "sports", difficulty: "easy", type: 'multiple'})
  }),
});
