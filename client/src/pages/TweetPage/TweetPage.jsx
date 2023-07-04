import { Avatar, Box, Typography } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TweetPageMain } from "../../components/TweetPage/TweetPageMain";
import { useEffect, useState } from "react";
import { getCommetsThunk } from "../../redux/tweet/getCommetsThunk";
import { TweetPageRepliesList } from "../../components/TweetPage/TweetPageRepliesList";
import {getTweetThunk} from '../../redux/tweet/getTweetThunk.jsx';
import { ReplyInput } from "../../components/TweetPage/ReplyInput";
import { useSelector } from "react-redux";
import { tweetSelector } from "../../redux/selectors";
import { REMOVE_OLD_REPLY } from "../../redux/actions";



export function TweetPage(){
    const { tweet_id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [pageComments,setPageComments] = useState(0);
    const tweet = useSelector(tweetSelector);



      useEffect(() => {
        dispatch({type:REMOVE_OLD_REPLY})
        dispatch(getTweetThunk(tweet_id));
        dispatch(getCommetsThunk(tweet_id,pageComments));
      }, []);



    return(
        <Box sx={{ width: '100%' ,borderRight:'1px rgb(239, 243, 244) solid',borderLeft:'1px rgb(239, 243, 244) solid'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <ArrowBackIcon onClick={() => navigate(-1)} sx={{ borderRadius:'50%' ,':hover':{backgroundColor:'rgba(15,20,25,0.1)'}, m:'0 8px'}}/>
                <Typography sx={{ fontSize: 18, fontWeight: 700, py: 2, px: 4 }}>Tweet</Typography>
            </Box>
            <TweetPageMain tweet={tweet}/>
            <ReplyInput userParentName={tweet.username} tweetId={tweet_id}/>
            <TweetPageRepliesList page={pageComments} setPage={setPageComments}/>
        </Box>
    )
}
