import { Link } from 'react-router-dom'
import './App.css'
import Button from '@mui/material/Button'


function App() {

  return (
    <div className='App'>

      <h1>Twitter-clone</h1>
      <div>
        <Button style={{margin: 10}} variant="contained">Hello World</Button>
        <Button variant="outlined">Hello React</Button>
      </div>

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
