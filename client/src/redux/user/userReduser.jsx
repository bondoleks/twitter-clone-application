import { GET_USER_REQUEST,GET_USER_SUCCSES,GET_USER_ERROR, LOG_OUT_USER,  LOGIN_SUCCESS,LOGIN_FAILURE,ADD_USER_VISIBLE_TWEETS,DELETE_USER_VISIBLE_TWEETS} from "../actions"


const initialState = {
    user:{},
    loginError: null,
    authorized: Boolean(localStorage.getItem('authToken')),
    isLoading:false,
    userVisibleTweets:[]
};

export function userReducer(state = initialState, action){
    switch (action.type){
        case GET_USER_REQUEST:
            return {...state, isLoading:true}
        case GET_USER_SUCCSES:
            return {...state, user:action.user, isLoading:false, authorized: true}
        case GET_USER_ERROR:
            return {...state, isLoading: false, error: true}
        case LOGIN_SUCCESS:
            return {...state, loginError:null}
        case LOGIN_FAILURE:
            return {...state, loginError:action.payload.loginError, authorized:false}
        case LOG_OUT_USER:
            return {...state, user:{}, authorized:false}
        case ADD_USER_VISIBLE_TWEETS:
            return {...state, userVisibleTweets:[...state.userVisibleTweets, action.payload.tweetId]} 
        case DELETE_USER_VISIBLE_TWEETS:    
        return {...state, userVisibleTweets:[]} 
        default:
            return state
    }
}
