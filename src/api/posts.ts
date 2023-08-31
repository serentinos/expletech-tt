import { Post } from "../types/post";
import { User } from "../types/user";
import { client } from "../utils/fetchclient";
import { getPostsWithUsers } from "../utils/getPostsWithUsers";

const getAllPosts = () => {
  return client.get<Post[]>('/posts');
};

const getPostComments = (postId: number) => {
  return client.get<Comment[]>(`/posts/${postId}/comments`)
};

const getAllUsers = () => {
  return client.get<User[]>('/users');
}

const getAllPostsWithUsers = async () => {
  const [postsFromServer, usersFromServer] = await Promise.all([
    getAllPosts(),
    getAllUsers(),
  ])
  console.log('worked');

  const preparedPosts = getPostsWithUsers(postsFromServer, usersFromServer);

  return preparedPosts;
}


export const postsApi = {
  getAllPosts,
  getPostComments,
  getAllUsers,
  getAllPostsWithUsers,
};