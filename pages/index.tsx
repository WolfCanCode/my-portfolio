import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Window from "../components/window";
import { useState } from "react";

const Home: NextPage = () => {
  const [isShow, showWindow] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Lê Ngọc Trường - WolfCanCode</title>
        <meta
          name="description"
          content="Hi, I'm a senior frontend developer, no matter what language, framework or library i still can make it done."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Window show={isShow} />
      <Footer
        onAppRun={(appName) => {
          console.log(appName);
          showWindow(!isShow);
        }}
      />
    </div>
  );
};

export default Home;
