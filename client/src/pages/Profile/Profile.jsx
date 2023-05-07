import React from 'react';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Grid, Hidden, IconButton, Container, Typography, Toolbar, Box, Button, Tab, Tabs } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import Link from '@mui/material/Link';
import Search from '../../components/Search/Search';
import WestIcon from '@mui/icons-material/West';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export const Profile = () => {

  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover:before': {
      opacity: 1,
    },
  }));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (

    <Grid container spacing={3} sx={{ margin: "48px" }}>

      <Grid item xs={3}>
        <Sidebar />
      </Grid>

      <Grid item xs={5}>
        <Toolbar position="fixed" edge="start">
          <IconButton >
            <WestIcon />
          </IconButton>
          <Box ml={2}>
            <Typography variant='h6'>User</Typography>
            <Typography>N Tweets</Typography>
          </Box>
        </Toolbar>

        <Container>
          <Box sx={{ bgcolor: 'grey.300', width: '100%', height: '200px' }}></Box>

          <StyledAvatar
            alt="User Avatar"
            src='../../img/avatar.png'
            sx={{ width: 128, height: 128, borderRadius: '50%', marginTop: '-64px', marginLeft: '20px', marginBottom: '20px', cursor: 'pointer' }}
          />

          <Button variant="outlined" sx={{ position: 'absolute', top: '350px', left: '60%', color: 'primary', border: '1px solid primary', borderRadius: '50px', textTransform: 'none', fontWeight: '600' }}>
            Edit profile
          </Button>

          <Box>
            <Typography sx={{ fontSize: '24px', fontWeight: '900' }}>User</Typography>
            <Typography>@nikname</Typography>
            <Box display={'flex'} marginTop={'10px'}>
              <IconButton edge='start'>
                <CalendarMonthIcon />
              </IconButton>
              <Typography mt={1}>Joined Mounth year</Typography>
            </Box>
            <Box display={'flex'}>
              <Link href="#" underline="hover" sx={{ '&:hover': { color: 'black' } }}>
                <Typography mr={2} sx={{ fontSize: '14px', color: 'black' }}>N Following</Typography>
              </Link>
              <Link href="#" underline="hover" sx={{ '&:hover': { color: 'black' } }}>
                <Typography sx={{ fontSize: '14px', color: 'black' }}>N Follower</Typography>
              </Link>
            </Box>
          </Box>
        </Container>

        <TabContext>
          <Tabs variant="fullWidth" value={value} onChange={handleChange}  >
            <Tab label="Tweets" sx={{ textTransform: 'none' }}></Tab>
            <Tab label="Replies" sx={{ textTransform: 'none' }}></Tab>
            <Tab label="Media" sx={{ textTransform: 'none' }}></Tab>
            <Tab label="Linkes" sx={{ textTransform: 'none' }}></Tab>
          </Tabs>

          <TabPanel value={value} index={0}>
            <Typography variant="h4">Tweets</Typography>
            <Typography variant="body1">Here are the tweets</Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </TabContext>


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