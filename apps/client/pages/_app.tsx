import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Career compass</title>
        <Link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
        />
      </Head>
      <Navbar />
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
      <Footer className={roboto.className} />
    </>
  );
}

export default CustomApp;
