import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';
import {setAuthToken} from "../tokens/tokens";
import {api} from "../service/api";

export function logingThunk({ email, password }) {
  return async function(dispatch) {
    try {
      const response = await api.post('auth/login', { email, password });
      const token = response.token;
      if (token) {
        setAuthToken(token);
        dispatch({ type: LOGIN_SUCCESS, token });
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
    }
  };
}