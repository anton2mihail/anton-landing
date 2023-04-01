import Head from 'next/head';
import styles from '@/styles/index.module.css';
import HomePage from './Home/Home';
import UnderConstruction from '@/components/UnderConstruction/UnderConstruction';

export default function Home() {
  return (
    <>
      <Head>
        <title>Toni</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lightbluecircleicon.png" />
      </Head>
      <main className={styles.main}>
        {/* <HomePage /> */}
        <UnderConstruction />
      </main>
    </>
  );
}
