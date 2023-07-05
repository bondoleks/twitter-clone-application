import {api} from '../../service/api.jsx';
import {
    GET_MESSAGES_FOR_CHAT_ERROR,
    GET_MESSAGES_FOR_CHAT_LOADING,
    GET_MESSAGES_FOR_CHAT_SUCCESS,
    GET_CHATS_ERROR,
    GET_CHATS_LOADING,
    GET_CHATS_SUCCESS,
    GET_MESSAGES_ERROR,
    GET_MESSAGES_LOADING,
    GET_MESSAGES_SUCCESS,
    GET_SEARCHED_USERS_ERROR,
    GET_SEARCHED_USERS_LOADING,
    GET_SEARCHED_USERS_SUCCESS,
    NEW_CHAT_ERROR,
    NEW_CHAT_LOADING,
    NEW_CHAT_SUCCESS,
    GET_ACTIVE_CHAT,
    SEND_NEW_MESSAGE_LOADING,
    SEND_NEW_MESSAGE_SUCCESS,
    SEND_NEW_MESSAGE_ERROR,
    ADD_NEW_CHAT_SUCCESS,
    GET_CHAT_OWNERS,
    OPEN_NEW_MESSAGE_MODAL,
    CLOSE_NEW_MESSAGE_MODAL,
    GET_ALL_MESSAGES_LOADING,
    GET_ALL_MESSAGES_SUCCESS, GET_ALL_MESSAGES_ERROR,
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

export const handleGetUserChats = () => {
    return async dispatch => {
        try {
            dispatch({ type: GET_CHATS_LOADING });
            const userChats = await api.get(`/chats/chat/list`, {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:5173',
                    'credentials': 'include',
                }});
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

export const handleGetMessagesForChat = (chatId, userId) => {
    return async dispatch => {
        try {
            dispatch({ type: GET_MESSAGES_FOR_CHAT_LOADING });

            const chatMessages = await api.get(
              `/chats/chat/messages/${chatId}?profileId=${userId}&sizePage=15&numberPage=0`);

            // Think on what to do with this data;
            return dispatch({ type: GET_MESSAGES_FOR_CHAT_SUCCESS, payload: chatMessages?.listDto });
        } catch (error) {
            return dispatch({ type: GET_MESSAGES_FOR_CHAT_ERROR, payload: error.message });
        }
    };
};

export const handleGetAllMessagesForAllChats = (chatsIds, userId) => {
    return async dispatch => {
        try {
            dispatch({ type: GET_ALL_MESSAGES_LOADING });
            // [12.15.9]
            const allChatsMessages = []

            for (const chatId of chatsIds) {
                const result = await api.get(
                  `/chats/chat/messages/${chatId}?profileId=${userId}&sizePage=15&numberPage=0`);
                    allChatsMessages.push(result?.listDto)
            }

            // Think on what to do with this data;
            return dispatch({ type: GET_ALL_MESSAGES_SUCCESS, payload: allChatsMessages });
        } catch (error) {
            return dispatch({ type: GET_ALL_MESSAGES_ERROR, payload: error.message });
        }
    };
};


export const handleSetActiveChat = (chat) => {
    return dispatch => {
        dispatch({ type: GET_ACTIVE_CHAT, payload: chat });
    };
};

export const handleAddNewChat = (chat) => {
    return dispatch => {
        dispatch({ type: ADD_NEW_CHAT_SUCCESS, payload: chat });
    };
};



export const handleSendNewMessage = (chatId, message) => {
    return async dispatch => {
        const payload = {
            "chat_id": chatId,
            "textMessage": message,
        }
        try {
            dispatch({ type: SEND_NEW_MESSAGE_LOADING });

            const chatMessages = await api.post(
              `chats/chat/message/save`, payload);

            // TODO: TEST UNTIL BE RETURNS THE MESSAGES DATA BACK:

            const newChatMessage = {
                dateMessage: new Date(),
                textMessage: message,
                typeMessage: 1,
            }
            return dispatch({ type: SEND_NEW_MESSAGE_SUCCESS, payload: newChatMessage });
        } catch (error) {
            return dispatch({ type: SEND_NEW_MESSAGE_ERROR, payload: error.message });
        }
    };
};


export const handleSetChatOwners = (userId, chat) => {
    return async dispatch => {
        if (!chat || !userId) {
            return null;
        }
        try {

            const {initiatorId, userResivId} = chat;

            const isChatOwnerMyUser = initiatorId === userId;
            let chatOwner = null;

            if (isChatOwnerMyUser) {
                chatOwner = await api.get(`user/getuser/${userResivId}`);
            } else {
                chatOwner = await api.get(`user/getuser/${initiatorId}`);
            }

            return dispatch({ type: GET_CHAT_OWNERS, payload: chatOwner });

        } catch (error) {
            console.error(error)
        }

    }
}

export const handleOpenNewMessageModal = (type) => {
    return dispatch => {
        const modalType = type === 'open' ? OPEN_NEW_MESSAGE_MODAL : CLOSE_NEW_MESSAGE_MODAL;
        return dispatch({ type: modalType });
    }
}


