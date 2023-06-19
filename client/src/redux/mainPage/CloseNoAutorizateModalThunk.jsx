import { CLOSE_NOAUTORIZATE_MODAL } from "../actions"

export function CloseNoAutorizateModalThunk(){
    return (dispatch) => {
        dispatch({type:CLOSE_NOAUTORIZATE_MODAL});
    }
}