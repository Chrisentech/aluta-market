import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { Card, Table } from "../../../../../Shared/Components";
import Layout from "../../../../../Layouts";
import { selectActiveModal } from "../../../../../Features/modal/modalSlice";
import { calendar } from "../../../../../assets";
import {
	CustomerDetails,
	OrderStatus,
	Wrapper,
	ModalWrapper,
} from "./detail.styles";
import { BsCheckCircle } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import {
	calculateTotalPrice,
	getCapitalizedFirstLetter,
} from "../../../../../Shared/Utils/helperFunctions";
import { capitalize } from "lodash";
import moment from "moment";

const columns = [
	{ header: "", accessor: "thumbnail" },
	{ header: "Product", accessor: "name" },
	{ header: "Quantity", accessor: "quantity" },
	{ header: "Price", accessor: "price" },
	{ header: "Total", accessor: "total" },
];

const Screen: React.FC = () => {
	// const dispatch = useDispatch();
	const { id } = useParams();
	const { state } = useLocation();
	const products = state?.product;

	return (
		<Wrapper>
			<div className="flex">
				<h2>{capitalize(state?.status)} orders</h2>
			</div>
			<Card className="main" width="100%">
				<div className="head"></div>
				<OrderStatus>
					<div className="info">
						<div className="title">
							<img src={calendar} />
							Date
						</div>
						<div className="detail">
							{moment(state?.createdAt).format("h:mma ddd D MMM, YYYY")}
						</div>
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

const Modal: React.FC<{ confirmed?: boolean }> = () => {
	return (
		<ModalWrapper>
			<div className="top"></div>
		</ModalWrapper>
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
			popUpContent={<Modal confirmed />}
			navMode="noSearch"
		/>
	);
};

export default OrderDetail;
