
import Image from 'next/image'
import github from './github.png'
import { Box } from '@chakra-ui/react'



export default function Github(props) {
  return (
    
    <Box mr='10em' mt='0em' width='48px' position='relative' bottom='3em' display='inline-block'>
           <a href='https://github.com/oryxwhite' rel="noreferrer" target='_blank'> <Image layout='responsive' src={github} alt='github-icon' /></a>
            
    </Box>
    
    
    )}