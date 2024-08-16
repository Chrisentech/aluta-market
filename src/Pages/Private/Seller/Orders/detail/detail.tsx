import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Table } from "../../../../../Shared/Components";
import Layout from "../../../../../Layouts";
import { selectActiveModal } from "../../../../../Features/modal/modalSlice";
import { calendar } from "../../../../../assets";
import { CustomerDetails, OrderStatus, Wrapper } from "./detail.styles";
import { BsCheckCircle } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import {
	calculateTotalPrice,
	getCapitalizedFirstLetter,
} from "../../../../../Shared/Utils/helperFunctions";
import { capitalize } from "lodash";
import moment from "moment";
import useStore from "../../../../../Features/store/storeAction";
import {
	selectStore,
	selectStores,
} from "../../../../../Features/store/storeSlice";
import { showModal } from "../../../../../Features/modal/modalSlice";
import { alertError } from "../../../../../Features/alert/alertSlice";

import OrderModal from "../modal/orderModal";
const columns = [
	{ header: "", accessor: "thumbnail" },
	{ header: "Product", accessor: "name" },
	{ header: "Quantity", accessor: "quantity" },
	{ header: "Price", accessor: "price" },
	{ header: "Total", accessor: "total" },
];

const Screen: React.FC = () => {
	// const dispatch = useDispatch();
	const { state } = useLocation();
	const products = state?.product;
	const dispatch = useDispatch();
	const [loading, setLoading] = useState<number>(0);
	const { updateOrders } = useStore();

	const store = useSelector(selectStore);
	const handleOrderStatus = async (status: string, id: string, num: number) => {
		const ok = window.confirm(
			`Are you sure you want to change this order status to ${status}?`
		);

		if (ok) {
			setLoading(num);
			try {
				await updateOrders({ id, status, store_id: store?.id });

				if (status === "canceled") {
					dispatch(showModal("canceled_order_modal"));
				} else {
					dispatch(showModal("processing_order_modal"));
				}
			} catch (error: any) {
				console.error("Failed to update order status:", error);

				dispatch(alertError(error?.message));
			} finally {
				setLoading(0);
			}
		}
	};

	return (
		<Wrapper>
			<div className="flex">
				<h2>{capitalize(state?.status)} orders</h2>
			</div>
			<Card className="main" width="100%">
				<div className="head"></div>
				<OrderStatus>
					<div className="flex">
						<div className="info">
							<div className="title">
								<img src={calendar} />
								Date
							</div>
							<div className="detail">
								{moment(state?.createdAt).format("h:mma ddd D MMM, YYYY")}
							</div>
						</div>
						{state?.status === "pending" && (
							<div className="flex">
								<Button
									onClick={() =>
										handleOrderStatus("processing", state?.uuid, 1)
									}
									color={"#fff"}
									background="green"
									disabled={loading === 1}
									loading={loading === 1}
								>
									Accept
								</Button>

								<Button
									color={"red"}
									border="1px solid red"
									background="#fff"
									disabled={loading === 2}
									loading={loading === 2}
									onClick={() => handleOrderStatus("canceled", state?.uuid, 2)}
								>
									Cancel
								</Button>
							</div>
						)}
					</div>
					<div className="info">
						<div className="title">
							<BsCheckCircle size={22} color="#292D32" /> Status
						</div>
						<div className={`status ${state?.status}`}>
							{state?.status === "processing"
								? "Processing"
								: state?.status === "pending"
								? "Pending"
								: state?.status === "delivered"
								? "Delivered"
								: state?.status === "refunded"
								? "Refunded"
								: "Canceled"}
						</div>
					</div>
				</OrderStatus>
				<div className="table-wrapper">
					<Table data={products} columns={columns} />
					<div className="total">
						<p className="label">Total</p>
						<p className="value">NGN {calculateTotalPrice(products)}</p>
					</div>
				</div>
				<CustomerDetails>
					<h3>Customer Details</h3>
					<div className="bottom">
						<div className="contact">
							<div className="initial">
								{getCapitalizedFirstLetter(state?.customer?.name)}
							</div>
							<div>
								<p className="name">{state?.customer?.name}</p>
								<p className="number">{state?.customer?.phone}</p>
							</div>
						</div>
						<div className="location">
							<IoLocationOutline size={34} />
							<p className="address">{state?.customer?.address}</p>
						</div>
					</div>
				</CustomerDetails>
			</Card>
		</Wrapper>
	);
};

const OrderDetail = () => {
	const activeModal = useSelector(selectActiveModal);
	const stores = useSelector(selectStores);

	// dispatch(showModal('confirmOrder'))

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={stores.length === 0}
			showModal={activeModal}
			popUpContent={
				<OrderModal
					back
					type={activeModal === "canceled_order_modal" ? "canceled" : "pending"}
				/>
			}
			navMode="noSearch"
		/>
	);
};

export default OrderDetail;
