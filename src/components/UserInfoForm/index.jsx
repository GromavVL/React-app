import { Field, Formik, Form, ErrorMessage } from 'formik';
import React from 'react';
import { USER_VALIDATION_SCHEMA } from '../../utils/validates/index';

function UserInfoForm () {
  const userInitialValues = { firstName: '' };
  const handleSubmit = (values, FormikBag) => {
    FormikBag.resetForm();
  };
  return (
    <Formik
      initialValues={userInitialValues}
      validationSchema={USER_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {formikProps => {
        return (
          <Form>
            <label>
              <span>Name:</span>
              <Field
                type='text'
                name='firstName'
                placeholder='Name'
                autoFocus
              />
              <ErrorMessage name='firstName' component={'div'} />
            </label>

            <button type='submit'>Save</button>
            <button type='reset' disabled={!formikProps.dirty}>
              Cancel
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
