import React from 'react'
import img1 from "../assets/img1.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'sonner'

const Signup = () => {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    // setTimeout(() => {
    //   toast.success("Registered successfully")
    // },2000)
    navigate("/login")
  }
  return (
    <div className='grid grid-cols-2'>
      <div className='hidden sm:block'>
        <img src={img1} alt="login-image" className='h-screen w-full'/>
        {/* <Toaster position='top-right' richColors/> */}
      </div>
      <div className='flex flex-col justify-between py-4'>
        <Link to={"/"} className='text-center font-semibold'>CleanSwift</Link>
        <form onSubmit={handleSubmit} className='flex flex-col px-24 gap-4'>
          <h1 className='text-[2.074rem] font-semibold'>Sign Up</h1>
          <p className='opacity-60 max-w-md mb-4'>Join CleanSwift today and experience hassle-free cleaning services tailored to your needs.</p>
          <div className='flex flex-col gap-2'>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' autoComplete='on' required className='border py-2 px-4 rounded outline-none focus:border-stone-950'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' autoComplete='on' required className='border py-2 px-4 rounded outline-none focus:border-stone-950'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' autoComplete='on' required className='border py-2 px-4 rounded outline-none focus:border-stone-950'/>
          </div>
          <button className='bg-stone-950 hover:bg-opacity-90 text-white border py-4 mt-4 rounded-full'>Sign Up</button>
        </form>
        <p className='text-center'>Already have an account? <Link to={"/login"} className='hover:underline underline-offset-2 font-medium'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup