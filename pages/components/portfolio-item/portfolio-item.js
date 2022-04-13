import Image from "next/image";

import lyrasc from './lyrasc.png'
import countsearchprev from './countsearchprev.png'



export default function PortfolioItem(props) {
  // const lyraDescription = <div> An interactive audio collage built on community submitted content.  Built with the <strong> MERN </strong>stack using <strong>Tone.JS </strong>and <strong>Bootstrap</strong> </div>
  // const countryDescription = <div>A<strong> React </strong>app for sorting and searching through the info provided by the <a className=' text-red-400'>REST Countries API</a></div>
  return (
    <div className="flex flex-col items-center mt-[2em] bg-black w-[90vw] max-w-[550px] border-[3px] border-white " >
      <div className="mt-[3em] w-[79%] block" >
        <a href={props.link} target='_blank' rel="noreferrer"><Image layout='responsive' alt={props.alt} src={props.source==="lyrasc" ? lyrasc : countsearchprev} /></a>
      </div>
      <h2 className="mt-6 text-[2em] text-center text-white font-[800] font-serif" >
        {props.name}
      </h2>
      <div className="mb-[3em] mt-4 center text-center font-sans  text-white px-12 " >
        { props.description }
      </div>
    </div>
  )
}
