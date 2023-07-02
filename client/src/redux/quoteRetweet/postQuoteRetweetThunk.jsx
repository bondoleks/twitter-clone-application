import { api } from "../service/api";

export function postQuoteRetweetThunk(){
    return (dispatch, getState) => {
        const state = getState();
        const {text,img} =state.quoteRetweet.quoteRetweetData;
        const parent_id =state.quoteRetweet.parentTweet.id;
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

          api.post("tweets/quote/save", formData)
          .then(response => {
              console.log(response);
              alert("Success!");
          })
          .catch(error => {
              console.error(error);
              // Actions on error
              alert("Error!: " + error.message);
              if (error.response) {
                  console.log("Server Response:", error.response.data);
              }
          });
    }
}