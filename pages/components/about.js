import { Box, Flex, Heading } from "@chakra-ui/react"

export default function About() {
    return (
        <Flex id="work">
        <Box className="flex flex-col justify-center items-center" mt='12em'>
            <Box right="-25px" position='relative' bg='#565656' w='137px' h='5px' transform='rotate(42deg)' />
            <Box right='0px' position='relative' bg='#565656' w='137px' h='5px' transform='rotate(42deg)' />
            <Box  right='25px'bg='#565656' position='relative' w='137px' h='5px' transform='rotate(42deg)' />
            <Heading fontWeight='600' fontSize='48px' bottom='40px' left='3px' position='relative' fontFamily='Playfair Display' color='white'> About </Heading>
            <p className="text-serif w-11/12 mt-20 text-white text-center">
                Hello! My name is <strong className="text-[#629add]">Marina</strong> <br/> <br/>
                I love building elegant, responsive front ends with a focus on performance, SEO optimization, and accessibility.  <br /> <br />
                I’m interested in user interactivity, devloping design systems, web audio, and other creative applications of web technology. <br /> <br />
                My skills include API integration, E-commerce solutions including web store setup and payment processing, headless CMS integration, CSS animation, and mobile-first design. <br /> <br />
                In my free time I DJ at local clubs and make music with my modular synthesizer. 
            </p>
        </Box>
        </Flex>
    )
    
}