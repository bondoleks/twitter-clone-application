import {
  Box,
  Button,
  Chip,
  Dialog,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import React, {useContext, useState} from 'react';
import {styled} from "@mui/system";
import SearchIcon from "@mui/icons-material/Search.js";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import ModalList from "./ModalList.jsx";
import useMediaQuery from '@mui/material/useMediaQuery';
import {MessagesContext} from '../../../context/messagesContext.jsx';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import ListItemText from '@mui/material/ListItemText';
import Autocomplete from '@mui/material/Autocomplete';
import {useNavigate} from 'react-router-dom';


const StyledSearchIcon = styled(SearchIcon)(({ inputFocus }) => ({
  color: inputFocus ? "rgb(29, 155, 240)" : "grey",
}));

const NewMessageModal = ({ open, closeModal }) => {
  const [inputFocus, setInputFocus] = useState(false);
  const {
    handleFindUser,
    filter,
    filteredUsers,
    mockedUsers,
    handleDeleteSelectedUser,
    setSelectedUsers,
    selectedUsers,
    handleResetFilteredUsers} = useContext(MessagesContext)

  const navigate = useNavigate();

  const handleClearModal = () => {
    setSelectedUsers([]);
    handleResetFilteredUsers();
    closeModal();
  }

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  const handleSearchUsers = (e) => {
    return handleFindUser(e.target.value);
  };

  const openNewChat = () => {
    handleClearModal();
    const randomChatId = Math.floor(Math.random() * 1000000000);
    navigate(`/messages/${randomChatId}`, {state: {chatId: randomChatId, users: selectedUsers}})
  }

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
     open={open}
      onClose={handleClearModal}
     fullScreen={fullScreen}
     PaperProps={{
       sx: {
         borderRadius: "15px"

       },
     }}>
      <Paper sx={{
        padding: "20px 30px 20px 20px",
        width: fullScreen ? "100%" : "550px",
        height: "500px",
      }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton edge="start" onClick={handleClearModal}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ fontSize: "26px", fontWeight: "800" }}>New Message</Typography>
          <Button variant="contained" onClick={openNewChat} disabled={!selectedUsers.length} sx={{ borderRadius: "20px", color: "#fff",
            backgroundColor: "rgb(29, 155, 240)" }}>
            Next
          </Button>
        </Box>
        <Autocomplete
          multiple
          id="users-list"
          options={filteredUsers}
          getOptionLabel={(option) => option.name}
          defaultValue={[]}
          onChange={(e, value) => setSelectedUsers(value)}
          value={selectedUsers}
          popupIcon={null}
          clearIcon={null}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              value={filter}
              onChange={handleSearchUsers}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              InputProps={{
                ...params.InputProps,
                disableUnderline: !!selectedUsers.length,
                startAdornment: (
                  <React.Fragment>
                    <InputAdornment position="start">
                      <StyledSearchIcon inputFocus={inputFocus} />
                    </InputAdornment>
                    {params.InputProps.startAdornment}
                  </React.Fragment>
                ),
              }}
              placeholder="Search People"
              sx={{
                width: "100%",
              }}
            />
          )}
          renderOption={(props, option) => {
            return (
              <ListItem {...props} key={option.id}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={option.name} secondary={option.date}/>
              </ListItem>
            );
          }}
          renderTags={() => null}
        />
        {
          <div style={{marginTop: '20px'}}>
            {selectedUsers.map((user, index) => (
            <Chip
              key={index}
              avatar={<Avatar><ImageIcon /></Avatar>}
              label={user.name}
              onDelete={() => {
                handleDeleteSelectedUser(user.name);
              }}
            />
            ))}
            {!!selectedUsers.length && <hr/>}
          </div>
        }
        <Box sx={{ display: "flex", alignItems: "center", gap: "18px", marginTop: "20px" }}>
          <IconButton>
            <Groups2RoundedIcon sx={{ color: "rgb(29, 155, 240)" }} />
          </IconButton>
          <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "rgb(29, 155, 240)" }}>
            Create Group
          </Typography>
        </Box>
        {/*<Box>*/}
        {/*  <ModalList />*/}
        {/*</Box>*/}
      </Paper>
    </Dialog>
  );
};

export default NewMessageModal;

