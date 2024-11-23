import React, { useEffect, useRef } from 'react'
import AnimatedText from '../AnimatedText'
import { useScroll,motion, useTransform } from 'framer-motion'

const About = () => {
  const element = useRef(null)
  const {scrollYProgress} = useScroll({
    target: element,
    offset: ["start 0.85","start 0.25"]
  })

  useEffect(() => {
    scrollYProgress.on("change", e => console.log(e))
  },[])

  const value = "At CleanSwift, we believe that a clean and organized environment is the cornerstone of a happier, healthier, and more productive life. Our mission is to revolutionize the way you approach cleaning by offering a platform that seamlessly connects you to expert cleaning professionals. Whether it's your home, office, or specialized cleaning needs, we aim to provide exceptional service with just a few clicks. From easy online booking and tailored cleaning packages to reliable, trusted cleaners, CleanSwift ensures that your space receives the care and attention it deserves. Let us handle the mess so you can focus on what truly matters."

  const words = value.split(" ")
  return (
    <section id='about' className='sm:mx-16 mx-8 py-[72px]'>
        <h3 className='text-[3.157rem] font-medium mb-6 tracking-tighter '>
          <AnimatedText>Why Choose CleanSwift?</AnimatedText>
        </h3>
        <p 
          className='text-2xl leading-loose flex flex-wrap'
          ref={element}
        >
          {
            words.map((word,i) => {
              const start = i / words.length;
              const end = start + (1 / words.length)
              return <Word key={i} range={[start,end]} progress={scrollYProgress}>{word}</Word>
            })
          }
        </p>
    </section>
  )
}

export default About

const Word = ({children,range,progress}) => {
  const opacity = useTransform(progress,range,[0,1])
  return (
    <span 
      className='mr-3 relative'
    >
      <span className='absolute opacity-30'>{children}</span>
      <motion.span style={{opacity}}>
        {children}
      </motion.span>
    </span>
  )
}