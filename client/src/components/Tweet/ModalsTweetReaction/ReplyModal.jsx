import { WrapperReactionsModal } from "./WrapperReactionsModal";
import { Box, Avatar, TextareaAutosize, Grid, Typography ,IconButton} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../redux/selectors";
import { tweetInReplySelector, visibleReplyModalSelector, textReplySelector, imageReplySelector } from "../../../redux/selectors";
import {  ADD_TEXT_IN_REPLY, ADD_IMG_IN_REPLY, CLOSE_REPLY_MODAL,DELETE_IMG_IN_REPLY } from "../../../redux/actions";
import { postReplyThunk } from "../../../redux/reply/postReplyThunk";
import { TweetBody } from "../TweetBody";
import CloseIcon from '@mui/icons-material/Close';


export function ReplyModal() {
  const dispatch = useDispatch();
  const currentUser = useSelector(getUser);
  const parentTweet = useSelector(tweetInReplySelector);
  const visibleQuoteRetweetModal = useSelector(visibleReplyModalSelector)
  const { id, av_imagerUrl, username } = currentUser;
  console.log(parentTweet);

  // Text
  const replyText = useSelector(textReplySelector);

  // Image
  const replyImages = useSelector(imageReplySelector);

  function onCloseReplyModal() {
    dispatch({ type: CLOSE_REPLY_MODAL });
  }


  function postReply(id) {
    dispatch({ type: CLOSE_REPLY_MODAL });
    dispatch(postReplyThunk(id));
  }

  function handleImageUpload (e) {
    if(replyImages.length < 4){
      dispatch({ type: ADD_IMG_IN_REPLY, payload: { img: e.target.files } });
    }
  };

  function handleRemoveImage(index){
    dispatch({type:DELETE_IMG_IN_REPLY,payload:{index:index}})
  }


  return (

    <WrapperReactionsModal isOpen={visibleQuoteRetweetModal} onClose={onCloseReplyModal} buttonName="Reply" functionButton={postReply} width={600} handleImageUpload={handleImageUpload} parentId={parentTweet.id} textLenght={replyText.length}>

      <Box sx={{width:'100%',display:'flex',flexDirection:'column'}}>
            <Box>
            <TweetBody tweet={parentTweet} />
          </Box>

        <Box sx={{display:"flex"}}>
            <Box >
            <Avatar src={av_imagerUrl} alt={username} sx={{ m: '14px', cursor: 'pointer' }} />
            </Box>
          <Box sx={{width:'100%'}}>
          <Typography
                sx={{margin:'4px 0'}}
                >Replying to @{parentTweet.username}
                </Typography>
            <TextareaAutosize onChange={e => dispatch({ type: ADD_TEXT_IN_REPLY, payload: { text: e.target.value } })} value={replyText} placeholder="Tweet your reply!" style={{
              width: '100%',
              marginBottom: '10px',
              border: '1px solid transparent',
              outline: 'none',
              resize: 'none',
              fontSize: '20px',
              fontFamily: 'sans-serif',
              color: 'black',
              backgroundColor: 'white'
            }} 
            maxLength={260}/>
          </Box>
        </Box>
          <Box sx={{display: 'flex',justifyContent:'center'}}>
          {replyImages && replyImages.length > 0 &&
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Array.from(replyImages).map((image, index) => (
            <Box key={index} sx={{ position: "relative" }}>
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 1,
                background: "white",
                borderRadius: "50%",
                padding: "2px",
              }}
              onClick={() => handleRemoveImage(index)}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={URL.createObjectURL(image)}
              alt="reply-image"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </Box>

                ))}
              </Box>
            }
          </Box>
      </Box>
    </WrapperReactionsModal>
  );
}
