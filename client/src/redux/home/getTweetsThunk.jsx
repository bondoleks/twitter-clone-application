import {GET_TWEETS_REQUEST, GET_HOME_ERROR,GET_TWEETS_SUCCESS} from '../actions';
import {api} from "../service/api";



export const getTweetsThunk = (page) => {
    return (dispatch,getState) => {
      dispatch({ type: GET_TWEETS_REQUEST });
      const state = getState();
      const {tweets} = state.home;
      api.get(`tweets/tweet/all?sizePage=10&numberPage=${page}`)

        .then((data) => {
          const uniqueTweets = [];

          data.listDto.forEach((tweet) => {
            if (!tweets.some((t) => t.id === tweet.id)) {
              uniqueTweets.push(tweet);
            }
          });
          dispatch({type:GET_TWEETS_SUCCESS,payload: { tweets: uniqueTweets }});

        })
        .catch((error) => {
            console.log(error);
          dispatch({ type: GET_HOME_ERROR });
        });
    };
  };