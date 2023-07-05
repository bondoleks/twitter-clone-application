import {
  GET_BOOKMARK_REQUEST,
  GET_BOOKMARK_SUCCESS,
  GET_BOOKMARK_ERROR,
} from "../actions"
import {api} from "../service/api";



export const getBookmarkThunk = (page) => {
    return (dispatch,getState) => {
      dispatch({ type: GET_BOOKMARK_REQUEST });
      const state = getState();
      const {bookmarks} = state.bookmark;
      api.get(`tweets/bookmark?sizePage=10&numberPage=${page}`)

        .then((data) => {
          const uniqueBookmarks = [];

          data.listDto.forEach((bookmark) => {
            if (!bookmarks.some((b) => b.id === bookmark.id)) {
              uniqueBookmarks.push(bookmark);
            }
          });
          dispatch({type:GET_BOOKMARK_SUCCESS,payload: { bookmarks: uniqueBookmarks }});

        })
        .catch((error) => {
            console.log(error);
          dispatch({ type: GET_BOOKMARK_ERROR });
        });
    };
  };