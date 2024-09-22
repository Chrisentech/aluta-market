import React, { useEffect, useState } from "react";
import Select from "react-select";

import {
	Container,
	Img,
	Label,
	Input,
	FormControl,
	SubmitButton,
} from "./accountModal.styles";
import { CircleDismissIcon, MoneyIcon } from "../../../assets";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../Features/modal/modalSlice";
import {
	setLoading,
	setNotLoading,
} from "../../../Features/loading/loadingSlice";
import { alertError } from "../../../Features/alert/alertSlice";

const AccountModal: React.FC<{ data?: any }> = () => {
	const dispatch = useDispatch();
	const [banks, setBanks] = useState<any>([]);
	const [bankName, setBankName] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [accountName, setAccountName] = useState("");
	const [loading, setLoadingState] = useState(false);

	const handleCancel = () => {
		dispatch(closeModal("create-account"));
	};
	useEffect(() => {
		const fetchBanks = async () => {
			try {
				const response = await fetch("https://api.paystack.co/bank");
				const { data } = await response.json();
				const bankOptions = data.map((bank: any) => ({
					value: bank.code, // Use bank code as value
					label: bank.name, // Use bank name as label
				}));

				setBanks(bankOptions);
			} catch (error) {
				console.error("Error fetching banks:", error);
				dispatch(alertError("Unable to fetch banks"));
			}
		};
		fetchBanks();
	}, []);
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(setLoading());
		setLoadingState(true);

		try {
			// Submit the form data here
			const payload = {
				bankName,
				accountNumber,
				accountName,
			};
			console.log("Submitted Data: ", payload);
			// Perform any API call here
		} catch (error: any) {
			let err = error.message;
			dispatch(alertError(err));
		} finally {
			setLoadingState(false);
			dispatch(setNotLoading());
		}
	};
	const handleBankSelect = (selectedOption: any) => {
		console.log(selectedOption);
		setBankName(selectedOption.name);
	};
	return (
		<Container>
			<div className="header">
				<CircleDismissIcon onClick={handleCancel} />
			</div>
			<Img>
				<MoneyIcon />
			</Img>
			<h2>Set Withdrawal Account</h2>

			{/* Form for Bank Details */}
			<form onSubmit={handleSubmit}>
				<FormControl>
					<Label>Bank Name</Label>
					<Select
						options={banks}
						value={bankName}
						onChange={handleBankSelect}
						className="select"
						menuPlacement="bottom" // Controls the dropdown direction
					/>
				</FormControl>
				<FormControl>
					<Label>Account Number</Label>
					<Input
						type="text"
						placeholder="Enter account number"
						value={accountNumber}
						onChange={(e: any) => setAccountNumber(e.target.value)}
						required
					/>
				</FormControl>
				<FormControl>
					<Label>Account Name</Label>
					<Input
						type="text"
						placeholder="Enter account name"
						value={accountName}
						onChange={(e: any) => setAccountName(e.target.value)}
						required
					/>
				</FormControl>
				<SubmitButton type="submit" disabled={loading}>
					{loading ? "Processing..." : "Submit"}
				</SubmitButton>
			</form>
		</Container>
	);
};

export default AccountModal;
