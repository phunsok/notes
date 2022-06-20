import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Corinthia:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7319806090019161"
          crossorigin="anonymous"></script>
      </Head>
      <body className='bg-slate-100 dark:bg-slate-800 font-body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}