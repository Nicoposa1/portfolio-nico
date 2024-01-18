import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolás Posa - Portfolio</title>
        <meta name="description" content="Nicolas Posa Portfolio" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects/>
      <Contact />
      <Analytics />
    </div>
  );
}
