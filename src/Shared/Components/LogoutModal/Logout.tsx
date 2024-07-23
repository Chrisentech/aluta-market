import React from "react";
import { Container, Img, Info, Label } from "./Logout.style";
import { sendSquareWhite } from "../../../assets";
import { Button } from "..";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../Features/modal/modalSlice";
import { deleteCookie } from "../../Utils/helperFunctions";
import { actions } from "../../../Features/user/userSlice";

const LogoutModal: React.FC<{ url?: string }> = () => {
	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(closeModal("logout"));
	};

	const handleLogout = () => {
		dispatch(closeModal("logout"));
		dispatch(actions.logout());
		deleteCookie("user_id");
		deleteCookie("access_token");
		window.location.replace("/");
	};

	return (
		<Container>
			<Img>
				<img src={sendSquareWhite} />
			</Img>
			<Label>Are you sure?</Label>
			<Info>
				it seems comrade has done enough shopping for the day. Would you like to
				logout?
			</Info>
			<div className="buttons">
				<Button
					width={180}
					height={56}
					color="#FFF"
					background="#FA3434"
					className="button"
					onClick={handleLogout}
				>
					Yes, Logout
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

export default LogoutModal;
