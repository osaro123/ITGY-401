import React from 'react'
import AnimatedText from '../AnimatedText'

const pricing = [
    {
        type: "Basic Cleaning",
        pricing: "$49"
    },
    {
        type: "Deep Cleaning",
        pricing: "$49"
    },
    {
        type: "Office Cleaning",
        pricing: "$49"
    },
]

const Pricing = () => {
  return (
    <div className='sm:mx-16 mx-8 py-[72px]'>
        <h3 className='text-[3.157rem] font-medium mb-2 tracking-tighter'>
            <AnimatedText>Affordable Cleaning Packages for Every Budget</AnimatedText>
        </h3>
    </div>
  )
}

export default Pricing