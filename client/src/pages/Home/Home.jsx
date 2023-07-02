import Sidebar from '../../components/Sidebar/Sidebar'
import { Grid } from '@mui/material';
import { HomeMain } from '../../components/Home/HomeMain';
import Search from '../../components/Search/Search';
import Hidden from '@mui/material/Hidden';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTweetThunk } from '../../redux/home/getTweetThunk';




export const Home = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTweetThunk(0));
  }, [dispatch]);


  return (
    <Grid sx={{ paddingBottom: '36px' }}>
      <HomeMain />
    </Grid>
  )
}

export default Home