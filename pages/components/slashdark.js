import { Box, Flex, Heading } from "@chakra-ui/react"

export default function SlashDark() {
    return (
        <div className="mt-[8em] lg:mb-16 xl:mt-[12em]" id="work" mt='8em'>
        <Box position='' mt='4em' >
            <Box right="-25px" position='relative' bg='#565656' w='137px' h='5px' transform='rotate(42deg)' />
            <Box right='0px' position='relative' bg='#565656' w='137px' h='5px' transform='rotate(42deg)' />
            <Box  right='25px'bg='#565656' position='relative' w='137px' h='5px' transform='rotate(42deg)' />
            <h2 className="text-white text-[48px] bottom-[44px] left-[6px] xl:-left-4 xl:bottom-[40px] relative font-serif font-[800] tracking-[3px] xl:text-6xl" fontWeight='600' fontSize='48px' bottom='40px' left='10px'position='relative' fontFamily='Playfair Display' color='white'> Work </h2>
        </Box>
        </div>
    )
    
}