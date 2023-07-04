import { api } from "../service/api";
import { REPLY_SUCCSES } from "../actions";

export function postReplyThunk(parent_id){
    return (dispatch, getState) => {
        console.log(parent_id);
        const state = getState();
        const {text,img} =state.reply.replyData;
        const {id} =state.user.user
        const regex = /(?:^|\s)(#\w+|\w+#\w+)/g;
        const hash = text.match(regex);
        const formData = new FormData();
        formData.append('tweetBody', text);
        formData.append('parentTweetId', parent_id);
        formData.append('user_id', id);
        // formData.append('hash', hash);

        for (const file of img) {
            formData.append('file', file);
          }
          console.log("FormData content:");
          for (const [key, value] of formData) {
            console.log(key, value);
          }

          api.post("tweets/reply/save", formData)
          .then(response => {
              console.log(response);
              dispatch({type:REPLY_SUCCSES})
          })
          .catch(error => {
              console.error(error);
              alert("Error!: " + error.message);
              if (error.response) {
                  console.log("Server Response:", error.response.data);
              }
          });
    }
}