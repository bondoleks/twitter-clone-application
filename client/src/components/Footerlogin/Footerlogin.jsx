
import React, { useState } from 'react';
import { BottomNavigation, Box, Typography, Button, Modal } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import RegistrationModal from "../Registration/Registration.jsx";
import PasswordModal from "../Login/PasswordModal.jsx";
import {useDispatch} from "react-redux";
import {logingThunk} from "../../redux/user/logingThunk";

const Footerlogin = () => {

    // W8 to Redux
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [isNextButtonOpen, setIsNextButtonOpen] = useState(false);
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const handleLogin = (password) => {
        dispatch(logingThunk({username: email, password}))
        setIsNextButtonOpen(false)
    }


    const handleLoginButtonClick = () => {
        setIsModalOpen(true);
    };


    const handleLoginButtonX = () => {
        setIsModalOpen(false);
    }


    const handleRegistrationOpen = () => {
        setIsModalOpen(false);
        setIsRegistrationModalOpen(true)
    }

    const handleRegistrationClose = () => {
        setIsRegistrationModalOpen(false)
    }

    const handleRegistrationModalLoginClick = () => {
        setIsRegistrationModalOpen(false);
        setIsModalOpen(true)
    }


    const handleNextButton = () => {
        setIsNextButtonOpen(true);
        setIsModalOpen(false);
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
                        variant="contained" color="secondary" size="small"
                        onClick={handleRegistrationOpen}
                        sx={{ mr: 1,
                        borderRadius: '20px',
                        fontSize: '14px',
                        color: 'black',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.9)', } }}>
                        Registration
                    </Button>
                </BottomNavigation>
            </Box>
            {isModalOpen && (
                <Modal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">



                    <Box
                    sx={{maxWidth: 364,
                    minWidth: 364,}}>
                        <Box sx={style}>
                        <TwitterIcon
                        sx={{marginTop: -2, marginBottom: 2,}}/>
                            <Typography
                                onClick={handleLoginButtonX}
                            sx={{position: 'absolute', lineHeight: '18px', left: 20, top: 12, fontSize: 14, borderRadius: '50%', cursor: 'pointer', padding: '6px',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }}}> X </Typography>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ fontSize: 30, marginBottom: 5, width: 300, }}
                        >
                            Login to Twitter
                        </Typography>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: 300, marginBottom: 5, },
                            }}
                            noValidate
                            autoComplete="on"
                        >
                            <TextField
                                id="outlined-login-input"
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        </Box>

                        <Button
                            onClick={handleNextButton}
                            variant="contained" color="secondary" size="small" sx={{ mr: 1,
                            borderRadius: '20px',
                            fontSize: '14px',
                            color: 'black',
                            backgroundColor: '#FFFFFF',
                            marginBottom: 5,
                            width: 300,
                            border: '1px solid rgba(255, 255, 255, 0.35)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            }}}>
                            Next
                        </Button>
                            <Button
                                variant="contained" color="secondary" size="small" sx={{ mr: 1,
                                borderRadius: '20px',
                                fontSize: '14px',
                                color: 'white',
                                backgroundColor: '#000000',
                                marginBottom: 5,
                                width: 300,
                                border: '1px solid rgba(255, 255, 255, 0.35)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }}}>
                                Forgot password?
                            </Button>
                            <Typography
                            sx={{fontSize: 14, color: 'gray', display: 'flex', width: 300,
                            }}>
                                Not an account?
                                <Typography

                                    onClick={handleRegistrationOpen}

                                    sx={{fontSize: 14, color: 'rgb(29, 155, 240)', display: 'flex', marginLeft: 0.5, cursor: 'pointer',
                                        '&:hover':{
                                        textDecoration: 'underline'
                                        }
                                    }}> Register </Typography>
                            </Typography>
                    </Box>
                    </Box>
                </Modal>
            )}
            <RegistrationModal isOpen={isRegistrationModalOpen} onClose={handleRegistrationClose} onLoginClick={handleRegistrationModalLoginClick} />
            <PasswordModal isOpen={isNextButtonOpen} onClose={() => setIsNextButtonOpen(false)} onNextClick={handleLogin} emailValue={email} />
        </Box>
    );
};

export default Footerlogin;

