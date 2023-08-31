import {  Button } from '@mui/material';
import { LoadingButton } from '@mui/lab'
import { FC } from 'react'
interface Props {
  handleLoadComments: () => void,
  isLoading: boolean,
  isCommentsLoaded: boolean,
}

export const LoadPostComments:FC<Props> = ({
    handleLoadComments,
    isLoading,
    isCommentsLoaded
  }) => {  
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
          {isCommentsLoaded ? 'Hide' : 'Watch'} Comments
        </Button>
      )}
    </>
  )
}

export default LoadPostComments