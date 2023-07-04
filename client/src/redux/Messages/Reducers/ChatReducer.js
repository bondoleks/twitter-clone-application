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
  GET_MESSAGES_FOR_CHAT_SUCCESS,
  GET_MESSAGES_FOR_CHAT_LOADING,
  GET_MESSAGES_FOR_CHAT_ERROR,
  GET_ACTIVE_CHAT,
  SEND_NEW_MESSAGE_SUCCESS,
  SEND_NEW_MESSAGE_ERROR,
  SEND_NEW_MESSAGE_LOADING,
  ADD_NEW_CHAT_SUCCESS,
  GET_CHAT_OWNERS, OPEN_NEW_MESSAGE_MODAL, CLOSE_NEW_MESSAGE_MODAL

} from '../../actions.jsx';


const initialState = {
  filteredUsers: [],
  userChats: [],
  chatOwners: [],
  chatUsers: [],
  activeChat: null,
  chatMessages: {},
  loading: false,
  chatMessagesError: false,
  chatMessagesLoading: false,
  chatMessagesLoadingError: false,
  error: false,
  filters: {},
  newMessageModal: false,
}


export const ChatReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEW_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        userChats: [...state.userChats, payload],
      };
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
    case GET_MESSAGES_FOR_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        chatMessagesError: false,
        chatMessages: payload,
      };
    case GET_MESSAGES_FOR_CHAT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MESSAGES_FOR_CHAT_ERROR:
      return {
        ...state,
        loading: false,
        chatMessagesError: true,
      };
    case SEND_NEW_MESSAGE_SUCCESS:
      return {
        ...state,
        chatMessagesLoading: false,
        chatMessagesLoadingError: false,
        // TODO: TEST UNTIL BE IS NOT READY FOR SENDING MESSAGES BACK
        chatMessages: [...state.chatMessages, payload]
      };
    case SEND_NEW_MESSAGE_LOADING:
      return {
        ...state,
        chatMessagesLoading: true,
      };
    case SEND_NEW_MESSAGE_ERROR:
      return {
        ...state,
        chatMessagesLoading: false,
        chatMessagesLoadingError: true,
      };
    case GET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: payload,
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
    case GET_CHAT_OWNERS:
      return {
        ...state,
        chatOwners: [...state.chatOwners, payload],
      };
      case OPEN_NEW_MESSAGE_MODAL:
      return {
        ...state,
        newMessageModal: true,
      };
    case CLOSE_NEW_MESSAGE_MODAL:
      return {
        ...state,
        newMessageModal: false,
      };
    default:
      return state;
  }
}



