import React from 'react'
import AnimatedText from '../AnimatedText'

const howItWorks = [
    {
        title: "Book Online",
        description: "Choose your service, pick a date, and submit your booking."
    },
    {
        title: "We Clean",
        description: "Our professionals arrive on time and clean to perfection."
    },
    {
        title: "Enjoy Your Space",
        description: "Relax and enjoy a spotless environment."
    },
]

const HowItWorks = () => {
  return (
    <section id='how-it-works' className='sm:mx-16 mx-8 py-[72px]'>
        <h3 className='text-[3.157rem] font-medium mb-2 tracking-tighter'>
            <AnimatedText>How CleanSwift Works</AnimatedText>
        </h3>
    </section>
  )
}

export default HowItWorks