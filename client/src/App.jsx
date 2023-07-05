import {useDispatch, useSelector} from 'react-redux';
import { createTheme, CssBaseline, Grid, Hidden, ThemeProvider } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import Search from './components/Search/Search.jsx';
import { Routes, Route, Navigate, useLocation, useMatch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Notifications from "./pages/Notifications/Notifications";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import {useCallback, useEffect, useState} from "react";
import { MainPage } from './pages/MainPage';
import { CustomThemeContext } from "./context/CustomThemeContext";
import { ForYou } from "./components/Home/ForYou";
import { Following } from "./components/Home/Following";
import { TweetPage } from './pages/TweetPage/TweetPage';
import MessageMiddleColumn from "./pages/Messages/Components/MessageMiddleColumn.jsx";
import MessagesRightColumn from "./pages/Messages/Components/MessagesRightColumn.jsx";
import ActiveChat from './pages/Messages/Components/ActiveChat.jsx';
import ProfileId from './pages/Profile/ProfileId';
import ProfileUser from './pages/Profile/ProfileUser';
import ProfileFollowers from './pages/ProfileFollowers/ProfileFollowers';
import ProfileFollowing from './pages/ProfileFollowing/ProfileFollowing';

import Stomp, { clearInterval } from 'stompjs';
import SockJS from 'sockjs-client';
import {getUser} from './redux/user/logingThunk.jsx';
import { ActivatePage } from './pages/ActivatePage/ActivatePage';
import { QuoteRetweetModal } from './components/Tweet/ModalsTweetReaction/QuoteRetweetModal';
import { watchUserTweetsThunk } from './redux/user/watchUserTweetsThunk';
import { ForgotPage } from './pages/ForgotPage/ForgotPage';
import { ReplyModal } from './components/Tweet/ModalsTweetReaction/ReplyModal';
import { ChangePasswordPage } from './pages/ChangePassword/ChangePasswordPage';
import { ModalImageFullScreen } from './components/Tweet/ModalImageFullScreen';


const PrivateRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = useSelector(state => state.user.authorized)

    return isAuthenticated ? (
      <Element />
    ) : (
      <Navigate to="/" {...rest} />
    );
};

const routes = [
    {
        path: "/",
        element: <MainPage />,
        errorElement: <div>Not found</div>
    },
    {
        path: "/activate/:key",
        element: <ActivatePage />,
        errorElement: <div>Not found</div>
    },
    {
        path: "/forgotPassword/activate/:key",
        element: <ForgotPage />,
        errorElement: <div>Not found</div>
    },
    {
        path: "/home",
        // element: <Home />,
        element: <PrivateRoute element={Home} />,

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

        // element: <Explore />,
        element: <PrivateRoute element={Explore} />,
    },
    {
        path: "/notifications",
        // element: <Notifications />,
        element: <PrivateRoute element={Notifications} />,
    },
    {
        path: "/messages",
        // element: <MessageMiddleColumn />,
        element: <PrivateRoute element={MessageMiddleColumn} />,
    },
    {
        path: "/messages/:id",
        // element: <MessageMiddleColumn />,
        element: <PrivateRoute element={MessageMiddleColumn} />,



    },
    {
        path: "/bookmarks",

        // element: <Bookmarks />,
        element: <PrivateRoute element={Bookmarks} />,
    },
    {
        path: "/profile",

        // element: <ProfileUser />,
        element: <PrivateRoute element={ProfileUser} />,
    },
    {
        path: "/profile/:id",
        element: <ProfileId />,
        // element: <PrivateRoute element={ProfileId} />,
    },
    {
        path: "/profile/following",
        element: <ProfileFollowing />
    },
    {
        path: "/profile/followers",
        element: <ProfileFollowers />
    },
    {
        path: "/tweet/:tweet_id",
        // element: <TweetPage />,
        element: <PrivateRoute element={TweetPage} />,
    },
    {
        path: "/change_password",
        element: <PrivateRoute element={ChangePasswordPage} />,
    },
];


