import React, { useState } from "react";
import { closeModal } from "../../../../Features/modal/modalSlice";
import {
	FormContainer,
	InputField,
	CloseButton,
	FormImage,
} from "./ChangeAddress.style";
import { location } from "../../../../assets";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import useUsers from "../../../../Features/user/userActions";
import { actions, fetchMe } from "../../../../Features/user/userSlice";
import { Button } from "../../../../Shared/Components";

const DeliveryAddressFormModal: React.FC<{ active?: string }> = ({
	active,
}) => {
	const [receiverName, setReceiverName] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [address, setAddress] = useState<string>("");
	const [additionalInfo, setAdditionalInfo] = useState<string>("");
	const { updateUser } = useUsers();
	const [loading, setLoading] = useState(false);
	const me = useSelector(fetchMe);
	const dispatch = useDispatch();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent default form submission behavior
		setLoading(true);
		const payload: any = {
			id: me?.id,
			paymnetDetails: {
				name: receiverName,
				address: address,
				info: additionalInfo,
				phone: phoneNumber,
			},
		};

		try {
			await updateUser(payload);
			dispatch(actions.setHomeDelivery(payload.paymnetDetails));
			dispatch(closeModal("changeAddress"));
		} catch (error) {
			console.log({ error });
		} finally {
			setLoading(false);
		}
	};

	return (
		<FormContainer>
			<FormImage>
				<img src={location} />
			</FormImage>
			<CloseButton
				onClick={() => dispatch(closeModal(active ?? "changeAddress"))}
			>
				<AiOutlineCloseCircle size={34} color="#292D32" />
			</CloseButton>
			<h2>Set delivery address</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Receiver's Name:
					<InputField
						type="text"
						value={receiverName}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setReceiverName(e.target.value)
						}
						required
					/>
				</label>
				<label>
					Phone Number:
					<InputField
						type="tel"
						value={phoneNumber}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setPhoneNumber(e.target.value)
						}
						required
					/>
				</label>
				<label>
					Address:
					<InputField
						type="text"
						value={address}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setAddress(e.target.value)
						}
						required
					/>
				</label>
				<label>
					Additional Information:
					<InputField
						type="text"
						value={additionalInfo}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setAdditionalInfo(e.target.value)
						}
					/>
				</label>
				<Button
					className="btn"
					loading={loading}
					disabled={loading}
					type="submit"
				>
					Set Address
				</Button>
			</form>
		</FormContainer>
	);
};

export default DeliveryAddressFormModal;
