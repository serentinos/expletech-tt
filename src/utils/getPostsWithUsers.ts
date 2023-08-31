import { Post } from "../types/post";
import { User } from "../types/user";

const anonymousUser: User = {
  name: 'Anonymous User',
  email: 'hidden@example.com',
  id: 999,
  username: 'Anonymous'
}

export const getPostsWithUsers = (posts: Post[], users: User[]) => {
  const postsWithUsers = posts.map(post => ({
    ...post,
    user: users.find(({ id }) => post.userId === id) || anonymousUser
  }))

  return postsWithUsers;
}