import { Flex, Box, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'
import github from './github.png'
import linkedin from './linkedin.png'


export default function LinkedIn(props) {
  return (
    
    <Box ml='10em'float='left' mt='0em' width='80px'  display='inline-block'>
          <a href='https://www.linkedin.com/in/marina-salvucci-0119b6232/' target='_blank'>  <Image  layout='responsive' src={linkedin} alt='linkedin-icon' /></a>
            
    </Box>
    
    
    )}