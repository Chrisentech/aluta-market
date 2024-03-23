import React from "react";
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
	Button,
} from "../../../../Shared/Components";
import { IoWalletOutline, IoCartOutline } from "react-icons/io5";
import {
	BsThreeDotsVertical,
	BsDot,
	BsCalendar,
	BsCaretUpFill,
} from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import {
	cloth,
	noOrder,
	noProduct,
	phone,
	wallet,
	watch,
	wristwatch,
} from "../../../../assets";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectActiveModal,
	showModal,
} from "../../../../Features/modal/modalSlice";
import { selectStore } from "../../../../Features/store/storeSlice";
import { ROUTE } from "../../../../Shared/Constants";
import { OrderCard } from "../Orders/orders.styles";
const { Charts, Pie } = Visuals;

const Screen: React.FC = () => {
	const store = useSelector(selectStore);
	const nav = useNavigate();
	let isMobile: any = localStorage.getItem("isMobile") ?? "";
	isMobile = isMobile === "true" ? true : false;

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
				<p>{store?.wallet >= 0 ? "N " + store?.wallet.toFixed(2) : "N0.00"}</p>
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
			{!store?.bank ? (
				<div
					style={{
						cursor: "pointer",
						padding: 10,
						background: "purple",
						color: "#fff",
						borderRadius: 5,
					}}
					onClick={() => nav(ROUTE.SELLER_PAYMENT)}
				>
					Create Payment Details
				</div>
			) : (
				<div className="info">
					<h3>Uba bank</h3>
					<p>2092138348</p>
					<h3>Aluta's Store</h3>
				</div>
			)}
		</GridItem>,
	];
	const data = [
		{
			img: cloth,
			item: "Hoodie",
			// category: "Cloth",
			price: "N3000",
			// quantity: "10",
			options: "10",
			stock: "18 Aug 2023",
		},
		{
			img: phone,
			item: "Iphone 13 pro",
			// category: "Mobile Phone & PC",
			price: "N7000",
			options: "10",
			stock: "12 Aug 2023",
			// quantity: "5",
		},
		{
			options: "10",
			img: wallet,
			item: "Mini Wallet",
			// category: "Accessories",
			stock: "16 Aug 2023",
			price: "N2000",
			// quantity: "1",
		},
		{
			img: watch,
			options: "10",
			item: "Rolex watch",
			// category: "Accessories",
			stock: "19 Aug 2023",
			price: "N4000",
			// quantity: "10",
		},
		{
			img: phone,
			options: "10",
			item: "Iphone 12",
			// category: "Mobile Phone & PC",
			stock: "20 Aug 2023",
			price: "N6000",
			// quantity: "5",
		},
	];

	const columns = [
		{ header: "", accessor: "img" },
		{ header: "Item", accessor: "item" },
		{ header: "Price", accessor: "price" },
		{ header: "Options", accessor: "options" },
		{ header: "in-stock", accessor: "stock" },
	];
	return (
		<Wrapper>
			<h2>Seller Dashboard</h2>
			<View
				mode="grid"
				gridItems={gridItem}
				itempergrid={isMobile ? 2 : 4}
				className="dash_grid"
			/>
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
								<FiBarChart2
									title="info"
									color="gray"
									style={{ cursor: "not-allowed" }}
								/>
							</div>
							<Tracker>
								<BsCalendar />
								<span>This year</span>
							</Tracker>
							<PriceTag>N {store?.wallet.toFixed(2)}</PriceTag>
							<Income>
								<p>
									Total Income <BsCaretUpFill />
								</p>
								<p> +0.00%</p>
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
								<p>0%</p>
							</div>
							<div>
								<p style={{ display: "flex", alignItems: "center" }}>
									<BsDot size="32" color="#2776EA" /> Link
								</p>
								<p>0%</p>
							</div>
						</div>
					</Card>
				</div>
			</Main>
			<Main>
				<div className="first-section">
					<TableWrapper>
						<Card height="400px" width="100%" className="card">
							<div className="flex">
								<h2>Top Products</h2>
							</div>
							{store?.products ? (
								<Table data={data} columns={columns} />
							) : (
								<div className="no_product">
									<img src={noProduct} alt="" />{" "}
									<Button
										onClick={() => nav(ROUTE.SELLER_PRODUCTTYPE)}
										color="#fff"
										background="#00B517"
										width="203px"
									>
										Upload
									</Button>
								</div>
							)}
						</Card>
					</TableWrapper>
				</div>
				<div className="second-section">
					<Card
						width="inherit"
						height="400px"
						borderRadius="20px"
						padding={"20px 30px "}
						className="card"
					>
						<div className="flex">
							<h2>Latest Orders</h2>
						</div>
						{store?.orders ? (
							Array(4)
								.fill(".")
								.map((_, index) => {
									return (
										<div className="order-card" key={index}>
											<OrderCard>
												<div className="top">
													<div className="right">
														<img src={wristwatch} className="img" />
														<div className="info">
															<p className="title">Headset and 2 other items</p>
															<p className="price">N9,600</p>
														</div>
													</div>
													<div className="icon">A</div>
												</div>
												<div className="bottom">
													<label className="option">
														<input type="checkbox" />
														<span className="custom"></span>
														Mark as Delivered
													</label>
												</div>
											</OrderCard>
										</div>
									);
								})
						) : (
							<div className="no_product">
								<img src={noOrder} alt="" />{" "}
							</div>
						)}
					</Card>
				</div>
			</Main>
			{/* <TableWrapper>
				<Card height="200px" width="100%">
					<div className="flex">
						<h2>Latest Orders</h2>
						<p>
							<BsThreeDots />
						</p>
					</div>
					<Table data={data} columns={columns} />
				</Card>
			</TableWrapper> */}
		</Wrapper>
	);
};

const Dashboard = () => {
	const { state: param } = useParams();
	const dispatch = useDispatch();
	// const stores = useSelector(selectStores);
	const activeModal = useSelector(selectActiveModal);

	if (param === "logout") dispatch(showModal("logout"));

	return (
		<Layout
			layout="dashboard"
			component={Screen}
			isLoading={false}
			// isLoading={stores.length === 0}
			showModal={activeModal}
			popUpContent={<LogoutModal />}
			navMode="noSearch"
		/>
	);
};

export default Dashboard;
