import { LOG_OUT_USER } from "../actions" 


export function logOutThunk(){
    return function(dispatch){
        dispatch({
            type: LOG_OUT_USER
        })
    }
}