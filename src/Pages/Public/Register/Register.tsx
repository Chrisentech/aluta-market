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
	CustomCheckbox,
	Hint,
	Footer,
	// Trademark,
} from "./register.styles";
import React, { ChangeEvent, useEffect, useState } from "react";
import Layout from "../../../Layouts";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { GoogleLogin } from "react-google-login";
import { GoogleLogin } from "@react-oauth/google";
import { RegisterFormValues } from "../../../Interfaces";
import { AppColors, ROUTE } from "../../../Shared/Constants";
import {
	filterNum,
	generateUniqueId,
	isValidPassword,
} from "../../../Shared/Utils/helperFunctions";
import { FaArrowLeft } from "react-icons/fa";
import { ErrorIcon, registerImg } from "../../../assets";
import { Campus } from "../../../Shared/Constants/data";
// import useUsers from "../../../Features/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { alertError, alertSuccess } from "../../../Features/alert/alertSlice";
import { VerifyOTPModal } from "../../../Shared/Components";
import {
	selectActiveModal,
	showModal,
} from "../../../Features/modal/modalSlice";
import Puff from "react-loading-icons/dist/esm/components/puff";
import useUsers from "../../../Features/user/userActions";

const initialValues: RegisterFormValues = {
	email: "",
	password: "",
	fullname: "",
	phone: "",
	campus: "",
	usertype: "",
	storeName: "",
	storePhone: "",
	description: "",
};
const validationSchemaOne = yup.object().shape({
	email: yup.string().email("Invalid email").required("Email is required"),
	fullname: yup.string().required("Fullname is required"),
	phone: yup.string().required("Phone is required"),
	campus: yup.string().required("Select your campus"),
	usertype: yup.string().required("Select an option"),
	password: yup
		.string()
		.required(
			"Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, #,%, *, ?, &)"
		)
		.min(
			8,
			"Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, #,%, *, ?, &)"
		)
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])/,
			"Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, #,%, *, ?, &)"
		),
});
const validationSchemaTwo = yup.object().shape({
	storeName: yup.string().required("Store Name is required"),
	storePhone: yup.string().required("Store Phone is required"),
	description: yup.string().required("Store Description is required"),
	storeaddress: yup.string().required("Store Address is required"),
});

const responseGoogle = (response: any | void) => {
	console.log(response);
};
const uuid = generateUniqueId();

