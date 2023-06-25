import {GET_TWEETS_REQUEST, GET_HOME_ERROR,GET_TWEETS_SUCCESS, START_SCROLL_HOME  } from '../actions';
import {api} from "../service/api";



export const getTweetThunk = (page) => {
    return (dispatch) => {
      dispatch({ type: GET_TWEETS_REQUEST });
  

      api.get(`tweets/tweet/all?sizePage=10&numberPage=${page}`)

        .then((data) => {
          dispatch({type:GET_TWEETS_SUCCESS,payload:{tweets: data.listDto}});
          dispatch({type: START_SCROLL_HOME})
        })
        .catch((error) => {
            console.log(error);
          dispatch({ type: GET_HOME_ERROR });
        });
    };
  };