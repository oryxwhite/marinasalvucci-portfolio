import { useState } from 'react'
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <nav onClick={() => setIsOpen(!isOpen)} className="relative container mx-auto">
    <div className="flex justify-end container mx-auto mt-14 px-10 -space-x-[3.2rem]">
        
        <motion.div animate={isOpen ? { rotate: 45} : {x: 0, rotate: 45}} transition={{duration: .2, ease: 'easeInOut'}} className='relative w-10 sm:w-16 h-[3px] bg-white rotate-45' />
        <motion.span animate={isOpen ? {rotate: -45} : {x: 0, rotate: 45}} transition={{duration: .2, ease: 'easeInOut'}} className={`w-10 sm:w-16 h-[3px] bg-white rotate-45 mx-12  `} />
        
        <motion.span animate={isOpen ? { rotate: 45} : { rotate: 45}} transition={{duration: .2, ease: 'easeInOut'}} className="w-10 sm:w-16 h-[3px] bg-white rotate-45 mx-12" /> 
        
     </div>
     <div className='flex flex-row justify-end mx-28 space-x-[2.4rem] -mt-[34px]'>
        <motion.h2 animate={isOpen ? {  opacity: 1} : { opacity: 0}} transition={{duration: .2, ease: 'easeInOut'}} className='text-white '>ABOUT</motion.h2>
        <motion.h2 animate={isOpen ? { opacity: 1} : { opacity: 0}} transition={{duration: .2, ease: 'easeInOut'}} className='text-white'>WORK</motion.h2>
        <motion.h2 animate={isOpen ? { opacity: 1} : { opacity: 0}} transition={{duration: .2, ease: 'easeInOut'}} className='text-white '>CONTACT</motion.h2>
        
     </div>   
   </nav>   
   
  )}