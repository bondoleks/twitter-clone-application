import {
  NEW_CHAT_ERROR,
  NEW_CHAT_LOADING,
  NEW_CHAT_SUCCESS,
  GET_CHATS_ERROR,
  GET_CHATS_LOADING,
  GET_CHATS_SUCCESS

} from "../../actions.jsx";

const ChatRedurer = () => {

}







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
    case START_SCROLL_COMMENTS:
      return { ...state, endScroll: false }
    case END_SCROLL_COMMENTS:
      return { ...state, endScroll: true }
    default:
      return state
  }
}