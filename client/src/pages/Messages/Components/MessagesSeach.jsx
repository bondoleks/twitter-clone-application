import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/system";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";


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

const MessagesSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputClicked, setInputClicked] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCancelClick = () => {
    setInputValue("");
  };


  return (
      <>
        <Box>
        {inputClicked && (
          <StyledArrowBackIcon sx={{
            padding: "10px"
          }} color="disabled"  />
        )}
        <TextField
          variant="outlined"
          // fullWidth={true}
          placeholder="Search Direct Messages"
          value={inputValue}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StyledSearchIcon />
              </InputAdornment>
            ),
            endAdornment: inputValue ? (
              <InputAdornment position="end">
                <StyledCancelIcon onClick={handleCancelClick} />
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