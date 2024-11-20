import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = () => {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Header