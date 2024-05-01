import styles from "./styles.module.css";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hook.js";
import {
  changePersonalInfoName,
  changePersonalInfoEmail,
  changePersonalInfoPhone,
} from "@/lib/features/personalInfo/personalInfoSlice.js";
export default function PersonalInfo({
  handleSubmitForm,
  inputFormActived,
  setInputFormActived,
}) {
  const personalInfo = useAppSelector((state) => state.personalInfo);
  const dispatch = useAppDispatch();

  const handleOnChangeName = (e) => {
    const inputName = e.target;
    const name = e.target.value;
    if (/^\s*$/.test(name)) {
      inputName.setCustomValidity("This field is required");
    } else {
      inputName.setCustomValidity("");
    }
    setInputFormActived((inputActived) => {
      return { ...inputFormActived, name: true };
    });
    dispatch(changePersonalInfoName(name));
  };
  const handleOnChangeEmail = (e) => {
    const inputEmail = e.target;
    const email = e.target.value;

    if (/^\s*$/.test(email)) {
      inputEmail.setCustomValidity("This field is required");
    } else {
      inputEmail.setCustomValidity("");
    }
    setInputFormActived({ ...inputFormActived, email: true });
    dispatch(changePersonalInfoEmail(email));
  };
  const handleOnChangePhone = (e) => {
    const inputPhone = e.target;
    const phone = e.target.value;
    const inputData = e.nativeEvent.data;

    setInputFormActived({ ...inputFormActived, phone: true });

    if (inputData === null || /^\d+$/.test(inputData)) {
      if (phone.length <= 10) {
        inputPhone.setCustomValidity("");
        dispatch(changePersonalInfoPhone(phone));
      }
    } else {
      inputPhone.setCustomValidity(
        "This field Phone is required. Max length 10 digits"
      );
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}> Personal info</h2>
      <p className={styles.descripcion}>
        Please provide your name, email address, and phone number.
      </p>
      <form
        className={styles.form}
        id="form_personal_info"
        onSubmit={handleSubmitForm}
      >
        <div className={styles.container_label}>
          <label
            htmlFor="form_personal_info_name"
            className={styles.container_label_label}
          >
            Name
          </label>

          <div className={styles.container_label_error}>
            {/^\s*$/.test(personalInfo.name) && inputFormActived.name
              ? "This field is required"
              : null}
          </div>
        </div>

        <input
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
          id="form_personal_info_name"
          value={personalInfo.name}
          onChange={handleOnChangeName}
        />
        <div className={styles.container_label}>
          <label
            htmlFor="form_personal_info_email"
            className={styles.container_label_label}
          >
            Email Address
          </label>
          {/^\s*$/.test(personalInfo.email) && inputFormActived.email ? (
            <div className={styles.container_label_error}>
              This field is required
            </div>
          ) : null}
        </div>

        <input
          type="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          id="form_personal_info_email"
          value={personalInfo.email}
          onChange={handleOnChangeEmail}
        />
        <div className={styles.container_label}>
          <label
            htmlFor="form_personal_info_phone"
            className={styles.container_label_label}
          >
            Phone Number
          </label>
          {!/^\d+$/.test(personalInfo.phone) && inputFormActived.phone ? (
            <div className={styles.container_label_error}>
              This field is required
            </div>
          ) : null}
        </div>

        <input
          type="text"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          id="form_personal_info_phone"
          value={personalInfo.phone}
          onChange={handleOnChangePhone}
        />
      </form>
    </div>
  );
}
