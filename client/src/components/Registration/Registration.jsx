import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';

const RegistrationModal = ({ isOpen, onClose }) => {
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

    const handleRegistration = () => {
        // Handle registration logic
    };

    return (
            <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={{ maxWidth: 364, minWidth: 364 }}>
                <Box sx={style}>
                    <Typography
                        onClick={onClose}
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
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ fontSize: 28, marginBottom: 3, width: 300 }}
                    >
                        Join Twitter now!
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: 300, marginBottom: 5 },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <TextField
                            id="outlined-name-input"
                            label="Name"
                            type="name"
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
                            }}
                        />
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
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
                            }}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            inputProps={{
                                style: {
                                    outline: 'none',
                                    textAlign: 'center',
                                    color: 'white',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',}
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
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            sx={{
                                borderRadius: '20px',
                                fontSize: '14px',
                                color: 'white',
                                backgroundColor: '#1DA1F2',
                                marginBottom: 5,
                                width: 300,
                                border: '1px solid rgba(255, 255, 255, 0.35)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                },
                            }}
                            onClick={handleRegistration}
                        >
                            Register
                        </Button>
                        <Typography
                            sx={{
                                fontSize: 14,
                                color: 'gray',
                                display: 'flex',
                                width: 300,
                            }}
                        >
                            Already have an account?{' '}
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    color: 'rgb(29, 155, 240)',
                                    display: 'flex',
                                    marginLeft: 0.5,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                            >
                                Login
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}


export default RegistrationModal;
