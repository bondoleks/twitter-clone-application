import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router
} from "react-router-dom";
import App from './App.jsx';
import { Provider } from 'react-redux';
import { configureAppStore } from './redux/store';


const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <Router>
        <App/>
      </Router>
  </Provider>,
)

