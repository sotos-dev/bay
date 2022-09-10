import type { NextPage } from "next"
import Head from "next/head"
import HeroSection from "../components/homeComps/HeroSection"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Board a yacht</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
      </main>
    </>
  )
}

export default Home