import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

export function logingThunk({ login, password }) {
  return async function(dispatch) {
    try {
      const response = await axios.post('/api/v1/login', { login, password });
      const token = response.data.token;
      if (token) {
        dispatch({ type: LOGIN_SUCCESS, token });
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
    }
  };
}