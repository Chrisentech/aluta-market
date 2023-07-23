import {
  Container,
  Label,
  ErrorMessageWrapper,
  Input,
  SubmitButton,
  FormControl,
  Flex,
  Heading,
  CustomCheckbox,
} from "./login.styles";
import React, { useState } from "react";
import Layout from "../../../Layouts";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import { marketLogo } from "../../../assets";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { LoginFormValues } from "../../../Interfaces";
import { ROUTE } from "../../../Shared/Constants";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, #,%, *, ?, &)"
    ),
});

const responseGoogle = (response: any) => {
  console.log(response);
};

const Screen: React.FC = () => {
  const [showPwd, setShowPwd] = useState(false);
  const handleSubmit = (values: LoginFormValues) => {
    // Handle form submission here
    console.log(values);
  };
  return (
    <Container>
      <Heading>
        <img src={marketLogo} alt="login-logo" />
        <h2>Welcome, Comrade</h2>
        <p>Let’s see your VIP pass to get you in!</p>
      </Heading>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} // Specify the validation schema
      >
        <Form>
          <FormControl>
            <Label>Email</Label>
            <CustomField name="email" type="email" />
          </FormControl>
          <FormControl>
            <Label>Password</Label>
            <CustomField name="password" type={showPwd ? "text" : "password"} />
            {showPwd ? (
              <AiFillEyeInvisible onClick={() => setShowPwd(!showPwd)} />
            ) : (
              <AiFillEye onClick={() => setShowPwd(!showPwd)} />
            )}
          </FormControl>
          <Flex>
            <div>
              <CustomField name="checkbox"  type="checkbox" />
              <span>Keep me logged in</span>
            </div>
            <NavLink to="#">forgot password?</NavLink>
          </Flex>
          <SubmitButton type="submit">Let’s go there</SubmitButton>
          <p>
            Not registered yet?{" "}
            <NavLink to={ROUTE.REGISTER}>Create an Account</NavLink>
          </p>
          <div className="option">
            <span className="line"></span>
            <p>or</p>
            <span className="line"></span>
          </div>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="googleSignin"
          />
        </Form>
      </Formik>
    </Container>
  );
};
const CustomField: React.FC<{
  name: string;
  type: string;
  checked?:boolean
}> = ({ name, type ,checked}) => {
  const [field, meta] = useField(name);
  const inputHasError = meta?.error?.length;

  if (type === "checkbox") {
    return <CustomCheckbox checked={checked} type={type} />;
  }

  return (
    <>
      <Input {...field} error={inputHasError} type={type} />
      {meta.touched && meta.error && (
        <ErrorMessageWrapper>{meta.error}</ErrorMessageWrapper>
      )}
    </>
  );
};
const LoginPage = () => {
  return <Layout layout={"blank"} component={Screen} state={false} />;
};
export default LoginPage;
