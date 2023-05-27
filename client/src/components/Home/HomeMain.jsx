import { Box, Typography, Tab, Tabs, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ContainerTweetForm from '../TweetForm/ContainerTweetForm';
import ToolbarTweetForm from '../TweetForm/ToolbarTweetForm';
import { useState } from 'react';
import {useFetch} from "../../hooks/useFetch";
import Tweet from "../Tweet/Tweet";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  width:'50%',
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
  const [pageTweets,setPageTweets]= useState(1);

  const [{ data, loading }, getData] = useFetch({
    initData: [],
    url: `https://twitter-clone-application.herokuapp.com/tweets/all?sizePage=10&numberPage=1`,
    method: 'GET',
    dataTransformer: (data) => {
      return data.data.listDto
    },
    headers: {
      "Authorization": "Bearer_eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTY4NTIwODE5MywiZXhwIjoxNjg1MjExNzkzfQ.2kPkH-K13YnyQHk-SpB3xbAT4F88TZ141CscFWEcq-k"
    }
  });


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255,0.7)', zIndex: 1 }}>
        <Typography sx={{ fontSize: 18, fontWeight: 700, py: 2, px: 4 }}>
          Home
        </Typography>

        <StyledTabs value={location.pathname} aria-label="Home tabs">
          <StyledTab component={Link} to="/home" label="For You" value="/home" />
          <StyledTab component={Link} to="/home/following" label="Following" value="/home/following" />
        </StyledTabs>
      </Box>

      <ContainerTweetForm />

      <Box sx={{ borderTop: '1px solid #e1e8ed', width: '100%', my: 2 }}></Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ToolbarTweetForm />

        <Button variant="contained" color="primary" size="small" sx={{ textTransform: 'none', borderRadius: '20px', height: '30px' }}>
          Tweet
        </Button>
      </Box>

      {loading && "Loading..."}
      {...data.map(t => <Tweet tweet={t}/>)}


      {/*<Outlet context={{pageTweets,setPageTweets}}/>*/}
    </Box>
  );
}
