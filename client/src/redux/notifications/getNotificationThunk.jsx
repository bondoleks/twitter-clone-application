import { GET_NOTIFICATIONS_REQUEST,GET_NOTIFICATIONS_SUCCSES,GET_NOTIFICATIONS_ERROR } from "../actions"
import {api} from "../service/api";



export const getNotificationThunk = () => {
    return (dispatch,getState) => {
      dispatch({ type: GET_NOTIFICATIONS_REQUEST });
      const state = getState();
      api.get(`notifications/read`)
        .then((data) => {
          dispatch({type:GET_NOTIFICATIONS_SUCCSES,payload: { notifications:  data }});

        })
        .catch((error) => {
            console.log(error);
          dispatch({ type: GET_NOTIFICATIONS_ERROR });
        });
    };
  };