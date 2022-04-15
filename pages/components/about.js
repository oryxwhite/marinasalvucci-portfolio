import { Box, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"

export default function About() {
    return (
        <div className=" flex mt-[8em] xl:mt-[12em]" id="about" mt='8em'>
        <Box mt='4em' className="flex flex-col justify-center items-center" >
            <Box right="-25px" position='relative' bg='#565656' w='137px' h='5px' transform='rotate(42deg)' />
            <Box right='0px' position='relative' bg='#565656' w='137px' h='5px' transform='rotate(42deg)' />
            <Box  right='25px'bg='#565656' position='relative' w='137px' h='5px' transform='rotate(42deg)' />

            <h2 className="xl:mb-8 text-white text-[48px] bottom-[44px] left-[6px] xl:-left-[2px] xl:bottom-[40px] relative font-serif font-[800] tracking-[3px] xl:text-6xl" fontWeight='600' fontSize='48px' bottom='40px' left='3px' position='relative' fontFamily='Playfair Display' color='white'> About </h2>

            <div className="text-serif w-11/12 mt-[1em] lg:text-lg text-white text-center">
               <p> Hello! My name is <strong className="text-[#629add]">Marina</strong> </p>
               <p className="mt-4 xl:mt-8"> I love building elegant, responsive front ends with a focus on performance, SEO optimization, and accessibility.  </p>
               <p className="mt-4 xl:mt-8"> I’m interested in user interactivity, devloping design systems, web audio, and creative applications of web technology. </p>
               <p className="mt-4 xl:mt-8"> My skills include API integration, E-commerce solutions including web store setup and payment processing, headless CMS integration, CSS animation, and mobile-first design. </p>
               <p className="mt-4 xl:mt-8"> In my free time I like to DJ at local clubs and make music with my modular synthesizer. </p>
            </div>

            <div className=" grid-flow-row grid-cols-4 grid-rows-2 gap-y-8 gap-x-8 grid mt-10 lg:mt-14 xl:mt-20 md:flex">
                <img src='reactwhite.png' className="icon" />
                <img src='nextjs.png' className="icon" />    
                <img src='nodewhite.png' className="icon" />    
                <img src='tailwindwhite.png' className="icon" />    
                <img src='framer-motion.png' className="icon " />    
                <img src='mongo.png' className="icon p-[2px]" />    
                  
                <img src='cmd.png' className="icon" />    
                <img src='wordpress.png' className="icon " />    

            </div>


        </Box>
        </div>
    )
    
}