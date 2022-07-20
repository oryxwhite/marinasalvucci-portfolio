import { useState,useEffect } from 'react'
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
  <nav onClick={() => setIsOpen(!isOpen)} className={`relative self-end`}>
    <div className="flex justify-end items-end  mt-[48px] px-10 -space-x-[3.2rem]">
        
        <motion.div animate={isOpen ? { rotate: 45} : {x: 0, rotate: 45}} transition={{duration: .2, ease: 'easeInOut'}} className='relative w-10  h-[3px] bg-white rotate-45' />
        <motion.span animate={isOpen ? {rotate: -45} : {x: 0, rotate: 45}} transition={{duration: .2, ease: 'easeInOut'}} className={`w-10  h-[3px] bg-white rotate-45 mx-12  `} />
        <motion.span animate={isOpen ? { rotate: 45} : { rotate: 45}} transition={{duration: .2, ease: 'easeInOut'}} className="w-10  h-[3px] bg-white rotate-45 mx-12" /> 
        
     </div>
     <div className='flex flex-row justify-end mx-[94px] xl:mx-[110px] space-x-[2.4rem] -mt-[10px] font-serif xl:text-xl'>
        <motion.a animate={isOpen ? { opacity: 1} : { opacity: 0}} transition={{duration: .2, ease: 'easeInOut'}} href='#about'className='text-white hover:text-[#2a69b6]'>ABOUT</motion.a>
        <motion.a animate={isOpen ? { opacity: 1} : { opacity: 0}} transition={{duration: .2, ease: 'easeInOut'}} href='#work' className='text-white hover:text-[#2a69b6] cursor-pointer'>WORK</motion.a>
        <motion.a animate={isOpen ? { opacity: 1} : { opacity: 0}} transition={{duration: .2, ease: 'easeInOut'}} href="#contact" className='text-white hover:text-[#2a69b6]'>CONTACT</motion.a>
        
     </div>   
   </nav>   

  )}