import React, { useState } from "react";
import { Container, Info, Label } from "./SavedForLater.styles";
import { Button } from "../../../../Shared/Components";
import { closeModal } from "../../../../Features/modal/modalSlice";
import { useDispatch } from "react-redux";
import useUsers from "../../../../Features/user/userActions";

const Modal: React.FC = () => {
	const dispatch = useDispatch();
	const { removeFromWishlist } = useUsers();
	const [loading, setLoading] = useState(false);
	const product_id = localStorage.getItem("product_id") || "";
	const handleRemoveSavedPrd = async () => {
		setLoading(true);
		await removeFromWishlist(parseInt(product_id, 10));
		localStorage.removeItem("product_id");
		dispatch(closeModal("saved-for-later-modal"));
		setLoading(false);
	};
	const handleCancel = () => {
		localStorage.removeItem("product_id");
		dispatch(closeModal("saved-for-later-modal"));
	};
	return (
		<Container>
			<Label>Are you sure?</Label>
			<Info>
				it seems you want to remove this product from your saved items list?
			</Info>
			<div className="buttons">
				<Button
					width={180}
					height={56}
					color="#FFF"
					background="#FA3434"
					className="button"
					onClick={handleRemoveSavedPrd}
					disabled={loading}
					loading={loading}
				>
					Yes, Remove
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

export default Modal;
