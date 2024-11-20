import React from 'react'
import img2 from "../assets/img2.jpg"
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const handleSubmit = () => {
    const navigate = useNavigate()
    navigate("/login")
  }
  return (
    <div className='grid grid-cols-2'>
      <div className=''>
        <img src={img2} alt="login-image" className='h-screen w-full'/>
      </div>
      <div className='flex flex-col justify-between py-4'>
        <Link to={"/"} className='text-center font-semibold'>CleanSwift</Link>
        <form onSubmit={handleSubmit} className='flex flex-col px-24 gap-4'>
          <h1 className='text-[2.074rem] font-semibold'>Sign Up</h1>
          <p></p>
          <div className='flex flex-col gap-2'>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' autoComplete='on' className='border py-2 px-4 rounded outline-none focus:border-stone-950'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' autoComplete='on' className='border py-2 px-4 rounded outline-none focus:border-stone-950'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' autoComplete='on' className='border py-2 px-4 rounded outline-none focus:border-stone-950'/>
          </div>
          <button className='bg-stone-950 hover:bg-opacity-90 text-white border py-4 mt-4 rounded-full'>Sign Up</button>
        </form>
        <p className='text-center'>Already have an account? <Link to={"/login"} className='hover:underline underline-offset-2 font-medium'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup