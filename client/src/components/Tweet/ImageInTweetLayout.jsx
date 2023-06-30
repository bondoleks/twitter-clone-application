import { Box, Grid, CardMedia } from "@mui/material";

export function ImageInTweetLayout({ images, size }) {
  const imageCount = images.length;

  return (
    <Box>
      {imageCount < 2 ? (
        <CardMedia component="img" src={images[0]} sx={{ borderRadius: '16px','&:hover': { filter: 'brightness(0.8)', }, }} />
      ) : (
        <Grid container spacing={1}>
          {imageCount === 2 && (
            <>
              <Grid item xs={6}>
                <Box
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
