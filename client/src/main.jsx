import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Explore from './pages/Explore/Explore.jsx';
import Messages from './pages/Messages/Messages.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Bookmarks from './pages/Bookmarks/Bookmarks.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ForYou } from './components/Home/ForYou.jsx';
import { Following } from './components/Home/Following.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not found</div>
  },
  {
    path: "/home",
    element: <Home />,
    children:[
      {path: "/home",
      element: <ForYou />,},
      {path: "/home/following",
      element: <Following />,}
    ]
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
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>,
)
