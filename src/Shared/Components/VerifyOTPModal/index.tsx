import { useRef, useEffect } from "react";
import { Container, FormControl } from "./styles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
  otp: ["", "", "", "", ""],
};

const validationSchema = yup.object().shape({
  otp: yup
    .array()
    .of(
      yup
        .string()
        .matches(/^\d$/, "OTP must be a single digit")
        .required("OTP is required")
    )
    .min(5, "Enter 5 characters"),
});

const VerifyOTPModal = () => {
  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log("Submitting OTP:", values.otp.join(""));
    setSubmitting(false);
  };

  useEffect(() => {
   
  }, []);

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <FormControl>
              <label className="label">Verify OTP</label>
              <div>
                {values.otp.map((_, index) => (
                  <Field
                    key={index}
                    type="text"
                    name={`otp[${index}]`}
                    placeholder="0"
                    maxLength={1}
                    onBlur={handleBlur}
                    className={`input ${
                      touched.otp && errors.otp ? "error" : ""
                    }`}
                    handleChange={handleChange}
                  />
                ))}
              </div>
              <ErrorMessage name="otp" component="div" className="error" />
            </FormControl>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default VerifyOTPModal;
