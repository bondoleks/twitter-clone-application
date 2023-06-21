import React from "react";
import { Paper, Typography, Box, Modal, Hidden, Backdrop } from "@mui/material";
import RepeatIcon from '@mui/icons-material/Repeat';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

export function MiniModal({ visibleRetweetModal, setVisibleRetweetModal,data,activeBookmark }) {


const heightItem = 100/data.length;
console.log(heightItem);
  return (
    <>
      <Hidden smDown>
          <Paper
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
              {item.text ==="Bookmark" && <BookmarkAddOutlinedIcon/>}
              {item.text ==="Bookmark" && activeBookmark && <BookmarkRemoveOutlinedIcon/>}
              activeBookmark
              <Typography
              sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >{item.text}</Typography>
            </Box>
          ))}
          </Paper>
      </Hidden>
      {/* <Hidden smUp>
        <Modal
          open={visibleRetweetModal}
          onClose={handleCloseModal}
        >
        </Modal>
      </Hidden> */}
    </>
  )
}