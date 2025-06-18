import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
import { Analytics } from "@vercel/analytics/react";

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
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <BackToTop />
      <Analytics />
    </div>
  );
}
