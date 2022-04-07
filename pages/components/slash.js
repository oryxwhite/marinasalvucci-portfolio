import { Box, Flex } from "@chakra-ui/react"

export default function Slash() {
    return (
        <Flex align='right' justify='right'>
        <Box position='' mt='4em'>
            <Box top='20'right="30px" position='absolute' bg='white' w='67px' h='3px' transform='rotate(42deg)' />
            <Box top='20'right='42px' position='absolute' bg='white' w='67px' h='3px' transform='rotate(42deg)' />
            <Box top='20' right='54px'bg='white' position='absolute' w='67px' h='3px' transform='rotate(42deg)' />
        </Box>
        </Flex>
    )
    
}