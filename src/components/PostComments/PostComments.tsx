import { Button } from '@mui/material';
import { LoadingButton } from '@mui/lab'
import { FC, useState } from 'react'
import { postsApi } from '../../api/posts';

interface Props {
  postId: number,
}

const PostComments:FC<Props> = ({ postId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const handleLoadComments = async () => {
    setIsLoading(true);
    
    try {
      const commentsFromServer = await postsApi.getPostComments(postId);


    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      {isLoading
      ? (
        <LoadingButton fullWidth loading variant="outlined">
          Submit
        </LoadingButton>
      ) : (
        <Button
          fullWidth
          onClick={handleLoadComments}
        >
          Watch Comments
        </Button>
      )}

      
    </>
  )
}

export default PostComments