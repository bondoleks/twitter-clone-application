
import { Paper, Typography, Box, Modal, Hidden, Button } from "@mui/material";
import RepeatIcon from '@mui/icons-material/Repeat';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

export function MiniModal({ visibleModal, setVisibleModal,data,activeBookmark }) {

function handleClose(e){
  e.stopPropagation();
  setVisibleModal();
  localStorage.removeItem('ChangeTweet');
}


const heightItem = 100/data.length;
  return (
    <>
      <Hidden smDown>
          <Box sx={{position:'fixed',width:'100%',height:'100%',top:0,left:0}}
          onClick={(e)=>{
            handleClose(e);}}
          ></Box>
          <Paper
            onClick={(e)=>{
              e.stopPropagation();
              console.log(e.currentTarget);
            }
            }
            sx={{
              zIndex: 2,
              position: 'absolute',
              left: '12px',
              display: "flex",
              flexDirection: 'column',
              justifyContent: 'space-around',
              boxShadow: 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px',
              cursor: 'pointer',
              boxSizing:'border-box',
              height: '104px',
              borderRadius: "12px"
            }}
          >
          {data.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                p: '0 14px',
                height: `${heightItem}%`,
                alignItems: 'center',
                gap: '14px',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.03)' },
              }}
              onClick={(e) => {
                e.stopPropagation();
                item.function(item.id);
              }}
            >
              {item.text === 'Retweet' &&<RepeatIcon />}
              {item.text === 'Undo Retweet' &&<RepeatIcon />}
              {item.text ==="Quote Retweet" && <BorderColorOutlinedIcon/>}
              {item.text ==='Copy Link to Tweet' && <LinkOutlinedIcon/>}
              {item.text ==="Bookmark"  && !activeBookmark ? <BookmarkAddOutlinedIcon/> : null}
              {item.text === "Bookmark" && activeBookmark ? <BookmarkRemoveOutlinedIcon /> : null}
              <Typography
              sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >{item.text}</Typography>
            </Box>
          ))}
          </Paper>
      </Hidden>
      <Hidden smUp>
        <Modal
          open={visibleModal}
          onClose={handleClose}
        >
        <Box sx={{
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              display: "flex",
              flexDirection: 'column',
              justifyContent: 'space-around',
              gap:'12px',
              position: 'fixed', 
              bottom: 0, 
              left: 0, 
              right: 0,
              backgroundColor:'white',
              p:'12px'
        }}>
        {data.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                m:'8px 0 ',
                p: '0 14px',
                height: `${heightItem}%`,
                alignItems: 'center',
                gap: '14px',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.03)' },
              }}
              onClick={handleClose}
            >
              {item.text === 'Retweet' &&<RepeatIcon />}
              {item.text === 'Undo Retweet' &&<RepeatIcon />}
              {item.text ==="Quote Retweet" && <BorderColorOutlinedIcon/>}
              {item.text ==='Copy Link to Tweet' && <LinkOutlinedIcon/>}
              {item.text ==="Bookmark"  && !activeBookmark ? <BookmarkAddOutlinedIcon/> : null}
              {item.text === "Bookmark" && activeBookmark ? <BookmarkRemoveOutlinedIcon /> : null}
              <Typography
              sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >{item.text}</Typography>
            </Box>
          ))}
          <Button
          variant="outlined"
          sx={{borderRadius:'15px'}}
          onClick={(e)=>{handleClose(e)
          }}
          >Cancel</Button>
        </Box>
        </Modal>
      </Hidden>
    </>
  )
}
