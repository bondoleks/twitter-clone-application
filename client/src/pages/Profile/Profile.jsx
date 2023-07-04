import React, { useEffect } from 'react';
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


  return (

    <>

      <Grid
        sx={{
          borderRight: '1px solid grey',
          borderLeft: '1px solid grey',
        }}>
        <ToolbarProfile />

        <Container sx={{ marginTop: '70px' }}>
          {head_imagerUrl ? (
            <Avatar
              alt="Head Image"
              src={head_imagerUrl}
              // src='../../img/avatar.png'
              sx={{
                bgcolor: 'grey.300',
                width: '110%',
                marginLeft: '-5%',
                height: '200px',
              }} />) : (
            <Box sx={{
              bgcolor: 'grey.300',
              width: '110%',
              marginLeft: '-5%',
              height: '200px',
            }}></Box>
          )}


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
