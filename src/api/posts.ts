import { Post } from "../types/post";
import { User } from "../types/user";
import { client } from "../utils/fetchclient";

const getAllPosts = () => {
  return client.get<Post[]>('/posts');
};

const getPostComments = (postId: number) => {
  return client.get<Comment[]>(`/posts/${postId}/comments`)
};

const getAllUsers = () => {
  return client.get<User[]>('/users');
}


export const postsApi = {
  getAllPosts,
  getPostComments,
  getAllUsers,
};