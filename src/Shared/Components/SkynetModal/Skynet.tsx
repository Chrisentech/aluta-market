import React, { useState } from "react";
import { Container, Img, Label } from "./Skynet.style";
import { ArrowLeftIcon, CircleDismissIcon, skynetLogo } from "../../../assets";
import { Button } from "..";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../Features/modal/modalSlice";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { fetchServiceVaration } from "../../../Features/user/userSlice";
import useUsers from "../../../Features/user/userActions";
import { alertError } from "../../../Features/alert/alertSlice";

// Define the shape of the form values
interface FormValues {
	option: string;
	network: string;
	amount: number;
	phoneNumber: string;
}

const SkynetModal: React.FC<{ url?: string }> = () => {
	const dispatch = useDispatch();
	const serviceVariation: any = useSelector(fetchServiceVaration);
	const { getServicesVariation } = useUsers();
	const [selectedOption, setSelectedOption] = useState("");
	const [_, setSelectedVariation] = useState("");

	const handleCancel = () => {
		const confirmed = window.confirm(
			"All data will be lost. Do you want to continue?"
		);
		if (confirmed) {
			dispatch(closeModal("skynet"));
		}
	};

	const initialValues: FormValues = {
		option: "",
		network: "",
		amount: 0,
		phoneNumber: "",
	};

	const validationSchema = Yup.object({
		option: Yup.string().required("Option is required"),
		network: Yup.string().required("Network is required"),
		amount: Yup.number()
			.required("Amount is required")
			.positive("Amount must be positive")
			.integer("Amount must be an integer"),
		phoneNumber: Yup.string()
			.required("Phone number is required")
			.matches(/^[0-9]+$/, "Phone number must be only digits")
			.min(10, "Phone number must be at least 10 digits")
			.max(15, "Phone number must be at most 15 digits"),
	});

	const onSubmit = (
		values: FormValues,
		{ setSubmitting }: FormikHelpers<FormValues>
	) => {
		console.log(values);
		setSubmitting(false);
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
								<option value="" label="Select option" />
								<option value="data" label="Databundle" />
								<option value="airtime" label="Airtime" />
								<option value="tv_sub" label="Cable Subscription" />
								<option value="electricity" label="Electricity" />
								<option value="education" label="WAEC & JAMB Sub" />
							</Field>
							<ErrorMessage className="error" name="option" component="div" />
						</div>
						<div>
							<label htmlFor="network">Network</label>
							<Field
								as="select"
								name="network"
								onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
									handleVariation(e, setFieldValue)
								}
							>
								<option value="" label="Select Network" />
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
						<Button type="submit" disabled={isSubmitting}>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

export default SkynetModal;
