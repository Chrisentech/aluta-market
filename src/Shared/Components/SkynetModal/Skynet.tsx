import React, { useState } from "react";
import { Container, Img, Label, SubmitButton } from "./Skynet.style";
import { ArrowLeftIcon, CircleDismissIcon, skynetLogo } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../Features/modal/modalSlice";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
	fetchMe,
	fetchServiceVaration,
} from "../../../Features/user/userSlice";
import useUsers from "../../../Features/user/userActions";
import { alertError } from "../../../Features/alert/alertSlice";
import { Puff } from "react-loading-icons";

// Define the shape of the form values
interface FormValues {
	option: string;
	network: string;
	amount: number;
	phoneNumber: string;
	variation?: string;
	quantity?: string;
	subscriptionType?: string;
	billersCode?: string;
}

const SkynetModal: React.FC<{ url?: string }> = () => {
	const dispatch = useDispatch();
	const serviceVariation: any = useSelector(fetchServiceVaration);
	const { getServicesVariation, initializePayment } = useUsers();
	const [selectedOption, setSelectedOption] = useState("");
	const [selectedVariation, setSelectedVariation] = useState("");
	const [loading, setLoading] = useState(false);
	const me = useSelector(fetchMe);

	const handleCancel = () => {
		if (selectedVariation || selectedOption) {
			const confirmed = window.confirm(
				"All data will be lost. Do you want to continue?"
			);
			if (confirmed) {
				dispatch(closeModal("skynet"));
			}
		} else {
			dispatch(closeModal("skynet"));
		}
	};

	const initialValues: FormValues = {
		option: "",
		network: "",
		amount: 0,
		phoneNumber: "",
		variation: "",
		quantity: "1",
		subscriptionType: "",
		billersCode: "",
	};

	const validationSchema = Yup.object({
		option: Yup.string().required("Option is required"),
		network: Yup.string().required("Network is required"),
		amount: Yup.number()
			.required("Amount is required")
			.positive("Amount must be positive"),
		phoneNumber: Yup.string()
			.required("Phone number is required")
			.matches(/^[0-9]+$/, "Phone number must be only digits")
			.min(10, "Phone number must be at least 10 digits")
			.max(15, "Phone number must be at most 15 digits"),
	});

	const onSubmit = async (
		values: FormValues,
		{ setSubmitting }: FormikHelpers<FormValues>
	) => {
		setLoading(true);

		const payload = {
			type:
				selectedOption === "data"
					? "data"
					: selectedOption === "airtime"
					? "airtime"
					: "tv_sub",
			user_id: me?.id,
			service_id: values.network,
			amount: values.amount,
			variant_code: values.variation,
			phone_number: values.phoneNumber,
			subscription_type: values.subscriptionType,
			quantity: values.quantity,
			billers_code: values.billersCode,
		};
		try {
			await initializePayment({ userID: me?.id, paymentGateway: "paystack" });
			console.log(payload);
		} catch (error) {
			console.error("Error initializing payment:", error);
			// Handle the error appropriately here
		}

		setSubmitting(false);
		setLoading(false);
	};

	const handleVariation = async (
		event: React.ChangeEvent<HTMLSelectElement>,
		setFieldValue: (field: string, value: any) => void
	) => {
		if (selectedOption === "data") {
			try {
				setFieldValue("network", event.target.value);
				await getServicesVariation(event.target.value);
			} catch (error) {
				dispatch(alertError("Error"));

				console.error("Error fetching service variations:", error);
			}
		}
	};

	const handleOptionChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
		setFieldValue: (field: string, value: any) => void
	) => {
		setFieldValue("option", event.target.value);
		setSelectedOption(event.target.value);
	};

	const handleVariationChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
		setFieldValue: (field: string, value: any) => void
	) => {
		const selectedVarCode = event.target.value;
		setSelectedVariation(selectedVarCode);
		const variation = serviceVariation?.variations?.find(
			(variation: any) => variation.variationCode === selectedVarCode
		);
		if (variation) {
			setFieldValue("amount", variation.variationAmount);
		}
		setFieldValue("variation", selectedVarCode);
	};

	return (
		<Container>
			<div className="header">
				<ArrowLeftIcon onClick={handleCancel} />
				<p>Skynet Telecom</p>
				<CircleDismissIcon onClick={handleCancel} />
			</div>
			<Img>
				<img src={skynetLogo} alt="Skynet Logo" />
			</Img>
			<Label>Airtime and Data</Label>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ isSubmitting, setFieldValue }) => (
					<Form>
						<div>
							<label htmlFor="option">Select Option</label>
							<Field
								as="select"
								name="option"
								onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
									handleOptionChange(e, setFieldValue)
								}
							>
								<option value="" label="Select option" disabled selected />
								<option value="data" label="Databundle" />
								<option value="airtime" label="Airtime" />
								<option value="tv_sub" label="Cable Subscription" />
								<option value="electricity" label="Electricity" />
								<option value="education" label="WAEC & JAMB Sub" />
							</Field>
							<ErrorMessage className="error" name="option" component="div" />
						</div>
						<div>
							<label htmlFor="network">
								{selectedOption === "tv_sub" ? "Tv Subscription" : "Network"}
							</label>
							<Field
								as="select"
								name="network"
								onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
									handleVariation(e, setFieldValue)
								}
							>
								<option value="" label="Select Network" disabled selected />
								{["mtn", "airtel", "glo", "etisalat"].map((network) => (
									<option
										key={network}
										value={
											selectedOption === "data" ? `${network}-data` : network
										}
										label={
											selectedOption === "data"
												? `${
														network.charAt(0).toUpperCase() + network.slice(1)
												  }-data`
												: network.charAt(0).toUpperCase() + network.slice(1)
										}
									/>
								))}
							</Field>
							<ErrorMessage className="error" name="network" component="div" />
						</div>
						{selectedOption === "data" && (
							<div>
								<label htmlFor="variation">Variation</label>
								<Field
									as="select"
									name="variation"
									onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
										handleVariationChange(e, setFieldValue)
									}
								>
									<option value="" label="Select variation" />
									{serviceVariation?.variations?.map((variation: any) => (
										<option
											key={variation.variationCode}
											value={variation.variationCode}
											label={variation.name}
										/>
									))}
								</Field>
								<ErrorMessage
									className="error"
									name="variation"
									component="div"
								/>
							</div>
						)}
						<div>
							<label htmlFor="amount">Amount</label>
							<Field type="number" name="amount" disabled />
							<ErrorMessage className="error" name="amount" component="div" />
						</div>
						<div>
							<label htmlFor="phoneNumber">Phone Number</label>
							<Field type="text" name="phoneNumber" />
							<ErrorMessage
								className="error"
								name="phoneNumber"
								component="div"
							/>
						</div>
						<SubmitButton
							type="submit"
							loading={loading || isSubmitting}
							disabled={loading || isSubmitting}
						>
							{loading ? (
								<Puff stroke={"#F7690C"} strokeOpacity={0.125} />
							) : (
								"Submit"
							)}
						</SubmitButton>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

export default SkynetModal;
