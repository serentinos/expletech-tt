import { Box, Fab, Zoom } from "@mui/material"
import  AddIcon  from "@mui/icons-material/Add"
import { useEffect, useState } from "react"


const CreateNewPost = ({ ...props }) => {
  const [ visible, setVisible ] = useState(false);
  const timeout = 800;

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
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Zoom>
    </Box>
  )
}

export default CreateNewPost