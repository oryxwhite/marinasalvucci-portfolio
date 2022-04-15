import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Hero from './components/hero/hero'
import About from './components/about'
import SlashDark from './components/slashdark'
import PortfolioItem from './components/portfolio-item/portfolio-item'
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

       <SlashDark />
       <div className=' grid  auto-cols-auto grid-rows-2 grid-flow-row  lg:grid-flow-col flex-col xl:flex xl:flex-row xl:mx-10 lg:gap-8 xl:gap-auto'>
      <PortfolioItem name="Sessi Blanchard" src='/sessiwide.png' h='916px' w='1033px'
        description={<div> A personal site for a journalist.  Built with <strong>Next.js</strong> using <strong>Tailwind</strong> for styling, <strong>Framer Motion </strong>for animations, <strong>Stripe</strong> for payment processing, and <strong>headless WordPress</strong> for the blog. </div>} 
        alt='sessi screenshot'
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
      
      <PortfolioItem className='' name='Personal Portfolio' src='/port.png' h='605px' w='458px'
        description={<div> My personal portfolio site.  Built with <strong>Next.js</strong> using <strong>Tailwind</strong> for styling and <strong>Framer Motion </strong>for animations.</div>}
        link=''
        alt='Personal portfolio site' 
        />
        
      </div>
      
       <Footer />
       <LinkedIn  />
       <Github />
       
      </main>
    </div>
  )
}
