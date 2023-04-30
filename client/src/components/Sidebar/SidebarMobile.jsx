import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip, Box, AppBar, Container, Toolbar } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BottomNavigation from '@mui/material/BottomNavigation';


const SidebarMobile = () => {
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
                        <Box sx={{ marginLeft: '30%' }}>
                            <Link to={`/`}>
                                <IconButton>
                                    <TwitterIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                                </IconButton>
                            </Link>
                        </Box>
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
                                <HomeIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link to={`/explore`}>
                        <Tooltip title="Explore">
                            <IconButton>
                                <SearchIcon sx={{ margin: '16px' }} fontSize="medium" />
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link to={`/notifications`}>
                        <Tooltip title="Notifications">
                            <IconButton>
                                <NotificationsActiveIcon sx={{ margin: '16px' }} fontSize="medium" />
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <Link to={`/messages`}>
                        <Tooltip title="Messages">
                            <IconButton>
                                <MailOutlineIcon sx={{ margin: '16px' }} fontSize="medium" />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </BottomNavigation>
            </Box>
        </>
    )
}

export default SidebarMobile