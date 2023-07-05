import React, { useEffect, useState } from 'react';
import {
  Grid,
  IconButton,
  Container,
  Typography,
  Box,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TabsProfile from './TabsProfile';
import ToolbarProfile from './ToolbarProfile';
import ButEditUser from './ButEditUser';
import { useFetch } from "../../hooks/UseFetch";
import { useParams } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


export const Profile = ({ withId }) => {
  const { id } = useParams()
  // console.log("11111111", withId,"BNNBNBNBNB", id)


  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover:before': {
      opacity: 1,
    },
  }));

  const [{ data, loading }, getData] = useFetch({
    initData: {},
    url: withId
      ? `user/getuser/${id}`
      : 'user/profile',
    method: 'GET',
    dataTransformer: (data) => {
      console.log(data)
      return data;
    },
  });

  useEffect(() => {
    getData()
  }, [id])

  if (!loading) <p>loading...</p>

  const { username, firstName, head_imagerUrl, lastName, email, location, birthdate, av_imagerUrl, bio } = data

  const [fileAv, setFileAv] = useState(null);
  const [fileHead, setFileHead] = useState(null);
  const [filePath, setFilePath] = useState(head_imagerUrl);
  const [filePathAv, setFilePathAv] = useState(av_imagerUrl);

  useEffect(() => {
    if (fileAv) setFilePathAv(URL.createObjectURL(fileAv));
  }, [fileAv]);

  const handleFileAvChange = (e) => {
    const fileAv = e.target.files[0];
    setFileAv(fileAv);
  };

  useEffect(() => {
    if (fileHead) setFilePath(URL.createObjectURL(fileHead));
  }, [fileHead]);

  const handleFileHeadChange = (e) => {
    const fileHead = e.target.files[0];
    setFileHead(fileHead);
  };


  return (

    <>

      <Grid
        sx={{
          borderRight: '1px solid grey',
          borderLeft: '1px solid grey',
        }}>
        <ToolbarProfile />

        <Container sx={{ marginTop: '70px' }}>
        <StyledAvatar
            alt="User Head"
            src={head_imagerUrl}

            sx={{
              width: '100%',
              height: '200px',
              cursor: 'pointer',
              marginTop: '50px',
              borderRadius: '0', // Добавьте эту строку
            }}
          />
          {/* <Box
            sx={{
              backgroundImage: filePath ? `url(${filePath})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "200px",
              bgcolor: !filePath && "grey.300",
            }}
          ></Box> */}


          <StyledAvatar
            alt="User Avatar"
            src={av_imagerUrl}

            sx={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              marginLeft: '20px',
              marginTop: '-50px',
              marginBottom: '20px',
              cursor: 'pointer'
            }}
          />

          <ButEditUser />

          <Box>
            <Typography sx={{
              fontSize: '24px',
              fontWeight: '900'
            }}>{firstName} {lastName}</Typography>

            <Typography>@{username}</Typography>

            <Typography sx={{ fontWeight: '700', marginTop: '20px' }}>{bio}</Typography>

            <Box display={'flex'}
              marginTop={'10px'}>
              <Typography sx={{ marginRight: '20px' }}>
                <IconButton edge='start' color='gray'>
                  <LocationOnOutlinedIcon />
                </ IconButton>
                {location}
              </Typography>
              <IconButton edge='start' color='gray'>
                <CalendarMonthIcon />
              </IconButton>
              <Typography mt={1}>Joined Mounth year</Typography>
            </Box>
            <Box display={'flex'}>
              <Link href="/profile/following" underline="hover" sx={{ '&:hover': { color: 'gray' } }}>
                <Typography mr={2} sx={{
                  fontSize: '14px',
                  color: 'gray'
                }}>N Following</Typography>
              </Link>
              <Link href="/profile/followers" underline="hover" sx={{ '&:hover': { color: 'gray' } }}>
                <Typography sx={{
                  fontSize: '14px',
                  color: 'gray'
                }}>N Followers</Typography>
              </Link>
            </Box>
          </Box>
        </Container>

        <TabsProfile />
      </Grid>
    </>
  )
}

export default Profile
