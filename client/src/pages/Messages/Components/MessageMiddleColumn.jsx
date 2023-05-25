import react, {useState} from "react";
import {Box, IconButton, Typography} from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import React from "react";
import MessagesSearch from "./MessagesSeach";
import NewMessageModal from "./NewMessageModal.jsx";
import ModalList from "./ModalList.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack.js";


const MessageMiddleColumn = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleInputClick = () => {
    setClicked(true);
  };

  const handleArrowClick = () => {
    setClicked(false);
  };

    const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box sx={{ pr: 5 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
              <MarkEmailUnreadOutlinedIcon onClick={openModal} />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ width: '100%',  }}>
          {clicked ? (
            <>
              <Box sx={{
                display: "flex", alignItems: "center", marginBottom: "30px"
              }}>
              <IconButton sx={{mt: 2}} onClick={handleArrowClick}>
                <ArrowBackIcon  />
              </IconButton>
              <MessagesSearch />
              </Box>
              <Box>
                <Typography sx={{display: "box"}}>
                  Try searching for people, groups, or messages
                </Typography>
              </Box>

            </>
          ) : (
            <Box onClick={handleInputClick}>
            <MessagesSearch/>
              <ModalList />
            </Box>
          )}
        </Box>
      </Box>
      <NewMessageModal open={modalOpen} closeModal={closeModal} />
    </>
  );
};

export default MessageMiddleColumn;






