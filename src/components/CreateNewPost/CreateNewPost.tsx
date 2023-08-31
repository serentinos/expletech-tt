import { Box, Fab, Modal, Zoom } from "@mui/material"
import  AddIcon  from "@mui/icons-material/Add"
import { useEffect, useState } from "react"
import { NewPostForm } from "../NewPostForm";

export const CreateNewPost = ({ ...props }) => {
  const [ visible, setVisible ] = useState(false);
  const [ modalOpen, setModalOpen ] = useState(false);
  const timeout = 800;

  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), timeout)
  }, [])

  
  return (
    <Box
      sx={{
        ...props.sx,
        'position': 'absolute',
        'right': '30px',
        'bottom': '30px'
      }}
    >
      <Zoom
        in={visible}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleOpen}
        >
          <AddIcon />
        </Fab>
      </Zoom>

      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <NewPostForm onClose={handleClose} />
      </Modal>
    </Box>
  )
}

export default CreateNewPost