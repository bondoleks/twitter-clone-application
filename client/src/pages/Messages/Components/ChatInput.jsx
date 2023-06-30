import {IconButton, InputAdornment, TextField} from "@mui/material";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined.js";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined.js";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined.js";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow.js";
import {handleSendNewMessage} from '../../../redux/Messages/Thunks/MessagesThunk.js';
import {useDispatch} from 'react-redux';
import {useState} from 'react';


const ChatInput = ({activeChat}) => {

  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const handleGetMessage = async (e) => setMessage(e.target.value);

  const handleSendChatMessage = async () => {
    await dispatch(handleSendNewMessage(activeChat.chatId, message));
    setMessage("");
  }


  return (


    <TextField
      sx={{
        borderRadius: '20px',
        padding: '0',
        marginBottom: "20px",
        '& .MuiInputBase-root': {
          borderRadius: '20px',
          padding: '3px',
        },
      }}
      id="outlined-multiline-flexible"
      fullWidth={true}
      multiline
      maxRows={4}
      variant="filled"
      value={message}
      onChange={handleGetMessage}
      placeholder="Start a new message"
      InputProps={{
        classes: {
          root: "MuiInputBase-root"
        },
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="center">
            <IconButton>
              <BrokenImageOutlinedIcon sx={{ color: "rgb(29, 155, 240)"}} />
            </IconButton>
            <IconButton>
              <GifBoxOutlinedIcon sx={{ color: "rgb(29, 155, 240)" }} />
            </IconButton>
            <IconButton>
              <SentimentSatisfiedOutlinedIcon sx={{ color: "rgb(29, 155, 240)" }} />
            </IconButton>

          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSendChatMessage}>
              <DoubleArrowIcon sx={{ color: "rgb(29, 155, 240)" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default ChatInput








