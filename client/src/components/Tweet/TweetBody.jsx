import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Typography , CardMedia, Avatar, IconButton } from '@mui/material';
import { Retweet } from './Retweet';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { OpenNoAutorizateModalThunk } from '../../redux/mainPage/OpenNoAutorizateModalThunk';
import { MiniModal } from './MiniModal';
import {api} from '../../redux/service/api';
import { ImageInTweetLayout } from './ImageInTweetLayout';
import { openQuoteRetweetModalThunk} from '../../redux/quoteRetweet/openQuoteRetweetModalThunk';
import { ADD_USER_VISIBLE_TWEETS, OPEN_QUOTE_RETWEET_MODAL, OPEN_REPLY_MODAL } from '../../redux/actions';
import VisibilitySensor from 'react-visibility-sensor';
import { openReplyModalThunk } from '../../redux/reply/openReplyModalThunk';
import { formatDateTime } from './Tweet';


 export const TweetBody = ({ tweet }) => {

    const { id, createdDate,username, firstName, lastName, tweetBody, av_imagerUrl, tweet_imageUrl, user_id, countReply, countRetweet, countLike, view = 154, parentDto,markerLike,markerRetweet,markerBookmark} = tweet;
  
    const dispatch = useDispatch();
    let navigate = useNavigate();

  
  return (
    <Box
      data-user_id={user_id}
      data-tweet_id={id}
      sx={{
        width:"100%",
        display: 'flex',
        cursor: 'pointer',
        borderBottom: '1px rgb(239, 243, 244) solid',
        ':hover': { backgroundColor: 'rgba(0,0,0, 0.03)' }
      }}
      onClick={() => navigate(`/tweet/${id}`)}
    >
      <Avatar src={av_imagerUrl} alt={username} sx={{ m: '8px' }} />
      <Box sx={{width:'100%'}}>
        <Box sx={{ display: 'flex', gap: '12px' }}>
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
          <Box>
              {tweet_imageUrl && <ImageInTweetLayout images={tweet_imageUrl} size='300'/>}
          </Box>
          {parentDto && <Retweet key={parentDto.id} tweet={parentDto} />}
        </Box>
        </Box>
        </Box>
        )
        }