import Head from 'next/head'
import HomeView from "../components/home/HomeView";

export default function Home() {

  return (
    <>
      <Head>
        <title>Chaincue Technology</title>
      </Head>
      <main>
        <HomeView/>
      </main>
    </>
  )
}
