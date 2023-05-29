import { Avatar, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import { Box, Typography , CardMedia } from '@mui/material';


function formatDateTime(dateTimeString) {
  const now = new Date();
  const dateTime = new Date(dateTimeString);

  const diffMilliseconds = now - dateTime;
  const diffSeconds = Math.floor(diffMilliseconds / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffSeconds < 60) {
    return `${diffSeconds}sec`;
  } else if (diffMinutes < 60) {
    return `${diffMinutes}min`;
  } else if (diffHours < 24) {
    return `${diffHours}h`;
  } else if (diffDays < 30) {
    const day = dateTime.getDate();
    const month = dateTime.toLocaleString('en', { month: 'long' });
    return `${month} ${day}`;
  } else if (diffMonths < 12) {
    const month = dateTime.toLocaleString('en', { month: 'long' });
    const year = dateTime.getFullYear();
    return `${month} ${year}`;
  } else {
    const day = dateTime.getDate();
    const month = dateTime.toLocaleString('en', { month: 'long' });
    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    const year = dateTime.getFullYear();
    return `${month} ${day}, ${year}, ${hours}:${minutes}`;
  }
}




const Tweet = ({ tweet }) => {
  const { id, createdDate,username, firstName, lastName, tweetBody, av_imagerUrl, avatar, user_id, reply = 54, retweet = 8904, like = 84, view = 154, tweetChildren } = tweet;

  return (
    <Box data-user_id={user_id} data-tweet_id={id} sx={{ display: 'flex', gap: '8px', cursor: 'pointer', ':hover': { backgroundColor: 'rgba(0,0,0, 0.03)' } }}>
      <Avatar src={avatar} alt={username} />
      <Box>
        <Box sx={{ display: 'flex', gap: '12px' }}>
          <span>{username}</span>
          <span>{firstName} {lastName}</span>
          <span>{formatDateTime(createdDate)}</span>
        </Box>
        <Box sx={{padding:'8px'}}>
        {tweetBody && <p>{tweetBody}</p>}
        {av_imagerUrl && <CardMedia component="img" src={av_imagerUrl} />}
        {tweetChildren && tweetChildren.map(childTweet => (
          <Tweet key={childTweet.id} tweet={childTweet} />
        ))}
        </Box>
        <Box>
          <IconButton sx={{ "&:hover": { color: "rgb(29, 155, 240)" } }}>
            <ChatBubbleIcon />
            <Typography variant="body2">{reply}</Typography>
          </IconButton>
          <IconButton sx={{ "&:hover": { color: "rgb(0, 186, 124)" } }}>
            <RepeatIcon />
            <Typography>{retweet}</Typography>
          </IconButton>
          <IconButton sx={{ "&:hover": { color: "rgb(249, 24, 128)" } }}>
            <FavoriteIcon />
            <Typography>{like}</Typography>
          </IconButton>
          <IconButton sx={{ "&:hover": { color: "rgb(29, 155, 240)" } }}>
            <BarChartTwoToneIcon />
            <Typography>{view}</Typography>
          </IconButton>
          <IconButton sx={{ "&:hover": { color: "rgb(29, 155, 240)" } }}>
            <ShareRoundedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Tweet;
