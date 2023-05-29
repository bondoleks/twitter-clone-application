import { Grid, Hidden } from '@mui/material';
import {Box} from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar'
import Footerlogin from "./components/Footerlogin/Footerlogin.jsx";
import Search from './components/Search/Search.jsx'

function App() {

  return (

    <Grid container spacing={2} sx={{margin: "0 150px"}}>

      <Grid item xs={3}>
        <Sidebar />
        </Grid>
      <Grid item xs={5}>
      <Box sx={{ fontSize: '28px', fontWeight: 600, fontFamily: 'Roboto' }}>Twitter-clone</Box>
    <Footerlogin/>
      </Grid>
      <Hidden mdDown>
      <Grid item xs={3}>
        <Search />
      </Grid>
      </Hidden>
    </Grid>

  )
}

export default App

