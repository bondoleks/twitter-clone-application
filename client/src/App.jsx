

import {
    Button,
    createTheme,
    CssBaseline,
    Grid,
    Hidden,
    ThemeProvider
} from '@mui/material';
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

import { CustomThemeContext } from "./context/CustomThemeContext";


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

            backgroundModal: "#ffffff",


            text: {
                primary: "#232323", // черный шрифт
            },
            paper: {
                main: "#ffffff"
            },
            gray: {
                main: '#000000'
            },
            colorBox: '#f9f9f9'
        }
    });


    const darkTheme = createTheme({
        palette: {
            type: "dark",
            background: {
                default: "#15202b", // темно-серый фон (как в твиттере)
            },

            backgroundModal: "#15202b",

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
            colorBox: '#252525'
        }
    });


    const blackTheme = createTheme({
        palette: {
            type: "black",
            background: {
                default: "#000000",
            },
            backgroundModal: "#222222",

            text: {
                primary: "#ffffff",
            },
            paper: {
                main: "#000000"
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
            colorBox: '#252525'
        }
    });

    const theme = useCallback(() => {
        if (themeMode === "light") {
            return lightTheme;
        } if (themeMode === "black") {
            return blackTheme;
        } else {
            return darkTheme;
        }
    }, [themeMode]);


    return (
        <CustomThemeContext.Provider value={{ color, themeMode, setThemeMode, setColor }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Grid container spacing={2} sx={{ margin: "0 auto", maxWidth: "1082px" }}>
                    <Grid item md={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12} md={6} sm={8}>
                        <Routes>
                            {...routes.map(r => <Route {...r} />)}
                        </Routes>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item md={3}>
                            <Search />
                        </Grid>
                    </Hidden>
                </Grid>
            </ThemeProvider>
        </CustomThemeContext.Provider>


    )
}

export default App
