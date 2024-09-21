import React, { useEffect, useState } from "react";
import Layout from "../../../../Layouts";

import { bagHappy } from "../../../../assets";
import {
	Button,
	Card,
	LogoutModal,
	SkynetModal,
	View,
} from "../../../../Shared/Components";
import { useSelector } from "react-redux";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
import { TabContent, TabOption, Tabs, Wrapper } from "./orders.styles";
import { fetchMe, selectMode } from "../../../../Features/user/userSlice";
import { selectLoadingState } from "../../../../Features/loading/loadingSlice";
import useProducts from "../../../../Features/products/productActions";
import { useNavigate } from "react-router-dom";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { ROUTE } from "../../../../Shared/Constants";
import useUsers from "../../../../Features/user/userActions";
const Screen: React.FC = () => {
	const [activeTab, setActiveTab] = useState<string>("open");
	const me = useSelector(fetchMe);
	const navigate = useNavigate();
	let isMobile: any = localStorage.getItem("isMobile") ?? "";
	isMobile = isMobile === "true" ? true : false;
	const { getPurchasedData, purchasedOrders } = useProducts();
	// console.log(purchasedOrders);
	const { setMode } = useUsers();

	const mode = useSelector(selectMode);

	const getGridItems = (option: string) => {
		let currentArray: any[] = [];

		// Filter orders based on the status (open or closed)
		const filteredOpenOrders = purchasedOrders?.filter((order: any) => {
			return order.status === "pending" || order.status === "processing"; // Assuming each order has a 'status' field
		});

		const filteredClosedOrders = purchasedOrders?.filter((order: any) => {
			return order.status === "delivered" || order.status === "refunded"; // Assuming each order has a 'status' field
		});

		// Map through the filtered orders and push the products to the currentArray
		if (option === "open") {
			filteredOpenOrders?.forEach((order: any) => {
				// order.products.forEach((product: any) => {
				currentArray.push(order);
				// });
			});
		} else {
			filteredClosedOrders?.forEach((order: any) => {
				// order.products.forEach((product: any) => {
				currentArray.push(order);
				// });
			});
		}

		return currentArray;
	};

	useEffect(() => {
		console.log(purchasedOrders);
		const fetchData = async () => {
			await getPurchasedData(me?.id ?? 0);
		};
		if (me?.id && !purchasedOrders) {
			fetchData();
		}
	}, [me]);

	const isArrayEmpty = () => {
		return getGridItems(activeTab).length === 0;
	};
	const handleToggleStatus = () => {
		if (mode === "seller") {
			setMode("buyer");
			navigate(ROUTE.BUYER_ORDER);
		} else {
			setMode("seller");
			navigate(ROUTE.SELLER_DASHBOARD);
		}
	};

	return (
		<Wrapper>
			<div className="flex">
				<h2>Purchased Orders</h2>
				{me?.usertype === "seller" && (
					<>
						{mode === "buyer" ? (
							<MdToggleOn
								size="55px"
								color={"rgb(255 21 18 / 91%)"}
								title="switch to buyer dashboard"
								style={{
									cursor: "pointer",
								}}
								onClick={handleToggleStatus}
							/>
						) : (
							<MdToggleOff
								size="55px"
								color={"rgb(255 21 18 / 91%)"}
								style={{
									cursor: "pointer",
								}}
								onClick={handleToggleStatus}
							/>
						)}
					</>
				)}
			</div>
			<Card className="main" width="100%">
				<Tabs>
					<TabOption
						className="option"
						active={activeTab === "open"}
						color="#FA3434"
						onClick={() => setActiveTab("open")}
					>
						Open Order
					</TabOption>
					<TabOption
						className="option"
						active={activeTab === "closed"}
						color="#FA3434"
						onClick={() => setActiveTab("closed")}
					>
						Closed Order
					</TabOption>
				</Tabs>
				<TabContent
					empty={isArrayEmpty()}
					style={{ marginTop: `${isArrayEmpty() ? 20 : 0}` }}
				>
					{isArrayEmpty() ? (
						<>
							<div className="icon">
								<img src={bagHappy} alt="" width={60} />
							</div>
							<div className="text">
								<p className="header">Empty Orders</p>
								<p className="info">You have no {activeTab} orders</p>
								<Button
									background="#FA3434"
									color="#fff"
									onClick={() => navigate("/")}
								>
									Go to Market
								</Button>
							</div>
						</>
					) : (
						<View
							mode="list"
							gridItems={getGridItems(activeTab)}
							itempergrid={3}
							listItems={getGridItems(activeTab)}
							cardStyle="order-card"
							className="dash_grid_2"
							type="order"
						/>
					)}
				</TabContent>
			</Card>
		</Wrapper>
	);
};

const Orders = () => {
	const activeModal = useSelector(selectActiveModal);
	const { purchasedOrders } = useProducts();
	const isLoading = useSelector(selectLoadingState);

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={!purchasedOrders || isLoading}
			showModal={activeModal}
			popUpContent={
				activeModal === "skynet" ? <SkynetModal /> : <LogoutModal />
			}
			navMode="noSearch"
		/>
	);
};

export default Orders;
