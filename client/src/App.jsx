import {Button, createTheme, CssBaseline, Grid, Hidden, ThemeProvider} from '@mui/material';
import {Box} from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar'
import Footerlogin from "./components/Footerlogin/Footerlogin.jsx";
import Search from './components/Search/Search.jsx'
import {createBrowserRouter, RouterProvider, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import {ForYou} from "./components/Home/ForYou";
import {Following} from "./components/Home/Following";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";
import Messages from "./pages/Messages/Messages";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Profile from "./pages/Profile/Profile";
import {useCallback, useState} from "react";
import {MainPage} from './pages/MainPage'

const routes = [
    {
        path: "/",
        // element: <div>main</div>,
        element: <MainPage />,
        errorElement: <div>Not found</div>
    },
    {
        path: "/home",
        element: <Home />,
    },

    {
        path: "/explore",
        element: <Explore />,
    },
    {
        path: "/notifications",
        element: <Notifications />,
    },
    {
        path: "/messages",
        element: <Messages />,
    },
    {
        path: "/bookmarks",
        element: <Bookmarks />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/",
        element: <Profile />,
    }
];


function App() {
    const [color, setColor] = useState("#ffcd07");

    const theme = useCallback(() => createTheme({
        palette: {
            background: {
                default: "#ffffff"
            },
            primary: {
                main: color
            }
        },
        info: {
            primary: {
                main: color
            }
        }
    }), [color]);

  return (

    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Grid container spacing={2} sx={{margin: "0 auto", maxWidth: "1082px"}}>
            <Grid item xs={3}>
                {/* <Button onClick={() => {setColor("#ffcd07")}}>Yellow</Button>
                <Button onClick={() => {setColor("#0000FF")}}>Blue</Button> */}
                <Sidebar />
            </Grid>
            <Grid item xs={12} md={5} sm={8}>
                <Routes>
                    {...routes.map(r => <Route {...r}/>)}
                </Routes>
            </Grid>
            <Hidden mdDown>
                <Grid item xs={3}>
                    <Search />
                </Grid>
            </Hidden>
        </Grid>
    </ThemeProvider>

  )
}

export default App



// import { Grid, Hidden } from '@mui/material';
// import {Box} from '@mui/material';
// import Sidebar from './components/Sidebar/Sidebar'
// import Footerlogin from "./components/Footerlogin/Footerlogin.jsx";
// import Search from './components/Search/Search.jsx';
// import Routers from 'react-router-dom'ж
// import Home from './pages/Home/Home.jsx';
// import Explore from './pages/Explore/Explore.jsx';
// import Messages from './pages/Messages/Messages.jsx';
// import Notifications from './pages/Notifications/Notifications.jsx';
// import Profile from './pages/Profile/Profile.jsx';
// import Bookmarks from './pages/Bookmarks/Bookmarks.jsx';
// import { ForYou } from './components/Home/ForYou.jsx';
// import { Following } from './components/Home/Following.jsx';


// const routers = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <div>Not found</div>
//   },
//   {
//     path: "/home",
//     element: <Home />,
//     children:[
//       {path: "/home",
//       element: <ForYou />,},
//       {path: "/home/following",
//       element: <Following />,}
//     ]
//   },
//   {
//     path: "/explore",
//     element: <Explore />,
//   },
//   {
//     path: "/notifications",
//     element: <Notifications />,
//   },
//   {
//     path: "/messages",
//     element: <Messages />,
//   },
//   {
//     path: "/bookmarks",
//     element: <Bookmarks />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   }
// ]);

// function App() {

//   return (

//     <Grid container spacing={2} sx={{margin: "0 150px"}}>

//       <Grid item xs={3}>
//         <Sidebar />
//         </Grid>
//       <Grid item xs={5}>
//         <Routers>
//           {...routers.map(r=> <Route { ...r} />)}
//         </Routers>
//       <Box sx={{ fontSize: '28px', fontWeight: 600, fontFamily: 'Roboto' }}>Twitter-clone</Box>
//     <Footerlogin/>
//       </Grid>
//       <Hidden mdDown>
//       <Grid item xs={3}>
//         <Search />
//       </Grid>
//       </Hidden>
//     </Grid>

//   )
// }

// export default App

