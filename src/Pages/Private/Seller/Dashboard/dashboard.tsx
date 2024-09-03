import React, { useEffect, useState } from "react";
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
import { documentCopy, noOrder, noProduct } from "../../../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
import {
	selectStore,
	selectStores,
} from "../../../../Features/store/storeSlice";
import { ROUTE } from "../../../../Shared/Constants";
import { OrderCard } from "../Orders/orders.styles";
import { selectMyProducts } from "../../../../Features/products/productSlice";
import useProducts from "../../../../Features/products/productActions";
import { fetchMe } from "../../../../Features/user/userSlice";
import useUsers from "../../../../Features/user/userActions";
import { alertSuccess } from "../../../../Features/alert/alertSlice";
import { FaCheck } from "react-icons/fa";
import {
	calculateTotalPrice,
	formatCurrency,
	truncateText,
} from "../../../../Shared/Utils/helperFunctions";
const { Charts, Pie } = Visuals;

const Screen: React.FC = () => {
	const store = useSelector(selectStore);
	const me: any = useSelector(fetchMe);
	const nav = useNavigate();
	const products = useSelector(selectMyProducts);
	const { getProducts } = useProducts();
	const { getDva } = useUsers();
	let isMobile: any = localStorage.getItem("isMobile") ?? "";
	const [copied, setCopied] = useState<boolean>(false);

	const dispatch = useDispatch();
	const handleCopy = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);

			// Reset copied state after a short delay
			setTimeout(() => {
				setCopied(false);
			}, 1500); // Reset after 2 seconds
		} catch (error) {
			console.error("Failed to copy to clipboard:", error);
		}
	};
	useEffect(() => {
		if (copied) {
			dispatch(alertSuccess("Account number Copied successfully!!"));
		}
	}, [copied]);
	isMobile = isMobile === "true" ? true : false;
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				if (store) {
					await getProducts({
						store: store.name,
						limit: 1000,
						offset: 0,
					});
					if (!me?.dva) {
						await getDva(me.email);
					}
				}
			} catch (error: any) {
				console.error("Error fetching products:", error);
			} finally {
				// setLoading(false);
			}
		};

		fetchProducts();
	}, [store]);
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
				<p>{store?.orders?.length || 0}</p>
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
				<p>{products?.length || 0}</p>
			</div>
		</GridItem>,
		<GridItem background="#FA3434">
			{me?.dva && (
				<div
					className="topIcon dark"
					onClick={() => handleCopy(me.dva.account_number)}
				>
					{copied ? <FaCheck color="green" /> : <img src={documentCopy} />}
				</div>
			)}
			<div className="wrap">
				<div className="icon">
					<IoWalletOutline color="#fff" size="24" />
				</div>
			</div>
			{me?.dva ? (
				<div className="info">
					<h3>{me?.dva?.bank?.name}</h3>
					<p>{me?.dva?.account_number}</p>
					<h3>{me?.dva?.account_name}</h3>
				</div>
			) : (
				<div className="info">
					<h3>Bank Details</h3>
					<h3>loading...</h3>
				</div>
			)}
		</GridItem>,
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
							{products?.length > 0 ? (
								<Table data={products.slice(0, 5)} columns={columns} />
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
							store?.orders
								?.filter((order: any) => order?.status !== "delivered")
								?.slice(0, 4)
								?.map((order: any, index: number) => {
									return (
										<div className="order-card" key={index}>
											<OrderCard>
												<div
													className="top"
													onClick={() =>
														nav(ROUTE.SELLER_ORDER_DETAIL + `/${order?.uuid}`, {
															state: order,
														})
													}
												>
													<div className="right">
														<img
															src={order?.product[0]?.thumbnail}
															className="img"
														/>
														<div className="info">
															<p className="title">
																{order?.product?.length > 1
																	? truncateText(order?.product[0]?.name, 50) +
																	  ` and  ${order?.product?.length - 1}` +
																	  " other item(s)"
																	: truncateText(order?.product[0]?.name, 50)}
															</p>
															<p className="price">
																{" "}
																{formatCurrency(
																	calculateTotalPrice(order?.product)
																)}
															</p>
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
		</Wrapper>
	);
};

const Dashboard = () => {
	const stores = useSelector(selectStores);
	const activeModal = useSelector(selectActiveModal);

	return (
		<Layout
			layout="dashboard"
			component={Screen}
			isLoading={stores.length === 0}
			showModal={activeModal}
			popUpContent={<LogoutModal />}
			navMode="noSearch"
		/>
	);
};

export default Dashboard;
