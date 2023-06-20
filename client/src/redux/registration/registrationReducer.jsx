import { REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR } from "../actions"


export function registrationReducer(state = { user: [], token: false, isLoading: false }, action) {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return { ...state, user: action.payload, isLoading: true }; // Обновлено здесь
        case REGISTER_USER_SUCCESS:
            return { ...state, token: action.payload.token, isLoading: false };
        case REGISTER_USER_ERROR:
            return { ...state, isLoading: false };
        default:
            return state;
    }
}