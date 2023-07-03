import { WrapperReactionsModal } from "./WrapperReactionsModal";
import { Box, Avatar, TextareaAutosize, Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../redux/selectors";
import { Retweet } from "../Retweet";
import { tweetInQuoteModalSelector, visibleQuoteModalSelector, textQuoteModalSelector, imageQuoteModalSelector } from "../../../redux/selectors";
import { CLOSE_QUOTE_RETWEET_MODAL, ADD_TEXT_IN_QUOTE_RETWEET, ADD_IMG_IN_QUOTE_RETWEET } from "../../../redux/actions";
import { postQuoteRetweetThunk } from "../../../redux/quoteRetweet/postQuoteRetweetThunk";

export function QuoteRetweetModal() {
  const dispatch = useDispatch();
  const currentUser = useSelector(getUser);
  const parentTweet = useSelector(tweetInQuoteModalSelector);
  const visibleQuoteRetweetModal = useSelector(visibleQuoteModalSelector)
  const { id, av_imagerUrl, username } = currentUser;
  console.log(parentTweet);

  // Text
  const retweetText = useSelector(textQuoteModalSelector);

  // Image
  const retweetImages = useSelector(imageQuoteModalSelector);

  function onCloseRetweetModal() {
    dispatch({ type: CLOSE_QUOTE_RETWEET_MODAL });
  }

  function postQuoteRetweet() {
    dispatch({ type: CLOSE_QUOTE_RETWEET_MODAL });
    dispatch(postQuoteRetweetThunk());
  }

//   const handleImageUpload = (e) => {
//     dispatch({ type: ADD_IMG_IN_QUOTE_RETWEET, payload: { img: e.target.files } });
//   };

  return (
    <WrapperReactionsModal isOpen={visibleQuoteRetweetModal} onClose={onCloseRetweetModal} buttonName="Tweet" functionButton={postQuoteRetweet}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Avatar src={av_imagerUrl} alt={username} sx={{ m: '14px', cursor: 'pointer' }} />
        </Grid>
        <Grid item xs={10}>
          <Box>
            <TextareaAutosize onChange={e => dispatch({ type: ADD_TEXT_IN_QUOTE_RETWEET, payload: { text: e.target.value } })} value={retweetText} placeholder="Add a comment!" style={{
              width: '300px',
              height: '100px',
              marginBottom: '10px',
              border: '1px solid transparent',
              outline: 'none',
              resize: 'none',
              fontSize: '20px',
              fontFamily: 'sans-serif',
              color: 'black',
              backgroundColor: 'white'
            }} 
            maxLength={260}/>
          </Box>
          <Box>
            {retweetImages && retweetImages.length > 0 &&
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Array.from(retweetImages).map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="retweet-image" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                ))}
              </Box>
            }
          </Box>
          <Box>
            <Retweet tweet={parentTweet} />
          </Box>
        </Grid>
      </Grid>
    </WrapperReactionsModal>
  );
}