const Screen: React.FC = () => {
	const [showPwd, setShowPwd] = useState(false);
	const [userType, setUserType] = useState("");
	const [fullname, setFullname] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [studentCampus, setCampus] = useState("");
	const [loading, setLoading] = useState(false);
	const [storeName, setStoreName] = useState<any>("");
	const [storeNumber, setStoreNumber] = useState("");
	const [description, setDescription] = useState("");
	const [storeaddress, setStoreAddress] = useState("");
	const [hasPhysicalAddress, sethasPhysicalAddress] = useState(false);
	const { createUser, checkStoreName } = useUsers();
	const [buyerNumber, setBuyerNumber] = useState("");
	const [debouncedStoreName, setDebouncedStoreName] =
		useState<string>(storeName);
	const [isStoreNameAvailable, setIsStoreNameAvailable] = useState<
		boolean | null
	>(null);
	// console.log(meta)
	const [isSameNumber, setSameNumber] = useState<boolean>(false);
	const [formValues, setFormValues] = useState(initialValues);
	const [isTerms, setIsTerms] = useState(false);

	const dispatch = useDispatch();
	// Debounce logic
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedStoreName(storeName);
		}, 500); // Delay of 500ms (you can adjust this)

		return () => {
			clearTimeout(handler);
		};
	}, [storeName]);

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

	useEffect(() => {
		if (debouncedStoreName) {
			const check = async () => {
				try {
					await checkStoreName(debouncedStoreName.toLowerCase().trim());
					setIsStoreNameAvailable(true);
				} catch (error: any) {
					dispatch(alertError(JSON.parse(error.message).message));
				}
			};
			check();
		}
	}, [debouncedStoreName]);

	const handleSameNumber = () => {
		if (!isSameNumber) setStoreNumber(buyerNumber);
		setSameNumber(!isSameNumber);
	};
	const buyerFormIsValid =
		!!fullname &&
		!!email &&
		!!password &&
		!!studentCampus &&
		!!userType &&
		isValidPassword(password) &&
		!!buyerNumber;

	const sellerFormIsValid =
		!!storeName && !!storeNumber && !!description && !!isTerms;

	const handleSubmit = async (values: RegisterFormValues) => {
		localStorage.setItem("number", String(filterNum(buyerNumber)));
		setFormValues(values);
		let payload: any = {
			campus: studentCampus,
			usertype: userType,
			phone: filterNum(buyerNumber),
			fullname,
			email,
			password,
			// avatar: "",
		};
		if (userType === "seller") {
			payload = {
				...payload,
				stores: {
					address: storeaddress,
					link: uuid + "/store",
					has_physical_address: hasPhysicalAddress,
					name: storeName.toLowerCase().trim(),
					description,
					phone: filterNum(storeNumber),
					user: 0,
					wallet: 0,
					status: true,
				},
			};
		}

		try {
			setLoading(true);
			await createUser(payload);
			dispatch(alertSuccess("Registration successful. Verify OTP!"));
			setTimeout(() => {
				setLoading(false);
				dispatch(showModal("VerifyOTP"));
			}, 1500);
		} catch (error: any) {
			setLoading(false);
			if (error.graphQLErrors && error.graphQLErrors.length > 0) {
				for (let index = 0; index < error.graphQLErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.graphQLErrors[index].message).message)
					);
				}
			}
			if (error.protocolErrors && error.protocolErrors.length > 0) {
				for (let index = 0; index < error.protocolErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.protocolErrors[index].message).message)
					);
				}
			}
			if (error.clientErrors && error.clientErrors.length > 0) {
				for (let index = 0; index < error.clientErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.clientErrors[index].message).message)
					);
				}
			}
			if (error.networkErrors && error.networkErrors.length > 0) {
				for (let index = 0; index < error.networkErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.networkErrors[index].message).message)
					);
				}
			}
		}
	};

	const handleChangeScreen = (e: any) => {
		if (!fullname || !email || !password || !studentCampus || !buyerNumber) {
			dispatch(alertError("All Fields are required"));
			return null;
		}
		setUserType(e.target.value);

		localStorage.setItem("number", String(filterNum(buyerNumber)));
		let payload = {
			email,
			password,
			fullname,
			phone: filterNum(buyerNumber),
			campus: studentCampus,
			usertype: userType,
		};
		setFormValues(payload);
		// console.log(formValues);
	};

	return (
		<Container>
			<LeftPanel>
				<FirstScreen userType={userType}>
					<Heading>
						<h2>Join us...</h2>
						<p>And be part of the thriving revolution</p>
					</Heading>
					<Formik
						initialValues={formValues}
						onSubmit={handleSubmit}
						validationSchema={!buyerFormIsValid && validationSchemaOne} // Specify the validation schema
					>
						<Form>
							<FormControl>
								<Label>
									Fullname<span>*</span>
								</Label>
								<CustomField
									name={fullname != "" ? "none" : "fullname"}
									type="text"
									value={fullname}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										setFullname(e.target.value)
									}
								/>
							</FormControl>
							<FormControl>
								<Label>
									Email<span>*</span>
								</Label>
								<CustomField
									name={email != "" ? "none" : "email"}
									type="email"
									value={email}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										setEmail(e.target.value)
									}
								/>
							</FormControl>
							<FormControl>
								<Label>
									Password<span>*</span>
								</Label>
								<CustomField
									name={isValidPassword(password) ? "none" : "password"}
									type={showPwd ? "text" : "password"}
									value={password}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										setPassword(e.target.value)
									}
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
								<CustomField
									name={buyerNumber != "" ? "none" : "phone"}
									type="text"
									value={buyerNumber}
									onChange={(e: ChangeEvent<HTMLInputElement>) => {
										setBuyerNumber(e.target.value);
									}}
								/>
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
									onChange={handleChangeScreen}
									options={[
										{ label: "I am a Buyer", value: "buyer" },
										{ label: "I am a Seller", value: "seller" },
									]}
									value={userType}
								/>
							</FormControl>
							<SubmitButton
								active
								type="submit"
								loading={loading}
								disabled={loading || !buyerFormIsValid}
								style={{ padding: loading ? "7px" : "17px 20px" }}
							>
								{loading ? (
									<Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
								) : (
									"Continue"
								)}
							</SubmitButton>

							<div className="option">
								<span className="line"></span>
								<p>or</p>
								<span className="line"></span>
							</div>
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
						initialValues={formValues}
						onSubmit={handleSubmit}
						validationSchema={
							!storeName && !storeNumber && !description && validationSchemaTwo
						} // Specify the validation schema
					>
						<Form>
							<FormControl>
								<Label>
									Name of Store<span>*</span>
								</Label>
								<CustomField
									name={storeName ? "none" : "storeName"}
									value={storeName}
									onChange={(e: any) => setStoreName(e.target.value)}
									type="text"
								/>
								{storeName ? (
									<Hint style={{ color: "green" }}>
										{storeName} is{" "}
										<span>
											{!isStoreNameAvailable ? "not available" : "available"}
										</span>
									</Hint>
								) : (
									<Hint>
										Hint: You can create more stores under your dashboard
									</Hint>
								)}
							</FormControl>
							<FormControl>
								<Label>Store URL</Label>
								<CustomField
									name="storeUrl"
									type="text"
									readOnly
									value={
										storeName
											? window.location.origin + "/" + uuid + "/store"
											: ""
									}
									onCopy={(e: any) => e.preventDefault()}
								/>
								<Hint>storeName.alutamarket.com</Hint>
							</FormControl>
							<FormControl>
								<Label>
									Store Phone Number<span>*</span>
								</Label>
								<CustomField
									name={storeNumber ? "none" : "storenumber"}
									type="text"
									value={isSameNumber ? buyerNumber : storeNumber}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										setStoreNumber(e.target.value)
									}
									readOnly={isSameNumber}
								/>
								<Label checkbox small>
									<CustomField
										name="isSameNumber"
										type="checkbox"
										checked={isSameNumber}
										onChange={handleSameNumber}
									/>
									same as my phone number
								</Label>
							</FormControl>
							<FormControl>
								<Label>
									Store Description<span>*</span>
								</Label>
								<CustomField
									name={description ? "none" : "description"}
									type="text"
									value={description}
									onChange={(e: any) => setDescription(e.target.value)}
								/>
							</FormControl>
							{hasPhysicalAddress && (
								<FormControl>
									<Label>
										Store Address<span>*</span>
									</Label>
									<CustomField
										name={storeaddress ? "none" : "storeaddress"}
										type="text"
										value={storeaddress}
										onChange={(e: any) => setStoreAddress(e.target.value)}
									/>
								</FormControl>
							)}
							<FormControl>
								<Label checkbox>
									<CustomField
										name="havePhysicalAddress"
										type="checkbox"
										checked={hasPhysicalAddress}
										onChange={() => sethasPhysicalAddress(!hasPhysicalAddress)}
									/>
									I have a physical address
								</Label>
								<Label checkbox>
									<CustomField
										name="termsAndConditions"
										type="checkbox"
										onChange={() => setIsTerms(!isTerms)}
									/>
									I agree to the<span style={{ width: "0.2em" }}></span>
									<NavLink to="#" className="terms">
										Terms and Conditions
									</NavLink>
								</Label>
							</FormControl>
							<SubmitButton
								active={true}
								type="submit"
								disabled={loading || !sellerFormIsValid}
								loading={loading}
								style={{ padding: loading ? "7px" : "17px 20px" }}
							>
								{loading ? (
									<Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
								) : (
									"Register store"
								)}
							</SubmitButton>
						</Form>
					</Formik>
				</SecondScreen>
			</LeftPanel>
			<RightPanel>
				<img src={registerImg} alt="register-image" />
			</RightPanel>
			{/* <Trademark>Alutamarket © 2023 All Rights Reserved. </Trademark> */}
			<Footer>
				<p>Alutamarket © 2024 All Rights Reserved. </p>
			</Footer>
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
	onCopy?: any;
	readOnly?: boolean;
	checked?: boolean;
}> = ({
	name,
	type,
	defaultText,
	options,
	value,
	readOnly,
	onChange,
	checked,
	onCopy,
}) => {
	const [field, meta] = useField(name);
	// console.log(meta)
	const inputHasError = meta?.error?.length ? true : false;
	if (type === "checkbox") {
		return (
			<>
				<CustomCheckbox checked={checked} onChange={onChange} />
				<span className="custom"></span>
			</>
		);
	}
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
				onCopy={onCopy}
			/>
			{meta.touched && meta.error && (
				<ErrorMessageWrapper>{meta.error}</ErrorMessageWrapper>
			)}
		</>
	);
};
const RegisterPage = () => {
	const activeModal = useSelector(selectActiveModal);

	return (
		<Layout
			showModal={activeModal}
			layout={"blank"}
			component={Screen}
			isLoading={false}
			navMode="blank"
			popUpContent={
				<VerifyOTPModal
					url={ROUTE.LOGIN}
					number={localStorage.getItem("number") ?? ""}
				/>
			}
		/>
	);
};
export default RegisterPage;
