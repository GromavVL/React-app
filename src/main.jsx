import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import * as yup from "yup";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />,
  // </StrictMode>,
);

const USER_SCHEMA = yup.object({
  name: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/)
    .required(),
  email: yup.string().email().required(),
});

USER_SCHEMA.validate({ name: "Ivo", email: "ivo3456@gmail.com" })
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
