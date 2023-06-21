
import React from "react";
import {Box, Button, Typography} from "@mui/material";

const ChatMessage = ({ id }) => {
  const date = new Date();
  // const isSentByCurrentUser = id === 2;
  const isSentByCurrentUser = true

  return (
    <Box
      sx={{
        height: "fit-content",
        maxWidth: "80%",
        display: "flex",
        flexDirection: "column",
        padding: "5px 10px",
        marginBottom: "10px",
        alignSelf: isSentByCurrentUser ? "flex-end" : "flex-start",
      }}
    >
      <Typography
        sx={{
          padding: "10px",
          backgroundColor: isSentByCurrentUser ? "rgb(29, 155, 240)" : "lightgray",
          color: isSentByCurrentUser ? "white" : "black",
          borderRadius: isSentByCurrentUser ? "15px 15px 0 15px" : "15px 15px 15px 0",
        }}
      >
        Messages
      </Typography>
      <Typography
        sx={{
          marginTop: "5px",
          textAlign: isSentByCurrentUser ? "right" : "left",
        }}
      >
        {date.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default ChatMessage;


