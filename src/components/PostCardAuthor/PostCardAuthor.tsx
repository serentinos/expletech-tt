import { Stack, Avatar, Typography } from "@mui/material"
import { getRandomColor } from "../../utils/getRandomAvatarColor"
import { FC } from "react";

interface Props {
  name: string,
  email: string,
}

const PostCardAuthor:FC<Props> = ({ name, email }) => {
  const avatarSymbols = name.slice(0, 2).toUpperCase();
  
  return (
    <Stack
    direction="row"
    alignItems={'center'}
    gap={1}
  >
    <Avatar
      sx={{ bgcolor: getRandomColor() }}
    >{avatarSymbols}</Avatar>

    <Stack direction={"column"} >
      <Typography fontWeight={600} >
        {name}
      </Typography>

      <Typography color={'text.secondary'} >
        {email}
      </Typography>
      
    </Stack>
  </Stack>
  )
}

export default PostCardAuthor