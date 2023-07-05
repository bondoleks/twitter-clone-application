import { GET_NOTIFICATIONS_REQUEST,GET_NOTIFICATIONS_SUCCSES,GET_NOTIFICATIONS_ERROR } from "../actions"

export function notificationsReducer(state = {notifications:[],authorized: Boolean(localStorage.getItem('authToken')), isLoading:false}, action){
    switch (action.type){
        case GET_NOTIFICATIONS_REQUEST:
            return {...state, isLoading:true}
        case GET_NOTIFICATIONS_SUCCSES:
            return {...state, notifications:action.payload.notifications, isLoading:false}
        case GET_NOTIFICATIONS_ERROR:
            return {...state, isLoading:false}
        default:
            return state
    }
}