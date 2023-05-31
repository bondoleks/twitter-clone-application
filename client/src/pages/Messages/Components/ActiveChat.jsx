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

const ActiveChat = () => {

  const {state} = useLocation();
  const user = state?.users && state.users[0];

  return (
    <Box sx={{height: "100vh", padding: "0"}}>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",

      }}>
        <Box>
          <Avatar
            alt="User Avatar"
            src='../../img/avatar.png'/>
        </Box>
        <Box>
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
        height: "70%"

      }}>
        <Box>
          <Typography sx={{
            textAlign: "center",
            mt: "200px"
          }}>
            Messages
          </Typography>
        </Box>
        <TextField
          sx={{
            borderRadius: '20px',
            padding: '0',
            '& .MuiInputBase-root': {
              borderRadius: '20px',
              padding: '0',
            },
          }}
          id="outlined-multiline-flexible"
          fullWidth={true}
          multiline
          maxRows={4}
          variant="filled"
          placeholder="Start a new message"
          InputProps={{
            classes: {
              root: "MuiInputBase-root"
            },
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="center">
                <IconButton>
                  <BrokenImageOutlinedIcon sx={{ color: "rgb(29, 155, 240)"}} />
                </IconButton>
                <IconButton>
                  <GifBoxOutlinedIcon sx={{ color: "rgb(29, 155, 240)" }} />
                </IconButton>
                <IconButton>
                  <SentimentSatisfiedOutlinedIcon sx={{ color: "rgb(29, 155, 240)" }} />
                </IconButton>

              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <DoubleArrowIcon sx={{ color: "rgb(29, 155, 240)" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

      </Box>
    </Box>
  )
}

export default ActiveChat;
