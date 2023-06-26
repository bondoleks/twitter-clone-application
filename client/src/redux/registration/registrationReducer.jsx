import { REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR } from "../actions"


export function registrationReducer(state = { user: [], registrationError:false, isLoading: false }, action) {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return { ...state, user: action.payload, isLoading: true };
        case REGISTER_USER_SUCCESS:
            return { ...state, token: action.payload.token, isLoading: false,registrationError:false };
        case REGISTER_USER_ERROR:
            return { ...state, isLoading: false,registrationError: action.payload.registrationError };
        default:
            return state;
    }
}