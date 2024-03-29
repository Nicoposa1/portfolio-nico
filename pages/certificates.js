import Head from "next/head";
import React from "react";
import Certificates from "../components/Certificates";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

function courses() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolás Posa - Certificates</title>
        <meta name="description" content="Nicolas Posa Portfolio" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Navbar />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="uppercase text-center">in construction</h1>
      </div>
      {/* <Certificates /> */}
    </div>
  );
}

export default courses;
