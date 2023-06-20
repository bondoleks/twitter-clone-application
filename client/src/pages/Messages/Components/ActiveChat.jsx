import react, {useState} from "react";
import {Box, Container, IconButton, InputAdornment, TextField, Toolbar, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth.js";
import Link from "@mui/material/Link";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined.js";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined.js";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined.js";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {useLocation} from 'react-router-dom';
import ChatInput from "./ChatInput.jsx";
import ChatMessages from "./ChatMessages.jsx";

const ActiveChat = () => {

  const {state} = useLocation();
  const user = state?.users && state.users[0];

  return (
    <Box sx={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px"


      }}>
        <Box>
          <Avatar
            alt="User Avatar"
            src={ user.avatar}/>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Typography sx={{
            fontSize: '24px',
            fontWeight: '900'
          }}>{user.name}</Typography>
          <Typography>@{user.hashtag}</Typography>
          <Box display={'flex'}
               marginTop={'10px'}>
            <IconButton edge='start' color='gray'>
              <CalendarMonthIcon />
            </IconButton>
            <Typography mt={1}>Joined {user.date}</Typography>
          </Box>
          <Box display={'flex'}>
            <Link href="#" underline="hover" sx={{ '&:hover': { color: 'gray' } }}>
              <Typography mr={2} sx={{
                fontSize: '14px',
                color: 'gray'
              }}>{user.following} Following</Typography>
            </Link>
            <Link href="#" underline="hover" sx={{ '&:hover': { color: 'gray' } }}>
              <Typography sx={{
                fontSize: '14px',
                color: 'gray'
              }}>{user.followers} Follower</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: 1,
        overflowY: "auto"


      }}>
        <ChatMessages />

      </Box>
      <ChatInput/>
    </Box>
  )
}

export default ActiveChat;
