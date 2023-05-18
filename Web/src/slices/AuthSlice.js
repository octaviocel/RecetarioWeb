import { ApiSlice } from "./ApiSlice";

export const AuthSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),
    signUp: builder.mutation({
      query: (user) => ({
        url: "/auth/signup",
        method: "POST",
        body: { ...UserWithoutRole(user) },
      }),
    }),
    verify: builder.mutation({
      query: (codeVerification) => ({
        url: "/auth/verify",
        method: "POST",
        body: { ...codeVerification },
      }),
    }),
    resendCode: builder.mutation({
      query: (email) => ({
        url: "/auth/resendCode",
        method: "POST",
        body: { email },
      }),
    }),
    findProfile: builder.mutation({
      query: (id) => ({
        url: `/auth/profile/${id}`,
        method: "GET",
      }),
    }),
    updateProfile: builder.mutation({
      query: (user) => ({
        url: "/auth/profile/update",
        method: "PUT",
        body: { ...user },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignUpMutation,
  useResendCodeMutation,
  useVerifyMutation,
  useFindProfileMutation,
  useUpdateProfileMutation,
} = AuthSlice;
