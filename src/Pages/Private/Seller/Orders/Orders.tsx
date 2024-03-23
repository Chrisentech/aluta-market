import React, { useEffect, useState } from "react";
import Layout from "../../../../Layouts";
import { NavLink } from "react-router-dom";

import {
	bagHappy,
	bagTick,
	cartVector,
	documentCopy,
	link,
	people,
	wristwatch,
} from "../../../../assets";
import { Card, View } from "../../../../Shared/Components";
import { useDispatch, useSelector } from "react-redux";
import { selectStore } from "../../../../Features/store/storeSlice";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
import {
	GridItem,
	OrderCard,
	TabContent,
	TabOption,
	Tabs,
	Wrapper,
} from "./orders.styles";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ROUTE } from "../../../../Shared/Constants";
import { FaCheck } from "react-icons/fa";
import { alertSuccess } from "../../../../Features/alert/alertSlice";

const Screen: React.FC = () => {
	const dispatch = useDispatch();
	const [activeTab, setActiveTab] = useState<string>("pending");
	const [copied, setCopied] = useState<boolean>(false);

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
			dispatch(alertSuccess("Link Copied to clipboard!!"));
		}
	}, [copied]);

	const store = useSelector(selectStore);
	const gridItem = [
		<GridItem background="#00B517">
			<div className="topIcon">
				<BsThreeDotsVertical color="#00B517" size="18" title="more" />
			</div>
			<div className="wrap">
				<div className="icon">
					<img src={bagTick} alt="" />
				</div>
			</div>
			<div className="info">
				<h3>Orders Delivered</h3>
				<p>{store?.orders?.length ?? 0}</p>
			</div>
		</GridItem>,
		<GridItem background="#FF9017">
			<div className="wrap">
				<div className="icon">
					<img src={cartVector} alt="" />
				</div>
			</div>
			<div className="info">
				<h3>Total Orders</h3>
				<p>{store?.orders?.length ?? 0}</p>
			</div>
		</GridItem>,
		<GridItem background="#0D6EFD">
			<div className="wrap">
				<div className="icon">
					<img src={people} alt="" />
				</div>
			</div>
			<div className="info">
				<h3>Store followers</h3>
				<p>{store?.followers?.length ?? 0}</p>
			</div>
		</GridItem>,
		<GridItem background="#FA3434">
			<div className="topIcon dark" onClick={() => handleCopy(store?.link)}>
				{copied ? <FaCheck color="green" /> : <img src={documentCopy} />}
			</div>
			<div className="wrap">
				<div className="icon">
					<img src={link} alt="" />
				</div>
			</div>
			<div className="info">
				<h3>Store link</h3>
				<NavLink to="#" className="navLink">
					{store?.link}
				</NavLink>
			</div>
		</GridItem>,
	];
	let isMobile: any = localStorage.getItem("isMobile") ?? "";
	isMobile = isMobile === "true" ? true : false;
	const getGridItems = (option: string) => {
		let currentArray: any[] = [];
		//logic to handle which data to map.... example
		let arrayLength =
			option === "pending"
				? 2 // pending orders length
				: option === "delivered"
				? store?.orders?.length ?? 0 // delivered orders length
				: option === "cancelled"
				? store?.orders?.length ?? 0 // cancelled orders length
				: option === "refunded"
				? store?.orders?.length ?? 0 // refunded orders length
				: store?.orders?.length ?? 0; // processing orders length;

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
			<View
				mode="grid"
				gridItems={gridItem}
				itempergrid={isMobile ? 2 : 4}
				className="dash_grid"
			/>
			<Card className="main" width="100%">
				<Tabs>
					<TabOption
						className="option"
						active={activeTab === "pending"}
						color="#FF9017"
						onClick={() => setActiveTab("pending")}
					>
						Pending
					</TabOption>
					<TabOption
						className="option"
						active={activeTab === "processing"}
						color="#0D6EFD"
						onClick={() => setActiveTab("processing")}
					>
						Processing
					</TabOption>
					<TabOption
						className="option"
						active={activeTab === "delivered"}
						color="#00B517"
						onClick={() => setActiveTab("delivered")}
					>
						Delivered
					</TabOption>
					<TabOption
						className="option"
						active={activeTab === "canceled"}
						color="#FA3434"
						onClick={() => setActiveTab("canceled")}
					>
						Canceled
					</TabOption>
					<TabOption
						className="option"
						active={activeTab === "refunded"}
						color="#505050"
						onClick={() => setActiveTab("refunded")}
					>
						Refunded
					</TabOption>
				</Tabs>
				<TabContent empty={isArrayEmpty()}>
					{isArrayEmpty() ? (
						<>
							<div className="icon">
								<img src={bagHappy} alt="" />
							</div>
							<div className="text">
								<p className="header">No Orders</p>
								<p className="info">You have no {activeTab} orders</p>
							</div>
						</>
					) : (
						<View
							mode="grid"
							gridItems={getGridItems(activeTab)}
							itempergrid={3}
							cardStyle="order-card"
							className="dash_grid_2"
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
