import { useState } from 'react'
import { Post } from '../types/post';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  
  
  return (
    <div>Posts</div>
  )
}

export default Posts