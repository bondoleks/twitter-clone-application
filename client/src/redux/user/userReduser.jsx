import { GET_USER_REQUEST,GET_USER_SUCCSES,GET_USER_ERROR, LOG_OUT_USER} from "../actions"

export function userReducer(state = {user:[],authorized: Boolean(localStorage.getItem('authToken')), isLoading:false}, action){
    switch (action.type){
        case GET_USER_REQUEST:
            return {...state, isLoading:true}
        case GET_USER_SUCCSES:
            return {...state, user:action.payload.user, isLoading:false}
        case GET_USER_ERROR:
            return {...state, isLoading:false}
        case LOG_OUT_USER:
            return {...state, user:[], authorized:false}    
        default:
            return state
    }
}
