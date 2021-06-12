import Head from "next/head";
import styles from "../styles/Home.module.css";

import Card from "../components/Card";

import Footer from "../components/Footer";

import Meta from "../components/Meta";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=.8, shrink-to-fit=no"
        />
        <main className={styles.main}>
          <h1 className={styles.title}>benmangold.com</h1>

          <p className={styles.description}>
            A website for <code className={styles.code}>writing</code>
            {" , "}
            <code className={styles.code}>engineering</code>
            {" and "}
            <code className={styles.code}>audio</code>
          </p>
          <div className={styles.grid}>
            <Card
              href="/pageOne"
              header="Page One &rarr;"
              text="Just a test page. Not a lot going on here."
            />
            <Card
              href="/pageTwo"
              header="Page Two"
              text="check check one two hey hey one two hey hey."
            />
          </div>
        </main>
      </Head>

      <Footer />
    </div>
  );
}
