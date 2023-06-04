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
    // <Grid container sx={{margin: "48px"}}>
    //   <Grid item xs={3}>
    //     <Sidebar />
    //   </Grid>
    //   <Grid item xs={5}>
        <HomeMain/>
    //   </Grid>
    //   <Hidden lgDown>
    //       <Grid item xs={3}>
    //         <Search />
    //       </Grid>
    //   </Hidden>
    // </Grid>

  )
}

export default Home