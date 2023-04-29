import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, IconButton, Tooltip, Stack, Container, Box, useMediaQuery, useTheme, Typography } from '@mui/material';
// import { IconButton, Tooltip } from '@mui/material';
// import { Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const Sidebar = () => {
  return (
    <Stack sx={{ margin: '48px' }}>
      <Link to={`/`}>        
        <Tooltip title="Main">
          <IconButton>
            <TwitterIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
          </IconButton>
        </Tooltip>
      </Link>
      <Link to={`/home`}>
        <Tooltip title="Home">
          <IconButton>
            <HomeIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
            <Typography>Home</Typography>
          </IconButton>
        </Tooltip>
      </Link>
      <Link to={`/explore`}>
        <Tooltip title="Explore">
          <IconButton>
            <Grid3x3Icon sx={{ margin: '16px' }} fontSize="medium" />
            <Typography>Explore</Typography>
          </IconButton>
        </Tooltip>
      </Link>
      <Link to={`/notifications`}>
        <Tooltip title="Notifications">
          <IconButton>
            <NotificationsActiveIcon sx={{ margin: '16px' }} fontSize="medium" />
            <Typography>Notifications</Typography>
          </IconButton>
        </Tooltip>
      </Link>
      <Link to={`/messages`}>
        <Tooltip title="Messages">
          <IconButton>
            <MailOutlineIcon sx={{ margin: '16px' }} fontSize="medium" />
            <Typography>Messages</Typography>
          </IconButton>
        </Tooltip>
      </Link>
      <Link to={`/user_profile`}>
        <Tooltip title="User">
          <IconButton>
            <AccountCircleIcon sx={{ margin: '16px', textAlign: 'center' }} fontSize="large" color="success" />
            <Typography>User</Typography>
          </IconButton>
        </Tooltip>
      </Link>
    </Stack>
  )
}

export default Sidebar

