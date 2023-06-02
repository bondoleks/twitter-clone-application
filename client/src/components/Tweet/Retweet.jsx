import { Box, Typography , CardMedia, Avatar, IconButton } from '@mui/material';
import { formatDateTime } from './Tweet';

export const Retweet = ({ tweet }) => {
    const { id, createdDate,username, firstName, lastName, tweetBody, av_imagerUrl, tweet_imageUrl, user_id, parentDto } = tweet;
  
    return (
      <Box data-user_id={user_id} data-tweet_id={id} sx={{ display: 'flex', gap: '8px', cursor: 'pointer',border: '1px solid grey',borderRadius: '16px',mt:'14px' }}>
        <Avatar src={av_imagerUrl} alt={username} sx={{m: '14px'}} />
        <Box>
          <Box sx={{ display: 'flex', gap: '12px' }}>
            <span style={{ fontWeight: 'bold',whiteSpace: 'nowrap' }}>{firstName} {lastName}</span>
            <span >{username}</span>
            <span>{formatDateTime(createdDate)}</span>
          </Box>
          <Box sx={{padding:'8px'}}>
          {tweetBody && <p>{tweetBody}</p>}
          {av_imagerUrl && <CardMedia component="img" src={tweet_imageUrl} />}
          {/* {tweetChildren && tweetChildren.map(childTweet => (
            <Tweet key={childTweet.id} tweet={childTweet} />
          ))} */}
          </Box>
        </Box>
      </Box>
    );
  };