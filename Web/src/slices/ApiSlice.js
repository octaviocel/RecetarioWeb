import SecureLS from "secure-ls";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "@app/utils/constants";

const ls = new SecureLS({ encodingType: "aes" });

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  credentials: "same-origin",
  prepareHeaders: (headers) => {
    const accessToken = ls.get("_accessToken");
    if (accessToken) {
      headers.set("authorization", `Bearer ${JSON.parse(accessToken)}`);
    }
    return headers;
  },
});

const baseQueryForRefresh = fetchBaseQuery({
  baseUrl: baseURL,
  credentials: "same-origin",
  prepareHeaders: (headers) => {
    const refreshToken = ls.get("_refreshToken");
    if (refreshToken) {
      headers.set("authorization", `Bearer ${JSON.parse(refreshToken)}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const refreshResult = await baseQueryForRefresh(
      "/auth/refresh",
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      await baseQuery("/auth/logout", api, extraOptions);
      ls.removeAll();
    }
  }

  return result;
};

export const ApiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
