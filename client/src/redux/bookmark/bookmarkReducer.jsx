import {
    GET_BOOKMARK_REQUEST,
    GET_BOOKMARK_SUCCESS,
    GET_BOOKMARK_ERROR,
    DELETE_BOOKMARK
  } from "../actions"
  
  export function bookmarkReducer(state = { bookmarks: [], authorized: Boolean(localStorage.getItem('authToken')), isLoading: false }, action) {
    switch (action.type) {
      case GET_BOOKMARK_REQUEST:
        return { ...state, isLoading: true }
      case GET_BOOKMARK_SUCCESS:
        return { ...state, bookmarks: [...state.bookmarks, ...action.payload.bookmarks], isLoading: false }
      case GET_BOOKMARK_ERROR:
        return { ...state, isLoading: false }
      case DELETE_BOOKMARK:
        return { ...state, bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload.bookmarkId) }; 
      default:
        return state
    }
  }