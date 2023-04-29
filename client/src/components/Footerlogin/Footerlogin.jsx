
import React, { useState } from 'react';
import { BottomNavigation, Box, Typography, Button, Modal } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

const Footerlogin = () => {

    // W8 to Redux
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginButtonClick = () => {
        setIsModalOpen(true);
    };

    // Modal style-----------------------------
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 483,
        height: 600,
        bgcolor: '#000000',
        color: 'white',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,


    };
    // Modal style-------------------------------

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
                    <Button
                        variant="contained" color="primary" size="small"
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
                        }}
                        onClick={handleLoginButtonClick}
                    >
                        Login
                    </Button>
                    <Button
                        variant="contained" color="secondary" size="small" sx={{ mr: 1,
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
            {isModalOpen && (
                <Modal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <TwitterIcon />
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ fontSize: 30 }}
                        >
                            Login to Twitter
                        </Typography>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="on"
                        >
                            <TextField
                                id="outlined-login-input"
                                label="Login"
                                type="login"

                                inputProps={{
                                    style: {
                                        outline: 'none',
                                        textAlign: 'center',
                                        color: 'white',
                                        backgroundColor: 'transparent',
                                    },
                                }}
                                InputLabelProps={{
                                    style: {
                                        color: 'white',
                                    },
                                }}
                                sx={{
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1DA1F2',
                                    },
                                }}
                            />
                        </Box>

                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            )}
        </Box>
    );
};

export default Footerlogin;

