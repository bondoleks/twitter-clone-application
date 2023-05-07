import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Grid, Hidden, IconButton, Container, Typography, Toolbar, Box, Button } from '@mui/material';
import Link from '@mui/material/Link';
import Search from '../../components/Search/Search';
import WestIcon from '@mui/icons-material/West';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TabsProfile from './TabsProfile';


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

  return (

    <Grid container spacing={3} sx={{ height: '100%', marginLeft: "24px" }}>

      <Grid item md={3}>
        <Sidebar />
      </Grid>

      <Grid item xs={12} md={5} sm={8} sx={{ borderRight: '1px solid grey', borderLeft: '1px solid grey' }}>
        <Box position='fixed' bgcolor={'white'} sx={{ width: '41.5%', zIndex: '99', top: '0', left: '28%' }}>
          <Toolbar >
            <IconButton >
              <WestIcon />
            </IconButton>
            <Box ml={2}>
              <Typography variant='h6'>User</Typography>
              <Typography>N Tweets</Typography>
            </Box>
          </Toolbar>
        </Box>

        <Container sx={{ marginTop: '70px' }}>
          <Box sx={{ bgcolor: 'grey.300', width: '115%', marginLeft: '-10%', height: '200px' }}></Box>

          <StyledAvatar
            alt="User Avatar"
            src='../../img/avatar.png'
            sx={{ width: '30%', height: '30%', borderRadius: '50%', marginTop: '-15%', marginLeft: '10px', marginBottom: '20px', cursor: 'pointer' }}
          />

          <Hidden smDown>
            <Button variant="outlined" sx={{ position: 'absolute', top: '300px', left: '57%', color: 'primary', border: '1px solid primary', borderRadius: '50px', textTransform: 'none', fontWeight: '600' }}>
              Edit profile
            </Button>
          </Hidden>

          <Hidden smUp>
            <Button variant="outlined" sx={{ position: 'absolute', top: '350px', left: '65%', color: 'primary', border: '1px solid primary', borderRadius: '50px', textTransform: 'none', fontWeight: '600' }}>
              Edit profile
            </Button>
          </Hidden>

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

        <TabsProfile />

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