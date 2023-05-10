import { GET_NEWSFEEDS_REQUEST,GET_NEWSFEEDS_SUCCSES,GET_NEWSFEEDS_ERROR} from "../actions"

export function newsFeedReducer(state = {newsFeed:[],list:{},authorized: Boolean(localStorage.getItem('authToken')), isLoading:false}, action){
    switch (action.type){
        case GET_NEWSFEEDS_REQUEST:
            return {...state, isLoading:true}
        case GET_NEWSFEEDS_SUCCSES:
            return {...state, newsFeed:action.payload.newsFeed,list:action.payload.list, isLoading:false}
        case GET_NEWSFEEDS_ERROR:
            return {...state, isLoading:false}
        default:
            return state
    }
}