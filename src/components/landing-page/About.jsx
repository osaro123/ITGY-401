import React from 'react'
import AnimatedText from '../AnimatedText'

const About = () => {
  return (
    <div className='sm:mx-16 mx-8 py-[72px]'>
        <h3 className='text-[3.157rem] font-medium mb-6 tracking-tighter '>
          <AnimatedText>Why Choose CleanSwift?</AnimatedText>
        </h3>
        <p className='text-2xl opacity-60 leading-relaxed'>
        At CleanSwift, we believe that a clean and organized environment is the cornerstone of a happier, healthier, and more productive life. Our mission is to revolutionize the way you approach cleaning by offering a platform that seamlessly connects you to expert cleaning professionals. Whether it's your home, office, or specialized cleaning needs, we aim to provide exceptional service with just a few clicks. From easy online booking and tailored cleaning packages to reliable, trusted cleaners, CleanSwift ensures that your space receives the care and attention it deserves. Let us handle the mess so you can focus on what truly matters.</p>
    </div>
  )
}

export default About