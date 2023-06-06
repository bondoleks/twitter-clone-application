import {
    createTheme,
    CssBaseline,
    Grid,
    Hidden,
    ThemeProvider
} from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar'
import Search from './components/Search/Search.jsx'
// import {Routes, Route, useMatch} from 'react-router-dom';
import { Routes, Route, Navigate, useMatch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import { useCallback, useState } from "react";
import { MainPage } from './pages/MainPage'
import { CustomThemeContext } from "./context/CustomThemeContext";
import { ForYou } from "./components/Home/ForYou";
import { Following } from "./components/Home/Following";
import { TweetPage } from './pages/TweetPage/TweetPage';
import MessageMiddleColumn from "./pages/Messages/Components/MessageMiddleColumn.jsx";
import MessagesRightColumn from "./pages/Messages/Components/MessagesRightColumn.jsx";
import { useLocation } from 'react-router-dom';
import { MessagesContextProvider } from './context/messagesContext.jsx';
import ActiveChat from './pages/Messages/Components/ActiveChat.jsx';
import ProfileId from './pages/Profile/ProfileId';
import ProfileUser from './pages/Profile/ProfileUser';



const PrivateRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = true; // Здесь необходимо определить условие авторизации

    return isAuthenticated ? (
        <Element />
    ) : (
        <Navigate to="/" replace state={{ from: rest.location.pathname }} />
    );
};


// const routes = () => {
//     return (

//         <Routes>
//             <Route path="/" element={<MainPage />} />
//             <Route path="/home" element={<PrivateRoute element={<Home />} />} />
//             <Route path="/home/forYou" element={<ForYou />} />
//             <Route path="/home/following" element={<Following />} />
//             <Route path="/explore" element={<Explore />} />
//             <Route path="/notifications" element={<Notifications />} />
//             <Route path="/messages" element={<MessageMiddleColumn />} />
//             <Route path="/messages/:id" element={<MessageMiddleColumn />} />
//             <Route path="/bookmarks" element={<Bookmarks />} />
//             <Route path="/profile" element={<ProfileUser />} />
//             <Route path="/profile/:id" element={<ProfileId />} />
//             <Route path="/tweet/:tweet_id" element={<TweetPage />} />
//             <Route path="*" element={<p>There's nothing here: 404!</p>} />
//         </Routes>
//     );
// };

const routes = [
    {
        path: "/",
        element: <MainPage />,
        errorElement: <div>Not found</div>
    },
    {
        path: "/home",
        element: <Home />,
        // element: <PrivateRoute element={<Home />} redirectPath="/" />,
        children: <>
            <Route path={''} element={<ForYou />} />
            <Route path={'following'} element={<Following />} />
        </>
    },
    {
        path: "/home/forYou",
        element: <ForYou />,
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
        element: <MessageMiddleColumn />,
    },
    {
        path: "/messages/:id",
        element: <MessageMiddleColumn />,
    },
    {
        path: "/bookmarks",
        element: <Bookmarks />,
    },
    {
        path: "/profile",
        element: <ProfileUser />,
    },
    {
        path: "/profile:id",
        element: <ProfileId />,
    },
    {
        path: "/tweet/:tweet_id",
        element: <TweetPage />,
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
        } if (themeMode === "dark") {
            return darkTheme;
        }
        else {
            return blackTheme;
        }
    }, [themeMode]);

    const location = useLocation();

    const handleRenderRightColumn = (path) => {

        let isActiveMessage = useMatch("/messages/:id")
        let rightColumn = null;

        if (path === '/messages') {
            rightColumn = <MessagesRightColumn />
        } else if (isActiveMessage) {
            rightColumn = <ActiveChat />
        } else {
            rightColumn = <Search />
        }

        return (
            <Grid item md={location.pathname === '/messages' ? 5 : 3}>
                {rightColumn}
            </Grid>
        )
    }


    return (

        <CustomThemeContext.Provider value={{ color, themeMode, setThemeMode, setColor }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MessagesContextProvider>
                    <Grid container spacing={2} sx={{ margin: "0 auto", maxWidth: "1082px" }}>
                        <Grid item md={3}>
                            <Sidebar />
                        </Grid>
                        <Grid item xs={12} md={location.pathname === '/messages' ? 4 : 6} sm={8}>
                            <Routes>
                                {/* {...routes.map(r => <Route {...r} />)} */}
                                {routes.map((route, index) => (
                                    <Route key={index} {...route} />
                                ))}
                            </Routes>
                        </Grid>
                        <Hidden mdDown>
                            {handleRenderRightColumn(location.pathname)}
                        </Hidden>
                    </Grid>
                </MessagesContextProvider>
            </ThemeProvider>
        </CustomThemeContext.Provider>

    )
}

export default App

