import { Flex, Box, Heading, Link } from '@chakra-ui/react'



export default function Footer() {
  return (
    <Flex mb='3em' align='center' justify='center' >

        <div className=' flex items-center justify-center xs:text-[1.2em]' >
            <Heading 
                position='relative'
                mt='4em' 
                zIndex='5'
                fontSize='1em'
                textAlign='center' 
                fontFamily='Playfair Display' 
                letterSpacing='.2em' 
                color='white'>
            
            <span className=' absolute mt-[9px] xs:mt-[11px] -left-[15px] w-72 xs:w-[340px] h-2 bg-[#03254E] -z-10' >  </span>
            
                    <Link className='' top="0px" href='mailto:msalvuccidev@gmail.com' isExternal> msalvuccidev@gmail.com</Link>
            </Heading>
        </div>
            
    </Flex>
  )
}
