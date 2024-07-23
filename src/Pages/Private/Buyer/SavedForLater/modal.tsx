import React from "react";
import { Container, Info, Label } from "./SavedForLater.styles";
import { Button } from "../../../../Shared/Components";
import { closeModal } from "../../../../Features/modal/modalSlice";
import { useDispatch } from "react-redux";
import useUsers from "../../../../Features/user/userActions";

const Modal: React.FC = () => {
	const dispatch = useDispatch();
	const { removeFromWishlist } = useUsers();
	const handleRemoveSavedPrd = async () => {
		await removeFromWishlist(2);
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
					onClick={() => dispatch(closeModal("saved-for-later-modal"))}
				>
					No, Cancel
				</Button>
			</div>
		</Container>
	);
};

export default Modal;
