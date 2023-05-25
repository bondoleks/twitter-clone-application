import {
    GET_TWEETS_REQUEST,
    GET_TRENDING_REQUEST,
    GET_TWEETS_SUCCESS,
    GET_TRENDING_SUCCESS,
    GET_HOME_ERROR,
    LOG_OUT_HOME,
    START_SCROLL_HOME,
    END_SCROLL_HOME
  } from "../actions"
  
  export function homeReducer(state = { tweets: [], trending: [], authorized: Boolean(localStorage.getItem('authToken')), isLoading: false, endScroll: false }, action) {
    switch (action.type) {
      case GET_TWEETS_REQUEST:
        return { ...state, isLoading: true }
      case GET_TRENDING_REQUEST:
        return { ...state, isLoading: true }
      case GET_TWEETS_SUCCESS:
        return { ...state, tweets: [...state.tweets, ...action.payload.tweets], isLoading: false }
      case GET_TRENDING_SUCCESS:
        return { ...state, trending: action.payload, isLoading: false }
      case GET_HOME_ERROR:
        return { ...state, isLoading: false }
      case LOG_OUT_HOME:
        return { ...state, tweets: { data: [], pages: 0 }, trending: [], authorized: false }
      case START_SCROLL_HOME:
        return { ...state, endScroll: false }
      case END_SCROLL_HOME:
        return { ...state, endScroll: true }
      default:
        return state
    }
  }
