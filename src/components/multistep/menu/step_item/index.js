import styles from "./styles.module.css";

export default function StepItem({ step, title, content, selected }) {
  return (
    <div className={styles.container_menu_item}>
      <div
        className={`${styles.container_menu_step} ${
          selected ? styles.active : ""
        }`}
      >
        {step}
      </div>
      <div className={styles.container_menu_content}>
        <div className={styles.container_menu_content_title}>{title}</div>
        <div className={styles.container_menu_content_content}>{content}</div>
      </div>
    </div>
  );
}
