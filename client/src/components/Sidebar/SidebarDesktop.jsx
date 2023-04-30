import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Typography, Button, Hidden } from '@mui/material';
import { Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const SidebarDesktop = () => {
  return (

          <Stack sx={{ margin: '24px' }}>
            <Link to={`/`}>
                <IconButton>
                  <TwitterIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                </IconButton>
            </Link>

            <Link to={`/home`}>
                <IconButton aria-label="Home" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <HomeIcon sx={{ margin: '10px' }} fontSize="medium" color='primary' />
                  <Typography variant='h6'>Home</Typography>
                </IconButton>
            </Link>

            <Link to={`/explore`}>
                <IconButton aria-label="Explore" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <Grid3x3Icon sx={{ margin: '10px' }} fontSize="medium" />
                  <Typography variant='h6'>Explore</Typography>
                </IconButton>
            </Link>

            <Link to={`/notifications`}>
                <IconButton aria-label="Notifications" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <NotificationsActiveIcon sx={{ margin: '10px' }} fontSize="medium" />
                  <Typography variant='h6'>Notifications</Typography>
                </IconButton>
            </Link>

            <Link to={`/messages`}>
                <IconButton aria-label="Messages" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <MailOutlineIcon sx={{ margin: '10px' }} fontSize="medium" />
                  <Typography variant='h6'>Messages</Typography>
                </IconButton>
            </Link>

            <Link to={`/profile`}>
                <IconButton aria-label="Profile" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <PersonIcon sx={{ margin: '10px' }} fontSize="medium" />
                  <Typography variant='h6'>Profile</Typography>
                </IconButton>
            </Link>

              <Button variant="contained" color="primary" size="medium"
                sx={{ marginBottom: '50px', borderRadius: '50px' }}>Tweet</Button>

            <Link to={`/user`}>
                <IconButton aria-label="User" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <AccountCircleIcon sx={{ margin: '10px' }} fontSize="large" color="success" />
                  <Typography variant='h6'>User</Typography>
                </IconButton>
            </Link>
          </Stack>
  )
}

export default SidebarDesktop