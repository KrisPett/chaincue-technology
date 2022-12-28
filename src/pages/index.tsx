import Head from 'next/head'
import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import {useTheme} from "next-themes";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const {theme, setTheme} = useTheme()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <div>
          <h1 className="text-3xl font-bold">
            Hello world!
          </h1>
          <select value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </main>
    </>
  )
}
