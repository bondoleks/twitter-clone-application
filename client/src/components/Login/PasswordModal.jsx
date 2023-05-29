import React from 'react';
import { Box, Typography, Button, Modal, TextField } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

const PasswordModal = ({ isOpen, onClose, onNextClick, emailValue }) => {
    const handleNextButton = () => {
        onNextClick();
    };

    const handleClose = () => {
        onClose();
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
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

    return (
        <Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={{ maxWidth: 454, minWidth: 454 }}>
                <Box sx={style}>
                    <TwitterIcon sx={{ marginTop: -2, marginBottom: 2 }} />
                    <Typography
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            lineHeight: '18px',
                            left: 20,
                            top: 12,
                            fontSize: 14,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            padding: '6px',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    >
                        X
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontSize: 30, marginBottom: 5, width: 300 }}>
                        Enter password
                    </Typography>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: 454, marginBottom: 5 },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <TextField
                            id="outlined-email-input"
                            label={
                                <Typography
                                    sx={{
                                        color: 'white',
                                        fontSize: '18px',
                                        width: 454,
                                    }}
                                >
                                    Email Address
                                </Typography>
                            }
                            type="email"
                            value={emailValue}
                            disabled
                            inputProps={{
                                style: {
                                    color: 'white',
                                    textAlign: 'center',
                                    cursor: 'not-allowed',
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    display: 'none',
                                },
                            }}
                            InputProps={{
                                style: {
                                    color: 'white',
                                },
                            }}
                            sx={{
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '&.Mui-disabled': {
                                    cursor: 'not-allowed',
                                },
                                color: 'white',
                                width: 300,
                                marginBottom: 5,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                '& input': {
                                    color: 'white',
                                },
                            }}
                        />
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: 454, marginBottom: 5 },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <TextField
                            id="outlined-email-input"
                            label="Password"
                            type="password"
                            inputProps={{
                                style: {
                                    outline: 'none',
                                    textAlign: 'center',
                                    color: 'white',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',
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
                                color: 'white', // Добавлено свойство color
                            }}
                        />
                    </Box>
                    <Box
                    sx={{
                        marginTop: 24,
                    }}>
                        <Button
                            onClick={handleNextButton}
                            variant="contained"
                            color="secondary"
                            size="small"
                            sx={{
                                mr: 1,
                                borderRadius: '20px',
                                fontSize: '14px',
                                color: 'black',
                                backgroundColor: '#FFFFFF',
                                marginBottom: 5,
                                width: 454,
                                border: '1px solid rgba(255, 255, 255, 0.35)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                },
                            }}
                        >
                            Log in
                        </Button>
                        <Typography
                            sx={{fontSize: 14, color: 'gray', display: 'flex', width: 454,
                            }}>
                            Not an account?
                            <Typography


                                sx={{fontSize: 14, color: 'rgb(29, 155, 240)', display: 'flex', marginLeft: 0.5, cursor: 'pointer',
                                    '&:hover':{
                                        textDecoration: 'underline'
                                    }
                                }}> Register </Typography>
                        </Typography>
                    </Box>


                </Box>
            </Box>
        </Modal>
    );
};

export default PasswordModal;