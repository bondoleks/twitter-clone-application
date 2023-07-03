import {
    OPEN_QUOTE_RETWEET_MODAL,
    CLOSE_QUOTE_RETWEET_MODAL,
    ADD_TEXT_IN_QUOTE_RETWEET,
    ADD_IMG_IN_QUOTE_RETWEET,
    ADD_HASH_IN_QUOTE_RETWEET,
    DELETE_IMG_IN_QUOTE_RETWEET
  } from "../actions"
  
  const initialState = {
    parentTweet: {},
    visibleQuoteRetweetModal: false,
    quoteRetweetData: {
      text: '',
      img: [],
      hash: []
    },
  }
  
  export function quoteRetweetReducer(state = initialState, action) {
    switch (action.type) {
      case OPEN_QUOTE_RETWEET_MODAL:
        return {
          ...state,
          visibleQuoteRetweetModal: true,
          parentTweet: action.payload.parentTweet
        }
      case CLOSE_QUOTE_RETWEET_MODAL:
        return {
          ...state,
          visibleQuoteRetweetModal: false,
          parentTweet: {}
        }
      case ADD_TEXT_IN_QUOTE_RETWEET:
        return {
          ...state,
          quoteRetweetData: {
            ...state.quoteRetweetData,
            text: action.payload.text
          }
        }
      case ADD_IMG_IN_QUOTE_RETWEET:
        return {
          ...state,
          quoteRetweetData: {
            ...state.quoteRetweetData,
            img: [...state.quoteRetweetData.img, ...action.payload.img]
          }
        }
      case DELETE_IMG_IN_QUOTE_RETWEET:
        return {
          ...state,
          quoteRetweetData: {
            ...state.quoteRetweetData,
            img: state.quoteRetweetData.img.filter((_, index) => index !== action.payload.index)
          }
        }
      case ADD_HASH_IN_QUOTE_RETWEET:
        return {
          ...state,
          quoteRetweetData: {
            ...state.quoteRetweetData,
            hash: [...state.quoteRetweetData.hash, action.payload.hash]
          }
        }
      default:
        return state
    }
  }
  
