import { Box, Typography,IconButton,Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';


export function ActivatePage() {
  const { key } = useParams();
  const [visibleLoading, setVisibleLoading] = useState(true);
  const [isActivation, setIsActivation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(`https://twitter-clone-application.herokuapp.com/api/v1/auth/activate/${key}`)
      .then((response) => {
        setIsActivation(response.data.isActivation);
        setVisibleLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [key]);

  return (
    <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display:"flex",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }}>
    <Typography variant="h5" sx={{ whiteSpace: 'nowrap', textAlign:'center' }}>
        Welcome!<br /> to Clone-Twitter-Application
    </Typography>
    <IconButton>
        <TwitterIcon sx={{ margin: '16px' }} fontSize="large" color='primary' />
    </IconButton>
      {visibleLoading && <Typography variant='h5'>Loading...</Typography>}
      {!visibleLoading && isActivation && <Typography variant='h5'>Activation successful!</Typography>}
      {!visibleLoading && !isActivation && <Typography variant='h5'>Activation failed.</Typography>}
      <Button
      onClick={()=>{
        navigate('/');
      }}
      variant="contained"
      sx={{marginTop:'16px'}}
      >Go to Main Page</Button>
    </Box>
  );
}