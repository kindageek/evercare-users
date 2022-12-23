import Head from 'next/head';
import Home from '../components/home.component';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Evercare Users</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
