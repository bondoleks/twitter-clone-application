import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Hidden,
    IconButton,
    Typography,
    Toolbar,
    Box
} from '@mui/material';
import WestIcon from '@mui/icons-material/West';


export const ToolbarProfile = () => {

    return (
        <>
            <Hidden mdUp>
                <Box position='fixed' bgcolor={'white'} sx={{
                    width: '68%',
                    zIndex: '99',
                    top: '0',
                    left: '19%'
                }}>
                    <Toolbar >
                        <RouterLink to={'/home'}>
                            <IconButton>
                                <WestIcon />
                            </IconButton>
                        </RouterLink>
                        <Box ml={2}>
                            <Typography variant='h6'>User</Typography>
                            <Typography>N Tweets</Typography>
                        </Box>
                    </Toolbar>
                </Box>
            </Hidden >

            <Hidden mdDown>
                <Box position='fixed' bgcolor={'white'} sx={{
                    width: '41.5%',
                    zIndex: '99',
                    top: '0',
                    left: '24%'
                }}>
                    <Toolbar>
                        <RouterLink to={'/home'}>
                            <IconButton >
                                <WestIcon />
                            </IconButton>
                        </RouterLink>
                        <Box ml={2}>
                            <Typography variant='h6'>User</Typography>
                            <Typography>N Tweets</Typography>
                        </Box>
                    </Toolbar>
                </Box>
            </Hidden>
        </>
    )
}

export default ToolbarProfile