import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../../../Shared/Components";
import {
	CloseButton,
	FormContainer,
	FormImage,
	Info,
} from "./DeleteAccountStyle";
import { closeModal } from "../../../../../Features/modal/modalSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { caution } from "../../../../../assets";
import { InputField } from "../Profile.style";

const DeleteAccountModal: React.FC<any> = () => {
	const [deleteAccount, setDeleteAccount] = useState(false);
	const dispatch = useDispatch();
	const [otherReason, setOtherReason] = useState("");
	const [reason, setReason] = useState("");
	const [isOtherReason, setIsOtherReason] = useState(false);
	const handleDeleteAccount = () => {
		if (!deleteAccount) {
			setDeleteAccount(true);
			console.log(deleteAccount);
		} else {
			//delete store
		}
	};

	return (
		<FormContainer deleteAccount={deleteAccount}>
			<FormImage>
				<img src={caution} />
			</FormImage>
			<CloseButton onClick={() => dispatch(closeModal("deleteAccount"))}>
				<AiOutlineCloseCircle size={34} color="#292D32" />
			</CloseButton>
			{deleteAccount ? (
				<>
					<h2>Delete Account?</h2>
					<Info>This action cannot be undone!</Info>
					<form>
						<label className="birthday">
							Tell Us Why
							<div>
								<select
									value={reason}
									onChange={(e) => {
										setReason(e.target.value);
										if (e.target.value === "others") {
											setIsOtherReason(true);
										} else {
											setIsOtherReason(false);
										}
									}}
								>
									<option value="" disabled>
										Select option
									</option>
									<option value="No Longer need the Account">
										No Longer need the Account
									</option>
									<option value="Difficulty using the platform">
										Difficulty using the platform
									</option>
									<option value="Privacy Concern">Privacy Concern</option>
									<option value="others">Others (Please Specify)</option>
								</select>
							</div>
						</label>
						{isOtherReason && (
							<label className="gender">
								Other Reason
								<div>
									<InputField
										type="text"
										value={otherReason}
										onChange={(e) => setOtherReason(e.target.value)}
									/>
								</div>
							</label>
						)}
						<label className="gender">
							Input Password
							<div>
								<InputField
									type="password"
									// value={password}
									// onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</label>
					</form>
				</>
			) : (
				<>
					<h2>Are you sure?</h2>
					<Info>
						Once this account is deleted, all the information will be cleared!
					</Info>
				</>
			)}
			<Button
				width={"100%"}
				height={56}
				background="#FA3434"
				color="#fff"
				className="button"
				borderRadius={10}
				onClick={handleDeleteAccount}
			>
				Proceed
			</Button>
		</FormContainer>
	);
};

export default DeleteAccountModal;
