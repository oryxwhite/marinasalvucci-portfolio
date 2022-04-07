import { Flex, Box, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'
import github from './github.png'
import linkedin from './linkedin.png'


export default function Github(props) {
  return (
    
    <Box mr='10em' mt='0em' width='75px' position='relative' bottom='4.7em' display='inline-block'>
           <a href='https://github.com/oryxwhite' target='_blank'> <Image layout='responsive' src={github} alt='github-icon' /></a>
            
    </Box>
    
    
    )}