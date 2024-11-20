import React from 'react'
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <div className='sm:px-16 px-8 bg-stone-950 text-stone-100'>
        <div className='flex justify-between items-center mb-4 py-16'>
            <h3 className='max-w-md text-xl leading-loose'>CleanSwift is your go-to platform for hassle-free cleaning services. Book online, customize your needs, and enjoy a spotless space with the help of trusted professionals.</h3>
            <div>
                <ul>
                    <h3 className='pb-4 opacity-60'>Sitemap</h3>
                    <FlipLink href='' color="#111">About</FlipLink>
                    <FlipLink href='' color="#111">Services</FlipLink>
                    <FlipLink href='' color="#111">How it works</FlipLink>
                    <FlipLink href='' color="#111">Pricing</FlipLink>
                </ul>
                <div>
                    <h3></h3>
                </div>
            </div>
        </div>
        <div className='border-t-[.1px] border-stone-50 py-8 flex justify-between items-center text-[.8rem]'>
            <h3 className='font-semibold text-[1.1rem]'>CleanSwift</h3>
            <p>Copyright &copy; 2024 CleanSwift</p>
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