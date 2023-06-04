import {GET_TWEET_REQUEST, GET_TWEET_SUCCESS, GET_TWEET_PAGE_ERROR  } from '../actions';
import {api} from "../service/api";



export const getTweetThunk = (id) => {
    return (dispatch) => {
      dispatch({ type: GET_TWEET_REQUEST });
  
      api.get(`https://twitter-clone-application.herokuapp.com/tweets/tweet/${id}`)
        .then((data) => {
            console.log(data);
          dispatch({type:GET_TWEET_SUCCESS,payload:{tweet: data}});
        })
        .catch((error) => {
            console.log(error);
          dispatch({ type: GET_TWEET_PAGE_ERROR });
        });
    };
  };