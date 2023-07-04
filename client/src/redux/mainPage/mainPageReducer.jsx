import {
    GET_TWEETS_MAIN_REQUEST,
    GET_TWEETS_MAIN_SUCCESS,
    GET_MAIN_ERROR,
    OPEN_NOAUTORIZATE_MODAL,
    CLOSE_NOAUTORIZATE_MODAL,
    OPEN_LOGIN_MODAL,
    CLOSE_LOGIN_MODAL,
    OPEN_REGISTRATION_MODAL,
    CLOSE_REGISTRATION_MODAL,
    OPEN_NEXT_REGISTRATION_MODAL,
    CLOSE_NEXT_REGISTRATION_MODAL,
    OPEN_IMAGE_MODAL,
    CLOSE_IMAGE_MODAL
    } from "../actions"
  
  export function mainPageReducer(state = { tweets: [],VisibleNoAutorizateModal:false,modalData:{},VisibleLoginModal:false,VisibleRegistrationModal:false,VisibleNextRegistrationModal:false, isLoading: false, visibleImageModal:false }, action) {
    switch (action.type) {
      case GET_TWEETS_MAIN_REQUEST:
        return { ...state, isLoading: true }
      case GET_TWEETS_MAIN_SUCCESS:
        return { ...state, tweets: action.payload.tweets, isLoading: false }
      case GET_MAIN_ERROR:
        return { ...state, isLoading: false }
      case OPEN_NOAUTORIZATE_MODAL:
        return { ...state, VisibleNoAutorizateModal: true ,modalData:action.payload.modalData} 
      case CLOSE_NOAUTORIZATE_MODAL:
        return { ...state, VisibleNoAutorizateModal: false , modalData:{}}    
      case OPEN_LOGIN_MODAL:
        return { ...state, VisibleLoginModal: true } 
      case CLOSE_LOGIN_MODAL:
        return { ...state, VisibleLoginModal: false} 
      case OPEN_REGISTRATION_MODAL:
        return { ...state, VisibleRegistrationModal: true} 
      case CLOSE_REGISTRATION_MODAL:
          return { ...state, VisibleRegistrationModal: false} 
      case OPEN_NEXT_REGISTRATION_MODAL:
          return { ...state, VisibleNextRegistrationModal: true} 
      case CLOSE_NEXT_REGISTRATION_MODAL:
          return { ...state, VisibleNextRegistrationModal: false} 
      case OPEN_IMAGE_MODAL:
            return { ...state, visibleImageModal: true , modalData: {images: action.payload.images,index: action.payload.index}} 
      case CLOSE_IMAGE_MODAL:
            return { ...state, visibleImageModal: false,modalData:{}}     
          default:
        return state
    }
  }
