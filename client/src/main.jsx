import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router
} from "react-router-dom";
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <Router>
        <App/>
      </Router>
  </Provider>,
)

