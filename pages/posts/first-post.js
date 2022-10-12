import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layouts/layout";
import Navbar from "../../components/navbar/Navbar";

export default function FirstPost() {
  return (
    // <Layout>
    <>
      <Head>
        <title>First-post test</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Navbar />
      <h1 className="text-3xl font-bold hover:underline">First Post</h1>

      {/* <h2 className={styles.title}>
        <Link href="/">Back to home</Link>
      </h2> */}
    </>
    // </Layout>
  );
}
