// import React, { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import { InputAdornment, TextField, Box } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
// import { styled } from "@mui/system";
// import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
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
// const StyledCancelIcon = styled(CancelIcon)(({}) => ({
//   color: "rgb(29, 155, 240)",
//   "&:hover": {
//     cursor: "pointer",
//     color: "red",
//   },
// }));
//
// const StyledArrowBackIcon = styled(ArrowBackOutlinedIcon)(({}) => ({
//   color: "black",
//   "&:hover": {
//     backgroundColor: "#e9e9e9",
//     borderRadius: "50%",
//     padding: "10px"
//   },
// }));
//
// const MessagesSearch = ({handleInputClick}) => {
//   const [inputValue, setInputValue] = useState("");
//   const [inputClicked, setInputClicked] = useState(false);
//
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//     console.log(value)
//     // handleFindUser(value);
//   };
//
//   const handleCancelClick = () => {
//     setInputValue("");
//   };
//
//
//   return (
//       <>
//         <Box>
//         {inputClicked && (
//           <StyledArrowBackIcon sx={{
//             padding: "10px"
//           }} color="disabled"  />
//         )}
//         <TextField
//           variant="outlined"
//           // fullWidth={true}
//           placeholder="Search Direct Messages"
//           value={inputValue}
//           onChange={handleInputChange}
//           onClick={handleInputClick}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <StyledSearchIcon />
//               </InputAdornment>
//             ),
//             endAdornment: inputValue ? (
//               <InputAdornment position="end">
//                 <StyledCancelIcon onClick={handleCancelClick} />
//               </InputAdornment>
//             ) : null,
//             sx: {
//               marginTop: "20px",
//               marginRight: "100px",
//               width: "100%",
//               maxHeight: "40px",
//               borderRadius: "50px",
//               backgroundColor: "#F5F5F5",
//               "&:focus-within": {
//                 backgroundColor: "white",
//                 "& .MuiSvgIcon-root": {
//                   color: "rgb(29, 155, 240)",
//                 },
//               },
//             },
//           }}
//         />
//         </Box>
//       </>
//   );
// };
//
// export default MessagesSearch;



//V2

import React, {useEffect, useRef, useState} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/system";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import {handleGetAllMessagesForAllChats, handleGetUserChats} from '../../../redux/Messages/Thunks/MessagesThunk.js';
import {api} from "../../../redux/service/api.jsx";
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {
  getAllMessagesForAllChats,
  getAllMessagesLoading,
  getUser,
  getUserChats
} from '../../../redux/selectors.jsx';



const StyledSearchIcon = styled(SearchIcon)(({ inputFocused }) => ({
  color: inputFocused ? "rgb(29, 155, 240)" : "grey",
  "&:focus": {
    color: "rgb(29, 155, 240)",
  },
  "&:hover": {
    cursor: "pointer",
  },
}));

const StyledCancelIcon = styled(CancelIcon)(({}) => ({
  color: "rgb(29, 155, 240)",
  "&:hover": {
    cursor: "pointer",
    color: "red",
  },
}));

const StyledArrowBackIcon = styled(ArrowBackOutlinedIcon)(({}) => ({
  color: "black",
  "&:hover": {
    backgroundColor: "#e9e9e9",
    borderRadius: "50%",
    padding: "10px"
  },
}));

const MessagesSearch = ({
                          handleMessageClick,
                          handleInputClick,
                          inputValue,
                          setInputValue,
                          setMessages,
                          messages,
                          clicked}) => {
  const user = useSelector(getUser);
  const [inputClicked, setInputClicked] = useState(false);
  const userChats = useSelector(getUserChats);
  const [allMessagesFetched, setAllMessagesFetched] = useState(false);
  const textFieldRef = useRef(null);

  const chatIds = userChats.map((chat) => {
    return chat.chatId
  })

  const dispatch = useDispatch();


  const handleInputChange = () => {
    const value = event.target.value;
    setInputValue(value);

    if (value.trim() === '') {
      setMessages([]);
    } else {
      handleFindMessage(value);
    }
  };


  const handleCancelClick = () => {
    setInputValue("");
  };

  const handleFindMessage = async (value) => {
    if (value.trim() === '') {
      setMessages([]);
      return;
    }

    if (!allMessagesFetched) {
      await dispatch(handleGetAllMessagesForAllChats(chatIds, user.id))
      setAllMessagesFetched(true)
    }

  }

  useEffect(() => {
    if (clicked && textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [clicked]);

    return (
      <>
        <Box onClick={handleGetUserChats}>
          {inputClicked && (
            <StyledArrowBackIcon sx={{
              padding: "10px"
            }} color="disabled"/>
          )}
          <TextField
            variant="outlined"
            placeholder="Search Direct Messages"
            value={inputValue}
            inputRef={textFieldRef}
            onChange={handleInputChange}
            onClick={handleInputClick}
            // autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <StyledSearchIcon/>
                </InputAdornment>
              ),
              endAdornment: inputValue ? (
                <InputAdornment position="end">
                  <StyledCancelIcon onClick={handleCancelClick}/>
                </InputAdornment>
              ) : null,
              sx: {
                marginTop: "20px",
                marginRight: "100px",
                width: "100%",
                maxHeight: "40px",
                borderRadius: "50px",
                backgroundColor: "#F5F5F5",
                "&:focus-within": {
                  backgroundColor: "white",
                  "& .MuiSvgIcon-root": {
                    color: "rgb(29, 155, 240)",
                  },
                },
              },
            }}
          />
        </Box>
      </>
    );
};

export default MessagesSearch;
