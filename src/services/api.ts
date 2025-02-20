import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store/store";
import { CreatePostData, LoginRequest, LoginResponse, PostResponse, RegisterUserData } from "../type";

const baseUrl = "http://localhost:3000";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Users", "Posts"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<{ success: boolean; message: string }, RegisterUserData>({
      query: (userData) => ({
        url: "/Users",
        method: "POST",
        body: userData,
      }),
    }),

    // Login mutation
    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      queryFn: async (credentials) => {
        try {
          // Fetch user by email
          const response = await fetch(
            `http://localhost:3000/Users?email=${credentials.email}`
          );
          const users = await response.json();

          // Check if user exists
          if (users.length === 0) {
            return { error: { status: 404, data: { message: "User not found" } } };
          }
          const user = users[0];
          // Check if password matches
          if (user.password !== credentials.password) {
            return { error: { status: 401, data: { message: "Invalid password" } } };
          }

          // Generate a fake token (For real apps, use JWT)
          const fakeToken = btoa(user.email); // Base64 encode email as token

          return {
            data: {
              success: true,
              user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                token: fakeToken,
              },
              message: "Login successful",
            },
          };
        } catch (err) {
          return { error: { status: 500, data: { message: "something went wrong" } } };
        }
      },
    }),
    //  Logout mutation 
    logout: builder.mutation({
      query: () => ({
        url: "/",
        method: "POST",
      }),
    }),

    // Post routes
    createPost: builder.mutation<PostResponse, CreatePostData>({
      query: (postData) => ({
        url: "/Post",
        method: "POST",
        body: postData,
      }),
      invalidatesTags: ["Posts"],
    }),
    getAllPosts: builder.query({
      query: () => "/Post",
      providesTags: ["Posts"],
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutMutation, useCreatePostMutation, useGetAllPostsQuery } = apiSlice;


