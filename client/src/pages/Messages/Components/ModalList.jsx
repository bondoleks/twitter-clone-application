import React, {useContext} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import {Box, Typography} from '@mui/material';
import Chats from "./Chats.jsx";
import {filteredUsersSelector} from '../../../redux/selectors.jsx';
import {useSelector} from 'react-redux';

const ModalList = (user) => {
  const usersWithChats = [];
  const filteredUsers = useSelector(filteredUsersSelector)

  return (

    // <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    //   {usersWithChats.length ?
    //     usersWithChats.map(({id, name, date}) => (
    //       <ListItem key={id}>
    //         <ListItemAvatar>
    //           <Avatar>
    //             <ImageIcon />
    //           </Avatar>
    //         </ListItemAvatar>
    //         <ListItemText primary={name} secondary={date} />
    //       </ListItem>
    //     )) : <Typography>No chats found</Typography>
    //   }
    // </List>
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      paddingTop: "20px"
    }}>
      <Chats/>
    </Box>



  )


}

export default ModalList;