function App() {
    const [color, setColor] = useState("#00FF00");
    const [themeMode, setThemeMode] = useState("light");
    const isAuthenticated = useSelector(state => state.user.authorized);
    const isActiveMessage = useMatch("/messages/:id");
    const isActivateKey = useMatch("/activate/:key");
    const isActivateForgotPassword = useMatch("forgotPassword/activate/:key");

    console.log(Boolean(isAuthenticated));

    const dispatch = useDispatch();

    useEffect(() => {
        // Создаем WebSocket-соединение
        // const socket = new SockJS('https://twitter-clone-application.herokuapp.com/chat/message');
        const socket = new SockJS('https://twitter-clone-application.herokuapp.com/ws-message');
        // const socket = new SockJS('https://twitter-clone-application.herokuapp.com');
        // const socket = new SockJS('http://localhost:5173');
        // const socket = new SockJS('https://twitter-clone-application.vercel.app');
        const stompClient = Stomp.over(socket);

        // Устанавливаем колбэк-функцию при успешном соединении
        stompClient.connect({}, () => {
            // Подписываемся на каналы
            stompClient.subscribe('/app/chat/message', (message) => {
                console.log('Received message from /chat:', message.body);
                // Действия с полученным сообщением
            });

            stompClient.subscribe('/app/send', (message) => {
                console.log('Received message from /chat:', message.body);
                // Действия с полученным сообщением
            });

            stompClient.subscribe('/notification', (message) => {
                console.log('Received message from /notification:', message.body);
                // Действия с полученным сообщением
            });
        });

        // Возвращаем функцию для закрытия соединения при размонтировании компонента
        return () => {
            stompClient.disconnect();
        };
    }, []);

    // Get initial user data
    useEffect(() => {
        let timer = null;
        if (isAuthenticated){
            dispatch(getUser());
            timer = setInterval(()=>{
                dispatch(watchUserTweetsThunk())
            },10000)
        }
return () =>{
    clearInterval(timer);
}
    }, [])




    const lightTheme = createTheme({
        palette: {
            type: "light",
            background: {
                default: "#FFFFFF", // белый фон
            },
            backgroundModal: "#FFFFFF",
            text: {
                primary: "#232323", // черный шрифт
            },
            paper: {
                main: "#FFFFFF"
            },
            gray: {
                main: '#000000'
            },
            colorBox: '#F9F9F9'
        }
    });

    const darkTheme = createTheme({
        palette: {
            type: "dark",
            background: {
                default: "#15202B", // темно-серый фон (как в твиттере)
            },
            backgroundModal: "#15202B",
            text: {
                primary: "#9A9A9A", // белый шрифт
            },
            paper: {
                main: "#15202B"
            },
            primary: {
                main: '#FFFFFF'
            },
            gray: {
                main: '#FFFFFF'
            },
            typography: {
                color: '#FFFFFF'
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
                primary: "#FFFFFF",
            },
            paper: {
                main: "#000000"
            },
            primary: {
                main: '#FFFFFF'
            },
            gray: {
                main: '#FFFFFF'
            },
            typography: {
                color: '#FFFFFF'
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
        } else if(!isActivateKey || !isActivateForgotPassword){
            rightColumn = <Search />
        }

        return (
          <Grid item md={location.pathname === '/messages' || location.pathname.startsWith("/messages/") ? 5 : 3}>
              {rightColumn}
          </Grid>
        )
    }
    return (

        <CustomThemeContext.Provider value={{ color, themeMode, setThemeMode, setColor }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <Grid container spacing={2} sx={{ margin: "0 auto", maxWidth: "1082px", paddingBottom: !isAuthenticated ? "65px" : '32px', width: '100%!important' }}>
                        {Boolean(!useMatch("/activate/:key")) &&
                        <Grid item md={3} sx={{paddingTop:'0!important',paddingLeft:'0!important'}}>
                            <Sidebar />
                        </Grid>
                        }
                        <Grid item xs={12} md={location.pathname === "/messages" || location.pathname.startsWith("/messages/") ? 4 : 6} sm={8} sx={{paddingTop:'0!important',paddingLeft:'0!important'}}>
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
                    <QuoteRetweetModal/>
                    <ReplyModal/>
                    <ModalImageFullScreen/>
            </ThemeProvider>
        </CustomThemeContext.Provider>

    )
}

export default App

