import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


export const SidebarMedium = () => {

    const [clicked, setClicked] = useState({
        home: false,
        explore: false,
        notifications: false,
        messages: false,
        bookmarks: false,
        profile: false,
    });


    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        setClicked({
            home: path === '/home',
            explore: path === '/explore',
            notifications: path === '/notifications',
            messages: path === '/messages',
            bookmarks: path ==='/bookmarks',
            profile: path === '/profile',
        });
    }, [location]);


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


                    <Link to={`/home`}>

                        <Tooltip title="Home">
                            <IconButton >
                                {clicked.home ? <HomeIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' /> : <HomeOutlinedIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />}
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Hidden mdUp smDown>

                        <Link to={`/explore`}>

                            <Tooltip title="Explore">
                                <IconButton>
                                    {clicked.explore ? <FindInPageIcon sx={{ margin: '16px' }} fontSize="medium" /> : <SearchIcon sx={{ margin: '16px' }} fontSize="medium" />}
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </Hidden>

                    <Hidden lgUp mdDown>

                        <Link to={`/explore`}>

                            <Tooltip title="Explore">
                                <IconButton>
                                    {clicked.explore ? <Grid4x4OutlinedIcon sx={{ margin: '16px' }} fontSize="medium" /> : <Grid3x3Icon sx={{ margin: '16px' }} fontSize="medium" />}
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </Hidden>


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

                    <Link to={`/bookmarks`}>

                        <Tooltip title="Bookmarks">
                            <IconButton>
                                {clicked.bookmarks ? <BookmarkIcon sx={{ margin: '16px' }} fontSize="medium" /> : <BookmarkBorderIcon sx={{ margin: '16px' }} fontSize="medium" />}
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link to={`/profile`}>

                        <Tooltip title="Profile">
                            <IconButton>
                                {clicked.profile ? <PersonIcon sx={{ margin: '16px' }} fontSize="medium" /> : <Person2OutlinedIcon sx={{ margin: '16px' }} fontSize="medium" />}
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <IconButton edge='start'>
                        <AddCircleIcon color="primary" fontSize='large' />
                    </IconButton>


                    <Tooltip title="User">
                        <IconButton edge='start'>
                            <AccountCircleIcon sx={{ margin: '16px' }} fontSize="large" color="success" />
                        </IconButton>
                    </Tooltip>

                </Stack>
            </Box>
        </>
    )
}

export default SidebarMedium