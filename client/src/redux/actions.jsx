//User
export const GET_USER_REQUEST = 'user/get/request';
export const GET_USER_SUCCSES = 'user/get/succses';
export const GET_USER_ERROR = 'user/get/error';
export const LOG_OUT_USER = 'user/log_out'


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
export const REGISTER_USER_SUCCSES= 'user/registration/success'
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

export function registerUserRequest(user) {
    return {
        type: REGISTER_USER_REQUEST,
        payload: {
            user: user
        }
    };
}