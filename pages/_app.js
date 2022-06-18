import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script async
        strategy="afterInteractive"
        onError={(e) => { console.error('Script failed to load', e) }}
        id="Adsense-id"
        data-ad-client="ca-pub-4371236859448682"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossorigin="anonymous"></Script>
    </>
  )
}

export default MyApp
