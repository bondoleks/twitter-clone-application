// import react, {useEffect, useState} from 'react';
// import {Box, IconButton, Typography, useMediaQuery} from "@mui/material";
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
// import React from "react";
// import MessagesSearch from "./MessagesSeach";
// import NewMessageModal from "./NewMessageModal.jsx";
// import ModalList from "./ModalList.jsx";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack.js";
// import {useDispatch, useSelector} from 'react-redux';
// import {
//   handleGetSearchUsers,
//   handleGetUserChats,
//   handleOpenNewMessageModal
// } from '../../../redux/Messages/Thunks/MessagesThunk.js';
// import {getActiveChat} from "../../../redux/selectors.jsx";
//
//
//
// const MessageMiddleColumn = ({mockedUsers}) => {
//   // const [modalOpen, setModalOpen] = useState(false);
//   const [clicked, setClicked] = useState(false);
//
//   const dispatch = useDispatch();
//
//   const activeChat = useSelector(getActiveChat);
//
//   const handleInputClick = () => {
//     setClicked(true);
//   };
//
//   const handleArrowClick = () => {
//     setClicked(false);
//   };
//
//   const handleModal = (type) => dispatch(handleOpenNewMessageModal(type));
//
//   //   const openModal = () => {
//   //   setModalOpen(true);
//   // };
//   //
//   // const closeModal = () => {
//   //   setModalOpen(false);
//   // };
//
//   useEffect(() => {
//     dispatch(handleGetUserChats());
//
//   }, [])
//
//   const isMobile = useMediaQuery('(max-width:900px)');
//
//   return (
//
//     <>
//       <Box sx={{
//         borderRight: '1px solid rgba(128, 128, 128, 0.1)',
//         borderLeft: '1px solid rgba(128, 128, 128, 0.1)',
//         height: "100vh",
//         paddingTop: isMobile ? "50px" : "0"
//       }}>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             p: "20px "
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: '18px',
//               fontWeight: '700',
//             }}
//           >
//             Messages
//           </Typography>
//           <Box sx={{ pr: 2 }}>
//             <IconButton>
//               <SettingsOutlinedIcon />
//             </IconButton>
//             <IconButton>
//               <MarkEmailUnreadOutlinedIcon onClick={() => handleModal('open')} />
//             </IconButton>
//           </Box>
//         </Box>
//         <Box sx={{ width: '100wh' }}>
//           {clicked ? (
//
//             <>
//               <Box sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//
//               }}>
//               <IconButton sx={{mt: 2}} onClick={handleArrowClick}>
//                 <ArrowBackIcon  />
//               </IconButton>
//               <MessagesSearch />
//               </Box>
//               <Box>
//                 <Typography sx={{display: "box", marginTop: "20px", padding: "0 10px"}}>
//                   Try searching for people, groups, or messages
//                 </Typography>
//               </Box>
//
//             </>
//           ) : (
//             <Box>
//             <MessagesSearch handleInputClick={handleInputClick} />
//               <ModalList sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 overflowY: "auto",
//               }} />
//             </Box>
//           )}
//         </Box>
//       </Box>
//       {/*<NewMessageModal open={modalOpen} closeModal={closeModal} />*/}
//     </>
//   );
// };
//
// export default MessageMiddleColumn;


import react, {useEffect, useState} from 'react';
import {Avatar, Box, IconButton, List, ListItem, ListItemText, Typography, useMediaQuery} from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import React from "react";
import MessagesSearch from "./MessagesSeach";
import NewMessageModal from "./NewMessageModal.jsx";
import ModalList from "./ModalList.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack.js";
import {useDispatch, useSelector} from 'react-redux';
import {
  handleGetMessagesForChat,
  handleGetSearchUsers,
  handleGetUserChats,
  handleOpenNewMessageModal, handleSetActiveChat
} from '../../../redux/Messages/Thunks/MessagesThunk.js';
import {
  getActiveChat,
  getAllMessagesForAllChats,
  getAllMessagesLoading, getUser,
  getUserChats
} from '../../../redux/selectors.jsx';
import { useNavigate } from 'react-router-dom';
import {useTheme} from "@mui/material/styles";
import MessagesLoader from './MessagesLoader.jsx';



const MessageMiddleColumn = ({mockedUsers}) => {
  // const [modalOpen, setModalOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const user = useSelector(getUser);
  const allMessagesLoading = useSelector(getAllMessagesLoading);
  const allMessagesForAllChats = useSelector(getAllMessagesForAllChats);
  const userChats = useSelector(getUserChats);

  const dispatch = useDispatch();

  const handleInputClick = () => {
    setClicked(true);
  };

  const handleArrowClick = () => {
    setClicked(false);
  };

  const handleModal = (type) => dispatch(handleOpenNewMessageModal(type));

  //   const openModal = () => {
  //   setModalOpen(true);
  // };
  //
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  useEffect(() => {
    dispatch(handleGetUserChats());

  }, [])


  const isMobile = useMediaQuery('(max-width:900px)');

  const navigate = useNavigate();

  const theme = useTheme()


  const handleMessageClick = (message) => {
    const chat = userChats.find(chat => chat.chatId === message.chat_id);
    const chatId = message.chat_id;
    dispatch(handleSetActiveChat(chat))
    dispatch(handleGetMessagesForChat(chat.chatId, user.id));
    navigate(`/messages/${chatId}`);
    setClicked(false);
    setInputValue("");
  };

  const renderMessagesOutput = () => {
    if (allMessagesLoading) {
      return <MessagesLoader />;
    }

    const filteredMessages = allMessagesForAllChats.filter((message) => {
      return message.textMessage.toLowerCase().includes(inputValue.toLowerCase());
    });
    if (!filteredMessages.length) {
      return <Typography>No messages found</Typography>;
    }

    return (
      <List>
        {filteredMessages.map((message) => (
          <ListItem key={message.dateMessage} button onClick={() => handleMessageClick(message)}>
            <ListItemText primary={message.textMessage} />
          </ListItem>
        ))}
      </List>
    )
  }


  return (

    <>
      <Box sx={{
        borderRight: '1px solid rgba(128, 128, 128, 0.1)',
        borderLeft: '1px solid rgba(128, 128, 128, 0.1)',
        height: "100vh",
        paddingTop: isMobile ? "80px" : "0",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
      }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: "20px "
          }}
        >
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '700',
            }}
          >
            Messages
          </Typography>
          <Box sx={{ pr: 2 }}>
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
              <MarkEmailUnreadOutlinedIcon onClick={() => handleModal('open')} />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ width: '100wh' }}>
          {clicked ? (
            <>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: "20px"
              }}>
                <IconButton sx={{ mt: 2 }} onClick={handleArrowClick}>
                  <ArrowBackIcon />
                </IconButton>
                <MessagesSearch
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  messages={messages}
                  setMessages={setMessages}
                  clicked={clicked}
                  handleMessageClick={handleMessageClick} />
              </Box>
              {!inputValue ? (
                <>
                  <Box>
                    <Typography sx={{ display: "box", marginTop: "20px", padding: "0 10px" }}>
                      Try searching for people, groups, or messages
                    </Typography>
                  </Box>
                </>
              ) : (
                renderMessagesOutput()
              )}
            </>
          ) : (
            <Box>
              <MessagesSearch handleInputClick={handleInputClick} clicked={clicked} />
              <ModalList sx={{
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MessageMiddleColumn;
