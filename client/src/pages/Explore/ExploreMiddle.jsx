import Search from "../../components/Search/Search.jsx";
import React from "react";
import { Box } from "@mui/material";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const ExploreMiddle = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between"}}>
      <Box sx={{ width: "600px"}}>
        <Search />

      </Box>
      <SettingsRoundedIcon/>
    </Box>
  );
};

export default ExploreMiddle;