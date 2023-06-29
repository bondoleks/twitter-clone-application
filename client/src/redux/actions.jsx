//User
export const GET_USER_REQUEST = 'user/get/request';
export const GET_USER_SUCCSES = 'user/get/succses';
export const GET_USER_ERROR = 'user/get/error';
export const LOG_OUT_USER = 'user/log_out';

export const  OPEN_NOAUTORIZATE_MODAL = 'main/modal/nonAutorizate/open';
export const  CLOSE_NOAUTORIZATE_MODAL = 'main/modal/nonAutorizate/close';

export const OPEN_LOGIN_MODAL = 'main/modal/login/open';
export const CLOSE_LOGIN_MODAL ='main/modal/login/close';

export const OPEN_REGISTRATION_MODAL = 'main/modal/registration/open';
export const CLOSE_REGISTRATION_MODAL ='main/modal/registration/close';

export const OPEN_NEXT_REGISTRATION_MODAL = 'main/modal/next_registration/open';
export const CLOSE_NEXT_REGISTRATION_MODAL = 'main/modal/next_registration/close';

//MainPage
export const  GET_TWEETS_MAIN_REQUEST = 'main/tweets/get/request';
export const  GET_TWEETS_MAIN_SUCCESS  = 'main/tweets/get/success';
export const  GET_MAIN_ERROR = 'main/tweets/get/error';

//Home
export const GET_TWEETS_REQUEST = 'home/tweets/get/request';
export const GET_TRENDING_REQUEST = 'home/trending/get/request';
export const GET_TWEETS_SUCCESS = 'home/tweets/get/succses';
export const GET_TRENDING_SUCCESS = 'home/trending/get/succses';
export const GET_HOME_ERROR = 'home/all/get/error';
export const LOG_OUT_HOME = 'home/log_out';
export const START_SCROLL_HOME = 'home/scroll/start';
export const END_SCROLL_HOME = 'home/scroll/end'


//loging
export const LOGIN_SUCCESS = 'user/loging/success'
export const LOGIN_FAILURE = 'user/loging/fail'


//Registration
export const REGISTER_USER_REQUEST = 'user/registration/request'
export const REGISTER_USER_SUCCESS = 'user/registration/success'
export const REGISTER_USER_ERROR = 'user/registration/fail'


//Followers
export const GET_FOLLOWERS_REQUEST = 'followers/get/request';
export const GET_FOLLOWERS_SUCCSES = 'followers/get/succses';
export const GET_FOLLOWERS_ERROR = 'followers/get/error';

//Notifications

export const GET_NOTIFICATIONS_REQUEST = 'notifications/get/request';
export const GET_NOTIFICATIONS_SUCCSES = 'notifications/get/succses';
export const GET_NOTIFICATIONS_ERROR = 'notifications/get/error';


//tweet

export const  GET_TWEET_REQUEST = 'tweet/all/request';
export const  GET_TWEET_SUCCESS = 'tweet/tweet/get/succses';
export const  GET_COMMENTS_SUCCESS = 'tweet/comments/get/succses';
export const  GET_TWEET_PAGE_ERROR = 'tweet/all/error';
export const  START_SCROLL_COMMENTS = 'comments/scroll/start';
export const  END_SCROLL_COMMENTS = 'comments/scroll/end';

// chats and messages

export const ADD_NEW_CHAT_SUCCESS = "ADD_NEW_CHAT_SUCCESS";
export const GET_CHATS_SUCCESS = "GET_CHATS_SUCCESS";
export const GET_CHATS_LOADING = "GET_CHATS_LOADING";
export const GET_CHATS_ERROR = "GET_CHATS_ERROR";

export const GET_MESSAGES_FOR_CHAT_SUCCESS = "GET_MESSAGES_FOR_CHAT_SUCCESS";
export const GET_MESSAGES_FOR_CHAT_LOADING = "GET_MESSAGES_FOR_CHAT_LOADING";
export const GET_MESSAGES_FOR_CHAT_ERROR = "GET_MESSAGES_FOR_CHAT_ERROR";

export const SEND_NEW_MESSAGE_LOADING = "SEND_NEW_MESSAGE_LOADING";
export const SEND_NEW_MESSAGE_SUCCESS = "SEND_NEW_MESSAGE_SUCCESS";
export const SEND_NEW_MESSAGE_ERROR = "SEND_NEW_MESSAGE_ERROR";

export const GET_ACTIVE_CHAT = "GET_ACTIVE_CHAT";

export const NEW_CHAT_SUCCESS = "GET_USERS_SUCCESS";
export const NEW_CHAT_LOADING = "NEW_CHAT_LOADING";
export const NEW_CHAT_ERROR = "NEW_CHAT_ERROR";


export const GET_SEARCHED_USERS_SUCCESS = "GET_SEARCHED_USERS_SUCCESS";
export const GET_SEARCHED_USERS_LOADING = "GET_SEARCHED_USERS_LOADING";
export const GET_SEARCHED_USERS_ERROR = "GET_SEARCHED_USERS_ERROR";

export const GET_MESSAGES_SUCCESS = "GET_USERS_SUCCESS";
export const GET_MESSAGES_LOADING = "GET_USERS_LOADING";
export const GET_MESSAGES_ERROR = "GET_USERS_ERROR";


export function registerUserRequest(user) {
    return {
        type: REGISTER_USER_REQUEST,
        payload: {
            user: user
        }
    };
}




