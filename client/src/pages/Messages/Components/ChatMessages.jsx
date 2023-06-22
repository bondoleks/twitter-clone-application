import {Box, Typography} from "@mui/material";
import ChatMessage from "./ChatMessage.jsx";


const ChatMessages = ({chatUsers, activeChat, user}) => {

  const handleShowChatMessages = () => {
    if (activeChat?.messages) {
      return activeChat.messages.map(message => {

        const date = new Date();
        const isSentByCurrentUser = user.id === message.user_from;

        return (
          <ChatMessage key={date} date={date} isSentByCurrentUser={isSentByCurrentUser} message={message.textMessage}/>
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
