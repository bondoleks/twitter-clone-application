import { Box } from "@mui/material"
import { useSelector,useDispatch } from "react-redux";
import { repliesSelector } from "../../redux/selectors";
import { useEffect } from "react";
import { useScrollTracker } from "../Home/ScrollTracker";
import { getCommetsThunk } from "../../redux/tweet/getCommetsThunk";
import { ReplyItem } from "./ReplyItem";
import Tweet from "../Tweet/Tweet";


export function TweetPageRepliesList({page,setPage}){
const replies = useSelector(repliesSelector);
const dispatch =useDispatch();
console.log(page,setPage);
console.log(replies);

const isEndScroll = useScrollTracker();

  


useEffect(() => {
  if(replies.length >0 && isEndScroll){
    console.log(page);
    dispatch(getCommetsThunk(page));
    setPage(page+1);
  }
  },[isEndScroll]);

    return(
        <Box>
            {replies.map((reply) => {
                console.log(reply);
                return(
        <Tweet
          key={reply.id}
          tweet={reply} 
        />
      )})}

        </Box>
    )
}