import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "../components/Main/Main";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header/Header";
import { useCallback, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// //アロー関数
// const handleClick = (e, foo) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

// function記法
// function handleClick(e) {
//   console.log(e.target.href);
//   e.preventDefault();
// }

export default function Home() {
  const foo = 1;

  //アロー関数
  //useCallback:再レンダリング時に関数が再生成されなくなる → パフォーマンスの向上
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    //マウント時に適用
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    ///アンマウント時に適用 → return()が動作する
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.content}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href={"/about"} onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
    </div>
  );
}
