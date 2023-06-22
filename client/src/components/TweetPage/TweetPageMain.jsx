import { Typography,Box,Avatar,CardMedia,IconButton} from "@mui/material";
import { useSelector } from "react-redux";
import { teweetSelector } from "../../redux/selectors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import { Retweet } from "../Tweet/Retweet";


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
    const [activeHeart,setActiveHeart] = useState(false);
    const { id, createdDate,username, firstName, lastName, tweetBody, av_imagerUrl, tweet_imageUrl, user_id, countReply, countRetweet, likes = 84, view = 154, parentDto} = tweet;
    const fullName = `${firstName} ${lastName}`


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
                <Box sx={{width:'500px',borderRadius: '16px'}}>
                {tweet_imageUrl && (
                <>
                    {tweet_imageUrl.length === 1 ? (
                    <CardMedia component="img" src={tweet_imageUrl[0]}/>
                    ) : (
                    tweet_imageUrl.map((img) => (
                        <CardMedia component="img" src={img} sx={{  }} key={img} />
                    ))
                    )}
                </>
                )}
                </Box>
                {parentDto && <Retweet key={parentDto.id} tweet={parentDto} />}
            </Box>
            <Box sx={{borderBottom: '1px rgb(239, 243, 244) solid', p:'8px 12px'}}>
                <Typography>{formatDateTimeTweet(createdDate)}· {view} Views</Typography>
            </Box>
            <Box sx={{borderBottom: '1px rgb(239, 243, 244) solid', display:'flex', justifyContent:'space-around',p:'8px 0'}}>
                <Typography>{countRetweet}<span>  Retweets</span></Typography>                

                
                <Typography>12<span> Quotes</span></Typography>                

                
                <Typography>{likes}<span> Likes</span></Typography>                
                
                
                <Typography>{countReply}<span> Bookmarks</span></Typography>                

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
            }}
            >
            <RepeatIcon />
            </IconButton>
            <IconButton sx={{ "&:hover": { color: "rgb(249, 24, 128)", zIndex: 3 }, ...(activeHeart && { color: 'rgb(249, 24, 128)' }) }} 
            onClick={(event) => {
                event.stopPropagation();
                !activeHeart ? setActiveHeart(true) : setActiveHeart(false);
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
                }}
            >
            <ShareRoundedIcon />
            </IconButton>
        </Box>
        </Box>
    )   
}