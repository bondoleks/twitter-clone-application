import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import {
  Grid,
  Hidden,

  IconButton,
  Container,
  Typography,

} from '@mui/material';


import TabsNotifications from "./TabsNotifications.jsx";
import Search from "../../components/Search/Search.jsx";
import { Outlet } from 'react-router-dom';


const Notifications = () => {
  return (
    <>
        <Grid
            item xs={12}
            // md={5}
            // sm={8}
            sx={{
          borderRight: '1px solid grey',
          borderLeft: '1px solid grey',
        }}>
          <Typography
          sx={{
            fontSize: 18,
            fontWeight: 700,

          }}>
            Notifications
          </Typography>
        {/* //Тут описание табов с линками
          <Outlet/> */}
          <TabsNotifications/>
        </Grid>
    </>
  )
}

export default Notifications