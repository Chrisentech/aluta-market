import React, { useState } from "react";
import Layout from "../../../../Layouts";
import { NavLink } from "react-router-dom";

import { bagHappy, wristwatch } from "../../../../assets";
import { Button, Card, View } from "../../../../Shared/Components";
import { useSelector } from "react-redux";
import { selectStore } from "../../../../Features/store/storeSlice";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
import {
	OrderCard,
	TabContent,
	TabOption,
	Tabs,
	Wrapper,
} from "./orders.styles";
import { ROUTE } from "../../../../Shared/Constants";

const Screen: React.FC = () => {
	const [activeTab, setActiveTab] = useState<string>("open");

	const store = useSelector(selectStore);

	let isMobile: any = localStorage.getItem("isMobile") ?? "";
	isMobile = isMobile === "true" ? true : false;
	const getGridItems = (option: string) => {
		let currentArray: any[] = [];
		//logic to handle which data to map.... example
		let arrayLength = option === "open" ? 2 : store?.orders?.length ?? 0; // processing orders length;

		Array(arrayLength)
			.fill(".")
			.map((_, index) => {
				currentArray.push(
					<NavLink key={index} to={ROUTE.SELLER_ORDER_DETAIL + `/${index}`}>
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
									<input type="checkbox" id={option} />
									<span className="custom"></span>
									Mark as Delivered
								</label>
							</div>
						</OrderCard>
					</NavLink>
				);
			});
		return currentArray;
	};
	const isArrayEmpty = () => {
		return getGridItems(activeTab).length === 0;
	};
	return (
		<Wrapper>
			<div className="flex">
				<h2>Orders</h2>
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
								<img src={bagHappy} alt="" />
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
			navMode="noSearch"
		/>
	);
};

export default Orders;
