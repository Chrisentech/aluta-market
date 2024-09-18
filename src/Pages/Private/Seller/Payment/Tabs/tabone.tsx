import React, { useEffect, useState } from "react";
import { Card, View, Dropdown } from "../../../../../Shared/Components";
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
import { ErrorIcon, MoneyIcon } from "../../../../../assets";
import { Form, Formik, useField } from "formik";
import * as yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Puff } from "react-loading-icons";
import { AppColors } from "../../../../../Shared/Constants";
import { useSelector } from "react-redux";
import { selectStore } from "../../../../../Features/store/storeSlice";
import { fetchMe } from "../../../../../Features/user/userSlice";
import useUsers from "../../../../../Features/user/userActions";

const initialValues: any = {
	amount: "",
	password: "",
	account: "",
};
const validationSchema = yup.object().shape({
	amount: yup.number().required("Amount is required"),
	account: yup.string().required("Account  is required"),
	password: yup
		.string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])/,
			"Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, #,%, *, ?, &)"
		),
});
const AccountTab: React.FC = () => {
	const [showPwd, setShowPwd] = useState(false);
	const [loading, setLoading] = useState(false);
	const store = useSelector(selectStore);
	const { getDva } = useUsers();
	const me: any = useSelector(fetchMe);
	useEffect(() => {
		const fetchDVA = async () => {
			await getDva(me?.email);
		};

		if (!me?.dva) {
			fetchDVA();
		}
	}, [me]);

	const handleSubmit = async (values: any) => {
		// Handle form submission here
		let payload = {
			...values,
			store_id: store?.id,
			user_id: me?.id,
			email: me?.email,
			// account_number
			// bank_code:
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
				<p>{store?.wallet >= 0 ? "N " + store?.wallet.toFixed(2) : "N0.00"}</p>
			</div>
		</GridItem>,
		<GridItem background="#FA3434">
			<div className="wrap">
				<div className="icon">
					<IoWalletOutline color="#fff" size="12" />
				</div>
			</div>
			{me?.dva ? (
				<div className="info">
					<h3>{me?.dva?.bank?.name}</h3>
					<p>{me?.dva?.account_number}</p>
					<h3>{me?.dva?.account_name}</h3>
				</div>
			) : (
				<div className="info">
					<h3>Bank Details</h3>
					<h3>loading...</h3>
				</div>
			)}
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
				width="unset"
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
							<CustomField name="amount" type="select" />
						</FormControl>
						<FormControl>
							<Label>Withdraw to</Label>
							<Input
								as="select"
								name="account"
								style={{ background: "#F7FAFC", width: "100%" }}
								// onChange={(e: any) => handleSelectCategory(e.target.value)}
							>
								<option
									label="Select withdrawal account"
									disabled
									selected
								></option>
								<option value="">
									<p>2092138348 - UBA</p>
								</option>
								<option value="">
									<p>9126669941 - OPAY</p>
								</option>
							</Input>
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
export default AccountTab;
