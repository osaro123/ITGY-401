import React from 'react'
import CleaningServices from './CleaningServices.jsx'

const Services = () => {
  return (
    <div className='bg-white h-[200vh] rounded-lg mb-4 p-8'>
        <h1 className='font-medium text-[1.602rem]'>Cleaning Services</h1>
        <p className='text-[1rem] opacity-60'>Here are the list of cleaning services we have</p>
        <CleaningServices/>
    </div>
  )
}

export default Services