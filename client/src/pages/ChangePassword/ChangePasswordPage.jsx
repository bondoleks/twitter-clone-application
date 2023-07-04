import { useState } from "react";
import { Box, Button, Typography,IconButton } from "@mui/material";
import { Formik, Form, Field,  } from "formik";
import * as Yup from "yup";
import { TextField as FormikTextField } from "formik-mui";
import { api } from "../../redux/service/api";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export function ChangePasswordPage () {
    const navigate = useNavigate();
    const [messagePassword,setMessagePassword] = useState(false)

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    repeatedNewPassword: "",
  };

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Current Password is required"),
    newPassword: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("New Password is required"),
    repeatedNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm New Password is required"),
  });


  const handleSubmit = (values, { setSubmitting }) => {
    api.post('user/update/password',values)
    .then((response)=>{
        console.log(response);
        setMessagePassword('Your password has been successfully changed');
    })
    .catch((error)=>{
        setMessagePassword(error.response.data.message);
        console.log(error);
    })
    setSubmitting(false);
  };

  return (
    <Box sx={{ width: '100%', borderRight: '1px rgb(239, 243, 244) solid', borderLeft: '1px rgb(239, 243, 244) solid' }}>
       
       <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton 
            onClick={()=>navigate(-1)}
            sx={{
                position: 'relative',
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
        <ArrowBackIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, textAlign: "center", mt:'12px' }}
      >
        Change your password
      </Typography>
    </Box>

      <Box sx={{marginTop:"20px", p:'16px'}}>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
            <Form>
                <Box sx={{width:'100%',height:'120px',borderBottom:'1px rgb(239, 243, 244) solid '}}>
                <Box sx={{width:'100%',height:'76px'}}>
                <Field
                    component={FormikTextField}
                    name="oldPassword"
                    type="password"
                    label="Current Password"
                    fullWidth
                    />
                 </Box>   
                    <Typography variant="body1" sx={{color:'rgb(29, 155, 240)',cursor:"pointer",":hover":{
                        textDecoration: 'underline 1px'
                    }}}>Forgot password?</Typography>
                </Box>
                <Box sx={{width:'100%',height:'90px'}}>
                <Field
                    component={FormikTextField}
                    name="newPassword"
                    type="password"
                    label="New Password"
                    fullWidth
                    />
                </Box>

                <Box sx={{width:'100%',height:'90px'}}> 
                    
                <Field
                    component={FormikTextField}
                    name="repeatedNewPassword"
                    type="password"
                    label="Confirm New Password"
                    fullWidth
                    />
                </Box>
                <Box sx={{height:'20px'}}>
                {messagePassword && <Typography>{messagePassword}</Typography>}
                </Box>
                <Box sx={{display:'flex',justifyContent:'right'}}>
                <Button type="submit" variant="contained" sx={{borderRadius:'20px'}} disabled={1 === 0}>
                    Save
                    </Button>
                </Box>
            </Form>
            )}
        </Formik>
      </Box>
     
    </Box>
  );
};


