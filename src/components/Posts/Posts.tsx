import { PostsCarousel } from '../PostsCarousel/PostsCarousel';
import { Container, Stack } from '@mui/material';
import { CreateNewPost } from '../CreateNewPost/CreateNewPost';
import { useGetAllPostsQuery } from '../../features/post/post';
import { Loader } from '../Loader';

export const Posts = () => {
  const { data: posts } = useGetAllPostsQuery();

  return (
    <>
      <Container sx={{'position': 'relative'}}>
          <Stack
            sx={{
              'minHeight': '100vh',
              'justifyContent': 'center',
            }}
          >
            {posts
            ? (<PostsCarousel posts={posts} />)
            : (<Loader />)}
          </Stack>

         {posts && <CreateNewPost />}
      </Container>
    </>
  )
}

export default Posts