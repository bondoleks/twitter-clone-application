import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    IconButton,
    Tooltip,
    Box,
    Hidden,
    Menu,
    MenuItem,
    Typography,
    Grid
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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TweetForm from '../TweetForm/TweetForm';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ModalTheme from '../ModalTheme/ModalTheme';
import { useTheme } from '@mui/material/styles';


export const SidebarMedium = () => {

    const [buttonColor, setButtonColor] = useState();

    const theme = useTheme();

    const DropStyles = {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.default
      };

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

    return (
        <>
            <Grid container direction="column" spacing={2}>
                <Box sx={{
                    marginRight: '20px',
                    height: 'calc(100vh - 48px)',
                    overflowY: 'auto'
                }}>
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
                                    <IconButton color='gray'>
                                        {clicked.explore ? <FindInPageIcon sx={{ margin: '16px' }} fontSize="medium" /> : <SearchIcon sx={{ margin: '16px' }} fontSize="medium"  />}
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </Hidden>

                        <Hidden lgUp mdDown>

                            <Link to={`/explore`}>
                                <Tooltip title="Explore">
                                    <IconButton color='gray'>
                                        {clicked.explore ? <Grid4x4OutlinedIcon sx={{ margin: '16px' }} fontSize="medium" /> : <Grid3x3Icon sx={{ margin: '16px' }} fontSize="medium" />}
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </Hidden>


                        <Link to={`/notifications`}>
                            <Tooltip title="Notifications">
                                <IconButton color='gray'>
                                    {clicked.notifications ? <NotificationsActiveIcon sx={{ margin: '16px' }} fontSize="medium" /> : <NotificationsNoneOutlinedIcon sx={{ margin: '16px' }} fontSize="medium" />}
                                </IconButton>
                            </Tooltip>
                        </Link>


                        <Link to={`/messages`}>
                            <Tooltip title="Messages">
                                <IconButton color='gray'>
                                    {clicked.messages ? <MailIcon sx={{ margin: '16px' }} fontSize="medium" /> : <MailOutlineIcon sx={{ margin: '16px' }} fontSize="medium" />}
                                </IconButton>
                            </Tooltip>
                        </Link>

                        <Link to={`/bookmarks`}>
                            <Tooltip title="Bookmarks">
                                <IconButton color='gray'>
                                    {clicked.bookmarks ? <BookmarkIcon sx={{ margin: '16px' }} fontSize="medium" /> : <BookmarkBorderIcon sx={{ margin: '16px' }} fontSize="medium" />}
                                </IconButton>
                            </Tooltip>
                        </Link>

                        <Link to={`/profile`}>
                            <Tooltip title="Profile">
                                <IconButton color='gray'>
                                    {clicked.profile ? <PersonIcon sx={{ margin: '16px' }} fontSize="medium" /> : <Person2OutlinedIcon sx={{ margin: '16px' }} fontSize="medium" />}
                                </IconButton>
                            </Tooltip>
                        </Link>


                        <Grid item>
                            <Tooltip title="More">
                                <IconButton color='gray' onClick={handleOpenMenu}>
                                    <MoreHorizIcon sx={{ margin: '16px' }} fontSize="medium" />
                                </IconButton>
                            </Tooltip>

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
                                    <Typography sx={{ marginInline: '8px' }} >
                                        Settings
                                    </Typography>
                                    <KeyboardArrowDownIcon />
                                </MenuItem>
                            </Menu>
                            <ModalTheme open={openModal} onClose={handleCloseModal} onColorChange={handleColorChange} />
                        </Grid>

                        <Grid item>
                            <IconButton edge='start' onClick={handleOpen}>
                                <AddCircleIcon fontSize='large' sx={{
                                    margin: '20px',
                                    color: buttonColor
                                }} />
                            </IconButton>
                            <TweetForm open={open} onClose={handleClose} />
                        </Grid>

                        <Grid item>
                            <Tooltip title="User">
                                <IconButton edge='start'>
                                    <AccountCircleIcon sx={{ margin: '20px' }} fontSize="large" color="success" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Stack>
                </Box>
            </Grid>
        </>
    )
}

export default SidebarMedium