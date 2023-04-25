import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Sidebar/sidebar.css'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link className="sidebar-link" to={`/`}>
        <Tooltip title="Main">
          <TwitterIcon fontSize="medium" color='primary' />
        </Tooltip>
      </Link>
      <Link className="sidebar-link" to={`/home`}>
        <Tooltip title="Home">
          <HomeIcon fontSize="medium" color='primary' />
        </Tooltip>
      </Link>
      <Link className="sidebar-link" to={`/explore`}>
        <Tooltip title="Explore">
          <Grid3x3Icon fontSize="medium" />
        </Tooltip>
      </Link>
      <Link className="sidebar-link" to={`/notifications`}>
        <Tooltip title="Notifications">
          <NotificationsActiveIcon fontSize="medium" />
        </Tooltip>
      </Link>
      <Link className="sidebar-link" to={`/messages`}>
        <Tooltip title="Messages">
          <MailOutlineIcon fontSize="medium" />
        </Tooltip>
      </Link>
      <Link className="sidebar-link" to={`/user_profile`}>
        <Tooltip title="User">
          <AccountCircleIcon fontSize="large" color="success" />
        </Tooltip>
      </Link>
    </div>
  )
}

export default Sidebar