import { Box } from '@mui/material'
import { FC } from 'react'
import { Comment } from '../../types/comment'
import { PostCommentItem } from '../PostCommentItem';


interface Props {
  comments: Comment[]
};

const PostComments:FC<Props> = ({ comments }) => {
  
  return (
    <Box 
    sx={{
      'maxHeight': '300px',
      'overflow': 'auto'
    }}
    >
      {comments.map(comment => {
        const commentUserName = comment.email.split('@')[0];

        return(
          <PostCommentItem
            key={comment.id}
            comment={comment}
            userName={commentUserName}
          />
        )
      })}
    </Box>
  )
}

export default PostComments