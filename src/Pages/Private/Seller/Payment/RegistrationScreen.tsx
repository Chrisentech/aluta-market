import React, { useState } from "react";
import Layout from "../../../../Layouts";
import { Card } from "../../../../Shared/Components";
import {
  FormControl,
  ErrorMessageWrapper,
  Wrapper,
  Label,
  Input,
} from "./payment.styles";
import { FaRegUserCircle } from "react-icons/fa";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../Shared/Constants";
import { BsShieldLockFill } from "react-icons/bs";

const initialValues = {
  surname: "",
  otherNames: "",
  bvn: "",
  dob: "",
};

// const validateIDCard = (value: any) => {
//   if (!value) {
//     return "ID card is required";
//   }

//   const allowedExtensions = /\.(jpg|jpeg|png|gif|pdf)$/i;
//   if (!allowedExtensions.test(value.name)) {
//     return "ID card must be an image or PDF";
//   }

//   return true;
// };

const validIdTypes = [
  "nin",
  "internationalPassport",
  "driverLicense",
  "votersCard",
];

const Screen: React.FC = () => {
  const navigate = useNavigate();
  let [step, setStep] = useState<number>(1);
  const payload: any = [];

  const nameSchema = yup.object().shape({
    surname: yup.string().required("Surname cannot be empty"),
    otherNames: yup.string().required("Other names cannot be empty"),
  });

  const bvnSchema = yup.object().shape({
    surname: yup.string().required("Surname cannot be empty"),
    otherNames: yup.string().required("Other names cannot be empty"),
  });

  const IDSchema = yup.object().shape({
    idType: yup
      .string()
      .oneOf(validIdTypes, "Invalid ID type")
      .required("ID type is required"),
    idNumber: yup.string().required("ID number is required"),
    // ID: yup
    //   .mixed() // Use .mixed() to allow custom validation
    //   .test("file-type", true, validateIDCard), // Use the custom validation function
  });

  const validationSchema = yup.lazy((values) =>
    values.step === 2 ? bvnSchema : values.step === 3 ? IDSchema : nameSchema
  );

  const handleSubmit = (values: any) => {
    payload.push(values);
    setStep(++step);
    navigate(ROUTE.SELLER_PAYMENT_REG + `/${step}`);

    console.log(payload);
  };
  if (step === 2) {
    return (
      <Wrapper>
        <h2>Enable Payment</h2>
        <Card
          width="100%"
          padding="40px 80px"
          height="500px"
          borderRadius="20px"
          onHover={false}
          className="card"
        >
          <div className="center">
            <div className="badge">
              <BsShieldLockFill size={45} />
            </div>
            <h3>Your BVN?</h3>
            <p className="p-20">
              We’ll use your BVN to create a bank account for your store
            </p>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ errors, touched }) => (
                <Form>
                  <FormControl>
                    <Label>Your BVN</Label>
                    <Input name="bvn" type="text" />
                    {errors.bvn &&
                      touched.bvn && ( // Display error message if touched and has an error
                        <ErrorMessageWrapper>{errors.bvn}</ErrorMessageWrapper>
                      )}
                  </FormControl>
                  <FormControl>
                    <Label>Date of Birth</Label>
                    <Input name="dob" type="date" />
                    {errors.dob &&
                      touched.dob && ( // Display error message if touched and has an error
                        <ErrorMessageWrapper>{errors.dob}</ErrorMessageWrapper>
                      )}
                  </FormControl>
                  <button className="paymentBtn classic" type="submit">
                    Keep Moving
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h2>Enable Payment</h2>
      <Card
        width="100%"
        padding="40px 80px"
        height="500px"
        borderRadius="20px"
        onHover={false}
        className="card"
      >
        <div className="center">
          <div className="badge">
            <FaRegUserCircle size={45} />
          </div>
          <h3>What’s your name?</h3>
          <p>as it appears on Government IDs</p>
          <p className="p-21">We’ll use this to create an account for you</p>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <FormControl>
                  <Label>Surname</Label>
                  <Input name="surname" type="text" />
                  {errors.surname &&
                    touched.surname && ( // Display error message if touched and has an error
                      <ErrorMessageWrapper>
                        {errors.surname}
                      </ErrorMessageWrapper>
                    )}
                </FormControl>
                <FormControl>
                  <Label>Other Names</Label>
                  <Input name="otherNames" type="text" />
                  {errors.otherNames &&
                    touched.otherNames && ( // Display error message if touched and has an error
                      <ErrorMessageWrapper>
                        {errors.otherNames}
                      </ErrorMessageWrapper>
                    )}
                </FormControl>
                <button className="paymentBtn classic" type="submit">
                  Keep Moving
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Card>
    </Wrapper>
  );
};

const RegsitrationScreen = () => {
  return <Layout layout={"dashboard"} component={Screen} state={false} />;
};

export default RegsitrationScreen;
