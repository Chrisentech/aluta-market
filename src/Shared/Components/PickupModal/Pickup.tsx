import React from "react";
import { Container, Img, Label } from "./Pickup.style";
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

const PickupModal: React.FC<{ data?: any }> = ({ data }) => {
	const dispatch = useDispatch();
	const me = useSelector(fetchMe);
	const { initializePayment } = useCart();

	const handleCancel = () => {
		dispatch(closeModal("pickup"));
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
				<p>Select Pickup Station</p>
				<CircleDismissIcon onClick={handleCancel} />
			</div>
			<div className="content">
				<div
					className="flex"
					style={{
						gap: 0,
						paddingBottom: 10,
					}}
				>
					<label className="radio-container">
						<input type="radio" name="option" value="north_gate" />
						<span className="checkmark"></span>
					</label>
					<div style={{ width: "100%" }}>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<h2>
								<span>North Gate Pickup Station</span>
								<span
									style={{
										marginLeft: 20,
										background: "#00B5174D",
										color: "#00B517",
										borderRadius: 29,
										padding: "0 10px",
									}}
								>
									N2,000
								</span>
							</h2>
						</div>
						<p>North Gate</p>
					</div>
				</div>
			</div>

			<div className="content">
				<div
					className="flex"
					style={{
						gap: 0,
						paddingBottom: 10,
					}}
				>
					<label className="radio-container">
						<input type="radio" name="option" value="south_gate" />
						<span className="checkmark"></span>
					</label>
					<div style={{ width: "100%" }}>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<h2>
								<span>South Gate Pickup Station</span>
								<span
									style={{
										marginLeft: 20,
										background: "#00B5174D",
										color: "#00B517",
										borderRadius: 29,
										padding: "0 10px",
									}}
								>
									N2,000
								</span>
							</h2>
						</div>
						<p>South Gate</p>
					</div>
				</div>
			</div>

			<div className="content">
				<div
					className="flex"
					style={{
						gap: 0,
						paddingBottom: 10,
					}}
				>
					<label className="radio-container">
						<input type="radio" name="option" value="west_gate" />
						<span className="checkmark"></span>
					</label>
					<div style={{ width: "100%" }}>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<h2>
								<span>West Gate Pickup Station</span>
								<span
									style={{
										marginLeft: 20,
										background: "#00B5174D",
										color: "#00B517",
										borderRadius: 29,
										padding: "0 10px",
									}}
								>
									N2,000
								</span>
							</h2>
						</div>
						<p>West Gate</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default PickupModal;
