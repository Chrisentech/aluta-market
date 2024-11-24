import React, { useEffect } from "react";
import {
	CircleDismissIcon,
	CircleMark,
	ThankYouIcon,
} from "../../../../assets";
import { useDispatch } from "react-redux";
import { closeModal, showModal } from "../../../../Features/modal/modalSlice";
import { Button } from "../../../../Shared/Components";

import { Container, Img } from "./modal";
import { ROUTE } from "../../../../Shared/Constants";

const Modal: React.FC<{ data?: any }> = () => {
	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(closeModal("thank-you"));
	};

	useEffect(() => {
		// Use for displying modal
		dispatch(showModal("thank-you"));
	}, []);

	return (
		<Container>
			<div className="header">
				<div className="dot" style={{ width: "inherit" }}>
					<ThankYouIcon />
				</div>
				<CircleDismissIcon onClick={handleCancel} />
			</div>
			<Img>
				<CircleMark />
			</Img>
			<h2>Thank you for your Purchase🎉</h2>

			<p style={{ width: "90%", textAlign: "center", margin: "15px 0" }}>
				Your order is set, keep an eye on your email for updates. Our swift
				delivery squad will be in touch shortly. 🚀
			</p>
			<a href={`${window.location.origin}/${ROUTE.BUYER_ORDER}`}>
				<Button
					className="btn"
					width="60%"
					type="submit"
					color="white"
					background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%);"
				>
					Go to my Order
				</Button>
			</a>
		</Container>
	);
};

export default Modal;
