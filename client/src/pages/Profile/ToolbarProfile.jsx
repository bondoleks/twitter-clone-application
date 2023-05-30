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
import { useTheme } from '@mui/material/styles';


export const ToolbarProfile = () => {

    const theme = useTheme();

    const ToolbarStyles = {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.default
      };

    return (
        <>
            <Hidden mdUp>
                <Box position='fixed' sx={{
                    zIndex: '99',
                    top: '0',
                }}>
                    <Toolbar style={ToolbarStyles} >
                        <RouterLink to={'/home'}>
                            <IconButton color='gray'>
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
                <Box position='fixed'  sx={{
                    width: '49%',
                    maxWidth: "530px",
                    zIndex: '99',
                    top: '0',
                }}>
                    <Toolbar style={ToolbarStyles}>
                        <RouterLink to={'/home'}>
                            <IconButton color='gray' >
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