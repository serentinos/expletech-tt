import { useEffect, useState } from 'react'
import { postsApi } from '../api/posts';
import { PostsCarousel } from './PostsCarousel';
import { PostWithUser } from '../types/postWithUser';
import { Container } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState<PostWithUser[]>([]);
  const [isError, setIsError] = useState<string>('');
  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsWithUsers = await postsApi.getAllPostsWithUsers();

        setPosts(postsWithUsers);
      } catch (error) {
        setIsError((error as Error).message);
      }
    }

    fetchPosts();
  }, []);
  
  return (
    <>
      <Container >
        {posts.length !== 0 && <PostsCarousel posts={posts} />}
      </Container>
    </>
  )
}

export default Posts