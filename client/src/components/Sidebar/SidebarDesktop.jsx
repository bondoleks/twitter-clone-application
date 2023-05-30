import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    IconButton,
    Typography,
    Button,
    Menu,
    MenuItem
} from '@mui/material';
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModalTheme from '../ModalTheme/ModalTheme';
import { useTheme } from '@mui/material/styles';


export const SidebarDesktop = ({ }) => {

    const [buttonColor, setButtonColor] = useState();

    useEffect(() => {
        const savedColor = localStorage.getItem('buttonColor');
        if (savedColor) {
            setButtonColor(savedColor);
        }
    }, []);


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

    // відкривання форми для створення твіта по кліку на кнопку Tweet
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // відкривання меню Settings по натисканню на кнопку More 
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    // відкривання модального вікна для налаштування теми по кліку на пункт Settings
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
        handleCloseMenu();
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleColorChange = (color) => {
        setButtonColor(color);
        localStorage.setItem('buttonColor', color);
    };

    const theme = useTheme();

    const DropStyles = {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.default
      };

    return (

        <Stack position='fixed'>
            <Link to={`/`}>
                <IconButton>
                    <TwitterIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                </IconButton>
            </Link>


            <Link to={`/home`}>

                <IconButton color='gray' sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.home ? <HomeIcon sx={{ margin: '10px' }} fontSize="medium" color='gray' /> : <HomeOutlinedIcon sx={{ margin: '10px' }} fontSize="medium" color='gray' />}
                    <Typography variant='h6' color='gray' sx={{ fontWeight: clicked.home ? '900' : '400'}}> Home</Typography>
                </IconButton>
            </Link>


            <Link to={`/explore`}>

                <IconButton color='gray' sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.explore ? <Grid4x4OutlinedIcon sx={{ margin: '10px' }} fontSize="medium" /> : <Grid3x3Icon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' color='gray' sx={{ fontWeight: clicked.explore ? '900' : '400'}}> Explore</Typography>
                </IconButton>
            </Link>

            <Link to={`/notifications`}>

                <IconButton color='gray' sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.notifications ? <NotificationsActiveIcon sx={{ margin: '10px' }} fontSize="medium" /> : <NotificationsNoneOutlinedIcon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' color='gray' sx={{ fontWeight: clicked.notifications ? '900' : '400'}} >Notifications</Typography>
                </IconButton>
            </Link>


            <Link to={`/messages`} >

                <IconButton color='gray' sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.messages ? <MailIcon sx={{ margin: '10px' }} fontSize="medium" /> : <MailOutlineIcon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' color='gray' sx={{ fontWeight: clicked.messages ? '900' : '400'}}>Messages</Typography>
                </IconButton>
            </Link>

            <Link to={`/bookmarks`}>

                <IconButton color='gray' sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.bookmarks ? <BookmarkIcon sx={{ margin: '10px' }} fontSize="medium" /> : <BookmarkBorderIcon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' color='gray' sx={{ fontWeight: clicked.bookmarks ? '900' : '400'}}>Bookmarks</Typography>
                </IconButton>

            </Link>


            <Link to={`/profile`} >
                <IconButton color='gray' sx={{
                    paddingInline: '20px',
                    borderRadius: '50px'
                }}>
                    {clicked.profile ? <PersonIcon sx={{ margin: '10px' }} fontSize="medium" /> : <Person2OutlinedIcon sx={{ margin: '10px' }} fontSize="medium" />}
                    <Typography variant='h6' color='gray' sx={{ fontWeight: clicked.profile ? '900' : '400'}}>Profile</Typography>
                </IconButton>
            </Link>

            <IconButton color='gray' sx={{
                width: '150px',
                borderRadius: '50px'
            }} onClick={handleOpenMenu}>
                <MoreHorizIcon sx={{ marginTop: '10px', 
                marginBottom: '10px',
                 marginRight: '10px' }} fontSize="medium" />
                <Typography variant='h6' color='gray'>
                    More
                </Typography>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                sx={{
                    marginTop: '-50px',
                    marginLeft: '16px'
                }}
            >
                <MenuItem onClick={handleOpenModal} style={DropStyles}>
                    <Typography>
                        Settings
                    </Typography>
                    <KeyboardArrowDownIcon />
                </MenuItem>
            </Menu>

            <ModalTheme open={openModal} onClose={handleCloseModal} onColorChange={handleColorChange} />


            <Button variant="contained" size="medium" onClick={handleOpen}
                sx={{
                    marginBottom: '50px',
                    marginInline: '30px',
                    borderRadius: '50px',
                    backgroundColor: buttonColor
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