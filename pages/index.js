import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Hero from './components/hero/hero'

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
        

       <SlashDark />
       <PortfolioItem name='Lyra' source={'lyrasc'}
        description={<div> An interactive audio collage built on community submitted content.  Built with the <strong> MERN </strong>stack using <strong>Tone.JS </strong>and <strong>Bootstrap</strong> </div>}
       alt='lyra screenshot'
        
       />
       
       <PortfolioItem name='Country Search' src='countsearchprev'
        description={<div>A<strong> React </strong>app for sorting and searching through the info provided by the <a className=' text-red-400' href=''>REST Countries API</a></div>}
        link='https://countrysearch-139e4.web.app/'
        alt='country search screenshot'
        />

       <Footer />
       <LinkedIn  />
       <Github />
       
      </main>
    </div>
  )
}
