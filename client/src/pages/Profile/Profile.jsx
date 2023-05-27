import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import {
  Grid,
  Hidden,
  IconButton,
  Container,
  Typography,
  Box,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Search from '../../components/Search/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TabsProfile from './TabsProfile';
import ToolbarProfile from './ToolbarProfile';
import ButEditUser from './ButEditUser';


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

        <>
          <ToolbarProfile />

          <Container sx={{ marginTop: '70px', width: '100%' }}>
            <Box sx={{
              bgcolor: 'grey.300',
              width: '115%',
              marginLeft: '-10%',
              height: '200px'
            }}></Box>


            <StyledAvatar
                alt="User Avatar"
                src='../../img/avatar.png'

                sx={{
                  width: '30%',
                  height: '30%',
                  borderRadius: '50%',
                  marginTop: '-15%',
                  marginLeft: '10px',
                  marginBottom: '20px',
                  cursor: 'pointer'
                }}
            />

            <ButEditUser />

            <Box>
              <Typography sx={{
                fontSize: '24px',
                fontWeight: '900'
              }}>User</Typography>
              <Typography>@nikname</Typography>
              <Box display={'flex'}
                   marginTop={'10px'}>
                <IconButton edge='start'>
                  <CalendarMonthIcon />
                </IconButton>
                <Typography mt={1}>Joined Mounth year</Typography>
              </Box>
              <Box display={'flex'}>
                <Link href="#" underline="hover" sx={{ '&:hover': { color: 'black' } }}>
                  <Typography mr={2} sx={{
                    fontSize: '14px',
                    color: 'black'
                  }}>N Following</Typography>
                </Link>
                <Link href="#" underline="hover" sx={{ '&:hover': { color: 'black' } }}>
                  <Typography sx={{
                    fontSize: '14px',
                    color: 'black'
                  }}>N Follower</Typography>
                </Link>
              </Box>
            </Box>
          </Container>

          <TabsProfile />
        </>
  )
}

export default Profile