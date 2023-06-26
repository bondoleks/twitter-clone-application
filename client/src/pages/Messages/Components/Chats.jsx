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
import {filteredUsersSelector, getActiveChat, getUser, getUserChats} from '../../../redux/selectors.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {useFetch} from '../../../hooks/UseFetch.js';
import {api} from '../../../redux/service/api.jsx';
import {handleGetActiveChat} from '../../../redux/Messages/Thunks/MessagesThunk.js';
import {useNavigate} from 'react-router-dom';

const Chats = () => {
  const userChats = useSelector(getUserChats);
  const [usersForChats, setUsersForChats] = useState([])
  const user = useSelector(getUser);
  const activeChat = useSelector(getActiveChat);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetUsersById = (userIds) => {
    const promises =  userIds.map(async (userId) =>
      await api.get(`/user/getuser/${userId}`));

    return Promise.all(promises);
  }

  const handleLastChatMessage = async () => {
    // Get last chat message
    const lastChatMessages = userChats.map((chat) => {
      const messagesLength = chat.messages.length;
      return chat.messages[messagesLength - 1];
    }).filter(Boolean)

    // Get unique user ids to send API
    const uniqueUserIds = [...new Set(lastChatMessages.map((message) => message.user_from))];
    // Send API to get the unique users from last messages of the chats
    const usersFromLastMessage = await handleGetUsersById(uniqueUserIds);

    // Find the user from the last message by id and return his last message.
    return lastChatMessages.map((message) => {
      const relatedUser = usersFromLastMessage.find(user =>
        user.id === message.user_from)

      return {
        chatId: message.chat_id,
        user: relatedUser,
        message: message.textMessage,
      }

    })
  }

  useEffect(() => {
     handleLastChatMessage().then((chatsData) => {
       setUsersForChats(chatsData);
     })

  }, [userChats]);

  const handleOpenActiveChat = async (chatId) => {
    if (activeChat.chatId === chatId) return;
    dispatch(handleGetActiveChat(chatId, user.id));
    navigate(`/messages/${chatId}`)
  }


  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        padding: "10px 0"

      }}
    >
      {
        usersForChats.length ? usersForChats.map(({user, message, chatId}) => {
          const {av_imagerUrl, firstName, username} = user;
          return (
            <>
            <ListItem onClick={() => handleOpenActiveChat(chatId)}>
              <Box sx={{
                boxSizing: "border-box",
                '&:hover': {
                  backgroundColor: '#e8e8e8',
                },
              }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '5px',
                    boxSizing: "border-box"

                  }}
                >
                  <Avatar src={av_imagerUrl || ""} />
                  <ListItemText>{firstName}</ListItemText>
                  <ListItemText>@{username}</ListItemText>
                  <ListItemText>{'16.06.2023'}</ListItemText>
                </Box>
                <Typography>{message}</Typography>
              </Box>
            </ListItem>
          <ListItem onClick={() => handleOpenActiveChat(chatId)}>
            <Box sx={{
              boxSizing: "border-box",
              '&:hover': {
                backgroundColor: '#e8e8e8',
              },
            }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Avatar src={av_imagerUrl || ""} />
                <ListItemText>{firstName}</ListItemText>
                <ListItemText>@{username}</ListItemText>
                <ListItemText>{'16.06.2023'}</ListItemText>
              </Box>
              <Typography>{message}</Typography>
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
