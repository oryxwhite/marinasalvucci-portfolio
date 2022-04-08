import Image from "next/image";
import { Box, Flex, Heading, Text, Link} from "@chakra-ui/react";
import lyrasc from './lyrasc.png'
import countsearchprev from './countsearchprev.png'

export default function PortfolioItem(props) {
 
  return (
    <Flex align='center' direction='column'  mt='5em' bg='rgba(0,0,0,0)' width='90vw' maxWidth='550px'  borderColor='white' borderWidth='3px'>
      <Box mt='3em'w='79%' display='block' >
        <a href={props.link} target='_blank' rel="noreferrer"><Image layout='responsive' alt={props.alt} src={props.source==="lyrasc" ? lyrasc : countsearchprev} /></a>
      </Box>
      <Heading mt='.5em' fontFamily='Playfair Dislay' fontSize='2.5em' color='white' fontWeight='800'>
        {props.name}
      </Heading>
      <Text mb='3em' mt='1.2em' align='center' fontFamily='Merriweather Sans' color='white' pl='3em' pr='3em'>
        {props.description}
      </Text>
    </Flex>
  )
}
