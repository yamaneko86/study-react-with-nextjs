import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "../components/Main/Main";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index" />
    </div>
  );
}
