import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from "next/image";

import Hero from './components/hero/hero'
import About from './components/about'
import SlashDark from './components/slashdark'
import PortfolioItem from './components/portfolio-item/portfolio-item'
import PortfolioItemHover from './components/portfolio-item/portfolio-itemhover'
import Footer from './components/footer/footer'
import LinkedIn from './components/footer/linkedinicon'
import Github from './components/footer/githubicon'
import Navbar from './components/navbar/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marina Salvucci</title>
        <meta name="Marina Salvucci" content="Marina Salvucci Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
			<Navbar />
      <Hero />
      <About />  
      <SlashDark title='Work' />

      {/* <h2 className="text-white text-[48px] bottom-[44px] left-[6px] xl:-left-4 xl:bottom-[40px] relative font-serif font-[800] tracking-[3px] xl:text-6xl mt-40" fontWeight='600' fontSize='48px' bottom='40px' left='10px'position='relative' fontFamily='Playfair Display' color='white'> Featured Project </h2> */}
      <div className='w-8/12'>
      <Image width='1920px' height='926px' alt='prmap' src='/prmap.png'/>
      </div>
      {/* <p className="text-white text-sm font-serif font-[800] tracking-[3px] xl:text-6xl mt-40" > PlayedRight.com </p> */}
      <div className="text-serif xl:w-9/12 lg:w-8/12 px-10 mb-10 mt-[1em] lg:text-lg text-white text-center">
               <a href='https://playedright.com' className='text-4xl font-serif'> PlayedRight.com </a>
               <p className="mt-4 xl:mt-8 m-2"> A monetized platform for data visualization, user collaboration, and interactive spreadsheets.   </p>
               <ul>
                <nr/>
                <li className='mb-2'>
                Custom google maps integration capable of displaying tens of thousands of user submitted data points, with searching and filtering

                </li>
                <li className='mb-2'>
                .csv upload system capable of geocoding and then storing tens of thousands of rows of address data

                </li>
                <li className='mb-2'>
                Interactive tables that allow users to post and edit spreadsheet items, including image uploads, with search and filter functions.
                </li>
                <nr/>
                <li className='mb-2'>

                Built with <strong>React</strong> and <strong>Typescript</strong> with <strong>Prisma, TRPC, Tailwind, Stripe, Clerk, React Table, Google Maps API</strong>
               </li>
               </ul>
               
            </div>


       <div className=' grid  auto-cols-auto grid-rows-2 grid-flow-row  lg:grid-flow-col flex-col xl:flex xl:flex-row xl:mx-10 lg:gap-8 xl:gap-auto'>
       {/* <div className='hover:bg-black'> */}
       <PortfolioItemHover name="FileU" src='/fileu.png' h='665px' w='1024px'
        description={<div> A template for MERN projects that require user Authentication and file uploads.   Built with <strong>React</strong> and <strong>Typescript</strong> with <strong>Tailwind,
        DaisyUI,
        Passport.js,
        MongoDB,
        AWS S3 Object Storage</strong>
           </div>} 
        alt='playedright screenshot' link='https://playedright.com'
        hover='hover:bg-black'
        />
        {/* </div> */}

      <PortfolioItem name="Sessi Blanchard" src='/sessiwide.png' h='916px' w='1033px'
        description={<div> A personal site for a journalist.  Built with <strong>Next.js</strong> using <strong>Tailwind</strong> for styling, <strong>Framer Motion </strong>for animations, <strong>Stripe</strong> for payment processing, and <strong>headless WordPress</strong> for the blog. </div>} 
        alt='sessi screenshot' link='https://sessi-blanchard.vercel.app'
        />

       <PortfolioItem name='Lyra' src='/lyrasc.png' h='501px' w='489px'
        description={<div> An interactive audio collage built on community submitted content.  Built with the <strong> MERN </strong>stack using <strong>Tone.JS </strong>and <strong>Bootstrap</strong> </div>}
       alt='lyra screenshot'
       />
       
       <PortfolioItem className=' ' name='Country Search' src='/countsearchprev.png' h='937px' w='870px'
        description={<div>A<strong> React </strong>app for sorting and searching through the info provided by the <a className=' text-red-400' href=''>REST Countries API</a></div>}
        link='https://countrysearch-139e4.web.app/'
        alt='country search screenshot'
        />
      
      {/* <PortfolioItem className='' name='Personal Portfolio' src='/port.png' h='605px' w='458px'
        description={<div> My personal portfolio site.  Built with <strong>Next.js</strong> using <strong>Tailwind</strong> for styling and <strong>Framer Motion </strong>for animations.</div>}
        link=''
        alt='Personal portfolio site' 
        /> */}
        
      </div>
      
       <Footer />
       <LinkedIn  />
       <Github />
       
      </main>
    </div>
  )
}
