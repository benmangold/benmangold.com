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
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <main className={styles.main}>
          <h1 className={styles.title}>Page Two</h1>
          <div className={styles.grid}>
            <Card href="/" header="Home &rarr;" text="look at benmangold.com" />
            <Card
              href="/pageOne"
              header="Page One &rarr;"
              text="Go to page one. test"
            />
            <Card
              href="https://github.com/vercel/next.js/tree/master/examples"
              header="Examples"
              text="Discover and deploy boilerplate example Next.js projects"
            />
          </div>
        </main>
      </Head>
      <Footer />
    </div>
  );
}
