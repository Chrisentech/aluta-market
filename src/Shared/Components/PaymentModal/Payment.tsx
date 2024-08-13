import React, { useState } from "react";
import { Container, Img, Label } from "./Payment.style";
import {
	ArrowLeftIcon,
	CircleDismissIcon,
	PaymentIcon,
	FlutterwaveIcon,
	PaystackIcon,
	SquadIcon,
} from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../Features/modal/modalSlice";
import { fetchMe } from "../../../Features/user/userSlice";
import { numberWithCommas } from "../../Utils/helperFunctions";
import useCart from "../../../Features/cart/cartAction";
import {
	setLoading,
	setNotLoading,
} from "../../../Features/loading/loadingSlice";

const PaymentModal: React.FC<{ data?: any }> = ({ data }) => {
	const dispatch = useDispatch();
	const me = useSelector(fetchMe);
	const { initializePayment } = useCart();

	const handleCancel = () => {
		// const confirmed = window.confirm(
		// 	"All data will be lost. Do you want to continue?"
		// );
		// if (confirmed) {
		// }
		dispatch(closeModal("payment"));
	};

	const handlePayment = async (paymentGateway: any) => {
		dispatch(setLoading());

		try {
			const payload = {
				paymentGateway,
				userID: me?.id,
			};
			await initializePayment(payload);
		} catch (error) {
			throw error;
		} finally {
			dispatch(setNotLoading());
		}
	};

	return (
		<Container>
			<div className="header">
				<ArrowLeftIcon onClick={handleCancel} />
				<p>Make Payment</p>
				<CircleDismissIcon onClick={handleCancel} />
			</div>
			<Img>
				<PaymentIcon />
			</Img>
			<p>Pay</p>
			<Label>[NGN {numberWithCommas(data?.total)}]</Label>
			<div className="gateway" onClick={() => handlePayment("paystack")}>
				<FlutterwaveIcon />
				<div>
					<h2>Pay with Paystack</h2>
					<p>Pay with cards,transfer and USSD</p>
				</div>
			</div>
			<div className="gateway" onClick={() => handlePayment("flutterwave")}>
				<PaystackIcon />
				<div>
					<h2>Pay with Flutterwave</h2>
					<p>Pay with cards,transfer and USSD</p>
				</div>
			</div>
			<div className="gateway" onClick={() => handlePayment("squad")}>
				<SquadIcon />
				<div>
					<h2>Pay with Squad</h2>
					<p>Pay with cards,transfer and USSD</p>
				</div>
			</div>
		</Container>
	);
};

export default PaymentModal;
