import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosRequestConfig, AxiosError } from "axios";


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"]; 
      data?: any; 
    },
    unknown,
    {
      status: number | null;
      data: any;
    }
  > =>
  async ({ url, method, data }) => {
    try {
      const response = await axiosInstance({ url, method, data });
      return { data: response.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        error: {
          status: axiosError.response?.status || null,
          data: axiosError.response?.data || axiosError.message || "An error occurred.",
        },
      };
    }
  };


// import { BaseQueryFn } from "@reduxjs/toolkit/query";
// import axios, { AxiosRequestConfig } from "axios";

// const axiosInstance = axios.create({
//   baseURL: `${import.meta.env.VITE_APP_BASE_URL}`,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const axiosBaseQuery =
//   (): BaseQueryFn<{
//     url: string;
//     method: AxiosRequestConfig["method"];
//     data?: any;
//   }> =>
//   async ({ url, method, data }) => {
//     try {
//       const response = await axiosInstance({ url, method, data });
//       return { data: response.data };
//     } catch (error: any) {
//       return {
//         error: {
//           status: error.response?.status,
//           data:
//             error.response?.data ||
//             error?.data ||
//             "An error occurred while processing your request!",
//         },
//       };
//     }
//   };
