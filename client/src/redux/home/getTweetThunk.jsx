import {GET_TWEETS_REQUEST, GET_HOME_ERROR,GET_TWEETS_SUCCESS, START_SCROLL_HOME  } from '../actions';
import axios from 'axios';



export const getTweetThunk = (page) => {
    return (dispatch) => {
      dispatch({ type: GET_TWEETS_REQUEST });
  
      axios.get(`https://twitter-clone-application.herokuapp.com/tweets/all?sizePage=10&numberPage=${page}`)
        .then((data) => {
          dispatch({type:GET_TWEETS_SUCCESS,payload:{tweets: data.data.listDto}});
          dispatch({type: START_SCROLL_HOME})
        })
        .catch((error) => {
            console.log(error);
          dispatch({ type: GET_HOME_ERROR });
        });
    };
  };