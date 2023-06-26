import { LOG_OUT_USER } from "../actions";
import { api } from "../service/api";


export function logOutThunk(){
    return function(dispatch){
        api.post('logout')
        .then(()=>{
            localStorage.removeItem('authToken')
            dispatch({
                type: LOG_OUT_USER
            })
        })

        }


}