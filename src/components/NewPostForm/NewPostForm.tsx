import { LoadingButton } from '@mui/lab';
import { Box, Button, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import { ChangeEvent, FC, forwardRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import { postsApi } from '../../api/posts';
import { NewPost } from '../../types/newPost';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '600px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

const defaultFormData = {
  title: '',
  body: '',
}

interface ButtonProps {
  isLoading: boolean,
  isSuccess: boolean,
  handleSubmit: () => void
}

export const FormButton:FC<ButtonProps> = ({ isLoading, isSuccess, handleSubmit }) => {
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
        onClick={handleSubmit}
        endIcon={isSuccess ? <CheckCircleOutlineIcon/> : <SendIcon />}
        variant='contained'
        color={isSuccess ? 'success' : 'primary'}
      >
        {isSuccess ? 'Sended!' : 'Send'}
      </Button>
    )}
  </>
  )
};

interface Props {
  onClose: () => void
}

export const NewPostForm = forwardRef<any,Props>(({ onClose }) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isSuccess, setIsSuccess ] = useState(false);
  const [ formContent, setFormContent ] = useState(defaultFormData)
  const [ formError, setFormError ] = useState(defaultFormData);
  const defaultUserId = 1;
  
  const validateFormInput = (formData: Omit<NewPost, 'userId'>) => {
    const TITLE_MAX_LENGTH = 100;
    let isValid = true;
    
    if (formData.title.trim() === '') {
      setFormError(prev => ({...prev, title: 'Title is empty but it required'}))
      isValid = false;
    }

    if (formData.body.trim() === '') {
      setFormError(prev => ({...prev, body: 'Body is empty but it required'}))
      isValid = false;
    }

    if (formData.title.trim().length > TITLE_MAX_LENGTH) {
      setFormError(prev => ({...prev, title: `Max letter ammount is ${TITLE_MAX_LENGTH}`}))
      isValid = false;
    }

    return isValid
  }

  const handleSubmitForm = async () => {
    if (!validateFormInput(formContent)) {
      return;
    }

    if (isSuccess) {
      return;
    }
    
    setIsLoading(true);

    try {
      const requestBody = {
        title: formContent.title.trim(),
        body: formContent.body.trim(),
        userId: defaultUserId
      }

      await postsApi.postNewPost(requestBody)

      setIsSuccess(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (formError.title) {
      setFormError(prev => ({...prev, title: ''}))
    }

    if(isSuccess) {
      setIsSuccess(false);
    }

    setFormContent(prev => ({...prev, title: e.target.value}))
  };

  const handleBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (formError.body) {
      setFormError(prev => ({...prev, body: ''}))
    }
    
    if(isSuccess) {
      setIsSuccess(false);
    }

    setFormContent(prev => ({...prev, body: e.target.value}))
  }
  
  return (
    <Box
      sx={modalStyle}
    >
      <Stack
        mb={2}
        direction='row'
        justifyContent='space-between'
      >
        <Typography variant='h6' >
          Create a new post...
        </Typography>

        <IconButton >
          <CloseIcon
            onClick={() => onClose()}
          />
        </IconButton>
      </Stack>
      
      <Divider />

      <TextField
        label='Enter your title.'
        fullWidth
        size='small'
        margin='normal'
        error={Boolean(formError.title)}
        helperText={formError.title}
        value={formContent.title}
        onChange={handleTitleChange}
      />

      <TextField
        label='Enter your message.'
        multiline
        fullWidth
        margin='normal'
        rows={4}
        error={Boolean(formError.body)}
        helperText={formError.body}
        value={formContent.body}
        onChange={handleBodyChange}
      />

      <FormButton
        isLoading={isLoading}
        isSuccess={isSuccess}
        handleSubmit={handleSubmitForm}
      />
    </Box>
  )
})

export default NewPostForm