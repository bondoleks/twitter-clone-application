import { Box, Typography , CardMedia, Avatar, IconButton } from '@mui/material';
import { formatDateTime } from './Tweet';
import { ImageInTweetLayout } from './ImageInTweetLayout';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



export const Retweet = ({ tweet }) => {
    const { id, createdDate,username, firstName, lastName, tweetBody, av_imagerUrl, tweet_imageUrl, user_id, parentDto } = tweet;
    const navigate = useNavigate();
    const currentUserId = useSelector(state=>state.user.user.id);
    return (
      <Box data-user_id={user_id} data-tweet_id={id} sx={{ display: 'flex', cursor: 'pointer',border: '1px solid grey',borderRadius: '16px', overflow:'hidden',mt:'14px',':hover': { backgroundColor: 'rgba(0,0,0, 0.1)' } }}

      onClick={(e) => {
        e.stopPropagation();
        navigate(`/tweet/${id}`)}}
      >
        <Box sx={{width:'100%'}}>
          <Box sx={{ display: 'flex', gap: '12px',alignItems:'center',paddingLeft:'12px' }}>
            <Avatar src={av_imagerUrl} alt={username} sx={{m: '4px',width: 24, height: 24}}
                     onClick={(e)=>{
                        e.stopPropagation();
                        if(currentUserId === user_id ){
                            navigate(`/profile/`)
                        }else{
                                navigate(`/profile/${user_id}`)}}
                      } 
            />
            <span style={{ fontWeight: 'bold',whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{firstName} {lastName}</span>
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