import { api } from "../service/api";
import { DELETE_USER_VISIBLE_TWEETS } from "../actions";

export function watchUserTweetsThunk(){

    return (dispatch,getState)=>{
        const state = getState();
        const {userVisibleTweets} = state.user;
        console.log(userVisibleTweets,userVisibleTweets.length );
        if(userVisibleTweets.length > 0){
            const requestData = {
                arrTweetId: userVisibleTweets,
              };
            api.post('tweets/tweet/view',requestData)

            .then(response => {
                console.log(response);
                alert("Success!");
                dispatch({type:DELETE_USER_VISIBLE_TWEETS})
            })
            .catch(error => {
                console.error(error);
                if (error.response) {
                    console.log("Server Response:", error.response.data);
                }
        })
        }

}}