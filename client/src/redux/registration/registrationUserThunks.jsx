import { REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR,OPEN_NEXT_REGISTRATION_MODAL } from "../actions"
import axios from "axios";

export const registrationUserThunks = (user) => {
    const {username,email,password,repeatedPassword} = user;
    return (dispatch) => {
        dispatch({ type: REGISTER_USER_REQUEST });

        axios.post(`https://twitter-clone-application.herokuapp.com/api/v1/auth/registration?username=${username}&email=${email}&password=${password}&repeatedPassword=${repeatedPassword}`)
            .then((response) => {
                if(response.data.includes("created")){
                    dispatch({ type: REGISTER_USER_SUCCESS});
                    dispatch({ type: OPEN_NEXT_REGISTRATION_MODAL});
                } else {
                    dispatch({ type: REGISTER_USER_ERROR, payload:{registrationError: response.data} });
                }
            })
            .catch((error) => {
                if(error.response){
                    dispatch({ type: REGISTER_USER_ERROR, payload:{registrationError: error.response.data.message} });
                }
            });
    };
};