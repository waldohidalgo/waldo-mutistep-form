import styles from "./styles.module.css";
import React from "react";
export default function Checkbox({ isChecked }) {
  return (
    <div className={`${styles.container} ${isChecked ? styles.active : ""}`}>
      <span className={styles.check}></span>
    </div>
  );
}
