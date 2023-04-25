import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../Home/home.css'

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar className='navbar' />
      <div className='main-part'>Home</div>
    </div>

  )
}

export default Home