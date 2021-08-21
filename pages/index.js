import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fighter List | Home</title>
        <meta name='keywords' content='fighter' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptates soluta laudantium dolorem iusto eveniet, quo ad iste quod
          perferendis doloribus repudiandae cupiditate sequi quos facilis a
          praesentium exercitationem adipisci.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptates soluta laudantium dolorem iusto eveniet, quo ad iste quod
          perferendis doloribus repudiandae cupiditate sequi quos facilis a
          praesentium exercitationem adipisci.
        </p>
        <Link href='/fighters'>
          <a className={styles.btn}>See Fighter Listing</a>
        </Link>
      </div>
    </>
  );
}
