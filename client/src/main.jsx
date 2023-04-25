import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Explore from './pages/Explore/Explore.jsx'
import Messages from './pages/Messages/Messages.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';
import User_profile from './pages/User_profile/User_profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/user_profile",
    element: <User_profile />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
