import { REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR } from "../actions"
import { api } from "../service/api";

export const registrationUserThunks = (user) => {
    return (dispatch) => {
        dispatch({ type: REGISTER_USER_REQUEST });

        api.post('/api/v1/auth', user)
            .then(() => {
                dispatch({ type: REGISTER_USER_SUCCESS });
            })
            .catch((error) => {
                dispatch({ type: REGISTER_USER_ERROR, payload: error.message });
            });
    };
};