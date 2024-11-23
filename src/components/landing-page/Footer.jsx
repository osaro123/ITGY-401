import React from 'react'
import {motion} from "framer-motion"
import AnimatedText from '../AnimatedText'

const Footer = () => {
  return (
    <div
        className='relative h-[50vh]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='sm:px-16 px-8 bg-stone-950 text-stone-100 fixed h-[50vh] w-full bottom-0'>
            <div className='flex justify-between items-center mb-4 py-16'>
                <h3 className='max-w-md hidden sm:block text-xl'>
                    <AnimatedText>CleanSwift is your go-to platform for hassle-free cleaning services. Book online, customize your needs, and enjoy a spotless space with the help of trusted professionals.</AnimatedText>
                </h3>
                <div>
                    <ul>
                        <h3 className='pb-4 opacity-60'>Sitemap</h3>
                        <FlipLink href='#about' color="#111">About</FlipLink>
                        <FlipLink href='#services' color="#111">Services</FlipLink>
                        <FlipLink href='#how-it-works' color="#111">How it works</FlipLink>
                        <FlipLink href='#pricing' color="#111">Pricing</FlipLink>
                    </ul>
                    {/* <div>
                        <h3></h3>
                    </div> */}
                </div>
            </div>
            <div className='border-t-[.1px] border-stone-50 py-8 flex justify-between items-center text-[.8rem]'>
                <h3 className='font-semibold text-[1.1rem]'>CleanSwift</h3>
                <p>Copyright &copy; 2024 CleanSwift</p>
            </div>
        </div>
    </div>
  )
}

export default Footer

export const FlipLink = ({href ,children,color}) => {
    return (
        <motion.a 
            href={href}
            initial="initial"
            whileHover="hovered"
            className={`relative block overflow-hidden whitespace-nowrap cursor-pointer text-[${color}]`}
        >
            <motion.div
                variants={{
                    initial: {y: 0},
                    hovered: {y: "-100%"}
                }}
                className=''
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    initial: {y: "100%"},
                    hovered: {y: 0}
                }}
                className='absolute inset-0'
            >
                {children}
            </motion.div>
        </motion.a>
    )
    
}