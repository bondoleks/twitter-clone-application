import { Box, Typography, Button, Hidden,Container } from '@mui/material';
import {useDispatch} from "react-redux";
import { OPEN_LOGIN_MODAL,OPEN_REGISTRATION_MODAL } from '../../redux/actions.jsx';

const Footerlogin = () => {

    const dispatch = useDispatch();

    const handleLoginButtonClick = () => {
        dispatch({type:OPEN_LOGIN_MODAL})
    };

    const handleRegistrationOpen = () => {
        dispatch({type:OPEN_REGISTRATION_MODAL})
    }


    return (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: '#1DA1F2', height: "65px",width:'100%',display: 'flex',alignItems: 'center'}}>
            <Hidden smDown>
            <Container sx={{margin: "0 auto", alignItems: 'center', display: "flex" }}>
                
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: 'center',width:"50%"}}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', mr: 'auto' }}>
                            Don’t miss what’s happening
                        </Typography>
                        <Typography sx={{ fontSize: '14px', color: '#fff', mr: 'auto' }}>
                            People on Twitter are the first to know.
                        </Typography>
                    </Box>
                <Box sx={{ alignItems: 'center', bgcolor: '#1DA1F2',display: "flex",justifyContent:'right', allignItems:'center',width:"50%" }}>
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
                        Log In
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
                </Box>
            </Container>
            </Hidden>
            <Hidden smUp>
                <Box sx={{ alignItems: 'center', bgcolor: '#1DA1F2',display: "flex",justifyContent:'center',gap:'12px',width: '100%',p:'0 8px' }}>
                <Button
                        variant="contained" color="primary" size="small"
                        sx={{
                            width:'100%',
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
                        Log In
                    </Button>
                    <Button
                        variant="contained" color="secondary" size="small"
                        onClick={handleRegistrationOpen}
                        sx={{ width:'100%',
                        borderRadius: '20px',
                        fontSize: '14px',
                        color: 'black',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.9)', } }}>
                        Registration
                    </Button>
                </Box>
            </Hidden>
        </Box>
    );
};

export default Footerlogin;

