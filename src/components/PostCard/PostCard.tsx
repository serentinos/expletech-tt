import { FC, useState } from "react";
import { PostWithUser } from "../../types/postWithUser";
import { Card, CardActions, CardContent, Collapse, Typography } from '@mui/material';
import LoadPostComments from "../LoadPostComments/LoadPostComments";
import PostCardAuthor from "../PostCardAuthor/PostCardAuthor";
import { postsApi } from "../../api/posts";
import PostComments from "../PostComments/PostComments";
import { Comment } from "../../types/comment";

interface Props {
  post: PostWithUser;
}
export const PostCard:FC<Props> = ({ post }) => {
  const { title, body, id } = post;
  const { name, email } = post.user;
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [openCommentSection, setOpenCommentSection] = useState(false);
  const isCommentsLoaded = comments.length > 0;

  const handleLoadComments = async () => {
    if (isCommentsLoaded) {
      setOpenCommentSection(prev => !prev);
      
      return;
    }
    
    setIsLoading(true);
    
    try {
      const commentsFromServer = await postsApi.getPostComments(id);
      setComments(commentsFromServer)
      setOpenCommentSection(true);
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
            isCommentsLoaded={isCommentsLoaded && openCommentSection}
          />
        </CardActions>

        <Collapse in={openCommentSection}>
          <CardContent>
            <PostComments comments={comments}/>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}

export default PostCard