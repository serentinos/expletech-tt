import { useEffect, useState } from 'react'
import { postsApi } from '../../api/posts';
import { PostsCarousel } from '../PostsCarousel/PostsCarousel';
import { PostWithUser } from '../../types/postWithUser';
import { Container, Stack } from '@mui/material';
import CreateNewPost from '../CreateNewPost/CreateNewPost';

const Posts = () => {
  const [posts, setPosts] = useState<PostWithUser[]>([]);
  const [isError, setIsError] = useState<string>('');
  const isPostsLoaded = posts.length > 0;
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
      <Container sx={{'position': 'relative'}}>
        <Stack
          sx={{'min-height': '100vh'}}
          justifyContent={'center'}
        >
          {isPostsLoaded && <PostsCarousel posts={posts} />}
        </Stack>

       {isPostsLoaded && <CreateNewPost />}
      </Container>
    </>
  )
}

export default Posts