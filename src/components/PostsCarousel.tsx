import { FC } from "react"
import { Post } from "../types/post"

interface Props {
  posts: Post[]
}

const PostsCarousel:FC<Props> = ({ posts }) => {
  return (
    <div>PostsCarousel</div>
  )
}

export default PostsCarousel