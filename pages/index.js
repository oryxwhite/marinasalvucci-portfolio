import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Slash from './components/slash/slash'
import { Button } from '@chakra-ui/react'
import SlashDark from './components/slashdark'
import PortfolioItem from './components/portfolio-item/portfolio-item'
import Footer from './components/footer/footer'
import LinkedIn from './components/footer/linkedinicon'
import Github from './components/footer/githubicon'
import { motion } from "framer-motion"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
       <Navbar className={styles.navbar}/>
       <Slash className={styles.slash}/>
       <Hero className={styles.hero} />
       <SlashDark />
       <PortfolioItem name='Lyra' source={'lyrasc'}
        description='An interactive audio collage 
       built on community submitted content.  
       Built with the MERN stack using Tone.JS and Bootstrap'
       alt='lyra screenshot'
        
       />
       
       <PortfolioItem name='Country Search' src='countsearchprev'
        description='A React app for sorting and searching through 
        the info provided by the REST Countries API'
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
