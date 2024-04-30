"use client";

import styles from "./styles.module.css";
import { Menu } from "./menu";
import React from "react";
import Windows from "./windows";
import { useAppSelector, useAppDispatch } from "@/lib/hook.js";
import { changeStep } from "@/lib/features/step/stepSlice.js";

export default function Multistep() {
  const [inputFormActived, setInputFormActived] = React.useState({
    name: false,
    email: false,
    phone: false,
  });
  const stepObject = useAppSelector((state) => state.step);
  const step = stepObject.step;

  const dispatch = useAppDispatch();

  const handleClickButtonNext = (e) => {
    if (step === 1) {
      return;
    }
    dispatch(changeStep(step + 1));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputName = e.target[0];
    const inputEmail = e.target[1];
    const inputPhone = e.target[2];
    const name = inputName.value;
    const email = inputEmail.value;
    const phone = inputPhone.value;

    setInputFormActived({ name: true, email: true, phone: true });

    if (/^\s*$/.test(name)) {
      inputName.setCustomValidity("This field Name is required");
      inputName.reportValidity();
    } else {
      inputName.setCustomValidity("");
    }

    if (/^\s*$/.test(email)) {
      inputEmail.setCustomValidity("This field Email is required");
    } else {
      inputEmail.setCustomValidity("");
    }

    if (!/^\d+$/.test(phone)) {
      inputPhone.setCustomValidity("This field Phone is required");
    } else {
      inputPhone.setCustomValidity("");
    }

    if (form.checkValidity()) {
      dispatch(changeStep(step + 1));
    }
  };

  const handleClickButtonPrev = (e) => {
    dispatch(changeStep(step - 1));
  };

  function btnSelected(step) {
    if (step === 1) {
      return (
        <>
          <button
            key={step}
            type="submit"
            form="form_personal_info"
            className={`${styles.next_button} `}
          >
            Next Step
          </button>
        </>
      );
    }
    if (step === 4) {
      return (
        <>
          <button
            className={`${styles.back_button} `}
            onClick={handleClickButtonPrev}
          >
            Go Back
          </button>
          <button
            className={`${styles.confirm_button} `}
            onClick={handleClickButtonNext}
          >
            Confirm
          </button>
        </>
      );
    }
    if (step === 5) {
      return;
      // return (
      //   <>
      //     <button
      //       className={styles.back_button}
      //       onClick={handleClickButtonPrev}
      //     >
      //       Go Back
      //     </button>
      //   </>
      // );
    }
    return (
      <>
        <button
          className={`${styles.back_button} `}
          onClick={handleClickButtonPrev}
        >
          Go Back
        </button>
        <button
          className={`${styles.next_button} `}
          onClick={handleClickButtonNext}
        >
          Next Step
        </button>
      </>
    );
  }
  return (
    <>
      <div className={styles.container}>
        <Menu step={step} />
        <div className={styles.container_windows_buttons}>
          <Windows
            step={step}
            handleSubmitForm={handleSubmitForm}
            inputFormActived={inputFormActived}
            setInputFormActived={setInputFormActived}
          />
          <div className={styles.container_buttons_no_mobile}>
            {btnSelected(step)}
          </div>
        </div>
      </div>
      <div className={styles.container_buttons_mobile}>{btnSelected(step)}</div>
    </>
  );
}
