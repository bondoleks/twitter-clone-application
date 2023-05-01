import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip, Box, Hidden } from '@mui/material';
import { Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Grid4x4OutlinedIcon from '@mui/icons-material/Grid4x4Outlined';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailIcon from '@mui/icons-material/Mail';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import FindInPageIcon from '@mui/icons-material/FindInPage';


export const SidebarMedium = () => {

    const [clicked, setClicked] = useState({
        home: false,
        explore: false,
        notifications: false,
        messages: false,
        profile: false,
        user: false,
    });

    const handleClick = (e) => {
        const key = e.currentTarget.getAttribute('data-key');
        setClicked(() => ({
            [key]: true,
        }));
    };

    return (
        <>
            <Box sx={{ marginRight: '20px', height: 'calc(100vh - 48px)', overflowY: 'auto' }}>
                <Stack sx={{ margin: '24px' }}>

                    <Link to={`/`}>
                        <Tooltip title="Main">
                            <IconButton>
                                <TwitterIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link data-key="home" onClick={handleClick} to={`/home`}>
                        <Tooltip title="Home">
                            <IconButton >
                                {clicked.home ? <HomeIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' /> : <HomeOutlinedIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />}
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Hidden mdUp smDown>
                        <Link data-key="explore" onClick={handleClick} to={`/explore`}>
                            <Tooltip title="Explore">
                                <IconButton>
                                    {clicked.explore ? <FindInPageIcon sx={{ margin: '16px' }} fontSize="medium" /> : <SearchIcon sx={{ margin: '16px' }} fontSize="medium" />}
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </Hidden>

                    <Hidden lgUp mdDown>
                        <Link data-key="explore" onClick={handleClick} to={`/explore`}>
                            <Tooltip title="Explore">
                                <IconButton>
                                    {clicked.explore ? <Grid4x4OutlinedIcon sx={{ margin: '16px' }} fontSize="medium" /> : <Grid3x3Icon sx={{ margin: '16px' }} fontSize="medium" />}
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </Hidden>

                    <Link data-key="notifications" onClick={handleClick} to={`/notifications`}>
                        <Tooltip title="Notifications">
                            <IconButton>
                                {clicked.notifications ? <NotificationsActiveIcon sx={{ margin: '16px' }} fontSize="medium" /> : <NotificationsNoneOutlinedIcon sx={{ margin: '16px' }} fontSize="medium" />}
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link data-key="messages" onClick={handleClick} to={`/messages`}>
                        <Tooltip title="Messages">
                            <IconButton>
                                {clicked.messages ? <MailIcon sx={{ margin: '16px' }} fontSize="medium" /> : <MailOutlineIcon sx={{ margin: '16px' }} fontSize="medium" />}
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link data-key="profile" onClick={handleClick} to={`/profile`}>
                        <Tooltip title="Profile">
                            <IconButton>
                                {clicked.profile ? <PersonIcon sx={{ margin: '16px' }} fontSize="medium" /> : <Person2OutlinedIcon sx={{ margin: '16px' }} fontSize="medium" />}
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <IconButton>
                        <AddCircleIcon color="primary" fontSize='large' />
                    </IconButton>

                    <Link to={`/user`}>
                        <Tooltip title="User">
                            <IconButton>
                                <AccountCircleIcon sx={{ margin: '10px' }} fontSize="large" color="success" />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Stack>
            </Box>
        </>
    )
}

export default SidebarMedium