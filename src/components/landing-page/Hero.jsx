import React from 'react'
import AnimatedText from '../AnimatedText'

const Hero = () => {
  return (
    <section id='hero' className='mt-40'>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <div className='max-w-3xl mx-auto text-center'>
            <h1 className='sm:text-7xl text-4xl tracking-tighter font-bold'>
              <AnimatedText>Clean Homes, Happier Lives - Book Your Professional Cleaning Service Today!</AnimatedText>
            </h1>
            <p className='text-[1rem] sm:max-w-lg max-w-xs mx-auto pt-6 pb-12'>
              <AnimatedText>Discover hassle-free cleaning solutions tailored to your needs. From deep cleaning to regular maintenance, CleanSwift has you covered.</AnimatedText>
            </p>
            <div className='flex gap-4 justify-center'>
                <button className='bg-stone-950 text-stone-100 px-3 py-1 rounded'>Book Now</button>
                <button>View Packages</button>
            </div>
        </div>
    </section>
  )
}

export default Hero