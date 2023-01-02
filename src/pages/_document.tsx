import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon.png"/>
        <link rel="icon" type="image/ico" sizes="32x32" href="/static/favicon.ico"/>
        <link rel="manifest" href="/static/site.webmanifest"/>
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#000000"/>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"/>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"/>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml"/>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css" />
        <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js" defer></script>
      </Head>
      <body className="bg-white text-black dark:bg-neutral-700 dark:text-white">
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
