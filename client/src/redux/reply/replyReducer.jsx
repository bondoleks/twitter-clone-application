import {
    OPEN_REPLY_MODAL,
    CLOSE_REPLY_MODAL,
    ADD_TEXT_IN_REPLY,
    ADD_IMG_IN_REPLY,
    DELETE_IMG_IN_REPLY,
    ADD_HASH_IN_REPLY,
    REPLY_SUCCSES
    } from "../actions"
  
    const initialState = {
      parentTweet: {},
      visibleReplyModal: false,
     replyData: {
        text: '',
        img: [],
        hash: []
      },
    }
    


    export function replyReducer(state = initialState, action) {
      switch (action.type) {
        case OPEN_REPLY_MODAL:
          return {
            ...state,
            visibleReplyModal: true,
            parentTweet: action.payload.parentTweet
          }
        case CLOSE_REPLY_MODAL:
          return {
            ...state,
            visibleReplyModal: false,
            parentTweet: {}
          }
        case ADD_TEXT_IN_REPLY:
          return {
            ...state,
            replyData: {
              ...state.replyData,
              text: action.payload.text
            }
          }
        case ADD_IMG_IN_REPLY:
          return {
            ...state,
            replyData: {
              ...state.replyData,
              img: [...state.replyData.img, ...action.payload.img]
            }
          }
        case DELETE_IMG_IN_REPLY:
          return {
            ...state,
            replyData: {
              ...state.replyData,
              img: state.replyData.img.filter((_, index) => index !== action.payload.index)
            }
          }
        case ADD_HASH_IN_REPLY:
          return {
            ...state,
            replyData: {
              ...state.replyData,
              hash: [...state.replyData.hash, action.payload.hash]
            }
          }
        case REPLY_SUCCSES:
          return {
              ...state,
              replyData: {
                text: '',
                img: [],
                hash: []
              } 
              }
        default:
          return state
      }
    }