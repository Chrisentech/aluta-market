import {
  Container,
  Label,
  ErrorMessageWrapper,
  Input,
  SubmitButton,
  FormControl,
  Select,
  LeftPanel,
  RightPanel,
  Heading,
  FirstScreen,
  SecondScreen,
  // Trademark,
} from "./register.styles";
import React, { useState } from "react";
import Layout from "../../../Layouts";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";
import { GoogleLogin } from "@react-oauth/google";
import { RegisterFormValues } from "../../../Interfaces";
import { ROUTE } from "../../../Shared/Constants";
import { generateSlug } from "../../../Shared/Utils/helperFunctions";
import { FaArrowLeft } from "react-icons/fa";
import { registerImg } from "../../../assets";
import { Campus } from "../../../Shared/Constants/data";
import useUsers from "../../../Features/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { alertError, alertSuccess } from "../../../Features/alert/alertSlice";
import { VerifyOTPModal } from "../../../Shared/Components";
import { showModal } from "../../../Features/modal/modalSlice";

const initialValues: RegisterFormValues = {
  email: "",
  password: "",
  fullname: "",
  phone: "",
  campus: "",
  usertype: "",
};
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  fullname: yup.string().required("Fullname is required"),
  phone: yup.string().required("Phone is required"),
  campus: yup.string().required("Select your campus"),
  usertype: yup.string().required("Select an option"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, #,%, *, ?, &)"
    ),
});

const responseGoogle = (response: any | void) => {
  console.log(response);
};

