import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";


const ModalClue = () => {

  return(
    <>
    <Box sx = {{
      pl: 2,
      height: '100px',
      maxWidth: '300px',
      boxShadow:"0 0 0 2px rgba(29, 161, 242, 0.5)",
      outline: "2px solid #fff",
      outlineOffset: "-1px",
      borderRadius: "5px"
    }}>
      <Typography sx={{
        pt: 2,
        mr: 2,
        color: "e9e9e9"
      }}>
        Try searching for people, topics, keywords
      </Typography>
    </Box>

    </>
  )
}


export default ModalClue;
