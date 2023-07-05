import { Avatar, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TweetBody } from "../Tweet/TweetBody";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import { api } from "../../redux/service/api";


export function NotificationItem({notification}){


    const {id,invitator,invitatorAvImagerUrl,notificationType,invitatorId,reciever,tweetId} =notification;
    const[tweetNotification,setTweetNotification] =useState(false);
    const navigate = useNavigate();

    useEffect(() => {
          api.get(`tweets/tweet/${tweetId}`)
          .then((data) => {
            console.log(data);
            setTweetNotification(data);
          })
          .catch((error) => {
              console.log(error);
          });
        },[]);



        return(
            <Box sx={{display:'flex',width:'100%',gap:'12px'}}>
                <Box sx={{m:'8px'}}>
                    {notificationType === "RETWEET" && <RepeatIcon/>}
                    {notificationType === "LIKE" && <FavoriteIcon sx={{color: 'rgb(249, 24, 128)'}}/>}
                    {notificationType === "BOOKMARK"&& <BookmarkIcon/>}
                </Box>
                <Box sx={{width:'100%',display:"flex",flexDirection:'column'}}>
                <Avatar src={invitatorAvImagerUrl} alt={invitator} sx={{ m: '8px' }} 
                onClick={(e)=>{
                e.stopPropagation();
                if(invitator === reciever ){
                    navigate(`/profile/`)
                }else{
                        navigate(`/profile/${invitatorId}`)}}
                }

                />
                <Typography>{invitator}</Typography>
                <TweetBody tweet={tweetNotification} />
                </Box>
            </Box>
        )
}