import { REGISTER_USER_REQUEST,REGISTER_USER_SUCCSES,REGISTER_USER_ERROR } from "../actions"


export function registrationReducer(state = {user:[],token: false, isLoading:false}, action){
    switch (action.type){
        case REGISTER_USER_REQUEST:
            return {...state,user:action.payload.user, isLoading:true}
        case REGISTER_USER_SUCCSES:
            return {...state, token:action.payload.token , isLoading:false}
        case REGISTER_USER_ERROR:
            return {...state, isLoading:false}
        default:
            return state
    }
}