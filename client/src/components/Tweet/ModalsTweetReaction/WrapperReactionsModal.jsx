import { Box, Hidden, Modal, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState, useEffect } from "react";
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import { useDispatch } from "react-redux";
import { ADD_IMG_IN_QUOTE_RETWEET } from "../../../redux/actions";

export function WrapperReactionsModal({ children, isOpen, onClose, buttonName, functionButton }) {
  const [buttonColor, setButtonColor] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedColor = localStorage.getItem('buttonColor');
    if (savedColor) {
      setButtonColor(savedColor);
    }
  }, []);

  const handleImageUpload = (e) => {
    dispatch({ type: ADD_IMG_IN_QUOTE_RETWEET, payload: { img: e.target.files } });
  };

  return (
    <>
      <Hidden smDown>
        <Modal open={isOpen}
          onClose={onClose}
          aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#fff',
            color: '#000',
            borderRadius: 5,
            boxShadow: 24,
            p: 4,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}>
            <Typography
              onClick={onClose}
              sx={{
                position: 'absolute',
                lineHeight: '18px',
                left: 20,
                top: 12,
                fontSize: 14,
                borderRadius: '50%',
                cursor: 'pointer',
                padding: '6px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              X
            </Typography>
            {children}
            <Box
              sx={{
                width: '100%',
                display: "flex",
                justifyContent: 'space-around'
              }}>
              <IconButton sx={{ marginTop: '6px' }}>
                <label htmlFor="file-input-quote-retweet-modal">
                  <input
                    id="file-input-quote-retweet-modal"
                    onChange={handleImageUpload}
                    accept="image/png, image/gif, image/jpeg"
                    type="file"
                    multiple
                    style={{ display: "none" }}
                  />
                  <BrokenImageOutlinedIcon sx={{ color: buttonColor }} />
                </label>
              </IconButton>
              <Button
                variant="contained" size="small" sx={{
                  textTransform: 'none',
                  borderRadius: '20px',
                  height: '30px',
                  marginRight: '30px',
                  background: buttonColor
                }}
                onClick={functionButton}
              >
                {buttonName}
              </Button>
            </Box>
          </Box>
        </Modal>
      </Hidden>
      <Hidden smUp>
        <Modal open={isOpen}
          onClose={onClose}
          aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            bgcolor: '#fff',
            color: '#000',
            p: 4,
            zIndex: 1,
            display: 'flex',
            justifyContent: 'start',
            flexDirection: 'column'
          }}>
            <Box
              sx={{
                width: '100%',
                display: "flex",
                justifyContent: 'space-around'
              }}>
              <ArrowBackIcon
                onClick={onClose} />
              <Button
                variant="contained" size="medium" sx={{
                  textTransform: 'none',
                  borderRadius: '20px',
                  height: '30px',
                  background: 'white'
                }}
                onClick={functionButton}
              >
                {buttonName}
              </Button>
            </Box>
            {children}
          </Box>
        </Modal>
      </Hidden>
    </>
  );
}
