import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../../Shared/Components";
import {
	CloseButton,
	FormContainer,
	FormImage,
	Info,
} from "./MaintenanceMode.style";
import { closeModal } from "../../../../../Features/modal/modalSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { setting } from "../../../../../assets";
import useStore from "../../../../../Features/store/storeAction";
import { selectStore } from "../../../../../Features/store/storeSlice";
import {
	alertError,
	alertSuccess,
} from "../../../../../Features/alert/alertSlice";

const MaintenanceMode: React.FC<{ active: boolean }> = () => {
	const dispatch = useDispatch();
	const { setMaintenanceMode, updateStore } = useStore();
	const [loading, setLoading] = useState(false);
	const store = useSelector(selectStore);

	const handleMaintenanceMode = async () => {
		try {
			setLoading(true);
			await updateStore({ id: store?.id, status: false });
			dispatch(alertSuccess("Update successful."));
			setMaintenanceMode(true);
			dispatch(closeModal("maintenanceMode"));
		} catch (error: any) {
			setLoading(false);
			if (error.graphQLErrors && error.graphQLErrors.length > 0) {
				for (let index = 0; index < error.graphQLErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.graphQLErrors[index].message).message)
					);
				}
			}
			if (error.protocolErrors && error.protocolErrors.length > 0) {
				for (let index = 0; index < error.protocolErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.protocolErrors[index].message).message)
					);
				}
			}
			if (error.clientErrors && error.clientErrors.length > 0) {
				for (let index = 0; index < error.clientErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.clientErrors[index].message).message)
					);
				}
			}
			if (error.networkErrors && error.networkErrors.length > 0) {
				for (let index = 0; index < error.networkErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.networkErrors[index].message).message)
					);
				}
			}
		}
	};

	return (
		<FormContainer>
			<FormImage>
				<img src={setting} />
			</FormImage>
			<CloseButton onClick={() => dispatch(closeModal("maintenanceMode"))}>
				<AiOutlineCloseCircle size={34} color="#292D32" />
			</CloseButton>
			<h2>Maintenanance Mode</h2>
			<Info>your store will no longer be visible to the buyers!</Info>

			<div className="buttons">
				<Button
					width={400}
					height={56}
					background="#FA3434"
					color="#fff"
					className="button"
					loading={loading}
					disabled={loading}
					borderRadius={10}
					onClick={() => handleMaintenanceMode()}
				>
					Activate Mode
				</Button>
				<Button
					width={400}
					height={56}
					background="#F7FAFC"
					color="#FA3434"
					className="button"
					borderRadius={10}
					onClick={() => dispatch(closeModal("maintenanceMode"))}
				>
					Cancel
				</Button>
			</div>
		</FormContainer>
	);
};

export default MaintenanceMode;
