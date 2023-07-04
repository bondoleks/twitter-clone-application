import { GET_TWEET_PAGE_ERROR,GET_COMMENTS_SUCCESS, START_SCROLL_COMMENTS  } from '../actions';
import {api} from "../service/api";



export const getCommetsThunk = (id,page) => {
    return (dispatch, getState) => {
      
      const state = getState();
      const {comments} = state.tweet;
      api.get(`tweets/reply/all/${id}?sizePage=10&numberPage=${page}`)
        .then((data) => {
          const uniqueReplies = [];

          data.listDto.forEach((tweet) => {
            if (!comments.some((r) => r.id === comments.id)) {
              uniqueReplies.push(tweet);
            }
          });  

          dispatch({type:GET_COMMENTS_SUCCESS,payload:{comments: uniqueReplies}});
          dispatch({type: START_SCROLL_COMMENTS})
        })
        .catch((error) => {
            console.log(error);
          dispatch({ type: GET_TWEET_PAGE_ERROR });
        });
    };
  };