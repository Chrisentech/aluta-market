import React, { useState, useEffect } from "react";
import { closeModal } from "../../../../../../Features/modal/modalSlice";

import { useDispatch, useSelector } from "react-redux";
import {
	FormContainer,
	InputField,
	SubmitButton,
	CloseButton,
	Hint,
	TextArea,
	CheckBox,
} from "./CreateStoreModal.style";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AppColors, ROUTE } from "../../../../../../Shared/Constants";
import { generateUniqueId } from "../../../../../../Shared/Utils/helperFunctions";
import { fetchMe } from "../../../../../../Features/user/userSlice";
import { Puff } from "react-loading-icons";
import useStore from "../../../../../../Features/store/storeAction";

const CreateStoreModal: React.FC<{ active: string }> = ({ active }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [storeName, setStoreName] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<any>("");
	const [storeDesc, setStoreDesc] = useState<string>("");
	const [address, setAddress] = useState<string>("");

	const [isSameNumber, setIsSameNumber] = useState<boolean>(false);
	const [haveAddress, setHaveAddress] = useState<boolean>(false);
	const [haveReadTerms, setHaveReadTerms] = useState<boolean>(false);
	const [canSubmit, setCanSubmit] = useState<boolean>(false);

	const handleCloseModal = () => {
		dispatch(closeModal(active));
		navigate(ROUTE.SELLER_DASHBOARD);
	};
	const me = useSelector(fetchMe);
	const [loading, setLoading] = useState(false);
	const { createStore } = useStore();
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		const uuid = generateUniqueId();
		const payload = {
			link: "http://thealutamarket.com/" + uuid + "/store",
			name: storeName,
			description: storeDesc,
			phone: !isSameNumber ? phoneNumber : me?.phone,
			address: haveAddress ? address : "",
			has_physical_address: haveAddress,
			user: me?.id,
			wallet: 0,
			status: true,
		};

		try {
			const resp = await createStore(payload);
			console.log(resp);
		} catch (error: any) {
			throw new Error(error);
		} finally {
			setLoading(false);
		}

		console.log(payload);
	};

	useEffect(() => {
		if (
			storeName !== "null" &&
			(phoneNumber !== "null" || isSameNumber) &&
			storeDesc !== "null" &&
			haveReadTerms
		) {
			setCanSubmit(true);
		} else {
			setCanSubmit(false);
		}
	}, [storeName, phoneNumber, storeDesc, haveReadTerms, isSameNumber]);

	return (
		<FormContainer>
			<CloseButton onClick={handleCloseModal}>
				<AiOutlineCloseCircle size={34} color="#292D32" />
			</CloseButton>
			<h2>Create Store</h2>
			<form>
				<label>
					Name of Store<span className="required">*</span>
					<InputField
						type="text"
						value={storeName}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setStoreName(e.target.value)
						}
						required
					/>
					<Hint>Hint: You can create more stores under your dashboard</Hint>
				</label>
				<CheckBox small>
					<input
						type="checkbox"
						checked={isSameNumber}
						onChange={() => setIsSameNumber(!isSameNumber)}
					/>
					<span className="custom"></span>
					Same as my phone number
				</CheckBox>
				{!isSameNumber && (
					<label>
						Phone Number<span className="required">*</span>
						<InputField
							type="tel"
							value={phoneNumber}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setPhoneNumber(e.target.value)
							}
							required
						/>
					</label>
				)}
				<label>
					Store Description<span className="required">*</span>
					<TextArea
						value={storeDesc}
						placeholder="Type here"
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setStoreDesc(e.target.value)
						}
						required
					/>
				</label>
				<CheckBox>
					<input
						type="checkbox"
						checked={haveAddress}
						onChange={() => setHaveAddress(!haveAddress)}
					/>
					<span className="custom"></span>I have a physical address
				</CheckBox>
				{haveAddress && (
					<label>
						Store Address:
						<InputField
							type="text"
							value={address}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setAddress(e.target.value)
							}
							required
						/>
					</label>
				)}
				<CheckBox>
					<input
						type="checkbox"
						required
						checked={haveReadTerms}
						onChange={() => setHaveReadTerms(!haveReadTerms)}
					/>
					<span className="custom"></span>I agree to the{" "}
					<Link to={ROUTE.TERMS} className="terms">
						Terms and conditions
					</Link>
				</CheckBox>

				<SubmitButton
					type="submit"
					onClick={handleSubmit}
					submit={!loading && canSubmit}
				>
					{loading ? (
						<Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
					) : (
						"	Register my Store"
					)}
				</SubmitButton>
			</form>
		</FormContainer>
	);
};

export default CreateStoreModal;
