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
  Modal,
} from "./login.styles";
import React, { useState } from "react";
import Layout from "../../../Layouts";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import { marketLogo } from "../../../assets";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";
import { GoogleLogin } from "@react-oauth/google";
import { LoginFormValues } from "../../../Interfaces";
import { AppColors, ROUTE } from "../../../Shared/Constants";
import { MdOutlineCancel, MdOutlineMailOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { closeModal, selectActiveModal, showModal } from "../../../Features/modal/modalSlice";
import { Puff } from "react-loading-icons";
import useUsers from "../../../Features/user/userActions";
import { alertError, alertSuccess } from "../../../Features/alert/alertSlice";
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
const resePWdValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  
});

const responseGoogle = (response?: any) => {
  console.log(response);
};

const Screen: React.FC = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { loginUser } = useUsers();
  const navigate = useNavigate();


  const handleSubmit = async (values: LoginFormValues) => {
    // Handle form submission here
    let payload = { 
      ...values
    };
     
    setLoading(true);
    try {
      const userData = await loginUser(payload);
      dispatch(alertSuccess("Login successful"));
      console.log(userData)
      // document.cookie = `token=${userData.access_token}; expires=Thu, 18 Oct 2023 12:00:00 UTC; path=/; secure; HttpOnly`;
      // navigate('/')
    } catch (error: any) {
      setLoading(false);               
      for (let index = 0; index < error.graphQLErrors.length; index++) {
        dispatch(alertError(error.graphQLErrors[index].message));
      }
    }
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
              <CustomField name="checkbox" type="checkbox" />
              <span style={{ marginLeft: 5, marginTop: 2 }}>
                Keep me logged in
              </span>
            </div>
            <NavLink to="#" onClick={() => dispatch(showModal('forgotPassword'))}>
              forgot password?
            </NavLink>
          </Flex>
          <SubmitButton type="submit" loading={loading} disabled={loading}>
            {loading ? (
              <Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
            ) : (
              "Let’s go there"
            )}
          </SubmitButton>
          <p>
            Not registered yet?{" "}
            <NavLink to={ROUTE.REGISTER}>Create an Account</NavLink>
          </p>
          <div className="option">
            <span className="line"></span>
            <p>or</p>
            <span className="line"></span>
          </div>
          {/* <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="googleSignin"
          /> */}
          <GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />
        </Form>
      </Formik>
    </Container>
  );
};
const CustomField: React.FC<{
  name: string;
  type: string;
  checked?: boolean;
}> = ({ name, type, checked }) => {
  const [field, meta] = useField(name);
  const inputHasError = meta?.error?.length ? true : false;

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
  // const { show } = useSelector((state: any) => state.modal);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const activeModal = useSelector(selectActiveModal);

  const handleSubmit = () => {
    setLoading(true);
  };
  const ModalContent = (
    <Modal>
      {true && (
        <>
          <div className="label">
            <BiArrowBack size={32} color="#bdc4cd" />
            <MdOutlineCancel
              className="svg"
              size={32}
              color="#bdc4cd"
              onClick={() => dispatch(closeModal('forgotPassword'))}
            />
          </div>
          <Heading>
            <img src={marketLogo} alt="login-logo" />
            <div className="content">
              <h2>Forgotten Password</h2>
              <p>
                Enter your mail and we’ll send you a link to reset your password
              </p>
            </div>
          </Heading>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={resePWdValidationSchema} // Specify the validation schema
          >
            <Form>
              <FormControl>
                <Flex>
                  <div className="gray">
                    <MdOutlineMailOutline size={20} />
                  </div>
                  <CustomField name="email" type="email" />
                </Flex>
              </FormControl>
              <SubmitButton loading={loading} disabled={loading} type="submit">
                {" "}
                {loading ? (
                  <Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
                ) : (
                  "Submit"
                )}
              </SubmitButton>
            </Form>
          </Formik>
        </>
      )}
    </Modal>
  );
  return (
    <Layout
      popUpContent={ModalContent}
      showModal={activeModal}
      layout={"blank"}
      component={Screen}
      state={false}
    />
  );
};
export default LoginPage;
