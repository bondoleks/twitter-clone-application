import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import NewMessageModal from "./NewMessageModal.jsx";
import {useDispatch} from 'react-redux';
import {handleOpenNewMessageModal} from '../../../redux/Messages/Thunks/MessagesThunk.js';

const MessagesRightColumn = () => {
  const dispatch = useDispatch();
  const handleModal = (type) => {
    return dispatch(handleOpenNewMessageModal(type));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        padding: "0 50px",
      }}
    >
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "800",
          paddingBottom: "10px",
        }}
      >
        Select a message
      </Typography>
      <Typography sx={{ paddingBottom: "10px" }}>
        Choose from your existing conversations, start a new one, or just keep swimming.
      </Typography>

      <Button
        variant="contained"
        onClick={() => handleModal('open')}
        sx={{
          borderRadius: "20px",
          marginTop: "20px",
          width: "200px",
          backgroundColor: "rgb(29, 155, 240)",
        }}
      >
        New Message
      </Button>
    </Box>
  );
};

export default MessagesRightColumn;
