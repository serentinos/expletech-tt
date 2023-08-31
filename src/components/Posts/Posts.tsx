import { PostsCarousel } from '../PostsCarousel/PostsCarousel';
import { Container, Stack } from '@mui/material';
import CreateNewPost from '../CreateNewPost/CreateNewPost';
import { useGetAllPostsQuery } from '../../features/post/post';

const Posts = () => {
  const { data: posts } = useGetAllPostsQuery();
  
  return (
    <>
      <Container sx={{'position': 'relative'}}>
        <Stack
          sx={{'min-height': '100vh'}}
          justifyContent={'center'}
        >
          {posts && <PostsCarousel posts={posts} />}
        </Stack>

       {posts && <CreateNewPost />}
      </Container>
    </>
  )
}

export default Posts