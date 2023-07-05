import { useEffect, useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSelector, useDispatch } from 'react-redux';
import { visibleImageModalSelector, dataModalMainPage } from '../../redux/selectors';
import { CLOSE_IMAGE_MODAL } from '../../redux/actions';

export function ModalImageFullScreen() {
  const { images, index } = useSelector(dataModalMainPage);
  const visibleImageModal = useSelector(visibleImageModalSelector);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(index !== undefined ? index : 1); // Встановлюємо початкове значення індексу
  useEffect(() => {
        setCurrentIndex(index);
  }, [visibleImageModal]);
if(!index && index != 0){
    return
}



 

  const handlePreviousImage = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };


  const handleNextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };



  return (
    <Modal open={visibleImageModal} onClose={() => {
      dispatch({ type: CLOSE_IMAGE_MODAL })
    }}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img src={images[currentIndex]} alt="Full Screen" style={{ maxWidth: '100%', maxHeight: '100vh' }} />
        <IconButton sx={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} onClick={handlePreviousImage}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }} onClick={handleNextImage}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Modal>
  );
}
