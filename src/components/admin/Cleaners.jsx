import React, { useState } from 'react'
import { BiPlus, BiX } from 'react-icons/bi'
import {AnimatePresence, motion} from "framer-motion"
import { useCleanerStore } from '../../zustand/cleanerStore'
import { toast, Toaster } from 'sonner'

const Cleaners = () => {
    const [cleanerModal,setCleanerModal] = useState(false)
    const [formData,setFormData] = useState({
        name: "",
        phone: "",
        schedule: ""
    })

    const addCleaner = useCleanerStore((state) => state.addCleaner)
    const cleaners = useCleanerStore((state) => state.cleaners)
    
    const handleChange = (e) => {
        const {name,value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addCleaner(formData)

        setFormData({
            name: "",
            phone: "",
            schedule: ""
        })

        setCleanerModal(!cleanerModal)

        toast.success('Cleaner successfully added')
    }

  return (
    <div className='bg-white h-[200vh] rounded-lg mb-4 p-8'>
        <Toaster position='top-right' richColors/>
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
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-1'>
                                <label 
                                    htmlFor="name" 
                                    className='text-[.9rem]'
                                >
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    name='name' 
                                    id='name' 
                                    className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label 
                                    htmlFor="phone" 
                                    className='text-[.9rem]'
                                >
                                    Phone Number
                                </label>
                                <input 
                                    type="text" 
                                    id='phone' 
                                    name='phone' 
                                    className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label 
                                    htmlFor="schedule" 
                                    className='text-[.9rem]'
                                >
                                    Schedule/Availabilty
                                </label>
                                <input 
                                    type="text" 
                                    className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'
                                    id='schedule'
                                    name='schedule'
                                    value={formData.schedule}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button className='bg-stone-950 text-stone-100 px-3 py-1.5 rounded text-[.9rem]'>Add cleaner</button>
                        </form>
                        <div className='absolute top-4 right-4'>
                            <BiX color='#0c0a09' size={25} className='cursor-pointer' onClick={() => setCleanerModal(!cleanerModal)}/>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        <table className="w-full border-collapse border border-gray-300 mt-16">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Phone</th>
                    <th className="border border-gray-300 px-4 py-2">Schedule</th>
                </tr>
            </thead>
            <tbody>
                {cleaners.length > 0 ? (
                    cleaners.map((cleaner, i) => (
                        <tr key={i} className="odd:bg-white even:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{cleaner.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{cleaner.phone}</td>
                            <td className="border border-gray-300 px-4 py-2">{cleaner.schedule}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3} className="border border-gray-300 px-4 py-2 text-center">
                            No cleaners available
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Cleaners