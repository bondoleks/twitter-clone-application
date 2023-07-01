import {Box, Typography} from "@mui/material";
import ChatMessage from "./ChatMessage.jsx";


const ChatMessages = ({chatMessages, user}) => {

  const handleShowChatMessages = () => {
    if (chatMessages?.length) {
      return chatMessages.map(({dateMessage, textMessage, typeMessage}) => {

        const isSentByCurrentUser = typeMessage === 1;

        return (
          <ChatMessage key={dateMessage} date={new Date(dateMessage)} isSentByCurrentUser={isSentByCurrentUser} message={textMessage}/>
        )
      })
    }
    return [];
  }

  return (
  <Box sx={{
    display: "flex",
    flexDirection: "column"

  }}>
    {handleShowChatMessages()}
  </Box>
  )
}

export default ChatMessages
