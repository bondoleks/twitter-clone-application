import { Typography,Box,Avatar,CardMedia,IconButton} from "@mui/material";
import { useSelector } from "react-redux";
import { teweetSelector } from "../../redux/selectors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Retweet } from "../Tweet/Retweet";
import { ImageInTweetLayout } from "../Tweet/ImageInTweetLayout";
import { OpenNoAutorizateModalThunk } from '../../redux/mainPage/OpenNoAutorizateModalThunk';
import { api } from "../../redux/service/api";
import { useDispatch } from "react-redux";
import { MiniModal } from "../Tweet/MiniModal";
import { useState } from "react";


function formatDateTimeTweet(dateTimeString) {
    const dateTime = new Date(dateTimeString);
  
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
  
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, '0');
  
    const day = dateTime.getDate();
    const month = dateTime.toLocaleString('en', { month: 'long' });
    const year = dateTime.getFullYear();
  
    const formattedDateTime = `${formattedHours}:${formattedMinutes} ${period} · ${month} ${day}, ${year}`;
  
    return formattedDateTime;
  }



export function TweetPageMain(){
    const tweet = useSelector(teweetSelector);
    const { id, createdDate,username, firstName, lastName, tweetBody, av_imagerUrl, tweet_imageUrl, user_id, countRetweet, countLike, view = 154,markerLike,markerRetweet,markerBookmark, parentDto, countBookmark} = tweet;
    const fullName = `${firstName} ${lastName}`;
    const dispatch =useDispatch();
    const autorizate = useSelector(state => state.user.authorized);
    //Visible
    const [visibleRetweetModal,setVisibleRetweetModal] = useState(false);
    const [visibleShareModal,setVisibleShareModal] = useState(false);
    //Count
    const [retweetRealyCount,setRetweetRealyCount] = useState(countRetweet);
    const [likeRealyCount,setLikeRealyCount] = useState(countLike);   
    //Marker
    const [activeRetweet,setActiveRetweet] = useState(markerRetweet);  
    const [activeHeart,setActiveHeart] = useState(markerLike);
    const [activeBookmark,setActiveBookmark] = useState(markerBookmark);

    console.log(countLike,'  ',likeRealyCount);


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
      }
      
      function headlerBookmark(id){
        api.post(`/tweets/bookmark/${id}`)
        .then(() => {
          setActiveBookmark(!activeBookmark);
        });
        setVisibleShareModal(false);
      }
      
      function handleCopyLink(id){
        navigator.clipboard.writeText(`http://localhost:5173/tweet/${id}`)
        setVisibleShareModal(false);
      }

    if(!tweet){
        return(
          <div>Loading...</div>
        )
      }

    return(
        <Box key={id} data-user-id={user_id} >
            <Box sx={{display:'flex', gap:'12px', }}>
                <Avatar src={av_imagerUrl} alt={username} sx={{ m: '14px' , cursor:'pointer'}}/>
                <Box sx={{display:'flex',flexDirection:'column', gap:'8px'}}>
                    <Typography
                    component="span"
                    variant="body1"
                    fontWeight="bold"
                    sx={{
                        textDecoration: 'none',
                        '&:hover': {
                        textDecoration: 'underline',
                        cursor:'pointer'
                        },
                    }}
                    >
                    {firstName} {lastName}
                    </Typography>
                    <span>{username}</span>
                </Box>
            </Box>
            <Box sx={{ padding: '8px' }}>
                {tweetBody && <Typography variant="body1" sx={{p:'14px 0'}}>{tweetBody}</Typography>}
                <Box sx={{borderRadius: '16px'}}>
                {tweet_imageUrl && <ImageInTweetLayout images={tweet_imageUrl} size='320'/>}
                </Box>
                {parentDto && <Retweet key={parentDto.id} tweet={parentDto} />}
            </Box>
            <Box sx={{borderBottom: '1px rgb(239, 243, 244) solid', p:'8px 12px'}}>
                <Typography>{formatDateTimeTweet(createdDate)}· {view} Views</Typography>
            </Box>
            <Box sx={{borderBottom: '1px rgb(239, 243, 244) solid', display:'flex', justifyContent:'space-around',p:'8px 0'}}>
                <Typography>{retweetRealyCount}<span>  Retweets</span></Typography>                

                
                <Typography>12<span> Quotes</span></Typography>                

                
                <Typography>{likeRealyCount} Likes</Typography>                
                
                
                <Typography>{countBookmark}<span> Bookmarks</span></Typography>                

            </Box>        
            {/* Icon */}
            <Box sx={{borderBottom: '1px rgb(239, 243, 244) solid',  display:'flex', justifyContent:'space-around'}}>
            <IconButton sx={{ "&:hover": { color: "rgb(29, 155, 240)" } }}
            onClick={(event) => {
                event.stopPropagation();
            }}
            >
            <ChatBubbleIcon />
            </IconButton>
            <IconButton sx={{ "&:hover": { color: "rgb(0, 186, 124)" } }}
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
            </IconButton>
            <IconButton sx={{ "&:hover": { color: "rgb(29, 155, 240)" } }}
            onClick={(event) => {  
                event.stopPropagation();
                }}
            
            >
            <BarChartTwoToneIcon />
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
    )   
}