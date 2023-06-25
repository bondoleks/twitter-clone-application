import {
  NEW_CHAT_ERROR,
  NEW_CHAT_LOADING,
  NEW_CHAT_SUCCESS,
  GET_CHATS_ERROR,
  GET_CHATS_LOADING,
  GET_CHATS_SUCCESS,
  GET_SEARCHED_USERS_SUCCESS,
  GET_SEARCHED_USERS_ERROR,
  GET_SEARCHED_USERS_LOADING,
  GET_ACTIVE_CHAT_SUCCESS, GET_ACTIVE_CHAT_LOADING, GET_ACTIVE_CHAT_ERROR

} from '../../actions.jsx';


const initialState = {
  filteredUsers: [],
  userChats: [],
  activeChat: {},
  loading: false,
  activeChatError: false,
  error: false,
  filters: {},
}


export const ChatReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHATS_SUCCESS:
      return {
        ...state,
        loading: false,
        userChats: payload,
      };
    case GET_CHATS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CHATS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_ACTIVE_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        activeChatError: false,
        activeChat: payload,
      };
    case GET_ACTIVE_CHAT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ACTIVE_CHAT_ERROR:
      return {
        ...state,
        loading: false,
        activeChatError: true,
      };
    case GET_SEARCHED_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        filteredUsers: payload,
      };
    case GET_SEARCHED_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        filteredUsers: [],
      };
    case GET_SEARCHED_USERS_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    default:
      return state;
  }
}



