import { Comment } from "../types/comment";
import { NewPost } from "../types/newPost";
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

  const preparedPosts = getPostsWithUsers(postsFromServer, usersFromServer);

  return preparedPosts;
}

const postNewPost = async (body: NewPost) => {
  return client.post<Post>('/posts', body);
}


export const postsApi = {
  getAllPosts,
  getPostComments,
  getAllUsers,
  getAllPostsWithUsers,
  postNewPost,
};