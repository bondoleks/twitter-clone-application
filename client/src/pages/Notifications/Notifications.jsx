import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import {
  Grid,
  Hidden,
  Typography,
} from '@mui/material';
import TabsNotifications from "./TabsNotifications.jsx";
import Search from "../../components/Search/Search.jsx";


const Notifications = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ height: '100%' }} >

        <Grid item md={3}>
          <Sidebar />
        </Grid>


        <Grid
            item xs={12}
            md={5}
            sm={8}
            sx={{
          borderRight: '1px solid grey',
          borderLeft: '1px solid grey',
          width: '100%'
        }}>
          <Typography
          sx={{
            fontSize: 18,
            fontWeight: 700,

          }}>
            Notifications
          </Typography>
          <TabsNotifications/>
        </Grid>

        <Hidden mdDown>
          <Grid item xs={3}>
            <Search />
          </Grid>
        </Hidden>

      </Grid>
    </>
  )
}

export default Notifications