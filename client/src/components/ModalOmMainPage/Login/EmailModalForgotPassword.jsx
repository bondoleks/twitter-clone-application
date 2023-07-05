import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CLOSE_FORGOT_PASSWORD_MODAL } from "../../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { visibleForgotModalSelector } from "../../../redux/selectors";
import { api } from "../../../redux/service/api";
import { useState } from "react";


const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});



export function EmailModalForgotPassword() {
    const dispatch = useDispatch();
    const visibleForgotModal = useSelector(visibleForgotModalSelector);
    const [messagePassword,setMessagePassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
        const {email} =values;
        api.post(`auth/forgotPassword/sendCode?email=${email}`)
        .then((response)=>{
            console.log(response);
            setMessagePassword(`You have been sent a message to ${email}`);
            values = "";
        })
        .catch((error)=>{
            setMessagePassword(error.response.data.message);
            console.log(error);
        })
  }});

  function onCloseModal(){
    dispatch({type:CLOSE_FORGOT_PASSWORD_MODAL})
  }

  return (
    <Modal open={visibleForgotModal} onClose={onCloseModal}>
        <Box
            sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius:'20px',
            textAlign:'center'
            }}
        >
        <Typography
            onClick={onCloseModal}
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
        <Typography variant="h5" component="div" mb={2}>
          Forgot Password
        </Typography>
        <Typography variant="body1" component="div" mb={2}>
        Please enter your email
        </Typography>

            <form onSubmit={formik.handleSubmit}>
            <Box sx={{height:'68px'}}>        
            <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email ? true : false}
                helperText={formik.touched.email && formik.errors.email}
            />
            </Box>
          <Box sx={{height:'32px'}}>
            <Typography>{messagePassword}</Typography>
          </Box>
          <Button type="submit" variant="contained" sx={{ mt: 2 ,borderRadius:'16px'}}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
