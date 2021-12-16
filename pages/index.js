import { auth } from "firebase"
import Head from "next/head"
import Image from "next/image"
import { useAuth } from "../lib/auth"
import styles from "../styles/Home.module.css"

export default function Home() {
  const auth = useAuth()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Swift <a href="https://nextjs.org">Feedback</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
        {auth?.user && (
          <button onClick={(e) => auth.signout()}>Sign Out</button>
        )}
        {auth.user && <div className="">{auth.user.email} inline way</div>}
        <div className="">{auth?.user?.email} Next.js way</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
