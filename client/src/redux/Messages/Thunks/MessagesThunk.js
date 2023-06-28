import {api} from '../../service/api.jsx';
import {
    GET_ACTIVE_CHAT_ERROR,
    GET_ACTIVE_CHAT_LOADING, GET_ACTIVE_CHAT_SUCCESS,
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
            // const searchedUsers = await api.get('/tweets/alluser', {
            const searchedUsers = await api.get('/user/usersearch', {
                params: {
                    "search_requеst":value
                },
            });
            // const searchedUsers = await api.get('/tweets/alluser');
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
            // const userChats = await api.get(`/chat/getAll/${userId}`, {
            //     headers: {
            //         'Access-Control-Allow-Origin': 'http://localhost:5173',
            //         'credentials': 'include',
            //     }
                const userChats = await api.get(`/chats/chat/list?profileId=11`, {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:5173',
                    'credentials': 'include',
                }
            });
            console.log(userChats)
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

export const handleGetActiveChat = (chatId, userId) => {
    return async dispatch => {
        try {
            dispatch({ type: GET_ACTIVE_CHAT_LOADING });

            const allChats = await api.get(`/chat/getAll/${userId}`);
            const requiredChat = allChats.find((chat) => chat.chatId === chatId);

            // Think on what to do with this data;
            return dispatch({ type: GET_ACTIVE_CHAT_SUCCESS, payload: requiredChat });
        } catch (error) {
            return dispatch({ type: GET_ACTIVE_CHAT_ERROR, payload: error.message });
        }
    };
};
