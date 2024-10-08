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
import React, { useEffect, useState } from "react";
import Layout from "../../../Layouts";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import { ErrorIcon, loginLogo } from "../../../assets";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";
import { GoogleLogin } from "@react-oauth/google";
import { LoginFormValues } from "../../../Interfaces";
import { AppColors, ROUTE } from "../../../Shared/Constants";
import { MdOutlineCancel, MdOutlineMailOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import {
	closeModal,
	selectActiveModal,
	showModal,
} from "../../../Features/modal/modalSlice";
import { Puff } from "react-loading-icons";
import useUsers from "../../../Features/user/userActions";
import { alertError, alertSuccess } from "../../../Features/alert/alertSlice";
import { setCookie } from "../../../Shared/Utils/helperFunctions";
import { VerifyOTPModal } from "../../../Shared/Components";
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
	const [stayLoggedIn, setStayLoggedIn] = useState(false);
	const dispatch = useDispatch();
	const { loginUser, getMe } = useUsers();
	const redirectPath = sessionStorage.getItem("redirectPath") || "/";
	const url = sessionStorage.getItem("redirectPath") ? redirectPath : "/";

	useEffect(() => {
		// Function to clear the localStorage
		const cleanup = () => {
			localStorage.removeItem("otpAttempts");
		};

		// Cleanup on component unmount
		return () => {
			cleanup();
		};
	}, []); // Empty dependency array means this effect runs on mount and unmount

	const handleSubmit = async (values: LoginFormValues) => {
		// Handle form submission here
		let payload = {
			...values,
		};
		setLoading(true);
		try {
			let user = await loginUser(payload);
			dispatch(alertSuccess("Login successful"));
			setLoading(false);
			setCookie("user_id", user?.id, stayLoggedIn ? 7 : 0);
			setCookie("access_token", user?.access_token, stayLoggedIn ? 7 : 0);

			window.location.replace(url);

			sessionStorage.removeItem("redirectPath");
		} catch (error: any) {
			setLoading(false);
			if (error.graphQLErrors && error.graphQLErrors.length > 0) {
				for (let index = 0; index < error.graphQLErrors.length; index++) {
					console.log(JSON.parse(error.graphQLErrors[index].message).status);

					if (JSON.parse(error.graphQLErrors[index].message).status == 417) {
						localStorage.setItem(
							"phone",
							JSON.parse(error.graphQLErrors[index].message).code
						);
						setTimeout(async () => {
							dispatch(showModal("VerifyOTP"));
							dispatch(
								await getMe(
									parseInt(
										JSON.parse(error.graphQLErrors[index].message).payload
									)
								)
							);
						}, 1000);
					}
					dispatch(
						alertError(JSON.parse(error.graphQLErrors[index].message).message)
					);
				}
			}
			if (error.protocolErrors && error.protocolErrors.length > 0) {
				console.log(2);
				for (let index = 0; index < error.protocolErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.protocolErrors[index].message).message)
					);
				}
			}
			if (error.clientErrors && error.clientErrors.length > 0) {
				console.log(3);

				for (let index = 0; index < error.clientErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.clientErrors[index].message).message)
					);
				}
			}
			if (error.networkErrors && error.networkErrors.length > 0) {
				console.log(4);

				for (let index = 0; index < error.networkErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.networkErrors[index].message).message)
					);
				}
			}
		}
	};

	return (
		<Container>
			<Heading>
				<img src={loginLogo} alt="login-logo" />
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
					<Flex style={{ display: "flex" }}>
						<div>
							<CustomField
								name="checkbox"
								type="checkbox"
								checked={stayLoggedIn}
								onChange={() => setStayLoggedIn(!stayLoggedIn)}
							/>
							<span style={{ marginLeft: 5, marginTop: 2 }}>
								Keep me logged in
							</span>
						</div>
						<NavLink
							to="#"
							style={{ fontWeight: 400 }}
							onClick={() => dispatch(showModal("forgotPassword"))}
						>
							Forgot password?
						</NavLink>
					</Flex>
					<SubmitButton type="submit" loading={loading} disabled={loading}>
						{loading ? (
							<Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
						) : (
							"Let’s go there"
						)}
					</SubmitButton>
					<p style={{ fontWeight: 400 }}>
						Not a member?{" "}
						<NavLink to={ROUTE.REGISTER}>Join the Revolution</NavLink>
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
					<GoogleLogin
						onSuccess={responseGoogle}
						onError={responseGoogle}
						theme="outline"
					/>
				</Form>
			</Formik>
		</Container>
	);
};
const CustomField: React.FC<{
	name: string;
	type: string;
	className?: string;
	checked?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ name, type, checked, onChange, className }) => {
	const [field, meta] = useField(name);
	const inputHasError = meta?.error?.length ? true : false;

	if (type === "checkbox") {
		return <CustomCheckbox checked={checked} type={type} onChange={onChange} />;
	}
	return (
		<>
			<Input
				className={className}
				{...field}
				error={inputHasError}
				type={type}
			/>
			{meta.touched && meta.error && (
				<div style={{ display: "flex", gap: 2, alignItems: "center" }}>
					<div style={{ position: "relative" }}>
						<ErrorIcon
							style={{ position: "relative", right: 0, left: 0, top: 0 }}
						/>
					</div>
					<ErrorMessageWrapper>{meta.error}</ErrorMessageWrapper>
				</div>
			)}
		</>
	);
};
const LoginPage = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const [showPwd, setShowPwd] = useState(false);
	const [showPwd2, setShowPwd2] = useState(false);
	const nav = useNavigate();
	const activeModal = useSelector(selectActiveModal);
	const phone = localStorage.getItem("phone") ?? "";
	const { sendResetPasswordLink, verifyResetPasswordLink, updateMyPassword } =
		useUsers();
	const location = useLocation();
	const initialValues2 = {
		password: "",
		confirmPassword: "",
	};
	const resetPWdValidationSchema = yup.object({
		password: yup
			.string()
			.min(8, "Password must be at least 8 characters long")
			.matches(/[a-z]/, "Password must contain at least one lowercase letter")
			.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
			.matches(/\d/, "Password must contain at least one number")
			.matches(
				/[@$!%*?&#]/,
				"Password must contain at least one special character (@, $, !, %, *, ?, &, #)"
			)
			.required("Password is required"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), ""], "Passwords must match")
			.required("Confirm Password is required"),
	});
	// Parse the query parameters from the URL
	const queryParams = new URLSearchParams(location.search);
	const token = queryParams.get("token"); // Get the token parameter
	const email = queryParams.get("email"); // Get the token parameter

	useEffect(() => {
		const verifyTokenLink = async () => {
			try {
				await verifyResetPasswordLink(token);
				dispatch(showModal("resetPassword"));
			} catch (error: any) {
				dispatch(
					alertError(
						`An error has occurred- ${
							JSON.parse(error.message).message || error.message
						}`
					)
				);
			} finally {
			}
		};
		if (token) {
			verifyTokenLink();
		}
	}, [token]);

	const { status, message } = useSelector((state: any) => state.alert);
	const handleSubmit = async (value: any) => {
		console.log(value);
		setLoading(true);
		try {
			await sendResetPasswordLink({
				email: value.email,
				link: window.location.origin,
			});
		} catch (error) {
		} finally {
			setLoading(false);
			dispatch(closeModal("forgotPassword"));

			dispatch(
				alertSuccess(
					"We've sent a password reset link to your email(if it exists in our db)."
				)
			);
		}
	};
	const handleSubmit2 = async (value: any) => {
		console.log(value);
		setLoading(true);
		try {
			await updateMyPassword({
				email,
				password: value.password,
				token,
			});
			dispatch(alertSuccess("Password changed successfully"));

			nav(ROUTE.LOGIN);
		} catch (error: any) {
			dispatch(
				alertError(
					`An error has occurred- ${
						JSON.parse(error.message).message || error.message
					}`
				)
			);
		} finally {
			setLoading(false);
			dispatch(closeModal("resetPassword"));
		}
	};
	const ModalContent = (
		<Modal>
			{true && (
				<>
					<div className="label">
						<BiArrowBack size={32} color="#bdc4cd" />
						<MdOutlineCancel
							size={32}
							color="#bdc4cd"
							onClick={() => dispatch(closeModal("forgotPassword"))}
						/>
					</div>
					<Heading>
						<img src={loginLogo} alt="login-logo" />
						<div className="content">
							<h2>Forgotten Password</h2>
							<p>
								Enter your mail and we’ll send you a link to reset your password
							</p>
						</div>
					</Heading>

					<Formik
						initialValues={initialValues}
						onSubmit={(values, { resetForm }) => {
							handleSubmit(values); // Your submit handler
							resetForm(); // This will clear the form
						}}
						validationSchema={resePWdValidationSchema} // Specify the validation schema
					>
						{({ resetForm }) => (
							<Form>
								<FormControl>
									<Flex>
										<div className="gray">
											<MdOutlineMailOutline className="mail" size={20} />
										</div>
										<CustomField className="input" name="email" type="email" />
									</Flex>
								</FormControl>
								<SubmitButton
									loading={loading}
									disabled={loading}
									type="submit"
									onSubmit={() => resetForm()}
								>
									{loading ? (
										<Puff
											stroke={AppColors.brandOrange}
											strokeOpacity={0.125}
										/>
									) : (
										"Submit"
									)}
								</SubmitButton>
							</Form>
						)}
					</Formik>
				</>
			)}
		</Modal>
	);

	const ModalContent2 = (
		<Modal>
			{true && (
				<>
					<div className="label">
						<BiArrowBack size={32} color="#bdc4cd" />
						<MdOutlineCancel
							className="svg"
							size={32}
							color="#bdc4cd"
							onClick={() => dispatch(closeModal("forgotPassword"))}
						/>
					</div>
					<Heading>
						<img src={loginLogo} alt="login-logo" />
						<div className="content">
							<h2>Reset Password</h2>
						</div>
					</Heading>

					<Formik
						initialValues={initialValues2}
						onSubmit={(values) => {
							handleSubmit2(values); // Your submit handler
						}}
						validationSchema={resetPWdValidationSchema} // Specify the validation schema
					>
						<Form>
							<FormControl>
								<Label>New Password</Label>
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
								<Label>Confirm Password</Label>
								<CustomField
									name="confirmPassword"
									type={showPwd2 ? "text" : "password"}
								/>
								{showPwd2 ? (
									<AiFillEyeInvisible onClick={() => setShowPwd2(!showPwd)} />
								) : (
									<AiFillEye onClick={() => setShowPwd2(!showPwd2)} />
								)}
							</FormControl>
							<SubmitButton loading={loading} disabled={loading} type="submit">
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
			popUpContent={
				activeModal === "VerifyOTP" ? (
					<VerifyOTPModal
						url="/"
						number={phone}
						error={status === "error" && message?.message}
					/>
				) : activeModal === "resetPassword" ? (
					ModalContent2
				) : (
					ModalContent
				)
			}
			modalPadding={"20px 12px"}
			showModal={activeModal}
			layout={"blank"}
			component={() => <Screen />}
			modalWidth={500}
			navMode="blank"
			isLoading={false}
		/>
	);
};
export default LoginPage;
