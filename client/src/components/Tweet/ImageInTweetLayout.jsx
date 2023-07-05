import { Box, Grid, CardMedia } from "@mui/material";
import { useDispatch } from "react-redux";
import { OPEN_IMAGE_MODAL } from "../../redux/actions";



export function ImageInTweetLayout({ images, size }) {
  const imageCount = images.length;
  const dispatch = useDispatch();
function openImageModal(images,index){
  console.log(images,index);
  dispatch({type:OPEN_IMAGE_MODAL,payload:{images:images,index:index}})
}


  return (
    <Box>
      {imageCount < 2 ? (
        <CardMedia 
        onClick={(e)=>{
          e.stopPropagation()
          openImageModal(images,0)}}
        component="img" src={images[0]} sx={{ borderRadius: '16px','&:hover': { filter: 'brightness(0.8)', }, }} />
      ) : (
        <Grid container spacing={0.5}>
          {imageCount === 2 && (
            <>
              <Grid item xs={6}>
                <Box
                  onClick={(e)=>{
                    e.stopPropagation()
                    openImageModal(images,0)}}
                  sx={{
                    backgroundImage: `url(${images[0]})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    width: '100%',
                    height: `${size}px`,
                    borderTopLeftRadius: '16px',
                    borderBottomLeftRadius: '16px',
                    '&:hover': {
                      filter: 'brightness(0.8)', 
                    },
                    }}
                ></Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                onClick={(e)=>{
                  e.stopPropagation()
                  openImageModal(images,1)}}
                  sx={{
                    backgroundImage: `url(${images[1]})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    width: '100%',
                    height: `${size}px`,
                    borderTopRightRadius: '16px',
                    borderBottomRightRadius: '16px',
                    '&:hover': {
                      filter: 'brightness(0.8)', 
                    },
                  }}
                ></Box>
              </Grid>
            </>
          )}

          {imageCount === 3 && (
            <>
              <Grid item xs={6}>
                <Box
                  onClick={(e)=>{
                    e.stopPropagation()
                    openImageModal(images,0)}}
                  sx={{
                    backgroundImage: `url(${images[0]})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    width: '100%',
                    height: `${size}px`,
                    borderTopLeftRadius: '16px',
                    borderBottomLeftRadius: '16px',
                    '&:hover': {
                      filter: 'brightness(0.8)', 
                    },
                  }}
                ></Box>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Box
                      onClick={(e)=>{
                        e.stopPropagation()
                        openImageModal(images,1)}}
                      sx={{
                        backgroundImage: `url(${images[1]})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        width: '100%',
                        height: `${size / 2}px`,
                        borderTopRightRadius: '16px',
                        '&:hover': {
                          filter: 'brightness(0.8)', 
                        },
                      }}
                    ></Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      onClick={(e)=>{
                        e.stopPropagation()
                        openImageModal(images,2)}}
                      sx={{
                        backgroundImage: `url(${images[2]})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        width: '100%',
                        height: `${size / 2}px`,
                        borderBottomRightRadius: '16px',
                        '&:hover': {
                          filter: 'brightness(0.8)', 
                        },
                      }}
                    ></Box>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}

          {imageCount >= 4 && (
            <>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Box
                      onClick={(e)=>{
                        e.stopPropagation()
                        openImageModal(images,0)}}
                      sx={{
                        backgroundImage: `url(${images[0]})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        width: '100%',
                        height: `${size/2}px`,
                        borderTopLeftRadius: '16px',
                        '&:hover': {
                          filter: 'brightness(0.8)', 
                        },
                      }}
                    ></Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      onClick={(e)=>{
                        e.stopPropagation()
                        openImageModal(images,1)}}
                      sx={{
                        backgroundImage: `url(${images[1]})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        width: '100%',
                        height: `${size/2}px`,
                        borderBottomLeftRadius: '16px',
                        '&:hover': {
                          filter: 'brightness(0.8)', 
                        },
                      }}
                    ></Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Box
                      onClick={(e)=>{
                        e.stopPropagation()
                        openImageModal(images,2)}}
                      sx={{
                        backgroundImage: `url(${images[2]})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        width: '100%',
                        height: `${size / 2}px`,
                        borderTopRightRadius: '16px',
                        '&:hover': {
                          filter: 'brightness(0.8)', 
                        },
                      }}
                    ></Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      onClick={(e)=>{
                        e.stopPropagation()
                        openImageModal(images,3)}}
                      sx={{
                        backgroundImage: `url(${images[3]})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        width: '100%',
                        height: `${size / 2}px`,
                        borderBottomRightRadius: '16px',
                        '&:hover': {
                          filter: 'brightness(0.8)', 
                        },
                      }}
                    ></Box>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      )}
    </Box>
  );
}
