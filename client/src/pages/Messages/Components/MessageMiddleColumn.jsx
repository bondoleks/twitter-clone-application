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
  handleGetSearchUsers,
  handleGetUserChats,
  handleOpenNewMessageModal
} from '../../../redux/Messages/Thunks/MessagesThunk.js';
import {getActiveChat} from "../../../redux/selectors.jsx";
import { useNavigate } from 'react-router-dom';
import {useTheme} from "@mui/material/styles";



const MessageMiddleColumn = ({mockedUsers}) => {
  // const [modalOpen, setModalOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);



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
    const chatId = message.chatId;
    console.log(chatId)
    navigate(`/messages/${chatId}`);
    console.log('Clicked message:', message);
  };


  return (

    <>
      <Box sx={{
        borderRight: '1px solid rgba(128, 128, 128, 0.1)',
        borderLeft: '1px solid rgba(128, 128, 128, 0.1)',
        height: "100vh",
        paddingTop: isMobile ? "50px" : "0",
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
                <MessagesSearch inputValue={inputValue} setInputValue={setInputValue} messages={messages} setMessages={setMessages}
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
                // <ListItem key={messages} button>
                //   <ListItemText primary={messages} />
                // </ListItem>
                <List>
                  {messages.map((message) => (
                    <ListItem key={message.chatId} button onClick={() => handleMessageClick(message)}>
                      <ListItemText primary={message.lastMessage} />
                    </ListItem>
                  ))}
                </List>

              )}
            </>
          ) : (
            <Box>
              <MessagesSearch handleInputClick={handleInputClick} />
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