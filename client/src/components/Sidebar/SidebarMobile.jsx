import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    IconButton,
    Tooltip,
    Box,
    AppBar,
    Container,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailIcon from '@mui/icons-material/Mail';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BottomNavigation from '@mui/material/BottomNavigation';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Search from '../Search/Search.jsx';
import TweetFormMobile from '../TweetForm/TweetFormMobile.jsx';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CloseIcon from '@mui/icons-material/Close';
import WestIcon from '@mui/icons-material/West';
import ModalTheme from '../ModalTheme/ModalTheme';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFetch } from "../../hooks/UseFetch";
import { useMatch } from 'react-router-dom';


const SidebarMobile = ({ withId }) => {
    const { id } = useParams();
    const isAutorizate = useSelector(state => state.user.authorized);
    const theme = useTheme();
    const isActiveMessage = useMatch("/messages/:id");
    const isMessagesPage = useMatch("/messages");

    const StyledAvatar = styled(Avatar)(({ theme }) => ({
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
        },
        '&:hover:before': {
            opacity: 1,
        },
    }));

    const [{ data, loading }, getData] = useFetch({
        initData: {},
        url: withId
            ? `user/getuser/${id}`
            : 'user/profile',
        method: 'GET',
        dataTransformer: (data) => {
            console.log(data)
            return data;
        },
    });

    useEffect(() => {
        getData()
    }, [id])

    if (!loading) <p>loading...</p>

    const { username, firstName, lastName, av_imagerUrl } = data

    const bottomNavigationStyles = {
        backgroundColor: theme.palette.background.default,
    };

    const [buttonColor, setButtonColor] = useState();

    useEffect(() => {
        const savedColor = localStorage.getItem('buttonColor');
        if (savedColor) {
            setButtonColor(savedColor);
        }
    }, []);

    const handleColorChange = (color) => {
        setButtonColor(color);
        localStorage.setItem('buttonColor', color);
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

    // відкривання форми для створення твіта по кліку на кнопку Tweet
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // відкривання дроп-меню
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    // відкривання модального вікна для налаштування теми по кліку на пункт Settings
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    let headerBox;
    if (clicked.home) {
        headerBox = <>
            <Tooltip title="User">
                <IconButton edge="start" onClick={handleDrawerOpen}>
                    <StyledAvatar
                        alt="User Avatar"
                        src={av_imagerUrl}
                        sx={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            margin: '20px'
                        }}
                    />
                </IconButton>
            </Tooltip>
            <Box sx={{ marginLeft: '30%' }}>
                <Link to={isAutorizate ? '/home' : '/'}>
                    <IconButton>
                        <TwitterIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                    </IconButton>
                </Link>
            </Box>
        </>
    } if (clicked.messages) {
        headerBox = <>
            <Tooltip title="User">
                <IconButton edge="start" onClick={handleDrawerOpen}>
                    <StyledAvatar
                        alt="User Avatar"
                        src={av_imagerUrl}
                        sx={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            margin: '20px'
                        }}
                    />
                </IconButton>
            </Tooltip>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '90%'
            }}>
                <Typography variant='h6' sx={{ color: 'gray' }}>
                    Messages
                </Typography>
                <Box>
                    <IconButton onClick={handleOpenModal} sx={{
                        color: 'black',
                        '&:hover': {
                            backgroundColor: 'white',
                            textDecoration: 'none'
                        }
                    }}>
                        <SettingsOutlinedIcon fontSize="medium" color='gray' />
                    </IconButton>
                    <ModalTheme open={openModal} onClose={handleCloseModal} />
                </Box>
            </Toolbar>
        </>
    } if (clicked.notifications) {
        headerBox = <>
            <Tooltip title="User">
                <IconButton edge="start" onClick={handleDrawerOpen}>
                    <StyledAvatar
                        alt="User Avatar"
                        src={av_imagerUrl}
                        sx={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            margin: '20px'
                        }}
                    />
                </IconButton>
            </Tooltip>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '90%'
            }}>
                <Typography variant='h6' sx={{ color: 'gray' }}>
                    Notifications
                </Typography>
                <Box >
                    <IconButton onClick={handleOpenModal} sx={{
                        color: 'black',
                        '&:hover': {
                            backgroundColor: 'white',
                            textDecoration: 'none'
                        }
                    }}>
                        <SettingsOutlinedIcon fontSize="medium" color='gray' />
                    </IconButton>
                    <ModalTheme open={openModal} onClose={handleCloseModal} />
                </Box>
            </Toolbar>
        </>
    } if (clicked.explore) {
        headerBox = <>
            <Tooltip title="User">
                <IconButton edge="start" onClick={handleDrawerOpen}>
                    <StyledAvatar
                        alt="User Avatar"
                        src={av_imagerUrl}
                        sx={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            margin: '20px'
                        }}
                    />
                </IconButton>
            </Tooltip>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '90%'
            }}>
                <Search />
                <Box>
                    <IconButton onClick={handleOpenModal} sx={{
                        color: 'black',
                        '&:hover': {
                            backgroundColor: 'white',
                            textDecoration: 'none'
                        }
                    }}>
                        <SettingsOutlinedIcon fontSize="medium" color='gray' />
                    </IconButton>
                    <ModalTheme open={openModal} onClose={handleCloseModal} />
                </Box>
            </Toolbar>
        </>
    } if (clicked.profile) {
        headerBox = <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%'
        }}>
            <Box sx={{ display: 'flex' }}>
                <Link to={`/home`}>
                    <IconButton sx={{
                        color: 'gray',
                        '&:hover': {
                            backgroundColor: 'white',
                            textDecoration: 'none'
                        }
                    }}>
                        <WestIcon fontSize="medium" color='gray' />
                    </IconButton>
                </Link>
                <Box ml={5}>
                    <Typography variant='h6' sx={{ color: 'gray' }}>
                        {firstName} {lastName}
                    </Typography>
                    <Typography sx={{ color: 'gray' }}>
                        N Tweets
                    </Typography>
                </Box>
            </Box>
        </Toolbar>
    } if (clicked.bookmarks) {
        headerBox = <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%'
        }}>
            <Box sx={{ display: 'flex' }}>
                <Link to={`/home`}>
                    <IconButton sx={{
                        color: 'black',
                        '&:hover': {
                            backgroundColor: 'white',
                            textDecoration: 'none'
                        }
                    }}>
                        <WestIcon fontSize="medium" color='gray' />
                    </IconButton>
                </Link>
                <Box ml={5}>
                    <Typography variant='h6' sx={{ color: 'gray' }}>
                        Bookmarks
                    </Typography>
                    <Typography sx={{ color: 'gray' }}>
                        @{username}
                    </Typography>
                </Box>
            </Box>
        </Toolbar>
    }

    return (
        <>
            <AppBar position='fixed' color='paper'>
                <Container fixed sx={{

                }}>
                    <Toolbar >
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={handleDrawerClose}
                        >
                            <List style={bottomNavigationStyles} sx={{ height: '100vh' }}>
                                <Toolbar sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Typography variant='h6'>
                                        Account info
                                    </Typography>
                                    <IconButton>
                                        <CloseIcon onClick={handleDrawerClose} />
                                    </IconButton>
                                </Toolbar>

                                <Link to={`/profile`}>
                                    <StyledAvatar
                                        alt="User Avatar"
                                        src={av_imagerUrl}
                                        sx={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            margin: '20px'
                                        }}
                                    />
                                </Link>

                                <Box sx={{
                                    marginLeft: '12px',
                                    marginBottom: '24px'
                                }}>
                                    <Typography sx={{
                                        fontSize: '18px',
                                        fontWeight: '700',
                                    }}>{firstName} {lastName}</Typography>
                                    <Typography>@{username}</Typography>
                                    <Box display={'flex'}>
                                        <Button sx={{
                                            textTransform: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                                color: 'black'
                                            }
                                        }} >
                                            <Typography mr={2} sx={{
                                                display: 'flex',
                                                fontSize: '14px',
                                            }}><Box sx={{
                                                fontWeight: '700',
                                                marginInline: '4px'
                                            }}>
                                                    N
                                                </Box>
                                                Following
                                            </Typography>
                                        </Button>

                                        <Button sx={{
                                            textTransform: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            }
                                        }}>
                                            <Typography sx={{
                                                display: 'flex',
                                                fontSize: '14px',
                                            }}><Box sx={{ fontWeight: '700', marginInline: '4px' }}>N</Box> Followers</Typography>
                                        </Button>
                                    </Box>
                                </Box>

                                <ListItem sx={{ marginRight: '150px' }}>
                                    <ListItemIcon>
                                        <Person2OutlinedIcon color='gray' />
                                    </ListItemIcon>

                                    <Link to={`/profile`} style={{
                                        textDecoration: 'none',
                                        color: 'gray'
                                    }}>
                                        <ListItemText onClick={handleDrawerClose}  >
                                            <Typography sx={{
                                                fontWeight: '900',
                                                fontSize: '20px',
                                            }}>
                                                Profile
                                            </Typography>
                                        </ListItemText>
                                    </Link>
                                </ListItem>

                                <ListItem >
                                    <ListItemIcon>
                                        <BookmarkBorderIcon color='gray' />
                                    </ListItemIcon>
                                    <Link to={`/bookmarks`} style={{
                                        textDecoration: 'none',
                                        color: 'gray'
                                    }}>
                                        <ListItemText onClick={handleDrawerClose}  >
                                            <Typography sx={{
                                                fontWeight: '900',
                                                fontSize: '20px', textDecoration: 'none'
                                            }}>
                                                Bookmarks
                                            </Typography>
                                        </ListItemText>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <SettingsOutlinedIcon color='gray' />
                                    </ListItemIcon>
                                    <ListItemText onClick={handleOpenModal}  >
                                        <Typography sx={{
                                            fontWeight: '900',
                                            fontSize: '20px',
                                        }}>
                                            Settings
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ModalTheme open={openModal} onClose={handleCloseModal} onColorChange={handleColorChange} />
                            </List>
                        </Drawer>

                        {headerBox}

                    </Toolbar>
                </Container>
            </AppBar >

            {
              (!isActiveMessage && !isMessagesPage) &&  (
                <IconButton onClick={handleOpen}>
                    <AddCircleIcon sx={{
                        position: 'fixed',
                        top: '500px',
                        left: '70%',
                        zIndex: '999',
                        color: buttonColor ? buttonColor : '#0080ff',
                        fontSize: '64px'
                    }} />
                </IconButton>
              )
            }

            <TweetFormMobile open={open} onClose={handleClose} />

            {isAutorizate && <>
                <Box edge="start">
                    <BottomNavigation style={bottomNavigationStyles} sx={{
                        position: 'fixed',
                        bottom: '0',
                        width: '100%',
                        zIndex: '99'
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
                                <IconButton color='gray'>
                                    {clicked.explore ? <FindInPageIcon sx={{ margin: '16px' }} fontSize="medium" /> : <SearchIcon sx={{ margin: '16px' }} fontSize="medium" />}
                                </IconButton>
                            </Tooltip>
                        </Link>

                        <Link to={`/notifications`}>
                            <IconButton color='gray'>
                                {clicked.notifications ? <NotificationsActiveIcon sx={{ margin: '16px' }} fontSize="medium" /> : <NotificationsNoneOutlinedIcon sx={{ margin: '16px' }} fontSize="medium" />}
                            </IconButton>
                        </Link>

                        <Link to={`/messages`}>
                            <IconButton color='gray'>
                                {clicked.messages ? <MailIcon sx={{ margin: '16px' }} fontSize="medium" /> : <MailOutlineIcon sx={{ margin: '16px' }} fontSize="medium" />}
                            </IconButton>
                        </Link>
                    </BottomNavigation>
                </Box>
            </>}
        </>
    )
}

export default SidebarMobile
