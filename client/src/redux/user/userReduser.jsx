import { GET_USER_REQUEST,GET_USER_SUCCSES,GET_USER_ERROR, LOG_OUT_USER} from "../actions"


const initialState = {
    user:{},
    error: false,
    authorized: Boolean(localStorage.getItem('authToken')),
    isLoading:false
};

export function userReducer(state = initialState, action){
    switch (action.type){
        case GET_USER_REQUEST:
            return {...state, isLoading:true}
        case GET_USER_SUCCSES:
            return {...state, user:action.user, isLoading:false, authorized: true}
        case GET_USER_ERROR:
            return {...state, isLoading: false, error: true}
        case LOG_OUT_USER:
            return {...state, user:{}, authorized:false}
        default:
            return state
    }
}
