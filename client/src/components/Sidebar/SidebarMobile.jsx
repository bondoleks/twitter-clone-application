import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton, Tooltip, Box, AppBar, Container, Toolbar, Typography, Button } from '@mui/material';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
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
import TweetFormMobile from '../TweetForm/TweetFormMobile.jsx';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';

const SidebarMobile = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const [clicked, setClicked] = useState({
        home: false,
        explore: false,
        notifications: false,
        messages: false,
        bookmarks: false,
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
        headerBox = <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%'
        }}>
            <Typography variant='h6' sx={{ color: 'black' }}>Messages</Typography>
            <Box>
                <IconButton disableTouchRipple sx={{
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'white',
                        textDecoration: 'none'
                    }
                }}>
                    <SettingsOutlinedIcon fontSize="medium" />
                </IconButton>
            </Box>
        </Toolbar>
    } if (clicked.notifications) {
        headerBox = <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%'
        }}>
            <Typography variant='h6' sx={{ color: 'black' }}>Notifications</Typography>
            <Box >
                <IconButton disableTouchRipple sx={{
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'white',
                        textDecoration: 'none'
                    }
                }}>
                    <SettingsOutlinedIcon fontSize="medium" />
                </IconButton>
            </Box>
        </Toolbar>
    } if (clicked.explore) {
        headerBox = <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%'
        }}>
            <Search />
            <Box>
                <IconButton disableTouchRipple sx={{
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'white',
                        textDecoration: 'none'
                    }
                }}>
                    <SettingsOutlinedIcon fontSize="medium" />
                </IconButton>
            </Box>
        </Toolbar>
    }

    const StyledAvatar = styled(Avatar)(({ theme }) => ({
        position: 'relative',
        '&:before': {
            content: '""',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
        }
    }));

    return (

        <>
            <AppBar position='fixed' sx={{ backgroundColor: 'white' }} >
                <Container fixed>
                    <Toolbar>
                        <Tooltip title="User">
                            <IconButton edge="start" onClick={handleDrawerOpen}>
                                <AccountCircleIcon sx={{ margin: '10px' }} fontSize="large" color="success" />
                            </IconButton>
                        </Tooltip>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={handleDrawerClose}
                        >
                            <List >
                                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant='h6' >
                                        Account info
                                    </Typography>
                                    <IconButton>
                                        <CloseIcon onClick={handleDrawerClose} />
                                    </IconButton>
                                </Toolbar>

                                <Link to={`/profile`} style={{textDecoration: 'none', color: 'black' }}>
                                <StyledAvatar
                                    alt="User Avatar"
                                    src='../../img/avatar.png'

                                    sx={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        marginLeft: '10px',
                                        marginBottom: '20px',
                                        cursor: 'pointer'
                                    }}
                                />
                                </Link>
                                
                                <Box sx={{ marginLeft: '12px', marginBottom: '24px' }}>
                                    <Typography sx={{
                                        fontSize: '18px',
                                        fontWeight: '700'
                                    }}>User</Typography>
                                    <Typography>@nikname</Typography>
                                    <Box display={'flex'}>
                                        <Button sx={{
                                            textTransform: 'none', 
                                            '&:hover': {
                                                textDecoration: 'underline',
                                                color: 'black'
                                            }
                                        }} >
                                            <Typography mr={2} sx={{ display: 'flex',
                                                fontSize: '14px',
                                                color: 'black'
                                            }}><Box sx={{fontWeight: '700', marginInline: '4px'}}>N</Box> Following</Typography>
                                        </Button>

                                    <Button sx={{
                                        textTransform: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline', 
                                            color: 'black'
                                        }
                                    }}>
                                        <Typography sx={{ display: 'flex',
                                            fontSize: '14px',
                                            color: 'black'
                                        }}><Box sx={{fontWeight: '700', marginInline: '4px'}}>N</Box> Followers</Typography>
                                    </Button>
                                </Box>
                            </Box>

                            <ListItem sx={{marginRight: '150px'}}>
                                <ListItemIcon>
                                    <Person2OutlinedIcon />
                                </ListItemIcon>

                                <Link to={`/profile`} style={{textDecoration: 'none', color: 'black' }}>
                                <ListItemText onClick={handleDrawerClose}  >
                                    <Typography sx={{ fontWeight: '900', fontSize: '20px'}}>
                                        Profile
                                    </Typography>
                                </ListItemText>
                                </Link>
                            </ListItem>

                            <ListItem >
                                <ListItemIcon>
                                    <BookmarkBorderIcon />
                                </ListItemIcon>
                                <Link to={`/bookmarks`} style={{textDecoration: 'none', color: 'black' }}>
                                <ListItemText onClick={handleDrawerClose}  >
                                    <Typography  sx={{ fontWeight: '900', fontSize: '20px', textDecoration: 'none'  }}>
                                        Bookmarks
                                    </Typography>
                                </ListItemText>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SettingsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText onClick={handleDrawerClose}  >
                                    <Typography sx={{ fontWeight: '900', fontSize: '20px' }}>
                                        Settings
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Drawer>

                    {headerBox}

                </Toolbar>
            </Container>
        </AppBar >

            <IconButton onClick={handleOpen}>
                <AddCircleIcon sx={{
                    position: 'fixed',
                    top: '80%',
                    left: '70%'
                }} fontSize='large' color='primary' />
            </IconButton>
            <TweetFormMobile open={open} onClose={handleClose} />

            <Box edge="start">
                <BottomNavigation sx={{
                    position: 'fixed',
                    bottom: '0',
                    left: '10%',
                    width: '80%'
                }}>
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