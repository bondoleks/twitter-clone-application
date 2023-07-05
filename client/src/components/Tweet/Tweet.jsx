import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Typography , useMediaQuery , Avatar, IconButton } from '@mui/material';
import { Retweet } from './Retweet';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OpenNoAutorizateModalThunk } from '../../redux/mainPage/OpenNoAutorizateModalThunk';
import { MiniModal } from './MiniModal';
import {api} from '../../redux/service/api';
import { ImageInTweetLayout } from './ImageInTweetLayout';
import { openQuoteRetweetModalThunk} from '../../redux/quoteRetweet/openQuoteRetweetModalThunk';
import { ADD_USER_VISIBLE_TWEETS,DELETE_BOOKMARK,REMOVE_PREVIOUS_TWEET } from '../../redux/actions';
import VisibilitySensor from 'react-visibility-sensor';
import { openReplyModalThunk } from '../../redux/reply/openReplyModalThunk';
import { useTheme } from '@mui/material/styles';




export function formatDateTime(dateTimeString) {

  const now = new Date();
  const dateTime = new Date(dateTimeString);

  const diffMilliseconds = now - dateTime;
  const diffSeconds = Math.floor(diffMilliseconds / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if(diffSeconds <= 0){
    return 'Now';
  }

  if (diffSeconds < 60) {
    return `${diffSeconds}sec`;
  } else if (diffMinutes < 60) {
    return `${diffMinutes}min`;
  } else if (diffHours < 24) {
    return `${diffHours}h`;
  } else if (diffDays < 30) {
    const day = dateTime.getDate();
    const month = dateTime.toLocaleString('en', { month: 'long' });
    return `${month} ${day}`;
  } else if (diffMonths < 12) {
    const month = dateTime.toLocaleString('en', { month: 'long' });
    const year = dateTime.getFullYear();
    return `${month} ${year}`;
  } else {
    const day = dateTime.getDate();
    const month = dateTime.toLocaleString('en', { month: 'long' });
    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    const year = dateTime.getFullYear();
    return `${hours}:${minutes} ${month} ${day}, ${year}`;
  }
}


const Tweet = ({ tweet }) => {

  const { id, createdDate,username, firstName, lastName, tweetBody, av_imagerUrl, tweet_imageUrl, user_id, countReply, countRetweet, countLike, countView , parentDto,markerLike,markerRetweet,markerBookmark} = tweet;
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//Visible
  const [visibleRetweetModal,setVisibleRetweetModal] = useState(false);
  const [visibleShareModal,setVisibleShareModal] = useState(false);

  const[isVisible,setIsVisible] = useState(false)
//Count
const [retweetRealyCount,setRetweetRealyCount] = useState(countRetweet);
const [likeRealyCount,setLikeRealyCount] = useState(countLike);   
//Marker
const [activeRetweet,setActiveRetweet] = useState(markerRetweet);  
const [activeHeart,setActiveHeart] = useState(markerLike);
const [activeBookmark,setActiveBookmark] = useState(markerBookmark);
const currentUserId = useSelector(state=>state.user.user.id);


function headlerMarkRetweet(id){
  api.post(`/tweets/retweet/${id}`)
  .then(() => {
    setActiveRetweet(!activeRetweet);
    setRetweetRealyCount(activeRetweet ? retweetRealyCount - 1 : retweetRealyCount + 1);
  });
  setVisibleRetweetModal(false);
}


function handleQuoteRetweet(id){
    setVisibleRetweetModal(false);
    dispatch(openQuoteRetweetModalThunk(id));
}

function headlerBookmark(id){
  api.post(`/tweets/bookmark/${id}`)
  .then(() => {
    setActiveBookmark(!activeBookmark);
    if(!activeBookmark){
      dispatch({type:DELETE_BOOKMARK,payload:{bookmarkId:id}})
    }
  });
  setVisibleShareModal(false);
}

function handleCopyLink(id){
  navigator.clipboard.writeText(`http://localhost:5173/tweet/${id}`)
  setVisibleShareModal(false);
}


const autorizate = localStorage.getItem('authToken');

return (
  <VisibilitySensor
  delayedCall
  active={!isVisible}
  onChange={(boolean)=>{
    if(!boolean || isVisible) return;
    setIsVisible(true);
    dispatch({type:ADD_USER_VISIBLE_TWEETS, payload:{tweetId:id}})
  }}
  >
  <Box
    data-user_id={user_id}
    data-tweet_id={id}
    sx={{
      overflow: isMobile ? 'hidden' : 'visible',
      width:"100%",
      display: 'flex',
      cursor: 'pointer',
      borderBottom: '1px rgb(239, 243, 244) solid',
      ':hover': { backgroundColor: 'rgba(0,0,0, 0.03)' }
    }}
    onClick={() => {
      dispatch({type:REMOVE_PREVIOUS_TWEET});
      navigate(`/tweet/${id}`)}}
  >
    <Avatar src={av_imagerUrl} alt={username} sx={{ m: '8px' }} 
    onClick={(e)=>{
      e.stopPropagation();
      if(currentUserId === user_id ){
          navigate(`/profile/`)
      }else{
              navigate(`/profile/${user_id}`)}}
      }

    />
    <Box sx={{width:'100%'}}>
      <Box sx={{ display: 'flex', gap: '12px'}}>
        <Typography
          component="span"
          variant="body1"
          fontWeight="bold"
          sx={{
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            overflow: 'hidden', 
            textOverflow: 'ellipsis',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {firstName} {lastName}
        </Typography>
        <Typography
          component="span"
          variant="body1"
          sx={{
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
          }}
        >{username}
        </Typography>
        <Typography
          component="span"
          variant="body1"
          sx={{
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >· {formatDateTime(createdDate)}
        </Typography>
      </Box>
      <Box sx={{ padding: '8px' }}>
        {tweetBody && <p>{tweetBody}</p>}

            {tweet_imageUrl && <ImageInTweetLayout images={tweet_imageUrl} size='300'/>}

        {parentDto && <Retweet key={parentDto.id} tweet={parentDto} />}
      </Box>
      <Box sx={{display:'flex', justifyContent:'space-around'}}>
        <IconButton sx={{ "&:hover": { color: "rgb(29, 155, 240)" } }}
          onClick={(event) => {
              event.stopPropagation();
              if(autorizate === null){
                dispatch(OpenNoAutorizateModalThunk('reply',`${firstName} ${lastName}`));
              } else{
                dispatch(openReplyModalThunk(id))
              }
          }}
        >
          <ChatBubbleIcon />
          <Typography variant="body2">{countReply}</Typography>
        </IconButton>
        <IconButton sx={{ "&:hover": { color: "rgb(0, 186, 124)" }, ...(activeRetweet && { color: 'rgb(0, 186, 124)' }) }}
          onClick={(event) => {
                    event.stopPropagation();
                    if(autorizate === null){
                      dispatch(OpenNoAutorizateModalThunk('retweet',`${firstName} ${lastName}`));
                    } else{
                      setVisibleRetweetModal(true);
                    }
          }}
        >
          <RepeatIcon />
          {visibleRetweetModal && (
            <MiniModal
            activeBookmark={activeBookmark}
              setVisibleModal={setVisibleRetweetModal}
              visibleModal={visibleRetweetModal}
              data={[
                {
                  text: activeRetweet ? 'Undo Retweet' : 'Retweet',
                  function: headlerMarkRetweet,
                  id: id
                },
                {
                  text: 'Quote Retweet',
                  function: handleQuoteRetweet,
                  id: id
                }
              ]}
            />
          )}
<Typography>{retweetRealyCount}</Typography>
        </IconButton>
        <IconButton sx={{ "&:hover": { color: "rgb(249, 24, 128)", zIndex: 3 }, ...(activeHeart && { color: 'rgb(249, 24, 128)' }) }} 
          onClick={(event) => {
            event.stopPropagation();
            if(autorizate === null){
              dispatch(OpenNoAutorizateModalThunk('like',`${firstName} ${lastName}`));
            } else{

              api.post(`/tweets/like/${id}`)
              .then(() => {
                setActiveHeart(!activeHeart);
                setLikeRealyCount(activeHeart ? likeRealyCount - 1 : likeRealyCount + 1);
              });
            }
            }}>
          {!activeHeart ? <FavoriteBorderIcon /> : <FavoriteIcon />}
          <Typography>{likeRealyCount}</Typography>
        </IconButton>
        <IconButton sx={{ "&:hover": { color: "rgb(29, 155, 240)" } }}
        onClick={(event) => {  
              event.stopPropagation();
              }}
        
        >
          <BarChartTwoToneIcon />
          <Typography>{countView || 0}</Typography>
        </IconButton>
        <IconButton sx={{ "&:hover": { color: "rgb(29, 155, 240)" } }}
            onClick={(event) => {  
              event.stopPropagation();
              setVisibleShareModal(true);
              }}
        >
          <ShareRoundedIcon />
          {visibleShareModal && (
            <MiniModal
              activeBookmark={activeBookmark}
              setVisibleModal={setVisibleShareModal}
              visibleModal={visibleShareModal}
              data={[
                {
                  text: 'Copy Link to Tweet',
                  function: handleCopyLink,
                  id: id
                },
                {
                  text: 'Bookmark',
                  function: headlerBookmark,
                  id: id
                }
              ]}
            />
          )}
        </IconButton>
      </Box>
    </Box>
  </Box>
  </VisibilitySensor>
);
};

export default Tweet;
