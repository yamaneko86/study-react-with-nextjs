import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Headline(props) {
  return (
    <>
      <h1 className={styles.title}>{props.page} page</h1>

      <p>Get started by editing {props.children}</p>
    </>
  );
}
