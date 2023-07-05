import {
  Grid,
  Hidden,
  Box,
  IconButton,
  Container,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNotificationThunk } from '../../redux/notifications/getNotificationThunk';
import { NotificationsList } from '../../components/Notification/NotificationList';





const Notifications = () => {
  const dispatch =useDispatch();

  useEffect(() => {
      dispatch(getNotificationThunk());
    },[]);



  return (
    <Box sx={{ width: '100%', borderRight: '1px rgb(239, 243, 244) solid', borderLeft: '1px rgb(239, 243, 244) solid' }}>
      <Box sx={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255,0.7)', zIndex: 1 ,borderBottom: '1px rgb(239, 243, 244) solid'}}>
        <Typography sx={{ fontSize: 18, fontWeight: 700, py: 2, px: 4 }}>
        Notifications
        </Typography>
        </Box>
    <NotificationsList/>
        </Box>
  )
}

export default Notifications