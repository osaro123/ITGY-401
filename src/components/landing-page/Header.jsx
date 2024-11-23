import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = () => {
  return (
    <header className='min-h-screen' id='header'>
        <Navbar/>
        <Hero/>
    </header>
  )
}

export default Header