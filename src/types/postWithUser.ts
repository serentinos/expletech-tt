import { Post } from "./post";
import { User } from "./user";

export interface PostWithUser extends Post {
  user: User,
}