import {GET_TWEETS_MAIN_REQUEST, GET_TWEETS_MAIN_SUCCESS, GET_MAIN_ERROR  } from '../actions';
import {api} from "../service/api";




export const getMainPageTweetsThunk = () => {
    return (dispatch) => {
      dispatch({ type: GET_TWEETS_MAIN_REQUEST });
      api.get(`/tweets/tweet/all/notauth`)
        .then((response) => {
            console.log(response.data.listDto);
          dispatch({type:GET_TWEETS_MAIN_SUCCESS,payload:{tweets: response.data.listDto}});
        })
        .catch((error) => {
            console.log(error);
          dispatch({ type: GET_MAIN_ERROR });
        });
    };
  };
