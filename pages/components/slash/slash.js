import { useState } from 'react'
import  {ChakraProps, chakra, forwardRef, Box, Flex, Heading } from "@chakra-ui/react"
import styles from './slash.module.css'
import React from 'react'
import { Varients, motion, isValidMotionProp } from 'framer-motion';
  
export default function Slash() {
    const [isOn, setIsOn] = useState(false);
    const [navExpanded, setNavExpanded] = useState(false)

    const expression = isOn ? {left: '-61vw'} : { right: '34px'}
	const slashVariants = {
		initial: { opacity: 1 },
		active: { opacity: 1 },
		styles: {rotate:'-42deg'},
		trans: {duration: .3}
	}

	console.log(slashVariants.styles)

    const toggleSwitch = () => setIsOn(!isOn);
    return (
        <Flex  align='right' justify='right' >

        <motion.div  onClick={toggleSwitch}  >
        
        <motion.div className={styles.slashtwo}initial="initial"  variants={slashVariants} animate={isOn ? {rotate: '0deg'} : { right: '30px'}} style={slashVariants.styles} transition={{duration: .3}} dataison={isOn.toString()} />  
        
		<motion.div className={styles.slashtwo}initial="initial"  variants={slashVariants} animate={isOn ? {left: 'clamp(65.3vw)', rotate: '0deg'} : { right: '42px'}} style={slashVariants.styles} transition={{duration: .3}} dataison={isOn.toString()} />

        
        <motion.div className={styles.slashthree}initial="initial"  variants={slashVariants} animate={isOn ? {left: '45.3vw', rotate: '0deg'} : { right: '54px'}} style={slashVariants.styles} transition={{duration: .3}} dataison={isOn.toString()} />
			
			<div>
			<motion.h1 className={styles.about}  initial={{opacity: 0}} transition={isOn ? {delay: .1, duration: .3} : {delay: 0, duration: .2}} animate={isOn ? { opacity: 1, } : {opacity: 0, x:100}}>About</motion.h1> 
			<motion.h1 className={styles.contact} inherit={false} initial={{opacity: 0}} transition={isOn ? {delay: .1, duration: .3} : {delay: 0, duration: .2}} animate={isOn ? { opacity: 1, } : {opacity: 0, x:100}}  style={{transform: 'rotate(0deg)'}} transform='rotate(0deg)'   >Contact</motion.h1>
			<motion.h1 className={styles.work} initial={{opacity: 0}} transition={isOn ? {delay: .1, duration: .3} : {delay: 0, duration: .2}} animate={isOn ? { opacity: 1, } : {opacity: 0, x:100}} >Work</motion.h1>
			</div>
        	 
		   
		</motion.div>   
        </Flex>   
    )
}