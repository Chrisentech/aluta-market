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
import { fetchMe } from "../../../../Features/user/userSlice";
import useProducts from "../../../../Features/products/productActions";
const Screen: React.FC = () => {
	const [activeTab, setActiveTab] = useState<string>("open");
	const me = useSelector(fetchMe);

	let isMobile: any = localStorage.getItem("isMobile") ?? "";
	isMobile = isMobile === "true" ? true : false;
	const { getPurchasedData, purchasedOrders } = useProducts();
	// console.log(purchasedOrders);

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

	return (
		<Wrapper>
			<div className="flex">
				<h2>Purchased Orders</h2>
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
								<Button background="#FA3434" color="#fff">
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

export default Orders;
