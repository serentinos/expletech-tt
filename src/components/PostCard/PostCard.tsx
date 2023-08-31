import { FC, useState } from "react";
import { PostWithUser } from "../../types/postWithUser";
import { Card, CardActions, CardContent, Collapse, Typography } from '@mui/material';
import LoadPostComments from "../LoadPostComments/LoadPostComments";
import PostCardAuthor from "../PostCardAuthor/PostCardAuthor";
import PostComments from "../PostComments/PostComments";

import { postsApi } from "../../features/post/post";

interface Props {
  post: PostWithUser;
}
export const PostCard:FC<Props> = ({ post }) => {
  const { title, body, id } = post;
  const [
    triggerCommentLoading, 
    { data, isLoading, isSuccess: isLoaded }
  ] = postsApi.endpoints.getPostComments.useLazyQuery();
  const { name, email } = post.user;
  const [openCommentSection, setOpenCommentSection] = useState(false);

  const handleLoadComments = async () => {
    if (isLoaded) {
      setOpenCommentSection(prev => !prev);
      
      return;
    }
    
    await triggerCommentLoading(id);
    setOpenCommentSection(true);
  };
  
  return (
    <>
      <Card 
        sx={{
          'maxWidth': 600,
          'margin': '0 auto',
        }}
        variant="outlined"
      >
        <CardContent>
          <PostCardAuthor name={name} email={email}/>
  
        <Typography mb={3} variant="h6">
          {title}
        </Typography>

        <Typography variant="body1">
          {body}
        </Typography>
        </CardContent>
        
        <CardActions>
          <LoadPostComments
            handleLoadComments={handleLoadComments}
            isLoading={isLoading}
            isCommentsLoaded={isLoaded && openCommentSection}
          />
        </CardActions>

        <Collapse in={openCommentSection}>
          <CardContent>
            {data && <PostComments comments={data}/>}
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}

export default PostCard