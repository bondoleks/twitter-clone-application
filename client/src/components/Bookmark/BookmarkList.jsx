import { useState, useEffect } from "react";
import { useScrollTracker } from "../Home/ScrollTracker";
import { getBookmarkThunk } from "../../redux/bookmark/getBookmarkThunk";
import { useSelector, useDispatch } from "react-redux";
import { bookmarkDataSelector } from "../../redux/selectors";
import Tweet from "../Tweet/Tweet";
import { Box } from "@mui/material";


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
              <div>Save Tweets for later</div>
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