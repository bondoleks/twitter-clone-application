import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton, Tooltip, Box, AppBar, Container, Toolbar, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BottomNavigation from '@mui/material/BottomNavigation';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Search from '../Search/Search.jsx';


const SidebarMobile = () => {

    const [clicked, setClicked] = useState({
        home: false,
        explore: false,
        notifications: false,
        messages: false,
        profile: false,
        user: false,
    });

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        setClicked({
            home: path === '/home',
            explore: path === '/explore',
            notifications: path === '/notifications',
            messages: path === '/messages',
            profile: path === '/profile',
            user: path === '/user',
        });
    }, [location]);


    let headerBox;
    if (clicked.home) {
        headerBox = <Box sx={{ marginLeft: '30%' }}>
            <Link to={`/`}>
                <IconButton>
                    <TwitterIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                </IconButton>
            </Link>
        </Box>;
    } if (clicked.messages) {
        headerBox = <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
            <Typography variant='h6' sx={{ color: 'black' }}>Messages</Typography>
            <Box>
                <IconButton disableTouchRipple sx={{ color: 'black', '&:hover': { backgroundColor: 'white', textDecoration: 'none' } }}>
                    <SettingsOutlinedIcon fontSize="medium" />
                </IconButton>
            </Box>
        </Toolbar>
    } if (clicked.notifications) {
        headerBox = <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
            <Typography variant='h6' sx={{ color: 'black' }}>Notifications</Typography>
            <Box >
                <IconButton disableTouchRipple sx={{ color: 'black', '&:hover': { backgroundColor: 'white', textDecoration: 'none' } }}>
                    <SettingsOutlinedIcon fontSize="medium" />
                </IconButton>
            </Box>
        </Toolbar>
    } if (clicked.explore) {
        headerBox = <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
            <Search />
            <Box>
                <IconButton disableTouchRipple sx={{ color: 'black', '&:hover': { backgroundColor: 'white', textDecoration: 'none' } }}>
                    <SettingsOutlinedIcon fontSize="medium" />
                </IconButton>
            </Box>
        </Toolbar>
    }


    return (

        <>
            <AppBar position='fixed' sx={{ backgroundColor: 'white' }} >
                <Container fixed>
                    <Toolbar>
                        <Link to={`/user`}>
                            <Tooltip title="User">
                                <IconButton edge="start">
                                    <AccountCircleIcon sx={{ margin: '10px' }} fontSize="large" color="success" />
                                </IconButton>
                            </Tooltip>
                        </Link>

                        {headerBox}

                    </Toolbar>
                </Container>
            </AppBar>

            <IconButton>
                <AddCircleIcon sx={{ position: 'fixed', top: '80%', left: '70%' }} fontSize='large' color='primary' />
            </IconButton>

            <Box edge="start">
                <BottomNavigation sx={{ position: 'fixed', bottom: '0', left: '10%', width: '80%' }}>
                    <Link to={`/home`}>
                        <Tooltip title="Home">
                            <IconButton >

                                {clicked.home ? <HomeIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' /> : <HomeOutlinedIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />}

                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link to={`/explore`}>
                        <Tooltip title="Explore">
                            <IconButton>

                                {clicked.explore ? <FindInPageIcon sx={{ margin: '16px' }} fontSize="medium" /> : <SearchIcon sx={{ margin: '16px' }} fontSize="medium" />}

                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link to={`/notifications`}>
                        <Tooltip title="Notifications">
                            <IconButton>

                                {clicked.notifications ? <NotificationsActiveIcon sx={{ margin: '16px' }} fontSize="medium" /> : <NotificationsNoneOutlinedIcon sx={{ margin: '16px' }} fontSize="medium" />}

                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link to={`/messages`}>
                        <Tooltip title="Messages">
                            <IconButton>

                                {clicked.messages ? <MailIcon sx={{ margin: '16px' }} fontSize="medium" /> : <MailOutlineIcon sx={{ margin: '16px' }} fontSize="medium" />}

                            </IconButton>
                        </Tooltip>
                    </Link>
                </BottomNavigation>
            </Box>
        </>
    )
}

export default SidebarMobile