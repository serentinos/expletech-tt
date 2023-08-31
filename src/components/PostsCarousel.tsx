import { FC, useState } from "react"
import PostCard from "./PostCard";
import { PostWithUser } from "../types/postWithUser";

interface Props {
  posts: PostWithUser[]
}

export const PostsCarousel:FC<Props> = ({ posts }) => {
  const [ post ] = useState(posts[0]);
  
  return (
    <PostCard post={post} />
  )
}

export default PostsCarousel