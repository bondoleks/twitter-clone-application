import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageMiddleColumn from "./Components/MessageMiddleColumn.jsx";
import {Grid, Hidden, Typography,} from "@mui/material";
import MessagesRightColumn from "./Components/MessagesRightColumn.jsx";

const Messages = () => {


  return (
    <Grid container spacing={3} sx={{ height: '100vh', marginLeft: '24px' }}>
      <Hidden smDown>
      <Grid item xs={3} md={3} sm={3} lg={3}>
        <Sidebar />
      </Grid>
      </Hidden>
      <Grid item xs={12} md={9} sm={9} lg={4} sx={{ borderRight: '1px solid rgba(128, 128, 128, 0.1)', borderLeft: '1px solid rgba(128, 128, 128, 0.1)'}}>
        <MessageMiddleColumn />
      </Grid>
      <Hidden smDown>
        <Grid item md={5} lg={5}>
            <MessagesRightColumn/>
        </Grid>
      </Hidden>

    </Grid>
  );
};

export default Messages;

