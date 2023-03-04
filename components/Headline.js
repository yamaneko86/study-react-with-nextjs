import { Inter } from "next/font/google";
import styles from "@component/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Headline(props) {
  return (
    <>
      <h1 className={styles.title}>{props.page} page</h1>

      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/{props.page}.js</code>
      </p>
    </>
  );
}
