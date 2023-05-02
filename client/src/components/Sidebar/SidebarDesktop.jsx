import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
// import { styled } from '@mui/material/styles';
// import { color } from '@mui/system';


export const SidebarDesktop = () => {

    // const [color, setColor] = useState();

    // const handleClick = (e) => {
    //   setColor('black');
    // }

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

        <Stack sx={{ margin: '24px' }}>
            <Link to={`/`}>
                <IconButton>
                    <TwitterIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                </IconButton>
            </Link>

            <Link data-key="home" onClick={handleClick} to={`/home`}>
                <IconButton sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                    {clicked.home ? <HomeIcon sx={{ margin: '10px' }} fontSize="medium" color='primary' /> : <HomeOutlinedIcon sx={{ margin: '10px' }} fontSize="medium" color='primary' />}
                    <Typography variant='h6' sx={{ color: clicked.home ? 'black' : 'inherit' }}> Home</Typography>
                </IconButton>
            </Link>

            <Link data-key="explore" onClick={handleClick} to={`/explore`}>
                <IconButton sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                    {clicked.explore ? <Grid4x4OutlinedIcon sx={{ margin: '10px' }} fontSize="medium" /> : <Grid3x3Icon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' sx={{ color: clicked.explore ? 'black' : 'inherit' }}> Explore</Typography>
                </IconButton>
            </Link>

            <Link data-key="notifications" onClick={handleClick} to={`/notifications`}>
                <IconButton sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                    {clicked.notifications ? <NotificationsActiveIcon sx={{ margin: '10px' }} fontSize="medium" /> : <NotificationsNoneOutlinedIcon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' sx={{ color: clicked.notifications ? 'black' : 'inherit' }} >Notifications</Typography>
                </IconButton>
            </Link>

            <Link data-key="messages" onClick={handleClick} to={`/messages`} >
                <IconButton sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                    {clicked.messages ? <MailIcon sx={{ margin: '10px' }} fontSize="medium" /> : <MailOutlineIcon sx={{ margin: '10px' }} fontSize="medium" />}                    
                    <Typography variant='h6' sx={{ color: clicked.messages ? 'black' : 'inherit' }}>Messages</Typography>
                </IconButton>
            </Link>

            <Link data-key="profile" onClick={handleClick} to={`/profile`} >
                <IconButton sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                    {clicked.profile ? <PersonIcon sx={{ margin: '10px' }} fontSize="medium" /> : <Person2OutlinedIcon sx={{ margin: '10px' }} fontSize="medium" />}                    
                    <Typography variant='h6' sx={{ color: clicked.profile ? 'black' : 'inherit' }} >Profile</Typography>
                </IconButton>
            </Link>

            <Button variant="contained" color="primary" size="medium"
                sx={{ marginBottom: '50px', borderRadius: '50px' }}>Tweet</Button>

            <Link data-key="user" onClick={handleClick} to={`/user`} >
                <IconButton sx={{ paddingInline: '20px', borderRadius: '50px' }}>
                    <AccountCircleIcon sx={{ margin: '10px' }} fontSize="large" color="success" />
                    <Typography variant='h6' sx={{ color: clicked.user ? 'black' : 'inherit' }} >User</Typography>
                </IconButton>
            </Link>
        </Stack>
    )
}

export default SidebarDesktop