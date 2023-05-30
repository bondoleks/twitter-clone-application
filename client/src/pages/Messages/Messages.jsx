import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageMiddleColumn from "./Components/MessageMiddleColumn.jsx";
import {Grid, Hidden, Typography,} from "@mui/material";
import MessagesRightColumn from "./Components/MessagesRightColumn.jsx";

const Messages = () => {


  return (

      <Grid  sx={{ borderRight: '1px solid grey', borderLeft: '1px solid grey'}}>
        <MessageMiddleColumn />
      </Grid>

  );
};

export default Messages;

