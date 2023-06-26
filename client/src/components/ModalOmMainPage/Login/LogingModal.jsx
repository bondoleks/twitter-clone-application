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
                    mr: 1,
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: 'black',
                    backgroundColor: '#FFFFFF',
                    width: "100%",
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  Log in
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{
                    mr: 1,
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: 'white',
                    backgroundColor: '#000000',
                    m:'12px 0',
                    width: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
