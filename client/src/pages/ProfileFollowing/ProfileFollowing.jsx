
import React, { useState, useEffect } from 'react'
import { Typography, Tab, Tabs } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';

const ProfileFollowing = () => {

  const [value, setValue] = React.useState(1);

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

  return (
    <>
      <div>ProfileFollowing</div>
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
        <Tab label="Followers" href='/profile/followers' sx={{ textTransform: 'none' }}></Tab>
        <Tab label="Following" sx={{ textTransform: 'none' }}></Tab>
      </Tabs>
    </>
  )
}

export default ProfileFollowing