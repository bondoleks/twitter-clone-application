
import React, { useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import {styled} from "@mui/system";
import ModalClue from "./ModalClue.jsx";

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

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCancelClick = () => {
    setInputValue("");
    inputRef.current.focus();
  };

  const inputRef = useRef(null);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <>
            <TextField
                variant="outlined"
                placeholder="Search Twitter"
                 value={inputValue}
                inputRef={inputRef}
                 onChange={handleInputChange}
               onFocus={handleInputFocus}
                 onBlur={handleInputBlur}
                InputProps={{
                   startAdornment: (
                    <InputAdornment position="start">
                       <StyledSearchIcon />
                     </InputAdornment>
                   ),
                   endAdornment: inputValue ? (
                     <InputAdornment position="end">
                       <StyledCancelIcon onClick={handleCancelClick}/>
                     </InputAdornment>
                   ) : null,
                   sx: {
                     marginRight: "50px",
                     maxHeight: "40px",
                     maxWidth: "300px",
                     minWidth: "250px",
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
       {inputFocused && !inputValue && <ModalClue />}
     </>
   );
 };

 export default Search;

