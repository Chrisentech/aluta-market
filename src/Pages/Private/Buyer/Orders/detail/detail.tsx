import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { Card, Table } from "../../../../../Shared/Components";
import Layout from "../../../../../Layouts";
import { selectActiveModal } from "../../../../../Features/modal/modalSlice";
import { calendar, phone } from "../../../../../assets";
import {
	DeliveryDetails,
	OrderStatus,
	Wrapper,
	ModalWrapper,
} from "./detail.styles";
import { BsCheckCircle } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

const data = [
	{
		img: phone,
		item: "Iphone 13 pro",
		category: "Mobile Phone & PC",
		price: "N7000",
		options: "10",
		stock: "12 Aug 2023",
		quantity: "5",
	},
];

const columns = [
	{ header: "", accessor: "img" },
	{ header: "Product", accessor: "item" },
	{ header: "Quantity", accessor: "quantity" },
	{ header: "Price", accessor: "price" },
	{ header: "Total", accessor: "price" },
];

const Screen: React.FC = () => {
	// const dispatch = useDispatch();
	const { id } = useParams();
	const nav = useNavigate();
	return (
		<Wrapper>
			<div className="flex">
				<BiArrowBack onClick={() => nav(-1)} size={20} />
				<h2>Order {id}</h2>
			</div>
			<Card className="main" width="100%">
				<div className="head">
					<h3>Order details for {id}</h3>
				</div>
				<OrderStatus>
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
						<div className="status">Processing</div>
					</div>
				</OrderStatus>
				<div className="table-wrapper">
					<Table data={data} columns={columns} />
				</div>
				<DeliveryDetails>
					<div className="div">
						<h3>Delivery Details</h3>
						<div className="bottom">
							<div className="contact">
								<div>
									<p className="name">Delivery Method</p>
									<p className="number">Home Delivery</p>
								</div>
							</div>
							<div className="contact">
								<div>
									<p className="name">Delivery Address</p>
									<p className="number">
										Scarlet Hostel, adjacent Yemco saloon, Education, Fuoye, Oye
									</p>
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
									<p className="number">Card Payment</p>
								</div>
							</div>
							<div className="contact">
								<div>
									<p className="name">Transaction Status</p>
									<p className="number"> Payment not confirmed</p>
								</div>
							</div>
						</div>
					</div>
				</DeliveryDetails>
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
