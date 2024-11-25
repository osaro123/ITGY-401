import React, { useState } from 'react'
import CleaningServices from '../CleaningServices'
import { BiPlus, BiX } from 'react-icons/bi'
import {AnimatePresence, motion} from "framer-motion"
import { toast, Toaster } from 'sonner'
import { useServiceStore } from '../../zustand/serviceStore'

const Services = () => {
    const [serviceModal,setServiceModal] = useState(false)
    const [formData,setFormData] = useState({
        name: "",
        price: "",
        description: "",
        duration: ""
    })

    const handleChange = (e) => {
        const {name,value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const addService = useServiceStore((state) => state.addService)
    const services = useServiceStore((state) => state.services)

    const handleSubmit = (e) => {
        e.preventDefault()

        addService(formData)

        setFormData({
            name: "",
            price: "",
            description: "",
            duration: ""
        })

        setServiceModal(!serviceModal)

        toast.success("Service successfully added")
    }
  return (
    <div className='bg-white h-[200vh] rounded-lg mb-4 p-8'>
        <Toaster position='top-right' richColors/>
        <div className='flex justify-between items-start'>
            <div>
                <h1 className='font-medium text-[1.602rem]'>Cleaning Services</h1>
                <p className='text-[1rem] opacity-60'>Here are the list of cleaning services we have</p>
            </div>
            <button 
                className='bg-stone-950 text-stone-100 cursor-pointer px-3 py-1.5 rounded flex items-center gap-1 text-[.9rem]'
                onClick={() => setServiceModal(!serviceModal)}
            >
                <BiPlus size={18}/>
                Add Service
            </button>
        </div>
        {/* <CleaningServices/> */}
        <AnimatePresence>
        {serviceModal && (
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
                exit={{
                    y: -20,
                    opacity: 0
                }}
                transition={{
                    duration: .2
                }}
            >
                <div className='relative bg-white w-[90%] max-w-lg mx-auto p-8 rounded'>
                    <h1 className='mb-8 text-[1.424rem] font-medium'>Add service</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-1'>
                            <label 
                                htmlFor="name"
                                className='text-[.9rem]'
                            >
                                Service Name
                            </label>
                            <input 
                                type="text" 
                                id='name' 
                                name='name' 
                                className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label 
                                htmlFor="price"
                                className='text-[.9rem]'
                            >
                                Price
                            </label>
                            <input 
                                type="text" 
                                id='price' 
                                name='price' 
                                className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label 
                                htmlFor="description"
                                className='text-[.9rem]'
                            >
                                Description
                            </label>
                            <input 
                                type="text" 
                                id='description' 
                                name='description' 
                                className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label 
                                htmlFor="duration"
                                className='text-[.9rem]'
                            >
                                Duration
                            </label>
                            <input 
                                type="text" 
                                id='duration' 
                                name='duration' 
                                className='border px-4 py-2 rounded outline-none focus:border-stone-950 mb-4'
                                value={formData.duration}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className='bg-stone-950 text-stone-100 px-3 py-1.5 rounded text-[.9rem]'>Add Service</button>
                        <div className='absolute top-4 right-4'>
                            <BiX color='#0c0a09' size={25} className='cursor-pointer' onClick={() => setServiceModal(!serviceModal)}/>
                        </div>
                    </form>
                </div>
            </motion.div>
        )}
        </AnimatePresence>

        <table className="w-full border-collapse border border-gray-300 mt-16">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Service Name</th>
                    <th className="border border-gray-300 px-4 py-2">Price</th>
                    <th className="border border-gray-300 px-4 py-2">Description</th>
                    <th className="border border-gray-300 px-4 py-2">Duration</th>
                </tr>
            </thead>
            <tbody>
                {services.length > 0 ? (
                    services.map((service, i) => (
                        <tr key={i} className="odd:bg-white even:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{service.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{service.price}</td>
                            <td className="border border-gray-300 px-4 py-2">{service.description}</td>
                            <td className="border border-gray-300 px-4 py-2">{service.duration}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4} className="border border-gray-300 px-4 py-2 text-center">
                            No cleaners available
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Services