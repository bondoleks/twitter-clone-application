import { Box, Typography, Tab, Tabs, Button, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ContainerTweetForm from '../TweetForm/ContainerTweetForm';
import ToolbarTweetForm from '../TweetForm/ToolbarTweetForm';
import { useState, useEffect } from 'react';


const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  width: '50%',
  textTransform: 'none',
  fontWeight: 'bold',
  borderBottom: `2px solid transparent`,
  '&.Mui-selected': {
    color: 'black',
  },
  '&:hover': {
    backgroundColor: 'rgba(15,20,25,0.1)',
  },
}));




export function HomeMain() {
  const location = useLocation();
  const [pageTweets, setPageTweets] = useState(1);

  const [buttonColor, setButtonColor] = useState(null);

  useEffect(() => {
    const savedColor = localStorage.getItem('buttonColor');
    if (savedColor) {
      setButtonColor(savedColor);
    }
  }, []);

  return (
    <Box sx={{ width: '100%', borderRight: '1px rgb(239, 243, 244) solid', borderLeft: '1px rgb(239, 243, 244) solid' }}>
      <Box sx={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255,0.7)', zIndex: 1 }}>
        <Typography sx={{ fontSize: 18, fontWeight: 700, py: 2, px: 4 }}>
          Home
        </Typography>

        <StyledTabs value={location.pathname} aria-label="Home tabs">
          <StyledTab component={Link} to="/home" label="For You" value="/home" />
          <StyledTab component={Link} to="/home/following" label="Following" value="/home/following" />
        </StyledTabs>
      </Box>
      <Hidden smDown>
      <ContainerTweetForm />

      <Box sx={{ borderTop: '1px solid #e1e8ed', width: '100%', my: 2 }}></Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ToolbarTweetForm />

        <Button variant="contained" size="small" sx={{
          textTransform: 'none',
          borderRadius: '20px',
          height: '30px',
          marginRight: '30px',
          background: buttonColor
        }}>
          Tweet
        </Button>
      </Box>
      </Hidden>


      <Outlet context={{ pageTweets, setPageTweets }} />

    </Box>
  );
}

