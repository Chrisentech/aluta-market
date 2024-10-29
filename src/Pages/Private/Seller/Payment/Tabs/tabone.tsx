import React, { useEffect, useState } from "react";
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
import { ErrorIcon, MoneyIcon } from "../../../../../assets";
import { Form, Formik, useField } from "formik";
import * as yup from "yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Puff } from "react-loading-icons";
import { AppColors } from "../../../../../Shared/Constants";
import { useDispatch, useSelector } from "react-redux";
import { selectStore } from "../../../../../Features/store/storeSlice";
import { fetchMe } from "../../../../../Features/user/userSlice";
import useUsers from "../../../../../Features/user/userActions";
import {
	alertError,
	alertSuccess,
} from "../../../../../Features/alert/alertSlice";
import useStore from "../../../../../Features/store/storeAction";

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
	const { getDva, confirmPassword } = useUsers();
	const { widthdrawFund } = useStore();
	const dispatch = useDispatch();
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
		setLoading(true); // Set loading state

		let payload = {
			...values,
			store_id: parseInt(store?.id),
			user_id: parseInt(me?.id),
			email: me?.email,
			account_number: values.account,
			bank_code: store?.accounts?.find(
				(el: any) => el.account_number === values.account
			)?.bank_code,
		};
		const { account, password, ...rest } = payload;
		try {
			// Confirm Password first
			await confirmPassword({
				password: payload.password,
				userId: payload.user_id,
			});

			// Proceed to hit withdraw fund API if password is confirmed
			// Example of calling the withdraw API
			await widthdrawFund(rest);
			dispatch(alertSuccess("Withdrawal successful"));
		} catch (error: any) {
			// Set a general error message
			dispatch(
				alertError(JSON.parse(error.message).message || "An error occurred")
			);
			console.error("Error:", error);
		} finally {
			setLoading(false); // Reset loading state
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
	const CustomSelect: React.FC<{ name: string }> = ({ name }) => {
		const [field, meta] = useField(name);
		const inputHasError = meta.touched && Boolean(meta.error);

		return (
			<>
				<Input as="select" {...field}>
					<option label="Select withdrawal account" value="" disabled></option>
					{store?.accounts?.map((account: any, i: number) => (
						<option key={i} value={account.account_number}>
							{account.account_number + " - " + account.bank_name}
						</option>
					))}
				</Input>
				{inputHasError && (
					<div style={{ display: "flex", gap: 2, alignItems: "center" }}>
						<ErrorIcon />
						<ErrorMessageWrapper>{meta.error}</ErrorMessageWrapper>
					</div>
				)}
			</>
		);
	};
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
					validationSchema={validationSchema}
				>
					<Form className="form">
						<FormControl>
							<Label>Amount</Label>
							<CustomField name="amount" type="number" />
						</FormControl>
						<FormControl>
							<Label>Withdraw to</Label>
							<CustomSelect name="account" />
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
