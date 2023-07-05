// import {Box, Typography} from "@mui/material";
// import ChatMessage from "./ChatMessage.jsx";
//
//
// const ChatMessages = ({chatMessages, user}) => {
//
//   const handleShowChatMessages = () => {
//     if (chatMessages?.length) {
//       return chatMessages.map(({dateMessage, textMessage, typeMessage}) => {
//
//         const isSentByCurrentUser = typeMessage === 1;
//
//         return (
//           <ChatMessage key={dateMessage} date={new Date(dateMessage)} isSentByCurrentUser={isSentByCurrentUser} message={textMessage}/>
//         )
//       })
//     }
//     return [];
//   }
//
//   return (
//   <Box sx={{
//     display: "flex",
//     flexDirection: "column"
//
//   }}>
//     {handleShowChatMessages()}
//   </Box>
//   )
// }
//
// export default ChatMessages


import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import ChatMessage from "./ChatMessage.jsx";
import {getChatOwners} from '../../../redux/selectors.jsx';
import {useSelector} from 'react-redux';

const ChatMessages = ({ chatMessages, user }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [chatMessages]);

  const handleShowChatMessages = () => {
    if (chatMessages?.length) {
      return chatMessages.map(({ dateMessage, textMessage, typeMessage, user_author }) => {
        const isSentByCurrentUser = typeMessage === 1;
        // console.log(chatMessages)

        return (
          <ChatMessage
            key={dateMessage}
            date={new Date(dateMessage)}
            isSentByCurrentUser={isSentByCurrentUser}
            message={textMessage}
          />
        );
      });
    }
    return [];
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      {handleShowChatMessages()}
    </Box>
  );
};

export default ChatMessages;
