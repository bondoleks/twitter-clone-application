import React from 'react';
import { Hidden, IconButton, Typography, Toolbar, Box } from '@mui/material';
import WestIcon from '@mui/icons-material/West';


export const ToolbarProfile = () => {

    return (
        <>
            <Hidden mdUp>
                <Box position='fixed' bgcolor={'white'} sx={{ width: '65%', zIndex: '99', top: '0', left: '24%' }}>
                    <Toolbar >
                        <IconButton >
                            <WestIcon />
                        </IconButton>
                        <Box ml={2}>
                            <Typography variant='h6'>User</Typography>
                            <Typography>N Tweets</Typography>
                        </Box>
                    </Toolbar>
                </Box>
            </Hidden>

            <Hidden mdDown>
                <Box position='fixed' bgcolor={'white'} sx={{ width: '41.5%', zIndex: '99', top: '0', left: '28%' }}>
                    <Toolbar >
                        <IconButton >
                            <WestIcon />
                        </IconButton>
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