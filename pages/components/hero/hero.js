import Image from 'next/image'
import { Box, Flex, Heading } from '@chakra-ui/react'
import marina from './marina.png'


export default function Hero() {
    return(
        <div className='block mt-12 w-11/12 max-w-[670px] justify-center items-center'>
            <Image  layout='responsive' priority placeholder='blur'  src={marina} alt='marina-portrait' />
            <h2 className='mt-[1.2em] text-center text-[2.6em] text-white tracking-[.3em]'>            
                Marina Salvucci
            </h2>
            <div className=' flex items-center justify-center' >
                <h2 className='relative items-center mt-5 z-10 text-[1.6em] text-center tracking-[.3em] text-white '>
                <div className=' relative top-7 -left-1 w-[300px] h-3 bg-[#03254E] -z-10'/>
                    web developer
                </h2>
            </div>
        </div>
    )
}