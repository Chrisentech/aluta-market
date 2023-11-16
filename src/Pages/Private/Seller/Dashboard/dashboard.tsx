import React, { useEffect } from "react";
import {
	Wrapper,
	GridItem,
	Main,
	Tracker,
	Income,
	PriceTag,
	TableWrapper,
} from "./dashboard.styles";
import Layout from "../../../../Layouts";
import {
	View,
	Card,
	Visuals,
	Table,
	LogoutModal,
} from "../../../../Shared/Components";
import { IoWalletOutline, IoCartOutline } from "react-icons/io5";
import {
	BsThreeDotsVertical,
	BsDot,
	BsThreeDots,
	BsCalendar,
	BsCaretUpFill,
} from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectActiveModal,
	showModal,
} from "../../../../Features/modal/modalSlice";
import {
	selectStore,
	selectStores,
} from "../../../../Features/store/storeSlice";
import { ROUTE } from "../../../../Shared/Constants";
const { Charts, Pie } = Visuals;

const Screen: React.FC = () => {
	const store = useSelector(selectStore);
	const nav = useNavigate();
	const gridItem = [
		<GridItem background="#00B517">
			<div className="topIcon">
				<BsThreeDotsVertical color="#00B517" size="18" title="more" />
			</div>
			<div className="wrap">
				<div className="icon">
					<IoWalletOutline color="#fff" size="24" />
				</div>
			</div>
			<div className="info">
				<h3>Account Balance</h3>
				<p>{store?.wallet >= 0 ? "N " + store?.wallet : "N123, 456.78"}</p>
			</div>
		</GridItem>,
		<GridItem background="#FF9017">
			<div className="topIcon" title="statistics">
				<BsCaretUpFill color="#00B517" size="15" />
				<span>+60%</span>
			</div>
			<div className="wrap">
				<div className="icon">
					<IoCartOutline color="#fff" size="24" />
				</div>
			</div>
			<div className="info">
				<h3>Total Orders</h3>
				<p>{store?.order?.length || 0}</p>
			</div>
		</GridItem>,
		<GridItem background="#0D6EFD">
			<div className="wrap">
				<div className="icon">
					<IoWalletOutline color="#fff" size="24" />
				</div>
			</div>
			<div className="info">
				<h3>Total Products</h3>
				<p>{store?.product?.length || 0}</p>
			</div>
		</GridItem>,
		<GridItem background="#FA3434">
			<div className="wrap">
				<div className="icon">
					<IoWalletOutline color="#fff" size="24" />
				</div>
			</div>
			{!store?.bank&&store ? (
				<div
					style={{
						cursor: "pointer",
						padding: 10,
						background: "purple",
						color: "#fff",
						borderRadius: 5,
					}}
					onClick={() => nav(ROUTE.SELLER_PAYMENT_REG + "/1")}
				>
					Create Payment Details
				</div>
			) : (
				<div className="info">
					<h3>Uba bank</h3>
					<p>2092138348</p>
					<h3>Opeyemi's Store</h3>
				</div>
			)}
		</GridItem>,
	];
	const data = [
		{
			id: 1,
			name: "John Doe",
			email: "lorem@gmail.com",
			price: "N3000",
			status: "Pending",
			date: "18 Aug 2023",
		},
		{
			id: 2,
			name: "Jane Smith",
			email: "ipsum@gmail.com",
			price: "N7000",
			date: "12 Aug 2023",
			status: "Delivered",
		},
		{
			id: 3,
			name: "Mike Johnson",
			email: "dolor@gmail.com",
			date: "16 Aug 2023",
			price: "N2000",
			status: "Cancelled",
		},
		{
			id: 4,
			name: "Alice Brown",
			email: "alice@gmail.com",
			date: "19 Aug 2023",
			price: "N4000",
			status: "Pending",
		},
		{
			id: 5,
			name: "Bob Smith",
			email: "bob@gmail.com",
			date: "20 Aug 2023",
			price: "N6000",
			status: "Delivered",
		},
		{
			id: 6,
			name: "Eve Johnson",
			email: "eve@gmail.com",
			date: "22 Aug 2023",
			price: "N3500",
			status: "Pending",
		},
		{
			id: 7,
			name: "Michael Brown",
			email: "michael@gmail.com",
			date: "25 Aug 2023",
			price: "N5000",
			status: "Delivered",
		},
	];

	const columns = [
		{ header: "ID", accessor: "id" },
		{ header: "Name", accessor: "name" },
		{ header: "Email", accessor: "email" },
		{ header: "Price", accessor: "price" },
		{ header: "Status", accessor: "status" },
		{ header: "Date", accessor: "date" },
	];
	return (
		<Wrapper>
			<h2>Seller Dashboard</h2>
			<View mode="grid" gridItems={gridItem} />
			<Main>
				<div className="first-section">
					<Card
						width="inherit"
						height={300}
						borderRadius="20px"
						padding={"20px 30px "}
					>
						<>
							<div className="flex">
								<h2>Sales Statistics</h2>
								<FiBarChart2 title="info" />
							</div>
							<Tracker>
								<BsCalendar />
								<span>This year</span>
							</Tracker>
							<PriceTag>N32.7K</PriceTag>
							<Income>
								<p>
									Total Income <BsCaretUpFill />
								</p>
								<p> +2.45%</p>
							</Income>
							<div className="track">
								<IoIosCheckmarkCircle color="#00b517" size="18" />
								<span>On track</span>
							</div>
						</>
						<Charts />
					</Card>
				</div>
				<div className="second-section">
					<Card width="inherit" borderRadius="20px" padding={"20px 30px "}>
						<div className="flex">
							<h2>Visitors</h2>
						</div>
						<Pie />
						<div className="label">
							<div>
								<p style={{ display: "flex", alignItems: "center" }}>
									<BsDot size="32" color="#FF9017" /> Search
								</p>
								<p>63%</p>
							</div>
							<div>
								<p style={{ display: "flex", alignItems: "center" }}>
									<BsDot size="32" color="#2776EA" /> Link
								</p>
								<p>37%</p>
							</div>
						</div>
					</Card>
				</div>
			</Main>
			<TableWrapper>
				<Card height="200px" width="100%">
					<div className="flex">
						<h2>Latest Orders</h2>
						<p>
							<BsThreeDots />
						</p>
					</div>
					<Table data={data} columns={columns} />
				</Card>
			</TableWrapper>
		</Wrapper>
	);
};

const Dashboard = () => {
	const { state: param } = useParams();
	const dispatch = useDispatch();
	const stores = useSelector(selectStores);
	const activeModal = useSelector(selectActiveModal);

	if (param === "logout") dispatch(showModal("logout"));

	return (
		<Layout
			layout="dashboard"
			component={Screen}
			state={stores.length === 0}
			showModal={activeModal}
			popUpContent={<LogoutModal />}
		/>
	);
};

export default Dashboard;
