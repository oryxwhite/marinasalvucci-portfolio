import Image from "next/image";
import { Box, Flex, Heading, Text, Link} from "@chakra-ui/react";
import lyrasc from './lyrasc.png'
import countsearchprev from './countsearchprev.png'

export default function PortfolioItem(props) {
 
  return (
    <div className="flex flex-col items-center mt-[5em] bg-black w-[90vw] max-w-[550px] border-[3px] border-white " >
      <div className="mt-[3em] w-[79%] block" >
        <a href={props.link} target='_blank' rel="noreferrer"><Image layout='responsive' alt={props.alt} src={props.source==="lyrasc" ? lyrasc : countsearchprev} /></a>
      </div>
      <h2 className="mt-6 text-[2em] text-center text-white font-[800]" >
        {props.name}
      </h2>
      <p className="mb-[3em] mt-4 center text-center font-sans  text-white px-12 " >
        {props.description}
      </p>
    </div>
  )
}
