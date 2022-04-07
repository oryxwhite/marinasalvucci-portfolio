import { Box, Flex } from "@chakra-ui/react"

export default function SlashDark(mode) {
    return (
        <Flex>
        <Box position='' mt='4em'>
            <Box top='20'right="30px" position='absolute' bg='#565656' w='67px' h='3px' transform='rotate(42deg)' />
            <Box top='20'right='42px' position='absolute' bg='#565656' w='67px' h='3px' transform='rotate(42deg)' />
            <Box top='20' right='54px'bg='#565656' position='absolute' w='67px' h='3px' transform='rotate(42deg)' />
        </Box>
        </Flex>
    )
    
}