const Screen: React.FC = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [userType, setUserType] = useState("");
  const [studentCampus, setCampus] = useState("");
  const [loading, setLoading] = useState(false);
  const [storeName, setStoreName] = useState("");
  const dispatch = useDispatch();
  const { createUser } = useUsers();
  const handleSubmit = async (values: RegisterFormValues) => {
    // console.log(campus)
    let payload = {
      campus: studentCampus,
      usertype: userType,
      email: "",
      phone: "",
      password: "",
      fullname: "",
    };
    let { campus, usertype, ...rest } = values;
    payload = { ...payload, ...rest };
    setLoading(true);
    try {
      await createUser(payload);
      dispatch(alertSuccess("Registration successful. Verify OTP!"));
      setTimeout(() => {
        dispatch(showModal());
      }, 1500);
    } catch (error: any) {
      setLoading(false);
      for (let index = 0; index < error.graphQLErrors.length; index++) {
        dispatch(alertError(error.graphQLErrors[index].message));
      }
    }
  };
  return (
    <Container>
      <LeftPanel>
        <FirstScreen userType={userType}>
          <Heading>
            <h2>Join the Fun...</h2>
            <p>and let get this party started!</p>
          </Heading>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            // validationSchema={validationSchema} // Specify the validation schema
          >
            <Form>
              <FormControl>
                <Label>
                  Fullname<span>*</span>
                </Label>
                <CustomField name="fullname" type="text" />
              </FormControl>
              <FormControl>
                <Label>
                  Email<span>*</span>
                </Label>
                <CustomField name="email" type="email" />
              </FormControl>
              <FormControl>
                <Label>
                  Password<span>*</span>
                </Label>
                <CustomField
                  name="password"
                  type={showPwd ? "text" : "password"}
                />
                {showPwd ? (
                  <AiFillEyeInvisible onClick={() => setShowPwd(!showPwd)} />
                ) : (
                  <AiFillEye onClick={() => setShowPwd(!showPwd)} />
                )}
              </FormControl>
              <FormControl>
                <Label>
                  Phone Number<span>*</span>
                </Label>
                <CustomField name="phone" type="text" />
              </FormControl>
              <FormControl>
                <Label>
                  Campus<span>*</span>
                </Label>
                <CustomField
                  name={studentCampus ? "none" : "campus"}
                  type="select"
                  defaultText="Select an option"
                  onChange={(e: any) => setCampus(e.target.value)}
                  options={Campus}
                  value={studentCampus}
                />
              </FormControl>
              <FormControl>
                <Label>
                  Category<span>*</span>
                </Label>

                <CustomField
                  name={userType ? "none" : "usertype"}
                  type="select"
                  defaultText="I am a..."
                  onChange={(e: any) => setUserType(e.target.value)}
                  options={[
                    { label: "I am a Buyer", value: "buyer" },
                    { label: "I am a Seller", value: "seller" },
                  ]}
                  value={userType}
                />
              </FormControl>
              <SubmitButton type="submit" disabled={loading}>
                Join the Wagon
              </SubmitButton>

              <div className="option">
                <span className="line"></span>
                <p>or</p>
                <span className="line"></span>
              </div>
              {/* <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Create account with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                className="googleSignin"
              /> */}
              <GoogleLogin
                onSuccess={responseGoogle}
                onError={() => responseGoogle}
                // cookiePolicy={"single_host_origin"}
              />
              <p>
                Already have an account?{" "}
                <NavLink to={ROUTE.LOGIN}>Login here</NavLink>
              </p>
            </Form>
          </Formik>
        </FirstScreen>
        <SecondScreen userType={userType}>
          <FaArrowLeft className="back" onClick={() => setUserType("buyer")} />

          <Heading>
            <h2>Aluta Continua...</h2>
            <p>Book a slot for your store!</p>
          </Heading>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema} // Specify the validation schema
          >
            <Form>
              <FormControl>
                <Label>
                  Name of Store<span>*</span>
                </Label>
                <CustomField
                  name="storeName"
                  value={storeName}
                  onChange={(e: any) => setStoreName(e.target.value)}
                  type="text"
                />
              </FormControl>
              <FormControl>
                <Label>Store URL</Label>
                <CustomField
                  name="storeUrl"
                  type="text"
                  readOnly
                  value={
                    storeName
                      ? "https://aluta-market.com/" +
                        generateSlug(storeName) +
                        "/store001"
                      : ""
                  }
                />
              </FormControl>
              <FormControl>
                <Label>
                  Store Phone Number<span>*</span>
                </Label>
                <CustomField name="phone" type="text" readOnly />
              </FormControl>
              <div className="check">
                <Input error={false} type="checkbox" />{" "}
                <span>same as my phone number</span>
              </div>
              <FormControl>
                <Label>
                  Store Description<span>*</span>
                </Label>
                <CustomField name="storeDescription" type="text" />
                <div className="check">
                  <Input error={false} type="checkbox" />{" "}
                  <span>I have a physical address</span>
                </div>
                <div className="check">
                  <Input error={false} type="checkbox" />{" "}
                  <span>
                    I agree to the{" "}
                    <NavLink to="#">Terms and Conditions</NavLink>
                  </span>
                </div>
              </FormControl>
              <SubmitButton type="submit" disabled={true}>
                Register Store
              </SubmitButton>
            </Form>
          </Formik>
        </SecondScreen>
      </LeftPanel>
      <RightPanel>
        <img src={registerImg} alt="register-image" />
      </RightPanel>
      {/* <Trademark>Alutamarket © 2023 All Rights Reserved. </Trademark> */}
    </Container>
  );
};
const CustomField: React.FC<{
  name: string;
  type: string;
  options?: any;
  userType?: string;
  defaultText?: string;
  value?: string;
  onChange?: any;
  readOnly?: boolean;
}> = ({ name, type, defaultText, options, value, readOnly, onChange }) => {
  const [field, meta] = useField(name);
  // console.log(meta)
  const inputHasError = meta?.error?.length ? true : false;
  if (type === "select") {
    // console.log(meta.error);
    return (
      <>
        <Select
          {...field}
          error={false}
          value={value}
          as="select"
          name={name}
          type={type}
          onChange={onChange}
        >
          <option disabled value="">
            {defaultText}
          </option>
          {options.map((opt: any, index: number) => {
            return (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            );
          })}
        </Select>
        {meta.touched && meta.error && (
          <ErrorMessageWrapper>{meta.error}</ErrorMessageWrapper>
        )}
      </>
    );
  }
  return (
    <>
      <Input
        {...field}
        error={inputHasError}
        type={type}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
      {meta.touched && meta.error && (
        <ErrorMessageWrapper>{meta.error}</ErrorMessageWrapper>
      )}
    </>
  );
};
const RegisterPage = () => {
  const { show } = useSelector((state: any) => state.modal);

  return (
    <Layout
      showModal={show}
      layout={"blank"}
      component={Screen}
      state={false}
      popUpContent={<VerifyOTPModal url="" />}
    />
  );
};
export default RegisterPage;
