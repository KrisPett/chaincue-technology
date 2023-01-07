import Head from 'next/head'
import {useTheme} from "next-themes";

const ISSERVER = typeof window === "undefined";

if(!ISSERVER) {
  if (!localStorage.getItem("theme"))
    localStorage.setItem("theme", "dark");
}

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
           Cloudfront-pipeline
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
