
import React from 'react';
import { BottomNavigation, Box, Typography, Button } from '@mui/material';

const Footerlogin = () => {
    return (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: '#1DA1F2', height: "65px"}}>

                <Box sx={{ maxWidth: "900px", margin: "0 auto", alignItems: 'center', display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', mr: 'auto' }}>
                            Будьте в курсе событий
                        </Typography>
                        <Typography sx={{ fontSize: '14px', color: '#fff', mr: 'auto' }}>
                            Пользователи Твиттера узнают новости первыми.
                        </Typography>
                    </Box>
                    <BottomNavigation sx={{ alignItems: 'center', bgcolor: '#1DA1F2' }}>
                        <Button variant="contained" color="primary" size="small"
                                sx={{
                                    mr: 1,
                                    fontSize: '14px',
                                    borderRadius: '20px',
                                    color: 'white',
                                    backgroundColor: 'transparent',
                                    border: '1px solid rgba(255, 255, 255, 0.35)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    }
                                }}>
                            Login
                        </Button>
                        <Button variant="contained" color="secondary" size="small" sx={{ mr: 1,
                            borderRadius: '20px',
                            fontSize: '14px',
                            color: 'black',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid rgba(255, 255, 255, 0.35)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.01)', } }}>
                            Registration
                        </Button>
                    </BottomNavigation>
                </Box>

        </Box>
    );
};

export default Footerlogin;