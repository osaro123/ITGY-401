import React, { useState } from 'react'
import { BiPlus, BiX } from 'react-icons/bi'
import { motion } from "framer-motion"

const Booking = () => {
    const [bookingModal,setBookingModal] = useState(false)
  return (
    <div className='bg-white h-[200vh] rounded-lg mb-4 p-8'>
        <div className='flex justify-between items-start'>
            <div>
                <h1 className='font-medium text-[1.602rem]'>Book Your Cleaning Service</h1>
                <p className='text-[1rem] opacity-60 max-w-sm'>It's quick and easy! Choose your service, pick a date, and let us handle the rest.</p>
            </div>
            <button className='py-1.5 px-3 bg-stone-950 text-stone-100 rounded flex gap-1 items-center text-[.9rem]' onClick={() => setBookingModal(!bookingModal)}>
                <BiPlus size={18}/>
                Book service
            </button>
        </div>
        {bookingModal && (
            <motion.div 
                className='absolute h-screen w-full top-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center'
                initial={{
                    y: -20,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: .2
                }}
            >
                <div className='relative bg-white w-[90%] max-w-lg mx-auto p-8 rounded'>
                    <h1 className='mb-8 text-[1.424rem] font-medium'>Fill Out Your Booking Details</h1>
                    <div className='flex gap-1 flex-col'>
                        <label htmlFor="" className='text-[.8rem]'>Full Name</label>
                        <input type="text" className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'/>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <label htmlFor="" className='text-[.8rem]'>Email Address</label>
                        <input type="email" className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'/>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <label htmlFor="" className='text-[.8rem]'>Phone Number</label>
                        <input type="tel" className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'/>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <label htmlFor="" className='text-[.8rem]'>Address Line 1</label>
                        <input type="tel" className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'/>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <label htmlFor="" className='text-[.8rem]'>City</label>
                        <input type="tel" className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'/>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <label htmlFor="" className='text-[.8rem]'>Service</label>
                        <select name="" id="" className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'>
                            <option value="">Basic Cleaning</option>
                            <option value="">Deep Cleaning</option>
                            <option value="">Office Cleaning</option>
                            <option value="">Customized Cleaning</option>
                        </select>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <label htmlFor="" className='text-[.8rem]'>Date</label>
                        <input type="date" className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'/>
                    </div>
                    <button className='bg-stone-950 hover:bg-opacity-90 text-stone-100 px-3 py-1 rounded mt-4'>Book service</button>
                    <div className='absolute top-4 right-4'>
                        <BiX color='#0c0a09' size={25} className='cursor-pointer' onClick={() => setBookingModal(!bookingModal)}/>
                    </div>
                </div>
            </motion.div>
        )}
    </div>
  )
}

export default Booking