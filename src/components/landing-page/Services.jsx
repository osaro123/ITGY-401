import React from 'react'
import AnimatedText from '../AnimatedText'

const Services = () => {
  return (
    <div className='sm:mx-16 mx-8 py-[72px]'>
        <h3 className='text-[3.157rem] font-medium tracking-tighter'>
            <AnimatedText>Our Cleaning Services</AnimatedText>
        </h3>
        <p className='opacity-60 max-w-sm'>
            <AnimatedText>Choose from a variety of tailored cleaning packages designed to meet your needs.</AnimatedText>
        </p>
    </div>
  )
}

export default Services