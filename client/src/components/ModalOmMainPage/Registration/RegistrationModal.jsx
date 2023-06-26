import {  Box, Typography, Button } from '@mui/material';
import {registrationUserThunks} from '../../../redux/registration/registrationUserThunks';
import { useDispatch } from 'react-redux';
import { OPEN_LOGIN_MODAL,CLOSE_REGISTRATION_MODAL } from '../../../redux/actions';
import { useSelector } from 'react-redux';
import { VisibleRegistrationModalSelector } from '../../../redux/selectors';
import { Formik, Form, Field,ErrorMessage  } from 'formik';
import { object, string,ref } from 'yup';
import { TextField } from 'formik-mui';
import { registrationErrorSelector } from '../../../redux/selectors';
import { ModalOnMainPageWrapper } from '../ModalOnMainPageWrapper';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';

const validationSchema = object().shape({
    name: string()
      .required('Name is required'),
    email: string()
      .email('Invalid email')
      .required('Email is required'),
    password: string()
      .required('Password is required')
      .min(4, 'Password should be of minimum 4 characters length'),
    repeatedPassword: string()
      .required('Repeated password is required')
      .test('passwords-match', 'Passwords must match', function (value) {
        return value === this.parent.password})
  });

export const RegistrationModal = () => {
    const [passwords,setPasswords] =useState({password:null,repeatedPassword:null})
    const dispatch = useDispatch();
    const isOpen = useSelector(VisibleRegistrationModalSelector);
    const registrationError = useSelector(registrationErrorSelector);

console.log(passwords);
    function handleClose(){
        dispatch({type:CLOSE_REGISTRATION_MODAL})
    }

    
      const handleLoginClick = () => {
        dispatch({ type: CLOSE_REGISTRATION_MODAL })
        dispatch({ type: OPEN_LOGIN_MODAL })
      };


      const handleSubmit = (values, { setSubmitting }) => {
        dispatch(registrationUserThunks(values));
        setSubmitting(false);
      };


    const initialValues = {
        username: '',
        email: '',
        password: '',
        repeatedPassword: '',
      };

    return (
        <ModalOnMainPageWrapper isOpen={isOpen} onClose={handleClose} size={{ width: 483, height: 600 }}>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
          <TwitterIcon sx={{ margin: '16px' }} fontSize="large" color='primary' />
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ fontSize: 28,  margin: '0 auto'}}
                    >
                        Join Twitter now!
                    </Typography>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} onReset={() => {}}>
            <Form>
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center', m:'20px 0 4px',gap:'12px'}}>
                <Box sx={{width:'300px',height:'74px'}}>
                  <Field
                    component={TextField}
                    name="name"
                    label="Userame"
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
                <Box sx={{width:'100%',height:'74px'}}>
                  <Field
                    component={TextField}
                    name="email"
                    label="Email"
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
                <Box sx={{width:'100%',height:'74px'}}>
                  <Field
                    component={TextField}
                    name="password"
                    label="Password"
                    type="password"
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
                <Box sx={{width:'100%',height:'74px'}}>
                  <Field
                    component={TextField}
                    name="repeatedPassword"
                    label="Confirm Password"
                    type="password"
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
            </Box>

                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{
                      borderRadius: '20px',
                      fontSize: '14px',
                      color: 'white',
                      backgroundColor: '#1DA1F2',
                      width: '100%',
                      border: '1px solid rgba(255, 255, 255, 0.35)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                  >
                    Register
                  </Button>
                        <Typography
                            sx={{
                                fontSize: 14,
                                color: 'gray',
                                display: 'flex',
                            }}
                        >
                            Already have an account?{' '}
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    color: 'rgb(29, 155, 240)',
                                    display: 'flex',
                                    marginLeft: '4px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                                onClick={handleLoginClick}
                            >
                                Login
                            </Typography>
                        </Typography>
                    </Form>
                    </Formik>
                </Box>
        </ModalOnMainPageWrapper>
    )
}



