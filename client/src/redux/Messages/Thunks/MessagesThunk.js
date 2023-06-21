import {api} from '../../service/api.jsx';
import {
    GET_CHATS_ERROR,
    GET_CHATS_LOADING, GET_CHATS_SUCCESS, GET_MESSAGES_ERROR, GET_MESSAGES_LOADING, GET_MESSAGES_SUCCESS,
    GET_SEARCHED_USERS_ERROR,
    GET_SEARCHED_USERS_LOADING,
    GET_SEARCHED_USERS_SUCCESS, NEW_CHAT_ERROR, NEW_CHAT_LOADING, NEW_CHAT_SUCCESS,
} from '../../actions.jsx';

export const handleGetSearchUsers = (value) => {
    return async dispatch => {
        try {
            dispatch({ type: GET_SEARCHED_USERS_LOADING });
            // const searchedUsers = await api.get('/tweets/searchusers', {
            //     params: {
            //         "search_request":value
            //     },
            //     headers: {
            //         'Access-Control-Allow-Origin': 'http://localhost:5173',
            //     }
            // });
            const searchedUsers = await api.get('/tweets/alluser');
            console.log("searchedUserssearchedUserssearchedUsers", searchedUsers);
            // Think on what to do with this data;
            return dispatch({ type: GET_SEARCHED_USERS_SUCCESS, payload: searchedUsers });
        } catch (error) {
            return dispatch({ type: GET_SEARCHED_USERS_ERROR, payload: error.message });
        }
    };
};

export const handleGetUserChats = (userId = 11) => {
    return async dispatch => {
        try {
            dispatch({ type: GET_CHATS_LOADING });
            const userChats = await api.get(`/chat/getAll/${userId}`, {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:5173'
                }
            });
            console.log("userChatsuserChatsuserChats", userChats);
            return dispatch({ type: GET_CHATS_SUCCESS, payload: userChats });
        } catch (error) {
            return dispatch({ type: GET_CHATS_ERROR, payload: error.message });
        }
    };
};

export const handleGetUserMessages = (id) => {
    return async dispatch => {
        try {
            dispatch({ type: GET_MESSAGES_LOADING });
            const searchedMessages = await api.get(`//messages/get/${id}`);
            // Think on what to do with this data;
            return dispatch({ type: GET_MESSAGES_SUCCESS, payload: searchedMessages.data });
        } catch (error) {
            return dispatch({ type: GET_MESSAGES_ERROR, payload: error.message });
        }
    };
};

export const handlePostUserChats = () => {
    return async dispatch => {
        try {
            dispatch({ type: NEW_CHAT_LOADING });
            const newChat = await api.post('chat/save');
            // Think on what to do with this data;
            return dispatch({ type: NEW_CHAT_SUCCESS, payload: newChat.data });
        } catch (error) {
            return dispatch({ type: NEW_CHAT_ERROR, payload: error.message });
        }
    };
};
