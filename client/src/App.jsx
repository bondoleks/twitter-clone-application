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

const routes = [
    {
        path: "/",
        element: <div>main</div>,
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
                default: "#000050"
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
                <Button onClick={() => {setColor("#ffcd07")}}>Yellow</Button>
                <Button onClick={() => {setColor("#0000FF")}}>Blue</Button>
                <Sidebar />
            </Grid>
            <Grid item xs={6}>
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

