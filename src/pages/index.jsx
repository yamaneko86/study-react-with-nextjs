import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "../components/Main/Main";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header/Header";
import { useCallback, useEffect, useState } from "react";

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
  const [count, setCount] = useState(1);

  //let foo = 1;

  //アロー関数
  //useCallback:再レンダリング時に関数が再生成されなくなる → パフォーマンスの向上
  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href);
  //   e.preventDefault();
  //   alert(foo);
  // }, []);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      // setCount((count) => {
      //   return count + 1;
      // });
      setCount((foo) => foo + 1);
    }
    // setCount((count) => count + 1);
  }, [count]);

  useEffect(() => {
    //マウント時に適用
    // console.log(`マウント時：${count}`);
    document.body.style.backgroundColor = "lightblue";

    ///アンマウント時に適用 → return()が動作する
    return () => {
      // console.log(`アンマウント時：${count}`);
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div className={styles.content}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
    </div>
  );
}
