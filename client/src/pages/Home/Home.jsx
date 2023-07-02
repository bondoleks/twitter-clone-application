import Sidebar from '../../components/Sidebar/Sidebar'
import { Grid } from '@mui/material';
import { HomeMain } from '../../components/Home/HomeMain';
import Search from '../../components/Search/Search';
import Hidden from '@mui/material/Hidden';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTweetsThunk } from '../../redux/home/getTweetsThunk';




export const Home = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTweetsThunk(0));
  }, []);


  return (
        <HomeMain/>
  )
}

export default Home