import { Flex, Box, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'
import github from './github.png'
import linkedin from './linkedin.png'


export default function Footer() {
  return (
    <Flex mb='3em' align='center' justify='center'>
        <Flex mb='4em' width='95%' align='center' justify='center' display='block'>
            <Image src={linkedin} layout='responsive' />
        </Flex>

            <Heading 
                position='relative'
                mt='4em' 
                zIndex='5'
                fontSize='1.6em' 
                textAlign='center' 
                fontFamily='Playfair Display' 
                letterSpacing='.2em' 
                color='white'>
                    <Box 
                    top='26px'
                    left='-2px'
                    w='450px' 
                    h='12px' 
                    bg='#03254E' 
                    position='relative' 
                    zIndex='-1' />
                    <Link href='mailto:msalvuccidev@gmail.com' isExternal> msalvuccidev@gmail.com</Link>
            </Heading>
            
    </Flex>
  )
}
