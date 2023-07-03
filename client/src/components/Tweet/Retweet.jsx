import { Box, Typography , CardMedia, Avatar, IconButton } from '@mui/material';
import { formatDateTime } from './Tweet';
import { ImageInTweetLayout } from './ImageInTweetLayout';
import { useNavigate } from 'react-router-dom';

export const Retweet = ({ tweet }) => {
    const { id, createdDate,username, firstName, lastName, tweetBody, av_imagerUrl, tweet_imageUrl, user_id, parentDto } = tweet;
    const navigate = useNavigate();
  
    return (
      <Box data-user_id={user_id} data-tweet_id={id} sx={{ display: 'flex', gap: '8px', cursor: 'pointer',border: '1px solid grey',borderRadius: '16px',mt:'14px',':hover': { backgroundColor: 'rgba(0,0,0, 0.1)' } }}
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/tweet/${id}`)}}
      >
        <Box sx={{width:'100%'}}>
          <Box sx={{ display: 'flex', gap: '12px',alignItems:'center' }}>
            <Avatar src={av_imagerUrl} alt={username} sx={{m: '4px',width: 24, height: 24}} />
            <span style={{ fontWeight: 'bold',whiteSpace: 'nowrap' }}>{firstName} {lastName}</span>
            <span >{username}</span>
            <span>{formatDateTime(createdDate)}</span>
          </Box>
          <Box sx={{padding:'8px'}}>
          {tweetBody && <p>{tweetBody}</p>}
          <Box>
            {tweet_imageUrl && <ImageInTweetLayout images={tweet_imageUrl} size='280'/>}
        </Box>
          </Box>
        </Box>
      </Box>
    );
  };