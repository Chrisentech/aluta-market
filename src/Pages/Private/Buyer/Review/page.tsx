import { useNavigate } from "react-router-dom";
import Layout from "../../../../Layouts";
import { Button, Card, ImageCard, Rating } from "../../../../Shared/Components";
import {
	CustomCheckbox,
	ErrorMessageWrapper,
	FormControl,
	Input,
	Wrapper,
	Label,
	TextArea,
} from "./Review.styles";
import { BiArrowBack } from "react-icons/bi";
import { phone } from "../../../../assets";
import * as yup from "yup";
import { useState } from "react";
import { Form, Formik, useField } from "formik";

const Screen: React.FC = () => {
	const nav = useNavigate();
	const [rating, setRating] = useState(0);
	const [loading, setLoading] = useState(false);
	const initialValues: any = {
		nickname: "",
		review: "",
	};
	const validationSchema = yup.object().shape({
		nickname: yup.string().required("Nickname is required"),
		review: yup
			.string()
			.required("Reviews is required")
			.min(8, "Reviews must be at least 8 characters"),
	});
	const handleSubmit = async (values: any) => {
		// Handle form submission here
		let payload = {
			...values,
		};
		setLoading(true);
		setRating(2);
		console.log(payload);
		// try {
		// 	let user = await loginUser(payload);
		// 	dispatch(alertSuccess("Login successful"));
		// 	setLoading(false);
		// 	setCookie("user_id", user?.id, stayLoggedIn ? 7 : 0);
		// 	setCookie("access_token", user?.access_token, stayLoggedIn ? 7 : 0);
		// 	sessionStorage.removeItem("redirectPath");
		// 	window.location.replace(url);
		// } catch (error: any) {
		// 	setLoading(false);
		// 	if (error.graphQLErrors && error.graphQLErrors.length > 0) {
		// 		for (let index = 0; index < error.graphQLErrors.length; index++) {
		// 			console.log(JSON.parse(error.graphQLErrors[index].message));
		// 			if (JSON.parse(error.graphQLErrors[index].message).status === 302) {
		// 				setTimeout(() => {
		// 					dispatch(showModal("VerifyOTP"));
		// 				}, 1500);
		// 			}
		// 			dispatch(
		// 				alertError(JSON.parse(error.graphQLErrors[index].message).message)
		// 			);
		// 		}
		// 	}
		// 	if (error.protocolErrors && error.protocolErrors.length > 0) {
		// 		console.log(2);
		// 		for (let index = 0; index < error.protocolErrors.length; index++) {
		// 			dispatch(
		// 				alertError(JSON.parse(error.protocolErrors[index].message).message)
		// 			);
		// 		}
		// 	}
		// 	if (error.clientErrors && error.clientErrors.length > 0) {
		// 		console.log(3);

		// 		for (let index = 0; index < error.clientErrors.length; index++) {
		// 			dispatch(
		// 				alertError(JSON.parse(error.clientErrors[index].message).message)
		// 			);
		// 		}
		// 	}
		// 	if (error.networkErrors && error.networkErrors.length > 0) {
		// 		console.log(4);

		// 		for (let index = 0; index < error.networkErrors.length; index++) {
		// 			dispatch(
		// 				alertError(JSON.parse(error.networkErrors[index].message).message)
		// 			);
		// 		}
		// 	}
		// }
	};
	return (
		<Wrapper>
			<h2>Rate and Review</h2>
			<Card className="main" width="100%" height={600}>
				<head>
					<BiArrowBack onClick={() => nav(-1)} size={20} />
					<h3>Rate this Product</h3>
				</head>
				<div className="flex">
					<ImageCard src={phone} width="120px" />
					<div>
						<h3>Samsung Phone</h3>
						<Rating numberOfRates={rating} />
					</div>
				</div>
				<h3 className="text">Write a Review</h3>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
					validationSchema={validationSchema} // Specify the validation schema
				>
					<Form>
						<FormControl>
							<Label>Your nickname</Label>
							<CustomField name="nickname" type="text" />
						</FormControl>

						<FormControl>
							<Label>Write Your review</Label>
							<CustomField
								name="review"
								type="textarea"
								placeholder="Tell us about them"
							/>
						</FormControl>

						<Button
							background="#FF9017"
							color={"#fff"}
							className="btn"
							loading={loading}
						>
							Submit Review
						</Button>
					</Form>
				</Formik>
			</Card>
		</Wrapper>
	);
};
const CustomField: React.FC<{
	name: string;
	type: string;
	placeholder?: string;
	checked?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ name, type, checked, onChange, placeholder }) => {
	const [field, meta] = useField(name);
	const inputHasError = meta?.error?.length ? true : false;

	if (type === "checkbox") {
		return <CustomCheckbox checked={checked} type={type} onChange={onChange} />;
	}
	if (type === "textarea") {
		return (
			<TextArea col={10} rows={3} onChange={onChange} error={inputHasError} />
		);
	}
	return (
		<>
			<Input
				{...field}
				error={inputHasError}
				type={type}
				placeholder={placeholder}
			/>
			{meta.touched && meta.error && (
				<ErrorMessageWrapper>{meta.error}</ErrorMessageWrapper>
			)}
		</>
	);
};
const Page = () => {
	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={false}
			navMode="noSearch"
		/>
	);
};

export default Page;
