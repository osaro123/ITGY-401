import React from 'react'
import {motion} from "framer-motion"
import logo1 from "../../assets/logo1.svg"
import logo2 from "../../assets/logo2.svg"
import logo3 from "../../assets/logo3.svg"
import logo4 from "../../assets/logo4.svg"
import logo5 from "../../assets/logo5.svg"
import logo6 from "../../assets/logo6.svg"

const logos = [
    {
        id: 1,
        src: logo1 
    },
    {
        id: 2,
        src: logo2 
    },
    {
        id: 3,
        src: logo3 
    },
    {
        id: 4,
        src: logo4 
    },
    {
        id: 5,
        src: logo5 
    },
    {
        id: 6,
        src: logo6 
    },
]

const Logo = () => {
    return (
        <div className='py-[72px]'>
            <h3 className='pb-16 text-xl opacity-60 text-center'>Our sponsors</h3>
            <div className='flex overflow-hidden relative before:content-[""] after:content-[""] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 before:bg-[linear-gradient(to_right,#fff,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#fff,rgba(0,0,0,0))] before:left-0 after:right-0 before:top-0 after:top-0'>
                <motion.div 
                    transition={{
                        duration: 10,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    initial={{
                        translateX: 0,
                    }}
                    animate={{
                        translateX: "-50%"
                    }}
                    className='flex gap-16 flex-none pr-16 '
                >
                    {logos.map(({id,src},i) => (
                        <img src={src} alt='' key={i}/>
                    ))}
                    {logos.map(({id,src},i) => (
                        <img src={src} alt='' key={i}/>
                    ))}
                </motion.div>
            </div>
        </div>
    )
    }

export default Logo