import { OPEN_REPLY_MODAL } from "../actions";
import { api } from "../service/api";

export function openReplyModalThunk(id){

    return (dispatch ) => {
        console.log('open');
        api.get(`tweets/tweet/${id}`)
        .then((data) => {
            console.log(data);
          dispatch({type:OPEN_REPLY_MODAL,payload:{parentTweet: data}});
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
}