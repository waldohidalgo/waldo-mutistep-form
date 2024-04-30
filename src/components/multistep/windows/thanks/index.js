import styles from "./styles.module.css";
import Image from "next/image";

export default function Thanks() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image
          src="/images/icon-thank-you.svg"
          width={80}
          height={80}
          alt="thanks"
        />
      </div>

      <h2 className={styles.titulo}>Thank you!</h2>
      <p className={styles.descripcion}>
        Thanks for confirming your subscription!
      </p>
      <p className={styles.descripcion}>
        {" "}
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}
