import React, { useState } from "react";
import { Card, View } from "../../../../../Shared/Components";
import { IoWalletOutline } from "react-icons/io5";
import {
	ErrorMessageWrapper,
	FormControl,
	GridItem,
	Heading,
	Input,
	Label,
	SubmitButton,
} from "../payment.styles";
import { ErrorIcon, loginLogo, MoneyIcon } from "../../../../../assets";
import { Form, Formik, useField } from "formik";
import * as yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Puff } from "react-loading-icons";
import { AppColors } from "../../../../../Shared/Constants";

const initialValues: any = {
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
const Screen: React.FC = () => {
	const [showPwd, setShowPwd] = useState(false);
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (values: any) => {
		// Handle form submission here
		let payload = {
			...values,
		};
		console.log(payload);
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));
			setLoading(false);
			// Navigate to payment screen
			// window.location.href = "/payment";
		} catch (error) {
			setLoading(false);
			console.error("Error:", error);
		}
	};

	const gridItem = [
		<GridItem background="#00B517">
			<div className="wrap">
				<div className="icon">
					<IoWalletOutline color="#fff" size="12" />
				</div>
			</div>
			<div className="info">
				<h3>Account Balance</h3>
				<p>N245,000</p>
			</div>
		</GridItem>,
		<GridItem background="#FA3434">
			<div className="wrap">
				<div className="icon">
					<IoWalletOutline color="#fff" size="12" />
				</div>
			</div>
			<div className="info">
				<h3>Uba bank</h3>
				<p>2092138348</p>
				<h3>Aluta's Store</h3>
			</div>
		</GridItem>,
	];
	return (
		<div>
			<div className="view_container">
				<View
					mode="flex"
					gridItems={gridItem}
					itempergrid={2}
					className="dash_grid"
				/>
			</div>
			<Card
				width="100%"
				padding="40px 80px"
				height="500px"
				borderRadius="20px"
				onHover={false}
				className="card2"
			>
				<Heading>
					<MoneyIcon />
					<h2>Withdraw Fund</h2>
				</Heading>

				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={validationSchema} // Specify the validation schema
				>
					<Form className="form">
						<FormControl>
							<Label>Amount</Label>
							<CustomField name="amount" type="text" placeholder="NGN100,000" />
						</FormControl>
						<FormControl>
							<Label>Withdraw to</Label>
							<CustomField name="account" type="text" />
						</FormControl>
						<FormControl>
							<Label>Input Password</Label>
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

						<SubmitButton type="submit" loading={loading} disabled={loading}>
							{loading ? (
								<Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
							) : (
								"Withdraw"
							)}
						</SubmitButton>
					</Form>
				</Formik>
			</Card>
		</div>
	);
};
const CustomField: React.FC<{
	name: string;
	type: string;
	checked?: boolean;
	placeholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ name, type, placeholder }) => {
	const [field, meta] = useField(name);
	const inputHasError = meta?.error?.length ? true : false;

	// if (type === "checkbox") {
	// 	return <CustomCheckbox checked={checked} type={type} onChange={onChange} />;
	// }
	return (
		<>
			<Input
				{...field}
				error={inputHasError}
				type={type}
				placeholder={placeholder}
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
export default Screen;
