import { Button, createTheme, CssBaseline, Grid, Hidden, ThemeProvider } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar'
import Search from './components/Search/Search.jsx'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";
import Messages from "./pages/Messages/Messages";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Profile from "./pages/Profile/Profile";
import { useCallback, useState } from "react";
import { MainPage } from './pages/MainPage'

const routes = [
    {
        path: "/",
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
];


function App() {
    const [color, setColor] = useState("#00ff00");

    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = createTheme({
        palette: {
            type: "light",
            background: {
                default: "#ffffff", // белый фон
            },
            text: {
                primary: "#232323", // черный шрифт
            },
            paper: {
                main: "#ffffff"
            },
        }
    });

    const darkTheme = createTheme({
        palette: {
            type: "dark",
            background: {
                default: "#15202b", // темно-серый фон (как в твиттере)
            },
            text: {
                primary: "#9a9a9a", // белый шрифт
            },
            paper: {
                main: "#15202b"
            },
            primary: {
                main: '#ffffff'
            },
            gray: {
                main: '#ffffff'
            },
            typography: {
                color: '#ffffff'
            },
        }
    });

    const theme = useCallback(() => {
        if (themeMode === "light") {
            return lightTheme;
        } else {
            return darkTheme;
        }
    }, [themeMode]);


    return (

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid container spacing={2} sx={{ margin: "0 auto", maxWidth: "1082px" }}>
                <Grid item xs={3}>
                    {/* <Button onClick={() => {setColor("#ffcd07")}}>Dark</Button>
                <Button onClick={() => {setColor("#0000FF")}}>White</Button> */}
                    <Button onClick={() => { setThemeMode("dark"); }}>Dark</Button>
                    <Button onClick={() => { setThemeMode("light"); }}>White</Button>
                    <Sidebar />
                </Grid>
                <Grid item xs={12} md={5} sm={8}>
                    <Routes>
                        {...routes.map(r => <Route {...r} />)}
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

