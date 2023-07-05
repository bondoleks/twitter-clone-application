import { Box, Typography, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useDispatch, useSelector } from 'react-redux';
import { logingThunk } from '../../../redux/user/logingThunk';
import { VisibleLoginModalSelector,loginErrorSelector } from '../../../redux/selectors';
import { OPEN_REGISTRATION_MODAL, CLOSE_LOGIN_MODAL } from '../../../redux/actions';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { TextField } from 'formik-mui';
import { ModalOnMainPageWrapper } from "../ModalOnMainPageWrapper";
import axios from 'axios';
import { OPEN_FORGOT_PASSWORD_MODAL } from '../../../redux/actions';





const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(4, 'Password should be of minimum 4 characters length').required('Password is required'),
});

export const LogingModal = () => {
  const visibleLogingModal = useSelector(VisibleLoginModalSelector);
  const loginError = useSelector(loginErrorSelector);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: CLOSE_LOGIN_MODAL });
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(logingThunk(values));
    setSubmitting(false);
  };
   
  function forgotPassword(){
    dispatch({type:OPEN_FORGOT_PASSWORD_MODAL})
  }

  const initialValues = {
    email: '',
    password: '',
  };


  return (
    <ModalOnMainPageWrapper isOpen={visibleLogingModal} onClose={handleClose} size={{ width: 600, height: 600 }}>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
          <TwitterIcon sx={{ margin: '16px' }} fontSize="large" color='primary' />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 30, textAlign: 'center' }}
          >
            Login to Twitter
          </Typography>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} onReset={() => {}}>
            <Form>
              <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center', m:'20px 0 4px',gap:'12px'}}>
                <Box sx={{width:'100%',height:'68px'}}>
                <Field
                  component={TextField}
                  id="outlined-login-input"
                  label="Email Address"
                  type="email"
                  name="email"
                  inputProps={{
                    style: {
                      outline: 'none',
                      textAlign: 'center',
                      color: 'black',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: 'black',
                    },
                  }}
                  sx={{ width:'100%',
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1DA1F2',
                    },
                  }}
                />
                </Box>
                <Box sx={{width:'100%',height:'68px'}}>
                <Field
                  component={TextField}
                  id="outlined-email-input"
                  label="Password"
                  type="password"
                  name="password"
                  inputProps={{
                    style: {
                      outline: 'none',
                      textAlign: 'center',
                      color: 'black',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: 'black',
                    },
                  }}
                  sx={{width:'100%',
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1DA1F2',
                    },
                    color: 'black',
                  }}
                />
                </Box>
              </Box>
              <Box sx={{width:'100%',textAlign:'center', color:'red',height:'20px'}}>
                  {loginError && <Typography variant='body1'>{loginError}</Typography>}
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',p:'8px' }}>
              <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: 'black',
                    backgroundColor: '#FFFFFF',
                    width: "100%",
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color:'rgb(29, 155, 240)'
                    },
                  }}
                >
                  Log in
                </Button>
                {/* <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{
                    mt:'8px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: 'black',
                    backgroundColor: '#FFFFFF',
                    width: "100%",
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    display:'flex',
                    gap:'4px',
                    alignItems:'center',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color:'rgb(29, 155, 240)'
                    },
                  }}
                onClick={()=>{
                  axios.post( 'https://twitter-clone-application.herokuapp.com/api/v1/oauth2/authorization/google');
                }}
                
                > 
                <Box >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ height: '20px' }} ><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                </Box>
                Sign in with Google
                </Button> */}
                <Button
                  onClick={forgotPassword}
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: 'white',
                    backgroundColor: '#000000',
                    m:'12px 0',
                    width: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color:'rgb(29, 155, 240)'
                    },
                  }}
                >
                  Forgot password?
                </Button>
 
                <Box sx={{ width: '100%' }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: 'gray',
                      display: 'flex',
                      width: 300,
                    }}
                  >
                    Don't have an account?{' '}
                    <Typography
                      onClick={() =>{
                        dispatch({ type: CLOSE_LOGIN_MODAL })
                        dispatch({ type: OPEN_REGISTRATION_MODAL })}}
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
                      Register
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Form>
          </Formik>
        </Box>
    </ModalOnMainPageWrapper>
  );
};

