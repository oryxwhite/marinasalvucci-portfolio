import Image from 'next/image'
import { Box, Flex, Heading } from '@chakra-ui/react'
import marina from './marina.png'

export default function Hero() {
    return(
        <Flex mt='4em' width='95%' align='center' justify='center' display='block'>
            <Image  layout='responsive' src={marina} alt='marina-portrait' />
            <Heading 
            mt='1.2em' 
            fontSize='2.6em' 
            textAlign='center' 
            fontFamily='Playfair Display' 
            letterSpacing='.3em' 
            color='white'>            
                Marina Salvucci
            </Heading>
            <Flex align='center' justify='center'>
                <Heading 
                position='relative'
                mt='1.2em' 
                zIndex='5'
                fontSize='1.6em' 
                textAlign='center' 
                fontFamily='Playfair Display' 
                letterSpacing='.3em' 
                color='white'>
                    <Box 
                    top='15px'
                    left='-18px'
                    w='300px' 
                    h='12px' 
                    bg='#03254E' 
                    position='absolute' 
                    zIndex='-1' />
                    web developer
                </Heading>
            </Flex>
        </Flex>
    )
}