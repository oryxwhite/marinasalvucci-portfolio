import { Flex, Box, Heading, Link } from '@chakra-ui/react'



export default function Footer() {
  return (
    <Flex mb='3em' align='center' justify='center'>

        <div className=' flex items-center justify-center' >
            <Heading 
                position='relative'
                mt='4em' 
                zIndex='5'
                fontSize='1.5em'
                textAlign='center' 
                fontFamily='Playfair Display' 
                letterSpacing='.2em' 
                color='white'>
            <Box 
                    maxW='530px'
                    maxH='10px'
                    mt='10vh'
                    top='-77px'
                    left='-26px'
                    w='430px' 
                    h='2.2vw' 
                    bg='#03254E' 
                    position='absolute' 
                    zIndex='-1' />
                    <Link position='' top="0px" href='mailto:msalvuccidev@gmail.com' isExternal> msalvuccidev@gmail.com</Link>
            </Heading>
        </div>
            
    </Flex>
  )
}
