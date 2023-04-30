import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip, Box } from '@mui/material';
import { Stack } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';


export const SidebarMedium = () => {
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
                                <HomeIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
                            </IconButton>
                        </Tooltip>
                    </Link>

                    <IconButton>
                        <SearchIcon sx={{ margin: '16px' }} fontSize="medium" />
                    </IconButton>

                    <Link to={`/explore`}>
                        <Tooltip title="Explore">
                            <IconButton>
                                <Grid3x3Icon sx={{ margin: '16px' }} fontSize="medium" />
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

                    <Link to={`/profile`}>
                        <Tooltip title="Profile">
                            <IconButton>
                                <PersonIcon sx={{ margin: '16px' }} fontSize="medium" />
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