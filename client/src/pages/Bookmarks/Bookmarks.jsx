import {useEffect} from 'react'
import { Box,Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { BookmarkList } from '../../components/Bookmark/BookmarkList';
import { getBookmarkThunk } from '../../redux/bookmark/getBookmarkThunk';

const Bookmarks = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.user.username)

  useEffect(() => {
    dispatch(getBookmarkThunk(0));
  }, []);


  return (
    <Box sx={{ width: '100%', borderRight: '1px rgb(239, 243, 244) solid', borderLeft: '1px rgb(239, 243, 244) solid' }}>
    <Box sx={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255,0.7)', zIndex: 1,borderBottom: '1px rgb(239, 243, 244) solid' }}>
      <Typography sx={{ fontSize: 18, fontWeight: 700, pt: 2, px: 4 }}>
      Bookmarks
      </Typography>
      <Typography sx={{pl:4}}>@{userName}</Typography>
    </Box>  
    <BookmarkList/>




  </Box> 
  )
}

export default Bookmarks