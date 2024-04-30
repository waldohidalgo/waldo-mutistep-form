import styles from "./styles.module.css";
import PersonalInfo from "./personal_info";
import Plan from "./plan";
import AddOns from "./add_ons";
import Summary from "./summary";
import Thanks from "./thanks";
export default function Windows({
  step,
  handleSubmitForm,
  inputFormActived,
  setInputFormActived,
}) {
  return (
    <>
      {step === 1 && (
        <PersonalInfo
          handleSubmitForm={handleSubmitForm}
          inputFormActived={inputFormActived}
          setInputFormActived={setInputFormActived}
        />
      )}
      {step === 2 && <Plan />}
      {step === 3 && <AddOns />}
      {step === 4 && <Summary />}
      {step === 5 && <Thanks />}
    </>
  );
}
