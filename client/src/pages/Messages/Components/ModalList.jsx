import React, {useContext} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import {MessagesContext, MessagesContextProvider} from '../../../context/messagesContext.jsx';
import {Typography} from '@mui/material';

const ModalList = () => {
  const usersWithChats = [];

  return (

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {usersWithChats.length ?
        usersWithChats.map(({id, name, date}) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={date} />
          </ListItem>
        )) : <Typography>No chats found</Typography>
      }
    </List>
  );
}

export default ModalList;
