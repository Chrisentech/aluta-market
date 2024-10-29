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
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../Features/modal/modalSlice";
import {
	setLoading,
	setNotLoading,
} from "../../../Features/loading/loadingSlice";
import { alertError } from "../../../Features/alert/alertSlice";
import useStore from "../../../Features/store/storeAction";
import { selectStore } from "../../../Features/store/storeSlice";

const AccountModal: React.FC<{ data?: any }> = () => {
	const dispatch = useDispatch();
	const [banks, setBanks] = useState<any>([]);
	const [selectedBank, setSelectedBank] = useState<any>(null);
	const [accountNumber, setAccountNumber] = useState("");
	const [accountName, setAccountName] = useState("");
	const [loading, setLoadingState] = useState(false);
	const { updateStore } = useStore();
	const store = useSelector(selectStore);

	const handleCancel = () => {
		dispatch(closeModal("create-account"));
	};

	useEffect(() => {
		const fetchBanks = async () => {
			try {
				const response = await fetch("https://api.paystack.co/bank");
				const { data } = await response.json();
				const bankOptions = data.map((bank: any) => ({
					value: bank.code,
					label: bank.name,
				}));
				setBanks(bankOptions);
			} catch (error) {
				console.error("Error fetching banks:", error);
				dispatch(alertError("Unable to fetch banks"));
			}
		};
		fetchBanks();
	}, [dispatch]);

	const fetchAccountName = async () => {
		if (!selectedBank || accountNumber.length !== 10) {
			setAccountName(""); // Clear account name if conditions are not met
			return;
		}

		try {
			const response = await fetch(
				`https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${selectedBank.value}`,
				{
					method: "GET",
					headers: {
						Authorization:
							"Bearer sk_test_4584ffc623d2a9ff5e843233f3b8e25ba04cf82d", // Use environment variable for security
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.json();
			if (data.status) {
				setAccountName(data.data.account_name);
			} else {
				setAccountName(""); // Clear if the account name cannot be fetched
				dispatch(alertError(data.message || "Unable to fetch account name"));
			}
		} catch (error) {
			console.error("Error fetching account name:", error);
			setAccountName(""); // Clear on error
			dispatch(
				alertError("An error occurred while fetching the account name.")
			);
		}
	};

	const handleAccountNumberChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = e.target.value;
		setAccountNumber(value);
		if (value.length === 10) {
			console.log("Valid account number");
			fetchAccountName(); // Call after setting the account number
		} else {
			setAccountName(""); // Clear if invalid length
		}
	};

	useEffect(() => {
		if (selectedBank && accountNumber.length === 10) {
			fetchAccountName(); // Fetch account name when selected bank and account number are valid
		} else {
			setAccountName(""); // Clear account name if conditions are not met
		}
	}, [selectedBank, accountNumber]); // Listen to changes in both selectedBank and accountNumber

	const handleBankSelect = (selectedOption: any) => {
		setSelectedBank(selectedOption);
		setAccountName(""); // Clear account name when bank is changed
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(setLoading());
		setLoadingState(true);

		// Prepare the new account payload
		const newAccount = {
			account_name: accountName,
			account_number: accountNumber,
			bank_code: selectedBank.value,
			bank_name: selectedBank.label,
			bank_image: "",
		};

		// Check for duplicates
		const accountExists = store.accounts.some(
			(account: any) =>
				account.account_number === newAccount.account_number &&
				account.bank_name === newAccount.bank_name
		);

		if (accountExists) {
			// Pass an error message if the account already exists
			dispatch(alertError("This account has already been added."));
			setLoadingState(false);
			dispatch(setNotLoading());
			return; // Exit the function early
		}

		try {
			// If no duplicates, update the store with the new account
			await updateStore({
				id: store?.id,
				account: newAccount,
			});

			console.log("Submitted Data: ", newAccount);
		} catch (error: any) {
			dispatch(alertError(error.message));
		} finally {
			setLoadingState(false);
			dispatch(setNotLoading());
			dispatch(closeModal("create-account"));
		}
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
					<Label>Account Number</Label>
					<Input
						type="text"
						placeholder="Enter account number"
						value={accountNumber}
						onChange={handleAccountNumberChange}
						required
					/>
				</FormControl>
				<FormControl>
					<Label>Bank Name</Label>
					<Select
						options={banks}
						value={selectedBank}
						onChange={handleBankSelect}
						className="select"
						menuPlacement="bottom"
					/>
				</FormControl>
				<FormControl>
					<Label>Account Name</Label>
					<Input
						type="text"
						placeholder="Account name will be fetched automatically"
						value={accountName}
						readOnly
					/>
				</FormControl>

				<SubmitButton type="submit" disabled={!accountName || loading}>
					{loading ? "Processing..." : "Submit"}
				</SubmitButton>
			</form>
		</Container>
	);
};

export default AccountModal;
