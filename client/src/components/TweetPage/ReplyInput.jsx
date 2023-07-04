import { Grid, Typography,Box,TextareaAutosize,Button,IconButton,Avatar } from "@mui/material";
import { ADD_TEXT_IN_REPLY,ADD_IMG_IN_REPLY } from "../../redux/actions";
import { useSelector,useDispatch } from "react-redux";
import { textReplySelector,imageReplySelector } from "../../redux/selectors";
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import { useState,useEffect } from "react";
import { postReplyThunk } from "../../redux/reply/postReplyThunk";
import { getUser } from "../../redux/selectors";


export function ReplyInput({userParentName,tweetId}){
    const dispatch = useDispatch();
    const replyText = useSelector(textReplySelector);
    const replyImages = useSelector(imageReplySelector) || false;
    const currentUser = useSelector(getUser);
    const {av_imagerUrl,username} = currentUser;
    const [isTextareaFocused, setIsTextareaFocused] = useState(false);

    const handleTextareaFocus = () => {
      setIsTextareaFocused(true);
    };

    const [buttonColor, setButtonColor] = useState(null);
  
    useEffect(() => {
      const savedColor = localStorage.getItem('buttonColor');
      if (savedColor) {
        setButtonColor(savedColor);
      }
    }, []);
  
    const handleImageUpload = (e) => {
      dispatch({ type: ADD_IMG_IN_REPLY, payload: { img: e.target.files } });
    };

    function postReply(id) {
        console.log(id);
        dispatch(postReplyThunk(id));
  
      }

    return(
        <Grid container spacing={0} sx={{borderBottom: '1px rgb(239, 243, 244) solid'}}>
            <Grid item xs={2}>
                <Avatar src={av_imagerUrl} alt={username} sx={{ m: '14px', cursor: 'pointer' }} />
            </Grid>
            <Grid item xs={10} sx={{p:'8px'}}>
                {isTextareaFocused && <Typography
                sx={{margin:'4px 0'}}
                >Replying to @{userParentName}</Typography>}
                <Box sx={{padding:'12px 0'}}>
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
            maxLength={260}
            onFocus={handleTextareaFocus}/>
          </Box>
          <Box>
            {replyImages && replyImages.length > 0 &&
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Array.from(replyImages).map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="reply-image" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                ))}
              </Box>
            }
          </Box>
          <Box
              sx={{
                width: '100%',
                display: "flex",
                justifyContent: isTextareaFocused ? 'space-between' : 'right'
              }}>
            {isTextareaFocused && <IconButton >
                <label htmlFor="file-input-reply">
                  <input
                    id="file-input-reply"
                    onChange={handleImageUpload}
                    accept="image/png, image/gif, image/jpeg"
                    type="file"
                    multiple
                    style={{ display: "none" }}
                  />
                  <BrokenImageOutlinedIcon sx={{ color: buttonColor }} />
                </label>
              </IconButton>
              }
              {isTextareaFocused &&<Typography>{replyText.length}/260</Typography>}
              <Button
                variant="contained" size="medium" sx={{
                  textTransform: 'none',
                  borderRadius: '20px',
                  height: '30px',
                  marginRight: '30px',
                  background: buttonColor
                }}
                onClick={()=>postReply(tweetId)}
                disabled={replyText.length === 0}
              >
                Reply
              </Button>
            </Box>
            </Grid>
        </Grid>
    )
}