import React from 'react'
import { Box,Typography } from '@mui/material'

export const Bookmarks = () => {
  return (
    <Box sx={{ width: '100%', borderRight: '1px rgb(239, 243, 244) solid', borderLeft: '1px rgb(239, 243, 244) solid' }}>
    <Box sx={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255,0.7)', zIndex: 1 }}>
      <Typography sx={{ fontSize: 18, fontWeight: 700, py: 2, px: 4 }}>
      Bookmarks
      </Typography>
    </Box>  
  </Box> 
  )
}

export default Bookmarks