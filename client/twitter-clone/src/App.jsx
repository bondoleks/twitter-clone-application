import { Link } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <div className='App'>

      <h1>Twitter-clone</h1>

      <nav>
          <ul>
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/explore`}>Explore</Link>
            </li>
            <li>
              <Link to={`/notifications`}>Notifications</Link>
            </li>
            <li>
              <Link to={`/messages`}>Messages</Link>
            </li>
            <li>
              <Link to={`/user_profile`}>User_profile</Link>
            </li>
          </ul>
        </nav>
        
    </div>
  )
}

export default App
