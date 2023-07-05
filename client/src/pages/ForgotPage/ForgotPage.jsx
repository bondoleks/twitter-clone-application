import { useState } from "react";
import { Box, Button, Typography,IconButton } from "@mui/material";
import { Formik, Form, Field,  } from "formik";
import * as Yup from "yup";
import { TextField as FormikTextField } from "formik-mui";
import axios from "axios";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate,useParams } from "react-router-dom";






export function ForgotPage(){
    const navigate = useNavigate();
    const { key } = useParams();
    const [messagePassword,setMessagePassword] = useState(false);

  const initialValues = {
    newPassword: "",
    repeatedNewPassword: "",
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("New Password is required"),
    repeatedNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm New Password is required"),
  });


  const handleSubmit = (values, { setSubmitting }) => {

    const {newPassword,repeatedNewPassword} =values;
    axios.post(`https://twitter-clone-application.herokuapp.com/api/v1/auth/forgotPassword/activate/${key}?newPassword=${newPassword}&repeatedNewPassword=${repeatedNewPassword}`)
    .then((response)=>{
        console.log(response);
        setMessagePassword("Your password has been changed, go to the main page");
    })
    .catch((error)=>{
        setMessagePassword(error.response.data.message);
        console.log(error);
    })
    setSubmitting(false);
  };
  return (
    <Box      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }} >
       
       <Box sx={{ display: "flex", alignItems: "center",flexDirection:'column'}}>
       <IconButton>
        <TwitterIcon sx={{ margin: "16px" }} fontSize="large" color="primary" />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, textAlign: "center", mt:'12px' }}
      >
        Change and confirm your new password
      </Typography>
    </Box>

      <Box sx={{marginTop:"20px", p:'16px',width:'100% '}}>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
            <Form>
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
                <Box sx={{display:'flex',justifyContent:'center',flexDirection:"column",gap:'12px'}}>
                <Button type="submit" variant="contained" sx={{borderRadius:'20px'}} >
                    Save
                </Button>
                <Button onClick={() => navigate("/")} variant="contained" sx={{borderRadius:'20px'}}>
                    Go to Main Page
                </Button>
                </Box>
            </Form>
            )}
        </Formik>
      </Box>

    </Box>
  );
}