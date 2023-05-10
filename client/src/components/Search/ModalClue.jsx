import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ModalClue = () => {
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: "#fff",
          p: 2,
          borderRadius: "5px",
          marginRight: "50px",
          maxHeight: "100px",
          maxWidth: "300px",
          minWidth: "250px"
        }}
      >
        <Typography sx={{ color: "e9e9e9" }}>
          Try searching for people, topics, keywords
        </Typography>
      </Paper>
    </>
  );
};

export default ModalClue;