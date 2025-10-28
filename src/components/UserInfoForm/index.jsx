import { Formik } from "formik";
import React from "react";
import * as yup from "yup";

const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(64).required(),
});

function UserInfoForm() {
  const userInitialValues = { firstName: "" };
  const handleSubmit = (values, FormikBag) => {
    FormikBag.resetForm();
  };
  return (
    <Formik
      initialValues={userInitialValues}
      validationSchema={USER_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
      console.log('formikProps :>> ', formikProps);
        return (
          <form onSubmit={formikProps.handleSubmit}>
            <input
              type="text"
              value={formikProps.values.firstName}
              onChange={formikProps.handleChange}
              name="firstName"
              placeholder="Name"
              autoFocus
            />
            <button type="submit">Save</button>
            <button type="reset" disabled={!formikProps.dirty}>Cancel</button>
          </form>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
