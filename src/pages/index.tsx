import Head from 'next/head'
import {Inter} from '@next/font/google'
import {useTheme} from "next-themes";

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const {theme, setTheme} = useTheme()
  return (
    <>
      <Head>
        <title>Chaincue Technology</title>
      </Head>
      <main>
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
