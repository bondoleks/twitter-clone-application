import { Box, Typography, Tab, Tabs, Button, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ContainerTweetForm from '../TweetForm/ContainerTweetForm';
import ToolbarTweetForm from '../TweetForm/ToolbarTweetForm';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ButSendTweet from '../TweetForm/ButSendTweet';


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
  const { id } = useParams()

  const location = useLocation();
  const [pageTweets, setPageTweets] = useState(1);

  const [buttonColor, setButtonColor] = useState(null);
  const [file, setFile] = useState([]); // Добавление состояния file
  const [tweetText, setTweetText] = useState(""); // Добавление состояния tweetText
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);


  useEffect(() => {
    const savedColor = localStorage.getItem('buttonColor');
    if (savedColor) {
      setButtonColor(savedColor);
    }
  }, []);

  const closeModal = () => {
    setIsFormSubmitted(true);
  };

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
        <ContainerTweetForm tweetText={tweetText} setTweetText={setTweetText} />

        <Box sx={{ borderTop: '1px solid #e1e8ed', width: '100%', my: 2 }}></Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ToolbarTweetForm file={file} setFile={setFile} setTweetText={setTweetText} />

          <ButSendTweet tweetText={tweetText} id={id} file={file} closeModal={closeModal} setFile={setFile} setTweetText={setTweetText} />

        </Box>
      </Hidden>


      <Outlet context={{ pageTweets, setPageTweets }} />

    </Box>
  );
}
