import {
    GET_TWEET_REQUEST,
    GET_TWEET_SUCCESS,
    GET_COMMENTS_SUCCESS,
    GET_TWEET_PAGE_ERROR,
    START_SCROLL_COMMENTS,
    END_SCROLL_COMMENTS,
    REMOVE_OLD_REPLY,
    REMOVE_PREVIOUS_TWEET

  } from "../actions"
  
  export function tweetReducer(state = { tweet: {}, comments: [], authorized: Boolean(localStorage.getItem('authToken')), isLoadingTweet: false,isLoadingComment: false, endScroll: false }, action) {
    switch (action.type) {
      case GET_TWEET_REQUEST:
        return { ...state, isLoadingTweet: true, isLoadingComment:true }
      case GET_TWEET_SUCCESS:
        return { ...state, tweet:action.payload.tweet, isLoadingTweet: false }
      case GET_COMMENTS_SUCCESS:
        return { ...state, comments: [...state.comments, ...action.payload.comments], isLoadingComment: false }
      case GET_TWEET_PAGE_ERROR:
        return { ...state, isLoadingTweet: false, isLoadingComment: false }
      case REMOVE_OLD_REPLY:
          return  { ...state, comments: [] } 
      case REMOVE_PREVIOUS_TWEET:
            return  { ...state, tweet: {} }     
      case START_SCROLL_COMMENTS:
        return { ...state, endScroll: false }
      case END_SCROLL_COMMENTS:
        return { ...state, endScroll: true }
      default:
        return state
    }
  }