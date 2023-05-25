// import {Box, Button, Card, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import React from "react";
// import {styled} from "@mui/system";
// import SearchIcon from "@mui/icons-material/Search.js";
//
//
// const StyledSearchIcon = styled(SearchIcon)(({ inputFocused }) => ({
//   color: inputFocused ? "rgb(29, 155, 240)" : "grey",
//   "&:focus": {
//     color: "rgb(29, 155, 240)",
//   },
//   "&:hover": {
//     cursor: "pointer",
//   },
// }));
//
// const NewMessageModal = () => {
//
//   return (
//    <Box>
//      <Box sx={{
//        display: "flex",
//        justifyContent: "space-between"
//      }}>
//        <IconButton edge='start'>
//          <CloseIcon  />
//        </IconButton>
//        <Typography sx={{
//          fontSize: "26px",
//          fontWeight: "800"
//        }}>
//          New Message
//        </Typography>
//        <Button variant="contained" disabled
//                sx={{
//                   borderRadius: "20px",
//                   color: "black"
//        }}>
//          Next
//        </Button>
//      </Box>
//      <TextField
//        id="standard-basic"
//        placeholder="Search People"
//        variant="standard"
//        InputProps={{
//          startAdornment: (
//            <InputAdornment position="start">
//              <StyledSearchIcon />
//            </InputAdornment>
//          ),
//
//                 sx={{
//                   width: "100%"
//      }}/>
//    </Box>
//   )
// }
//
// export default NewMessageModal;

// import {Box, Button, Card, IconButton, InputAdornment, Paper, TextField, Typography} from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import React, {useState} from "react";
// import { styled } from "@mui/system";
// import SearchIcon from "@mui/icons-material/Search.js";
// import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
// import ModalList from "./ModalList.jsx";
//
//
// const StyledSearchIcon = styled(SearchIcon)(({ theme, inputFocus }) => ({
//   color: inputFocus ? "rgb(29, 155, 240)" : "grey",
// }));
//
// const NewMessageModal = () => {
//
//   const [inputFocus, setInputFocus] = useState(false)
//
//   const handleInputFocus = () => {
//     setInputFocus(true);
//   };
//
//   const handleInputBlur = () => {
//     setInputFocus(false);
//   };
//
//   return (
//     <Paper variant="outlined" elevation={4}
//            sx={{
//              borderRadius: "10px",
//              padding: "20px"
//
//     }}>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <IconButton edge='start'>
//           <CloseIcon />
//         </IconButton>
//         <Typography sx={{
//           fontSize: "26px",
//           fontWeight: "800",
//         }}>
//           New Message
//         </Typography>
//         <Button
//           variant="contained"
//           disabled
//           sx={{
//             borderRadius: "20px",
//             color: "black",
//           }}
//         >
//           Next
//         </Button>
//       </Box>
//       <TextField
//         id="standard-basic"
//         placeholder="Search People"
//         variant="standard"
//         onFocus={handleInputFocus}
//         onBlur={handleInputBlur}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <StyledSearchIcon inputFocus={inputFocus} />
//             </InputAdornment>
//           ),
//         }}
//         sx={{
//           width: "100%",
//         }}
//       />
//       <Box sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: "18px",
//         marginTop: "20px"
//
//       }}>
//       <IconButton>
//         <Groups2RoundedIcon sx={{
//           color: "rgb(29, 155, 240)"
//         }}/>
//       </IconButton>
//         <Typography sx={{
//           fontSize: "20px",
//           fontWeight: "600",
//           color: "rgb(29, 155, 240)"
//         }}>
//           Create Group
//         </Typography>
//       </Box>
//       <Box>
//         <ModalList/>
//       </Box>
//     </Paper>
//   );
// };
//
// export default NewMessageModal;

//


import {Box, Button, Dialog, IconButton, InputAdornment, Paper, TextField, Typography, useTheme} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import {styled} from "@mui/system";
import SearchIcon from "@mui/icons-material/Search.js";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import ModalList from "./ModalList.jsx";
import useMediaQuery from '@mui/material/useMediaQuery';


const StyledSearchIcon = styled(SearchIcon)(({ inputFocus }) => ({
  color: inputFocus ? "rgb(29, 155, 240)" : "grey",
}));

const NewMessageModal = ({ open, closeModal }) => {
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
     open={open}
      onClose={closeModal}
     fullScreen={fullScreen}
     PaperProps={{
       sx: {
         borderRadius: "15px"

       },
     }}>
      <Paper sx={{ padding: "20px", width: "550px",
        height: "500px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton edge="start" onClick={closeModal}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ fontSize: "26px", fontWeight: "800" }}>New Message</Typography>
          <Button variant="contained" disabled sx={{ borderRadius: "20px", color: "black" }}>
            Next
          </Button>
        </Box>
        <TextField
          id="standard-basic"
          placeholder="Search People"
          variant="standard"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StyledSearchIcon inputFocus={inputFocus} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "100%",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: "18px", marginTop: "20px" }}>
          <IconButton>
            <Groups2RoundedIcon sx={{ color: "rgb(29, 155, 240)" }} />
          </IconButton>
          <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "rgb(29, 155, 240)" }}>
            Create Group
          </Typography>
        </Box>
        <Box>
          <ModalList />
        </Box>
      </Paper>
    </Dialog>
  );
};

export default NewMessageModal;

