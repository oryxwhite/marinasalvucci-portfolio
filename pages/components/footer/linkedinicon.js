import { Flex, Box, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'
import github from './github.png'
import linkedin from './linkedin.png'


export default function LinkedIn(props) {
  return (
    
    <Box ml='10em'float='left' mt='0em' width='80px'  display='inline-block'>
            <Image  layout='responsive' src={linkedin} alt='github-icon' />
            
    </Box>
    
    
    )}