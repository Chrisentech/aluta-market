import React, { useState } from "react";
// import {  } from "./DeleteModal.style";
import { sendSquareWhite } from "../../../assets";
import { Button, Toast } from "..";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../Features/modal/modalSlice";
import { Info, Container, Img, Label } from "./DeleteModal.style";
import useProducts from "../../../Features/products/productActions";
import { AppColors } from "../../Constants";
import { Puff } from "react-loading-icons";
import { alertError, alertSuccess } from "../../../Features/alert/alertSlice";

const DeleteModal: React.FC<{ url?: string }> = () => {
	const { deleteProduct } = useProducts();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const productId = localStorage.getItem("productId");
	const handleCancel = () => {
		setLoading(false);
		dispatch(closeModal("deleteProduct"));
		localStorage.removeItem("productId");
	};

	const handleDelete = async () => {
		try {
			setLoading(true);
			await deleteProduct(parseInt(productId ?? ""));
			dispatch(alertSuccess("item deleted successfully!"));
			dispatch(closeModal("deleteProduct"));
			setLoading(false);
			localStorage.removeItem("productId");
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
				console.log(2);
				for (let index = 0; index < error.protocolErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.protocolErrors[index].message).message)
					);
				}
			}
			if (error.clientErrors && error.clientErrors.length > 0) {
				console.log(3);

				for (let index = 0; index < error.clientErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.clientErrors[index].message).message)
					);
				}
			}
			if (error.networkErrors && error.networkErrors.length > 0) {
				console.log(4);

				for (let index = 0; index < error.networkErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.networkErrors[index].message).message)
					);
				}
			}
		}
	};

	return (
		<Container>
			<Toast />
			<Img>
				<img src={sendSquareWhite} />
			</Img>
			<Label>Are you sure you want to delete this product?</Label>
			<Info>
				{" "}
				Once you delete this product,it will be permanently removed!!,Do you
				want to continue?
			</Info>

			<div className="buttons">
				<Button
					width={180}
					height={56}
					color="#FFF"
					background="#FA3434"
					className="button"
					onClick={handleDelete}
					// loading={loading}
					disabled={loading}
				>
					{loading ? (
						<Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
					) : (
						"Yes, Delete"
					)}
				</Button>
				<Button
					width={180}
					height={56}
					color="#505050"
					border="solid 1px #DEE2E7"
					background="#F7FAFC"
					className="button"
					onClick={handleCancel}
				>
					No, Cancel
				</Button>
			</div>
		</Container>
	);
};

export default DeleteModal;
