import React from "react";
import { Wrapper } from "./orderModalStyles";
import {
	CircleDismissIcon,
	CircleMark,
	CircleCheck,
} from "../../../../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ROUTE } from "../../../../../Shared/Constants";
import { closeModal } from "../../../../../Features/modal/modalSlice";

const OrderModal: React.FC<{
	back?: boolean;
	type?: "pending" | "canceled" | "delivered";
}> = ({ type, back }) => {
	const dispatch = useDispatch();
	const nav = useNavigate();
	const handleCancel = () => {
		// Handle cancel logic
		dispatch(closeModal("processing_order_modal"));
		if (back) {
			nav(ROUTE.SELLER_ORDERS);
			window.location.reload();
		}
		window.location.reload();
	};
	if (type === "canceled") {
		return (
			<Wrapper>
				<header
					style={{
						display: "flex",
						justifyContent: "end",
						background: "#F7FAFC",
						padding: "20px",
					}}
				>
					<CircleDismissIcon onClick={handleCancel} />
				</header>

				<main>
					<CircleMark color="red" />
					<h2>Order Canceled❌</h2>
					<p>The buyer will be notified immediately</p>

					<div className="info">
						<div
							style={{
								display: "flex",
								gap: 24,
								marginBottom: 10,
							}}
						>
							<CircleCheck color="red" />
							<p style={{ flex: 1 }}>
								Having declined the order, the buyer will be notified of this
								action, and will be refunded immediately
							</p>
						</div>
						<div
							style={{
								display: "flex",
								gap: 24,
								marginBottom: 10,
							}}
						>
							<CircleCheck color="red" />
							<p style={{ flex: 1 }}>
								{" "}
								If the order was declined because the item is not available,
								kindly deselect “in-stock”
							</p>
						</div>
						<div
							style={{
								display: "flex",
								gap: 24,
								marginBottom: 10,
							}}
						>
							<CircleCheck color="red" />
							<p style={{ flex: 1 }}>
								You can reach out to our customer support if the action is a
								mistake
							</p>
						</div>
					</div>
				</main>
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<header
				style={{
					display: "flex",
					justifyContent: "end",
					background: "#F7FAFC",
					padding: "20px",
				}}
			>
				<CircleDismissIcon onClick={handleCancel} />
			</header>

			<main>
				<CircleMark />
				<h2>Order Confirmed🛒 </h2>
				<p>The buyer will be notified immediately</p>

				<div className="info">
					<div
						style={{
							display: "flex",
							gap: 24,
							marginBottom: 10,
						}}
					>
						<CircleCheck />
						<p style={{ flex: 1 }}>
							Kindly put the item(s) together. Our delivery squad will reach out
							shortly to pick up.
						</p>
					</div>
					<div
						style={{
							display: "flex",
							gap: 24,
							marginBottom: 10,
						}}
					>
						<CircleCheck />
						<p style={{ flex: 1 }}>
							Ensure the parcel is complete, well packaged and in good
							condition.
						</p>
					</div>
					<div
						style={{
							display: "flex",
							gap: 24,
							marginBottom: 10,
						}}
					>
						<CircleCheck />
						<p style={{ flex: 1 }}> Mutilated or bad items will be returned</p>
					</div>
				</div>
			</main>
		</Wrapper>
	);
};

export default OrderModal;
