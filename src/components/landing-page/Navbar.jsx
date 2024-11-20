import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center sm:mx-16 mx-8 py-4'>
        <h3 className='font-semibold'>CleanSwift</h3>
        <div className='flex gap-4 items-center text-[.9rem]'>
            <Link to={"/login"} className=' text-stone-950 hover:opacity-80'>Login</Link>
            <Link to={"/signup"} className='bg-stone-950 text-stone-100 px-3 py-1 rounded hover:opacity-90'>Signup</Link>
        </div>
    </nav>
  )
}

export default Navbar