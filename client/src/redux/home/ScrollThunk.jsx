import { END_SCROLL_HOME} from "../actions";


export const ScrollThunk = () => {
    return (dispatch) => {
        dispatch({ type: END_SCROLL_HOME });
    };
  };