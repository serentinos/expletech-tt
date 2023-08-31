import { postsApi as apiClient } from "../../api/posts";
import { FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostWithUser } from "../../types/postWithUser";
import { Comment } from "../../types/comment";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<PostWithUser[], void>({
      queryFn: async () => {
        try {
          const data = await apiClient.getAllPostsWithUsers();

          return { data };
        } catch (error) {
          return { error: (error as FetchBaseQueryError) }
        }
      }
    }),
    
    getPostComments: builder.query<Comment[], number>({
      queryFn: async (postId: number) => {
        try {
          const data = await apiClient.getPostComments(postId);

          return { data };
        } catch (error) {
          return { error: (error as FetchBaseQueryError) }
        }
      }
    }),
  })
})

export const { useGetAllPostsQuery } = postsApi;
