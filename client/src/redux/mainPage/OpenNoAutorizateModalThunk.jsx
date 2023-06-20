import { OPEN_NOAUTORIZATE_MODAL } from "../actions"

export function OpenNoAutorizateModalThunk(modalDataType,userName){
    return (dispatch) => {
        let modalData ={}
        if(modalDataType === 'reply'){
            modalData = {
                title: 'Reply to join the conversation.',
                text: `Once you join Twitter, you can respond to ${userName}’s Tweet.`,
                icon: 'reply'
            };
        } 
        if(modalDataType === 'like'){
            modalData = {
                title: 'Like a Tweet to share the love.',
                text: `Join Twitter now to let ${userName} know you like their Tweet.`,
                icon: 'like'
            };
        }
        if(modalDataType === 'retweet'){
            modalData = {
                title: 'Retweet to spread the word.',
                text: `When you join Twitter, you can share ${userName}’s Tweet with your followers.`,
                icon: 'retweet'
            };
        }
        dispatch({type:OPEN_NOAUTORIZATE_MODAL,payload:{modalData: modalData}});
    }
}