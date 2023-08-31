import { FC } from "react";
import { PostWithUser } from "../../types/postWithUser";
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import PostComments from "../PostComments/PostComments";
import PostCardAuthor from "../PostCardAuthor/PostCardAuthor";

interface Props {
  post: PostWithUser;
}
const PostCard:FC<Props> = ({ post }) => {
  const { title, body } = post;
  const { name, email } = post.user;
  
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
          <PostComments postId={post.id}/>
        </CardActions>
      </Card>
    </>
  )
}

export default PostCard