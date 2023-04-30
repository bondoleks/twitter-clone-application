import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip, Typography, Box, Container, Grid, Button } from '@mui/material';
import { Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Hidden from '@mui/material/Hidden';


export const Sidebar1 = () => {
  return (
    <>
      <Hidden smDown>
        <Box sx={{ marginRight: '20px', height: 'calc(100vh - 48px)', overflowY: 'auto' }}>
          <Stack sx={{ margin: '24px' }}>
            <Link to={`/`}>
              <Tooltip title="Main">
                <IconButton>
                  <TwitterIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                </IconButton>
              </Tooltip>
            </Link>

            <Link to={`/home`}>
              <Hidden mdDown>
                <IconButton aria-label="Home" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <HomeIcon sx={{ margin: '10px' }} fontSize="medium" color='primary' />
                  <Typography variant='h6'>Home</Typography>
                </IconButton>
              </Hidden>
              <Hidden mdUp>
                <Tooltip title="Home">
                  <IconButton >
                    <HomeIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                  </IconButton>
                </Tooltip>
              </Hidden>
            </Link>

            <Link to={`/explore`}>
              <Hidden mdDown>
                <IconButton aria-label="Explore" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <Grid3x3Icon sx={{ margin: '10px' }} fontSize="medium" />
                  <Typography variant='h6'>Explore</Typography>
                </IconButton>
              </Hidden >
              <Hidden mdUp>
                <Tooltip title="Explore">
                  <IconButton>
                    <Grid3x3Icon sx={{ margin: '16px' }} fontSize="medium" />
                  </IconButton>
                </Tooltip>
              </Hidden>
            </Link>
            <Link to={`/notifications`}>
              <Hidden mdDown>
                <IconButton aria-label="Notifications" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <NotificationsActiveIcon sx={{ margin: '10px' }} fontSize="medium" />
                  <Typography variant='h6'>Notifications</Typography>
                </IconButton>
              </Hidden>
              <Hidden mdUp>
                <Tooltip title="Notifications">
                  <IconButton>
                    <NotificationsActiveIcon sx={{ margin: '16px' }} fontSize="medium" />
                  </IconButton>
                </Tooltip>
              </Hidden>
            </Link>

            <Link to={`/messages`}>
              <Hidden mdDown>
                <IconButton aria-label="Messages" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <MailOutlineIcon sx={{ margin: '10px' }} fontSize="medium" />
                  <Typography variant='h6'>Messages</Typography>
                </IconButton>
              </Hidden>
              <Hidden mdUp>
                <Tooltip title="Messages">
                  <IconButton>
                    <MailOutlineIcon sx={{ margin: '16px' }} fontSize="medium" />
                  </IconButton>
                </Tooltip>
              </Hidden>
            </Link>

            <Link to={`/profile`}>
              <Hidden mdDown>
                <IconButton aria-label="Profile" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <PersonIcon sx={{ margin: '10px' }} fontSize="medium" />
                  <Typography variant='h6'>Profile</Typography>
                </IconButton>
              </Hidden>
              <Hidden mdUp>
                <Tooltip title="Profile">
                  <IconButton>
                    <PersonIcon sx={{ margin: '16px' }} fontSize="medium" />
                  </IconButton>
                </Tooltip>
              </Hidden>
            </Link>

            <Hidden mdDown>
              <Button variant="contained" color="primary" size="medium"
                sx={{ marginBottom: '50px', borderRadius: '50px' }}>Tweet</Button>
            </Hidden>
            <Hidden mdUp>
              <IconButton>
                <AddCircleIcon color="primary" fontSize='large' />
              </IconButton>
            </Hidden>

            <Link to={`/user`}>
              <Hidden mdDown>
                <IconButton aria-label="User" sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                  <AccountCircleIcon sx={{ margin: '10px' }} fontSize="large" color="success" />
                  <Typography variant='h6'>User</Typography>
                </IconButton>
              </Hidden>
              <Hidden mdUp>
                <Tooltip title="User">
                  <IconButton>
                    <AccountCircleIcon sx={{ margin: '10px' }} fontSize="large" color="success" />
                  </IconButton>
                </Tooltip>
              </Hidden>
            </Link>
          </Stack>
        </Box>
      </Hidden>
    </>
  )
}

export default Sidebar1