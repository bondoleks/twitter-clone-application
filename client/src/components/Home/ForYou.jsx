import Tweet from '../../components/Tweet/Tweet';
import { tweetsHomeSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { Box} from '@mui/system';
import { useEffect } from 'react';
import { getTweetsThunk } from '../../redux/home/getTweetsThunk';

import { scrollDataSelector } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { useScrollTracker } from './ScrollTracker';



export function ForYou() {
  const dispatch = useDispatch();  
  const tweetsForYouData = useSelector(tweetsHomeSelector);
  const scrollData = useSelector(scrollDataSelector);
  console.log(tweetsForYouData);
  const {pageTweets,setPageTweets} = useOutletContext();
  const isEndScroll = useScrollTracker();

  
  // useEffect(() => {
  //   dispatch(getTweetThunk(1));
  //   setPageTweets(pageTweets+1);

  //   },[]);


  useEffect(() => {
    if(tweetsForYouData.length >0 && isEndScroll){
      console.log(pageTweets);
      dispatch(getTweetsThunk(pageTweets));
      setPageTweets(pageTweets+1);
    }
    },[isEndScroll]);


  if(tweetsForYouData.length === 0){
    return(
      <div>No tweets</div>
    )
  }
  
  const sortedTweets = tweetsForYouData.sort((a, b) => {
    const dateA = new Date(a.createdDate);
    const dateB = new Date(b.createdDate);
    return dateB - dateA;
  });

  return (
    <Box>
      {sortedTweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet} 
        />
      ))}
      {/* <ScrollTracker/> */}
    </Box>
  );
}
