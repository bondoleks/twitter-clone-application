import Tweet from '../Tweet/Tweet';
import { tweetsMainPageSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMainPageTweetsThunk } from '../../redux/mainPage/getMainPageTweetsThunk';




export function ListMainPage() {
  const dispatch = useDispatch();  
  const tweetsMainPageTweets = useSelector(tweetsMainPageSelector);
  console.log(tweetsMainPageTweets);
  

  useEffect(() => {
    dispatch(getMainPageTweetsThunk());

    },[dispatch]);
  
  
  if(!tweetsMainPageTweets){
    return(
      <div>No tweets</div>
    )
  }
  
  return (
    <Box>

      {tweetsMainPageTweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet} 
        />
      ))}
    </Box>
  );
}