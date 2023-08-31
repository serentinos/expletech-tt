import { FC, useState } from "react";
import { PostWithUser } from "../types/postWithUser";
import { getRandomColor } from '../utils/getRandomAvatarColor'
import { Accordion, AccordionSummary, Avatar, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';

interface Props {
  post: PostWithUser;
}
const PostCard:FC<Props> = ({ post }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { title, body } = post;
  const { name, email } = post.user;
  const avatarSymbols = name.slice(0, 2).toUpperCase();
  
  return (
    <>
      <Card 
        sx={{
          'maxWidth': 400,
        }}
        variant="outlined"
      >
        <CardContent>
        <Stack
          direction="row"
          alignItems={'center'}
          gap={1}
        >
          <Avatar
            sx={{bgcolor: getRandomColor()}}
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
  
        <Typography mb={3} variant="h6">
          {title}
        </Typography>

        <Typography variant="body1">
          {body}
        </Typography>
        </CardContent>
        
        <CardActions>
          <Button 
            size="small"
            fullWidth={true}
          >
            Watch comments
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default PostCard