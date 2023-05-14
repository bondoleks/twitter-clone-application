import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton, Typography, Button } from '@mui/material';
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
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TweetForm from '../TweetForm/TweetForm';

export const SidebarDesktop = () => {

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
            bookmarks: path === '/bookmarks',
            profile: path === '/profile',
        });
    }, [location]);
    

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (

        <Stack position='fixed'>
            <Link to={`/`}>
                <IconButton>
                    <TwitterIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                </IconButton>
            </Link>


            <Link to={`/home`}>

                <IconButton sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.home ? <HomeIcon sx={{ margin: '10px' }} fontSize="medium" color='primary' /> : <HomeOutlinedIcon sx={{ margin: '10px' }} fontSize="medium" color='primary' />}
                    <Typography variant='h6' sx={{ color: clicked.home ? 'black' : 'inherit' }}> Home</Typography>
                </IconButton>
            </Link>


            <Link to={`/explore`}>

                <IconButton sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.explore ? <Grid4x4OutlinedIcon sx={{ margin: '10px' }} fontSize="medium" /> : <Grid3x3Icon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' sx={{ color: clicked.explore ? 'black' : 'inherit' }}> Explore</Typography>
                </IconButton>
            </Link>

            <Link to={`/notifications`}>

                <IconButton sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.notifications ? <NotificationsActiveIcon sx={{ margin: '10px' }} fontSize="medium" /> : <NotificationsNoneOutlinedIcon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' sx={{ color: clicked.notifications ? 'black' : 'inherit' }} >Notifications</Typography>
                </IconButton>
            </Link>


            <Link to={`/messages`} >

                <IconButton sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.messages ? <MailIcon sx={{ margin: '10px' }} fontSize="medium" /> : <MailOutlineIcon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' sx={{ color: clicked.messages ? 'black' : 'inherit' }}>Messages</Typography>
                </IconButton>
            </Link>

            <Link to={`/bookmarks`}>

                <IconButton sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.bookmarks ? <BookmarkIcon sx={{ margin: '10px' }} fontSize="medium" /> : <BookmarkBorderIcon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' sx={{ color: clicked.bookmarks ? 'black' : 'inherit' }}>Bookmarks</Typography>
                </IconButton>

            </Link>


            <Link to={`/profile`} >

                <IconButton sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.profile ? <PersonIcon sx={{ margin: '10px' }} fontSize="medium" /> : <Person2OutlinedIcon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' sx={{ color: clicked.profile ? 'black' : 'inherit' }} >Profile</Typography>
                </IconButton>
            </Link>

            <Button variant="contained" color="primary" size="medium" onClick={handleOpen} 
                sx={{
                    marginBottom: '50px',
                    marginInline: '30px',
                    borderRadius: '50px'
                }}>Tweet</Button>
                <TweetForm open={open} onClose={handleClose} />


            <IconButton sx={{
                paddingInline: '20px',
                borderRadius: '50px'
            }}>
                <AccountCircleIcon sx={{ margin: '10px' }} fontSize="large" color="success" />
                <Typography variant='h6' sx={{ color: clicked.user ? 'black' : 'inherit' }} >User</Typography>
            </IconButton>

        </Stack>
    )
}

export default SidebarDesktop