import { api } from "../service/api";
import { DELETE_USER_VISIBLE_TWEETS } from "../actions";

export function watchUserTweetsThunk(){

    return (dispatch,getState)=>{
        const state = getState();
        const {userVisibleTweets} = state.user;
        api.post('',userVisibleTweets)
        .then(response => {
            console.log(response);
            alert("Success!");
            dispatch({type:DELETE_USER_VISIBLE_TWEETS})
        })
        .catch(error => {
            console.error(error);
            dispatch({type:DELETE_USER_VISIBLE_TWEETS})
            if (error.response) {
                console.log("Server Response:", error.response.data);
            }
    })
}}