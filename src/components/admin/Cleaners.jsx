import React, { useState } from 'react'
import { BiPlus, BiX } from 'react-icons/bi'
import {AnimatePresence, motion} from "framer-motion"

const Cleaners = () => {
    const [cleanerModal,setCleanerModal] = useState(false)
  return (
    <div className='bg-white h-[200vh] rounded-lg mb-4 p-8'>
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='font-medium text-[1.602rem]'>Cleaners</h1>
                <p className='text-[1rem] opacity-60'>Here are the list of cleaners we have</p>
            </div>
            <button className='bg-stone-950 text-stone-100 px-3 py-1.5 rounded flex items-center gap-1' onClick={() => setCleanerModal(!cleanerModal)}>
                <BiPlus size={18}/>
                Add Cleaners
            </button>
        </div>
        <AnimatePresence>
            {cleanerModal && (
                <motion.div
                    initial={{
                        y: -20,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    exit={{
                        y: -20,
                        opacity: 0
                    }}
                    transition={{
                        duration: .2
                    }} 
                    className='absolute h-screen w-full top-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center'
                >
                    <div className='relative bg-white w-[90%] max-w-lg mx-auto p-8 rounded'>
                        <h1 className='mb-8 text-xl font-medium'>Add Cleaner</h1>
                        <form action="">
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Name</label>
                                <input type="text" className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">Schedule</label>
                                <input type="text" className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="">******</label>
                                <input type="text" className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'/>
                            </div>
                            <button className='bg-stone-950 text-stone-100 px-3 py-1 rounded'>Add cleaner</button>
                        </form>
                        <div className='absolute top-4 right-4'>
                            <BiX color='#0c0a09' size={25} className='cursor-pointer' onClick={() => setCleanerModal(!cleanerModal)}/>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default Cleaners