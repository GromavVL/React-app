import { ErrorMessage, Field, Form, Formik } from "formik";
import CONTACT_FORM_VALIDATION_SCHEMA from "../../utils/validates/index.js";
import styles from "./ContactForm.module.scss";
import React from "react";
import Input from "./input/index.jsx";

function ContactForm() {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    birthdate: "",
  };
  const handleSubmit = (values, formikBag) => {
    console.log("Submitted form with values :>> ", values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <Input
              label="Name:"
              type="text"
              name="name"
              placeholder="Yourname"
              autoFocus
              classes={classes}
            />
            <Input
              label="Phone Number:"
              type="tel"
              name="phone"
              placeholder="+380111111111"
              classes={classes}
            />
            <Input
              label="Email:"
              type="email"
              name="email"
              placeholder="your@mail.com"
              classes={classes}
            />
            <Input
              label="Birthday:"
              type="date"
              name="birthday"
              classes={classes}
            />
            <button type="submit">Save</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
