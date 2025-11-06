import { ErrorMessage, Field, Form, Formik } from "formik";
import CONTACT_FORM_VALIDATION_SCHEMA from "../../utils/validates/index.js";
import styles from "./ContactForm.module.scss";
import React from "react";
import classNames from "classnames/bind";

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
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        const nameClassNames = classNames(styles.input, {
          [styles.valid]: !formikProps.errors.name && formikProps.touched.name,
          [styles.invalid]: formikProps.errors.name && formikProps.touched.name,
        });
        const phoneClassNames = classNames(styles.input, {
          [styles.valid]:
            !formikProps.errors.phone && formikProps.touched.phone,
          [styles.invalid]:
            formikProps.errors.phone && formikProps.touched.phone,
        });
        return (
          <Form className={styles.form}>
            <label className={styles.label}>
              <span>Name: </span>
              <Field
                className={nameClassNames}
                type="text"
                name="name"
                placeholder="Enter your name"
                autoFocus
              />
              <ErrorMessage
                className={styles.error}
                name="name"
                component={"span"}
              />
            </label>
            <label>
              <span>Phone: </span>
              <Field
                className={phoneClassNames}
                type="number"
                name="phone"
                placeholder="+380xxx xxx xx xx"
              />
              <ErrorMessage
                className={styles.error}
                name="phone"
                component={"span"}
              />
            </label>
            <label>
              <span>Email: </span>
              <Field type="email" name="email" placeholder="your@gmail.com" />
              <ErrorMessage
                className={styles.error}
                name="email"
                component={"span"}
              />
            </label>
            <label>
              <span>Birthdate: </span>
              <Field type="date" name="birthdate" />
              <ErrorMessage
                className={styles.error}
                name="birthdate"
                component={"span"}
              />
            </label>
            <button type="submit">Save</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
