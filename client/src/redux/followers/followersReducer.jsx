import { GET_FOLLOWERS_REQUEST,GET_FOLLOWERS_SUCCSES,GET_FOLLOWERS_ERROR} from "../actions"

export function followersReducer(state = {follower:[],followed:[],authorized: Boolean(localStorage.getItem('authToken')), isLoading:false}, action){
    switch (action.type){
        case GET_FOLLOWERS_REQUEST:
            return {...state, isLoading:true}
        case GET_FOLLOWERS_SUCCSES:
            return {...state, follower:action.payload.follower,followed:action.payload.followed, isLoading:false}
        case GET_FOLLOWERS_ERROR:
            return {...state, isLoading:false}
        default:
            return state
    }
}