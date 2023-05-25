import Tweet from '../../components/Tweet/Tweet';
import { tweetsHomeSelector } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { Box} from '@mui/system';
import { useEffect } from 'react';
import { getTweetThunk } from '../../redux/home/getTweetThunk';
import ScrollTracker from './ScrollTracker';
import { scrollDataSelector } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router-dom';



export function ForYou() {
  const dispatch = useDispatch();  
  const tweetsForYouData = useSelector(tweetsHomeSelector);
  const scrollData = useSelector(scrollDataSelector);
  console.log(tweetsForYouData);
  const {pageTweets,setPageTweets} = useOutletContext();
  

  useEffect(() => {
    dispatch(getTweetThunk(pageTweets));
    setPageTweets(pageTweets+1);

    },[scrollData]);
  
  
  if(!tweetsForYouData){
    return(
      <div>No tweets</div>
    )
  }
  
  return (
    <Box>
      {tweetsForYouData.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet} 
        />
      ))}
      <ScrollTracker/>
    </Box>
  );
}
