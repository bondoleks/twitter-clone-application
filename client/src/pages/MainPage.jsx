import React from 'react';
import { Box } from '@mui/material';
import Footerlogin from '../components/Footerlogin/Footerlogin';

export const MainPage = () => {

    return (
        <>
            <Box sx={{ fontSize: '28px', fontWeight: 600, fontFamily: 'Roboto' }}>Twitter-clone</Box>
            <Footerlogin />

        </>
    )
}

export default MainPage