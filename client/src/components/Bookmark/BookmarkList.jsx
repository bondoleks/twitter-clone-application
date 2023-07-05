import { useState, useEffect } from "react";
import { useScrollTracker } from "../Home/ScrollTracker";
import { getBookmarkThunk } from "../../redux/bookmark/getBookmarkThunk";
import { useSelector, useDispatch } from "react-redux";
import { bookmarkDataSelector } from "../../redux/selectors";
import Tweet from "../Tweet/Tweet";
import { Box, Typography } from "@mui/material";



export function BookmarkList(){
    const [pageBookmark, setPageBookmark] = useState(1);
    const isEndScroll = useScrollTracker();
    const dispatch = useDispatch();
    const bookmarkData = useSelector(bookmarkDataSelector);
    


    useEffect(() => {
        if(bookmarkData.length >0 && isEndScroll){
          console.log(pageBookmark);
          dispatch(getBookmarkThunk(pageBookmark));
          setPageBookmark(pageBookmark+1);
        }
        },[isEndScroll]);

        if(bookmarkData.length === 0){
            return(
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',mt:'20px'}}>
                <img alt="" draggable="true" src="https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-400x200.v1.366bcfc9.png" ></img>
                <Typography variant="h4">Save Tweets for later</Typography>
                <Typography variant="body1">Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.</Typography>
                </Box>
            )
          }
          
          const sortedBookmarks = bookmarkData.sort((a, b) => {
            const dateA = new Date(a.createdDate);
            const dateB = new Date(b.createdDate);
            return dateB - dateA;
          });
        
          return (
            <Box>
              {sortedBookmarks.map((bookmark) => (
                <Tweet
                  key={bookmark.id}
                  tweet={bookmark} 
                />
              ))}
            </Box>
          );
}

