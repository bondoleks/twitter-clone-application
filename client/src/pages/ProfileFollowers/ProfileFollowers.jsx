import React, { useState, useEffect } from 'react'
import { Typography, Tab, Tabs } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import { Link as RouterLink } from 'react-router-dom';
import {
  IconButton,
  Toolbar,
  Box
} from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import { useTheme } from '@mui/material/styles';

const ProfileFollowers = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [buttonColor, setButtonColor] = useState();

  useEffect(() => {
    const savedColor = localStorage.getItem('buttonColor');
    if (savedColor) {
      setButtonColor(savedColor);
    }
  }, [buttonColor]);

  
  const theme = useTheme();

  const ToolbarStyles = {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.default
    };


  return (
    <>
      <div>ProfileFollowers</div>
      <Box position='fixed' sx={{
                    zIndex: '99',
                    top: '0',
                }}>
                    <Toolbar style={ToolbarStyles} >
                        <RouterLink to={'/profile'}>
                            <IconButton color='gray'>
                                <WestIcon />
                            </IconButton>
                        </RouterLink>
                        <Box ml={2}>
                            <Typography variant='h6'>User</Typography>
                            <Typography>@nikname</Typography>
                        </Box>
                    </Toolbar>
                </Box>
      <Tabs variant="fullWidth" value={value} textColor="inherit" onChange={handleChange} sx={{
        marginTop: '20px',
        "& .MuiTabs-indicator": {
          backgroundColor: 'gray',
          borderBottom: `2px solid ${buttonColor}`
        },
        "& .Mui-selected": {
          color: 'primary',
        },
      }} >
        <Tab label="Followers" sx={{ textTransform: 'none' }}></Tab>
        <Tab label="Following" href='/profile/following' sx={{ textTransform: 'none' }}></Tab>
      </Tabs>
    </>
  )
}

export default ProfileFollowers