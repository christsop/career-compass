import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Link from 'next/link';
import 'bulma/css/bulma.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <main className="app">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default CustomApp;
