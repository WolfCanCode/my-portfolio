import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lê Ngọc Trường - WolfCanCode</title>
        <meta name="description" content="Hi, I'm a senior frontend developer, no matter what language, framework or library i still can make it done." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Footer />
    </div>
  )
}

export default Home
