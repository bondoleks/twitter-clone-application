import {GET_TWEET_REQUEST, GET_TWEET_PAGE_ERROR,GET_COMMENTS_SUCCESS, START_SCROLL_COMMENTS  } from '../actions';
import {api} from "../service/api";



export const getCommetsThunk = (id,page) => {
    return (dispatch) => {
      api.get(`tweets/reply/all/${id}?sizePage=10&numberPage=${page}`)
        .then((data) => {
            console.log(data);
          dispatch({type:GET_COMMENTS_SUCCESS,payload:{comments: data.listDto}});
          dispatch({type: START_SCROLL_COMMENTS})
        })
        .catch((error) => {
            console.log(error);
          dispatch({ type: GET_TWEET_PAGE_ERROR });
        });
    };
  };