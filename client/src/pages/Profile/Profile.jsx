import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Grid, Hidden, IconButton, Container, Typography, Toolbar, Box } from '@mui/material';
import Search from '../../components/Search/Search';
import WestIcon from '@mui/icons-material/West';

export const Profile = () => {
  return (
    <Grid container spacing={2} sx={{ margin: "48px" }}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>

      <Grid item xs={6}>
        <Container>
          <Toolbar>
            <IconButton>
              <WestIcon />
            </IconButton>
            <Box ml={2}>
              <Typography variant='h6'>UserName</Typography>
              <Typography>N Tweets</Typography>
            </Box>

          </Toolbar>

        </Container>


      </Grid>

      <Hidden mdDown>
        <Grid item xs={3}>
          <Search />
        </Grid>
      </Hidden>
    </Grid>


  )
}

export default Profile