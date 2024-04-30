import styles from "./styles.module.css";
import StepItem from "./step_item";
export function Menu({ step }) {
  return (
    <div className={styles.container_menu}>
      <StepItem
        step={1}
        title={"STEP 1"}
        content={"YOUR INFO"}
        selected={step === 1}
      />
      <StepItem
        step={2}
        title={"STEP 2"}
        content={"SELECT PLAN"}
        selected={step === 2}
      />
      <StepItem
        step={3}
        title={"STEP 3"}
        content={"ADD-ONS"}
        selected={step === 3}
      />
      <StepItem
        step={4}
        title={"STEP 4"}
        content={"SUMMARY"}
        selected={step === 4 || step === 5}
      />
    </div>
  );
}
