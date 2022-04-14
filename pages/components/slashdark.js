import { Box, Flex, Heading } from "@chakra-ui/react"

export default function SlashDark() {
    return (
        <Flex id="work" mt='8em'>
        <Box position='' mt='4em' >
            <Box right="-25px" position='relative' bg='#565656' w='137px' h='5px' transform='rotate(42deg)' />
            <Box right='0px' position='relative' bg='#565656' w='137px' h='5px' transform='rotate(42deg)' />
            <Box  right='25px'bg='#565656' position='relative' w='137px' h='5px' transform='rotate(42deg)' />
            <Heading fontWeight='600' fontSize='48px' bottom='40px' left='10px'position='relative' fontFamily='Playfair Display' color='white'> Work </Heading>
        </Box>
        </Flex>
    )
    
}