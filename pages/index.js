import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="benmangold.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to benmangold.com
        </h1>
        
        <p className={styles.description}>
          A continuously-deployed place for{' '}
          <code className={styles.code}>writing</code>
          {' , '}
          <code className={styles.code}>engineering</code>
          {' and '}
          <code className={styles.code}>audio</code>
        </p>

        <div className={styles.grid}>
          <a href="/pageOne" className={styles.card}>
            <h2>Page One &rarr;</h2>
            <p>Look at page one.</p>
          </a>
        </div>

        
        <div className={styles.grid}>
          <a href="/pageTwo" className={styles.card}>
            <h2>Page Two &rarr;</h2>
            <p>Look at page two. test</p>
          </a>
        </div>
      </main>
      </Head>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
