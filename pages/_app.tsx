import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function BitSwipeApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <html lang="en" />
      <title>BitSwipe | Top Online and Crypto Payment Processor</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link rel="preload" href="/images/card-preview-1.png" as="image" />
      <link rel="preload" href="/images/card-preview-2.png" as="image" />
      <meta name="description" content="bitswipe. | Accept crypto payments online or in-person. Use our services to eliminate fraudulent transactions and introduce your business to people around the world." />
      <meta property="og:title" content="bitswipe." />
      <meta property="og:url" content="bitswipeorg.github.io" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Accept crypto payments online or in-person. Use our services to eliminate fraudulent transactions and introduce your business to people around the world." />
    </Head>
    <Component  {...pageProps} />
  </>)
}