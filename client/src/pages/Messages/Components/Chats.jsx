// import React, {useContext} from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
// import {MessagesContext, MessagesContextProvider} from '../../../context/messagesContext.jsx';
// import {Box, Typography} from '@mui/material';
//
// const Chats = () => {
//   const usersWithChats = [];
//   const {mockedUsers} = useContext(MessagesContext)
//
//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <ListItem
//         sx={{
//           "&:hover": {
//             backgroundColor: "#e8e8e8", // Set the background color on hover
//           },
//         }}
//       >
//       <Box>
//         <Box sx ={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           gap: "5px"
//         }}>
//           <Avatar src={mockedUsers[0].avatar}/>
//           <ListItemText>{mockedUsers[0].name}</ListItemText>
//           <ListItemText>@{mockedUsers[0].hashtag}</ListItemText>
//           <ListItemText>{"16.06.2023"}</ListItemText>
//         </Box>
//         <Typography>
//           Last message
//         </Typography>
//       </Box>
//
//
//       </ListItem>
//     </List>
//   )
//
//
// }
//
// export default Chats;

import React, {useContext, useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Box, Typography } from '@mui/material';
import {
  filteredUsersSelector,
  getActiveChat,
  getMessagesForChat,
  getUser,
  getUserChats
} from '../../../redux/selectors.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {api} from '../../../redux/service/api.jsx';
import {
  handleGetMessagesForChat,
  handleGetUserChats,
  handleSetActiveChat
} from '../../../redux/Messages/Thunks/MessagesThunk.js';
import {useNavigate} from 'react-router-dom';
import MessagesLoader from "./MessagesLoader.jsx";

const Chats = () => {
  const userChats = useSelector(getUserChats);
  const activeChat = useSelector(getActiveChat);
  const user = useSelector(getUser);
  const chatMessages = useSelector(getMessagesForChat);

  console.log("chatMessageschatMessageschatMessages", chatMessages);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenActiveChat = async (chat) => {
    if (activeChat?.chatId === chat?.chatId) return;
    dispatch(handleGetMessagesForChat(chat.chatId, user.id));
    dispatch(handleSetActiveChat(chat));
    navigate(`/messages/${chat.chatId}`);
  }

  useEffect(() => {
    dispatch(handleGetUserChats());
  }, [chatMessages?.length])


  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',


      }}
    >
      {
        userChats.length ? userChats.map(chat => {
          const {
            av_imagerUrl,
            chatId,
            firstName,
            initiatorId,
            lastMessage,
            lastName,
            userResivId,
            username} = chat;
          return (
            <>
            <ListItem sx={{
              padding: "0"
            }} onClick={() => handleOpenActiveChat(chat)}>
              <Box style={activeChat?.chatId === chatId ? {backgroundColor: '#e8e8e8'} : {}} sx={{
                boxSizing: "border-box",
                width: "100%",
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: "column",
                padding: "5px 10px",

                '&:hover': {
                  backgroundColor: '#e8e8e8',
                  cursor: 'pointer'
                },
              }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '5px',
                    padding: "0!important",


                  }}
                >
                  <Box sx={{
                    display: "flex",
                    alignItems: 'center',
                    gap: "5px"
                  }}>
                  <Avatar src={av_imagerUrl || ""} />
                  <ListItemText>{firstName}</ListItemText>
                  <ListItemText>@{username}</ListItemText>
                  </Box>
                  <ListItemText sx={{textAlign: "end"}}>{'16.06.2023'}</ListItemText>
                </Box>
                <Typography>{lastMessage}</Typography>
              </Box>
            </ListItem>
            </>
          )
        }) : <Typography>No chats found</Typography>

      }
    </List>


  );
};

export default Chats;
