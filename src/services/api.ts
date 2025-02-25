import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import { ApiResponse, User, Post, Comment, Like, Follower, Notification } from "../type";

const baseurl = import.meta.env.VITE_SERVER_URL;
console.log("baseurl", baseurl)
// http://localhost:5000/api/register
// http://localhost:5000/api
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseurl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    register: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<
      ApiResponse<{ accesstoken: string; refreshtoken: string; id: number }>,
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: "/posts/",
        method: "POST",
        body,
      }),
    }),
    likePost: builder.mutation<Like, { postId: string }>({
      query: ({ postId }) => ({
        url: `/posts/${postId}/like`,
        method: "POST",
      }),
    }),
    commentOnPost: builder.mutation<Comment, { postId: string; text: string }>({
      query: ({ postId, text }) => ({
        url: `/posts/${postId}/comment`,
        method: "POST",
        body: { text },
      }),
    }),
    followUser: builder.mutation<Follower, { userId: string }>({
      query: ({ userId }) => ({
        url: `/users/${userId}/follow`,
        method: "POST",
      }),
    }),
    getNotifications: builder.query<Notification[], void>({
      query: () => "/notifications/",
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useCreatePostMutation,
  useLikePostMutation,
  useCommentOnPostMutation,
  useFollowUserMutation,
  useGetNotificationsQuery,
} = api;
