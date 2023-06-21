import { Avatar, Box, Typography } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TweetPageMain } from "../../components/TweetPage/TweetPageMain";
import { useEffect, useState } from "react";
import { getCommetsThunk } from "../../redux/tweet/getCommetsThunk";
import { TweetPageComments } from "../../components/TweetPage/TweetPageComments";
import {getTweetThunk} from '../../redux/tweet/getTweetThunk.jsx';



export function TweetPage(){
    const { tweet_id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [pageComments,setPageComments] = useState(0);




      useEffect(() => {
        dispatch(getTweetThunk(tweet_id));
        dispatch(getCommetsThunk(tweet_id,pageComments));
      }, [dispatch]);



    return(
        <Box sx={{ width: '100%' ,borderRight:'1px rgb(239, 243, 244) solid',borderLeft:'1px rgb(239, 243, 244) solid'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <ArrowBackIcon onClick={() => navigate(-1)} sx={{ borderRadius:'50%' ,':hover':{backgroundColor:'rgba(15,20,25,0.1)'}, m:'0 8px'}}/>
                <Typography sx={{ fontSize: 18, fontWeight: 700, py: 2, px: 4 }}>Tweet</Typography>
            </Box>
            <TweetPageMain/>
            <TweetPageComments page={pageComments} setPage={setPageComments}/>
        </Box>
    )
}
