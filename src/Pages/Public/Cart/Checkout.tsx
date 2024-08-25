import { useDispatch, useSelector } from "react-redux";
import { selectLoadingState } from "../../../Features/loading/loadingSlice";
import useCart from "../../../Features/cart/cartAction";
import {
	selectActiveModal,
	showModal,
} from "../../../Features/modal/modalSlice";
import { Wrapper } from "./CheckoutStyles";
import Layout from "../../../Layouts";
import { Button, PaymentModal, PickupModal } from "../../../Shared/Components";
import React from "react";
import { formatCurrency } from "../../../Shared/Utils/helperFunctions";
import { ROUTE } from "../../../Shared/Constants";
import DeliveryAddressFormModal from "../ProductView/modals/ChangeAddress";
import { ArrowLeftIcon, cloth } from "../../../assets";
import { useNavigate } from "react-router-dom";

const Screen: React.FC = () => {
	const dispatch = useDispatch();
	const { cart } = useCart();
	const nav = useNavigate();
	const handlePaymentModal = () => {
		dispatch(showModal("payment"));
	};

	return (
		<Wrapper>
			<div className="flex">
				<div className="section">
					<div
						onClick={() => nav(-1)}
						style={{
							display: "flex",
							alignItems: "center",
							gap: 10,
							marginBottom: 15,
							cursor: "pointer",
						}}
					>
						<ArrowLeftIcon />
						<span> back</span>
					</div>

					<div className="card">
						<div className="heading">Delivery Address</div>
						<div className="content">
							<div
								className="flex"
								style={{
									gap: 0,
									borderBottom: "1px solid #dee2e7",
									paddingBottom: 10,
								}}
							>
								<label className="radio-container">
									<input
										type="radio"
										name="option"
										value="delivery_not_needed"
									/>
									<span className="checkmark"></span>
								</label>
								<div>
									<h2>Delivery not needed</h2>
									<p>
										This option can be used for products that do not require
										delivery service
									</p>
								</div>
							</div>
						</div>

						<div className="content">
							<div
								className="flex"
								style={{
									gap: 0,
									borderBottom: "1px solid #dee2e7",
									paddingBottom: 10,
								}}
							>
								<label className="radio-container">
									<input type="radio" name="option" value="home_delivery" />
									<span className="checkmark"></span>
								</label>
								<div style={{ width: "100%" }}>
									<div
										style={{ display: "flex", justifyContent: "space-between" }}
									>
										<h2>
											<span>Home Delivery</span>
											<span
												style={{
													marginLeft: 20,
													background: "#00B5174D",
													color: "#00B517",
													borderRadius: 29,
													padding: "0 10px",
												}}
											>
												N7,890
											</span>
										</h2>
										<h2
											style={{
												color: "#00B517",
												fontSize: 14,
												fontFamily: "Inter",
												cursor: "pointer",
											}}
											onClick={() => dispatch(showModal("changeAddress"))}
										>
											Change Address
										</h2>
									</div>
									<p>
										Arike Laureen Scarlet Hostel, adjacent Yemco saloon,
										Education, Fuoye, Oye 0801122344
									</p>
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
									<input type="radio" name="option" value="pickup_station" />
									<span className="checkmark"></span>
								</label>
								<div style={{ width: "100%" }}>
									<div
										style={{ display: "flex", justifyContent: "space-between" }}
									>
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
										<h2
											style={{
												color: "#00B517",
												fontSize: 14,
												fontFamily: "Inter",
												cursor: "pointer",
											}}
											onClick={() => dispatch(showModal("pickup"))}
										>
											Select Option
										</h2>
									</div>
									<p>North Gate</p>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="heading">Shipment Order</div>
						{Array(3)
							.fill(null)
							.map((_, i) => (
								<div key={i} className="section2">
									<div className="img_container">
										<img src={cloth} alt="Men’s Short Sleeve T-shirt" />
									</div>
									<div className="details">
										<h2>
											Men’s Short Sleeve T-shirt Cotton Base Layer Slim Muscle
										</h2>
										<p>Variation: Small</p>
										<p>Arike Collection</p>
										<h2 style={{ marginTop: 10 }}>N7,098.99</h2>
									</div>
								</div>
							))}
					</div>
				</div>
				<div className="section">
					<div className="card">
						<p>
							<span className="label">Subtotal:</span>
							<span className="cost">{formatCurrency(cart?.total)}</span>
						</p>
						<p>
							<span className="label">Delivery Fee:</span>
							<span className="cost">N200.00</span>
						</p>
						<div className="bottom">
							<p className="total">
								<span>Total:</span>
								<span>{formatCurrency(cart?.total)}</span>
							</p>
							<Button
								className="button"
								width="100%"
								height="40px"
								background="#00B517"
								color="#fff"
								onClick={handlePaymentModal}
							>
								Make Paymnet
							</Button>
							<div className="footer">
								<span>
									{" "}
									Once you click “Make Payment” you automatically agree to all
									our{" "}
								</span>
								<a
									href={window.location.host + ROUTE.TERMS}
									target="_blank"
									style={{ color: "#0D6EFD" }}
								>
									Terms and Conditions
								</a>{" "}
								<span>for trade</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const CheckoutPage = () => {
	const activeModal = useSelector(selectActiveModal);
	const { cart } = useCart();
	const costOfDelivery = 200;
	const discount = 0;
	const payload = {
		...cart,
		total: costOfDelivery + (cart?.total ?? 0 + discount),
	};
	const loading = useSelector(selectLoadingState);
	return (
		<Layout
			layout={"full"}
			component={Screen}
			popUpContent={
				activeModal === "changeAddress" ? (
					<DeliveryAddressFormModal />
				) : activeModal === "pickup" ? (
					<PickupModal />
				) : (
					<PaymentModal data={payload} />
				)
			}
			showModal={activeModal}
			isLoading={!cart || loading}
			navMode="noSearch"
			modalWidth={560}
		/>
	);
};

export default CheckoutPage;
