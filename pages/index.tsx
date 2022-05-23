import type { NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'
import About from '@/components/About'
import Mint from '@/components/Mint'
import Roadmap from '@/components/Roadmap'
import Team from '@/components/Team'
import Footer from '@/components/Footer'
import Benefits from '@/components/Benefits'
import AboutGame from '@/components/AboutGame'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Crappy Birds - Fun & Social MMO game leveraging NFTs</title>
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <div className="absolute w-full h-4 border-t-4 border-opacity-50 border-dashed border-dark-500 rotate-3"></div>
        <AboutGame />
        <div className="absolute w-full h-4 border-t-4 border-opacity-50 border-dashed border-dark-500 -rotate-3"></div>
        <Benefits />
        <div className="absolute z-10 w-full h-4 border-t-4 border-opacity-50 border-dashed border-dark-500"></div>
        <Mint />
        <div className="absolute w-full h-4 border-t-4 border-opacity-50 border-dashed border-dark-500"></div>
        <Roadmap />
        <div className="absolute w-full h-4 border-t-4 border-opacity-50 border-dashed border-dark-500 rotate-3"></div>
        {/* <Faq /> */}
        {/* <div className="absolute w-full h-4 border-t-4 border-opacity-50 border-dashed border-dark-500 -rotate-3"></div> */}
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
