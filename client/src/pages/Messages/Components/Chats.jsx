// import React, {useContext} from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
// import {MessagesContext, MessagesContextProvider} from '../../../context/messagesContext.jsx';
// import {Box, Typography} from '@mui/material';
//
// const Chats = () => {
//   const usersWithChats = [];
//   const {mockedUsers} = useContext(MessagesContext)
//
//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <ListItem
//         sx={{
//           "&:hover": {
//             backgroundColor: "#e8e8e8", // Set the background color on hover
//           },
//         }}
//       >
//       <Box>
//         <Box sx ={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           gap: "5px"
//         }}>
//           <Avatar src={mockedUsers[0].avatar}/>
//           <ListItemText>{mockedUsers[0].name}</ListItemText>
//           <ListItemText>@{mockedUsers[0].hashtag}</ListItemText>
//           <ListItemText>{"16.06.2023"}</ListItemText>
//         </Box>
//         <Typography>
//           Last message
//         </Typography>
//       </Box>
//
//
//       </ListItem>
//     </List>
//   )
//
//
// }
//
// export default Chats;

import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { MessagesContext, MessagesContextProvider } from '../../../context/messagesContext.jsx';
import { Box, Typography } from '@mui/material';

const Chats = () => {
  const usersWithChats = [];
  const { mockedUsers } = useContext(MessagesContext);

  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        padding: "10px 0",
        '&:hover': {
          backgroundColor: '#e8e8e8',
        },
      }}
    >
      <ListItem>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <Avatar src={mockedUsers[0].avatar} />
            <ListItemText>{mockedUsers[0].name}</ListItemText>
            <ListItemText>@{mockedUsers[0].hashtag}</ListItemText>
            <ListItemText>{'16.06.2023'}</ListItemText>
          </Box>
          <Typography>Last message</Typography>
        </Box>
      </ListItem>
    </List>
  );
};

export default Chats;