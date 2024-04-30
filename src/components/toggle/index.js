import styles from "./styles.module.css";
import React from "react";

export default function Toggle({ toggle, handleToggle }) {
  return (
    <div
      className={`${styles.container} ${
        toggle === "yearly" ? styles.active : ""
      }`}
      onClick={handleToggle}
    >
      <div className={`${styles.toggle} `}></div>
    </div>
  );
}
