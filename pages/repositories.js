import Head from "next/head";
import React from "react";
import Certificates from "../components/Certificates";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { getRepositories } from "../services/GithubService";

function repositories() {
  const [repositories, setRepositories] = React.useState([]);
  console.log("🚀 ~ repositories ~ repositories:", repositories);

  React.useEffect(() => {
    getRepositories().then((data) => setRepositories(data));
  }, []);

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
          paddingTop: "120px",
        }}
      >
        {repositories.map((repository) => (
          <div key={repository.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            {/* 
              in vertical list the repository name and description
              in horizontal list the language and stars
            */}
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
            <ul>
              <li>{repository.language}</li>
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}

export default repositories;
