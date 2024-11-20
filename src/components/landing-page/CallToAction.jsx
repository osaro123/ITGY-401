import React from 'react'
import AnimatedText from '../AnimatedText'

const CallToAction = () => {
  return (
    <div className='sm:mx-16 mx-8 py-32'>
        <h3 className='text-[3.157rem] font-medium tracking-tighter text-center'>
            <AnimatedText>Ready for a Cleaner Space?</AnimatedText>
        </h3>
        <p className='text-center mt-4 mb-8 max-w-md mx-auto'>
            <AnimatedText>Experience the convenience of CleanSwift today. Book your cleaning service in just a few clicks!</AnimatedText>
        </p>
        <div className='flex gap-4 justify-center items-center'>
            <button className='bg-stone-950 text-stone-100 px-4 py-2 rounded'>Book Your Cleaning Now</button>
            <button>Contact Us</button>
        </div>
    </div>
  )
}

export default CallToAction