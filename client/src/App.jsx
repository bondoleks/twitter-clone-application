import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar/Sidebar'
import Search from './components/Search/Search.jsx'



function App() {

  return (

    <Grid container spacing={2} sx={{margin: "48px"}}>
      <Grid item xs={3}>
        <Sidebar />
        </Grid>
      <Grid item xs={6}>
      <Box sx={{ fontSize: '28px', fontWeight: 600, fontFamily: 'Roboto' }}>Twitter-clone</Box>
      </Grid>
      <Grid item xs={3}>
        <Search />
      </Grid>
    </Grid>

  )
}

export default App

