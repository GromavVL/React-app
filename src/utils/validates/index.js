import * as yup from 'yup';

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required(),
});

//----------------------------------------

const CONTACT_FORM_VALIDATION_SCHEMA = yup.object({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required(),
  phone: yup
    .string()
    .length(12)
    .matches(/^\+\d{13}$/, 'Phone number must be in the format +123456789012')
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  birthdate: yup
    .date()
    .max(new Date())
    .required(),
});

export default CONTACT_FORM_VALIDATION_SCHEMA;
