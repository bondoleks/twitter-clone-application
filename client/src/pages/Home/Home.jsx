import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';


export const Home = () => {
  return (
    <Grid container spacing={3} sx={{margin: "48px"}}>
      <Sidebar />
      <Box sx={{ fontSize: '28px', fontWeight: 600, fontFamily: 'Roboto', marginTop: '50px' }}>Home</Box>
    </Grid>

  )
}

export default Home