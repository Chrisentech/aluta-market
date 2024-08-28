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
import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../../Shared/Utils/helperFunctions";
import { ROUTE } from "../../../Shared/Constants";
import DeliveryAddressFormModal from "../ProductView/modals/ChangeAddress";
import { ArrowLeftIcon } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { capitalize } from "lodash";
import {
	actions,
	fetchMe,
	selectHomeDelivery,
	selectPickupStation,
} from "../../../Features/user/userSlice";
import { alertError } from "../../../Features/alert/alertSlice";

const Screen: React.FC<{
	setDeliveryFee: (fee: number) => void;
}> = ({ setDeliveryFee }) => {
	const dispatch = useDispatch();
	const { cart } = useCart();
	const nav = useNavigate();
	const [deliveryFee, setDeliveryFee2] = useState<any>(0);
	const [address, setAddress] = useState("");
	const me = useSelector(fetchMe);
	const homeAddress = useSelector(selectHomeDelivery) || me?.paymnetDetails;

	const handlePaymentModal = () => {
		if (!address) {
			dispatch(alertError("Select one of the delivery addresses"));
			return;
		}
		dispatch(showModal("payment"));
	};
	const pickUpLocation = useSelector(selectPickupStation);
	const handleRadioSelection = async (value: any) => {
		if (value === "delivery_not_needed") {
			setDeliveryFee2(0.0);
			setAddress("No Address");
			setDeliveryFee(0.0);
		} else if (value === "home_delivery") {
			setDeliveryFee2(7890);
			setAddress("Home Delivery");
			setDeliveryFee(7890);
		} else if (value === "pickup_station") {
			setDeliveryFee2(2000);
			setAddress("Pickup Station: " + value);
			setDeliveryFee(2000);
		}
	};
	useEffect(() => {
		dispatch(
			actions.setPickUpStation({
				value: "North Gate",
				type: "pickup_station",
				slug: "north_gate",
				meta: {
					previous_value: "",
					current_value: "north_gate",
					is_valid: true,
					error_message: "",
				},
			})
		);
	}, []);

	useEffect(() => {
		if (!cart) {
			nav(ROUTE.CART);
		}
	}, []);
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
										onChange={(e) => handleRadioSelection(e.target.value)}
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
									<input
										type="radio"
										name="option"
										value="home_delivery"
										onChange={(e) => handleRadioSelection(e.target.value)}
									/>
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
												{homeAddress?.address ? "N7,890" : "N0.00"}
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
											{homeAddress?.address ? "Change" : "Add"} Address
										</h2>
									</div>
									<p>{homeAddress?.address}</p>
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
									<input
										type="radio"
										name="option"
										value="pickup_station"
										onChange={(e) => handleRadioSelection(e.target.value)}
									/>
									<span className="checkmark"></span>
								</label>
								<div style={{ width: "100%" }}>
									<div
										style={{ display: "flex", justifyContent: "space-between" }}
									>
										<h2>
											<span>{pickUpLocation?.value} Pickup Station</span>
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
									<p>{pickUpLocation?.value}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="heading">Shipment Order</div>
						{cart &&
							cart?.items &&
							cart?.items.map((item: any, i: number) => (
								<div key={i} className="section2">
									<div className="img_container">
										<img src={item.product.thumbnail} alt={item.product.name} />
									</div>
									<div className="details">
										<h2>{item.product.name}</h2>
										<p>Variation: Small</p>
										<p>{capitalize(item.product.store)}</p>
										<h2 style={{ marginTop: 10 }}>
											{formatCurrency(item.product.price)}
										</h2>
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
							<span className="cost">{formatCurrency(deliveryFee)}</span>
						</p>
						<div className="bottom">
							<p className="total">
								<span>Total:</span>
								<span>{formatCurrency((cart?.total ?? 0) + deliveryFee)}</span>
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
	const [pickUpStation, setPickUpStation] = useState("");
	console.log(pickUpStation);

	const [deliveryFee, setDeliveryFee] = useState(0); // Step 1: Lift state

	const payload = {
		...cart,
		total: deliveryFee + (cart?.total ?? 0),
	};
	const loading = useSelector(selectLoadingState);
	return (
		<Layout
			layout={"full"}
			component={() => (
				<Screen
					setDeliveryFee={setDeliveryFee} // Pass the state and updater
				/>
			)}
			popUpContent={
				activeModal === "changeAddress" ? (
					<DeliveryAddressFormModal />
				) : activeModal === "pickup" ? (
					<PickupModal setPickUpStation={setPickUpStation} />
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
