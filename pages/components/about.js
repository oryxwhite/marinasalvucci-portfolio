import { Box, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"

export default function About() {
    return (
        <Flex id="work">
        <Box className="flex flex-col justify-center items-center" mt='12em'>
            <Box right="-25px" position='relative' bg='#565656' w='137px' h='5px' transform='rotate(42deg)' />
            <Box right='0px' position='relative' bg='#565656' w='137px' h='5px' transform='rotate(42deg)' />
            <Box  right='25px'bg='#565656' position='relative' w='137px' h='5px' transform='rotate(42deg)' />

            <Heading fontWeight='600' fontSize='48px' bottom='40px' left='3px' position='relative' fontFamily='Playfair Display' color='white'> About </Heading>

            <p className="text-serif w-11/12 mt-[1em] text-white text-center">
                Hello! My name is <strong className="text-[#629add]">Marina</strong> <br/> <br/>
                I love building elegant, responsive front ends with a focus on performance, SEO optimization, and accessibility.  <br /> <br />
                I’m interested in user interactivity, devloping design systems, web audio, and other creative applications of web technology. <br /> <br />
                My skills include API integration, E-commerce solutions including web store setup and payment processing, headless CMS integration, CSS animation, and mobile-first design. <br /> <br />
                In my free time I like to DJ at local clubs and make music with my modular synthesizer. 
            </p>

            <div className=" grid-flow-row grid-cols-4 grid-rows-2 gap-y-8 gap-x-8 grid mt-10">
                <img src='react.png' className="icon" />
                <img src='nextjs.png' className="icon rounded-md" />    
                <img src='node.png' className="icon" />    
                <img src='tailwind.png' className="icon" />    
                <img src='framer-motion.png' className="icon bg-white p-1 rounded-md" />    
                <img src='mongo.png' className="icon bg-white p-[2px] rounded-md" />    
                  
                <img src='cmd.png' className="icon bg-white p-1 rounded-md" />    
                <img src='wordpress.png' className="icon bg-white p-1 rounded-md" />    

            </div>


        </Box>
        </Flex>
    )
    
}