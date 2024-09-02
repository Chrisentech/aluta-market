import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import {
	Button,
	Card,
	LogoutModal,
	SkynetModal,
	Table,
} from "../../../../../Shared/Components";
import Layout from "../../../../../Layouts";
import { selectActiveModal } from "../../../../../Features/modal/modalSlice";
import { calendar } from "../../../../../assets";
import { DeliveryDetails, OrderStatus, Wrapper } from "./detail.styles";
import { BsCheckCircle } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { capitalize, upperFirst } from "lodash";

const columns = [
	{ header: "", accessor: "img" },
	{ header: "Product", accessor: "name" },
	{ header: "Quantity", accessor: "quantity" },
	{ header: "Price", accessor: "price" },
	{ header: "Total", accessor: "price" },
];

const Screen: React.FC = () => {
	// const dispatch = useDispatch();
	const nav = useNavigate();
	const { state } = useLocation();

	return (
		<Wrapper>
			<div className="flex">
				<BiArrowBack onClick={() => nav(-1)} size={20} />
				<h2>Order {upperFirst(state?.uuid)}</h2>
			</div>
			<Card className="main" width="100%">
				<div className="head">{/* <h3>Order details for {orderId}</h3> */}</div>
				<OrderStatus status={state?.status}>
					<div className="info">
						<div className="title">
							<img src={calendar} />
							Date
						</div>
						<div className="detail">4:34PM Wed 13 Aug, 2023</div>
					</div>
					<div className="info">
						<div className="title">
							<BsCheckCircle size={22} color="#292D32" /> Status
						</div>

						<div
							style={{
								display: state?.transStatus === "not processed" ? "flex" : "",
								gap: 10,
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<div className="status">
								{state?.transStatus === "not processed" ? (
									<small>{upperFirst(state.transStatus)}</small>
								) : (
									capitalize(state?.status)
								)}
							</div>

							<Button
								background="transparent"
								padding={"10px !important"}
								color="#002"
								hasBoxShadow={false}
							>
								Finish Payment
							</Button>
						</div>
					</div>
				</OrderStatus>
				<div className="table-wrapper">
					<Table data={state.products} columns={columns} />
				</div>
				<DeliveryDetails>
					<div className="div">
						<h3>Delivery Details</h3>
						<div className="bottom">
							<div className="contact">
								<div>
									<p className="name">Delivery Method</p>
									<p className="number">
										{state.deliveryDetails.method
											? upperFirst(state.deliveryDetails.method)
											: "Home Delivery"}
									</p>
								</div>
							</div>
							<div className="contact">
								<div>
									<p className="name">Delivery Address</p>
									<p className="number">{state.deliveryDetails.address}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="div">
						<h3>Payment Information</h3>
						<div className="bottom">
							<div className="contact">
								<div>
									<p className="name">Payment Method</p>
									<p className="number">
										{state.paymentMethod
											? upperFirst(state.paymentMethod)
											: "Card Payment"}
									</p>
								</div>
							</div>
							<div className="contact">
								<div>
									<p className="name">Transaction Status</p>
									<p className="number">{upperFirst(state.transStatus)}</p>
								</div>
							</div>
						</div>
					</div>
				</DeliveryDetails>
			</Card>
		</Wrapper>
	);
};

const OrderDetail = () => {
	const activeModal = useSelector(selectActiveModal);
	// const dispatch = useDispatch();

	// dispatch(showModal('confirmOrder'))

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={false}
			showModal={activeModal}
			popUpContent={
				activeModal === "skynet" ? <SkynetModal /> : <LogoutModal />
			}
			navMode="noSearch"
		/>
	);
};

export default OrderDetail;
