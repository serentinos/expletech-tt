import { Box, Divider, Typography } from "@mui/material"
import { FC } from "react"
import { PostCardAuthor } from "../PostCardAuthor"
import { Comment } from "../../types/comment"

interface Props {
  userName: string,
  comment: Comment,
}

export const PostCommentItem:FC<Props> = ({ userName, comment }) => {
  const { name, body, email} = comment;
  
  return (
    <>
     <Box py={2}>
        <PostCardAuthor email={email} name={userName}/>

        <Typography variant="h6" >
          {name}
        </Typography>

        <Typography>
          {body}
        </Typography>
      </Box>
      <Divider />
    </>
  )
}

export default PostCommentItem