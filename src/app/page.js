import styles from "./page.module.css";

import Multistep from "../components/multistep";
import Footer from "../components/footer/index.js";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Multistep />
      </main>
      <Footer />
    </>
  );
}
