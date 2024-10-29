import React, { useEffect, useState } from "react";
import {
	BackgroundPhoto,
	Container,
	MainSection,
	Page,
	ProductSection,
	SearchTab,
	ShopInfo,
	Top,
} from "./Store.styles";
import Layout from "../../../Layouts";
import { message, noCatalog2, ReportIcon } from "../../../assets";
import { BsSearch } from "react-icons/bs";
import { Button, View } from "../../../Shared/Components";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "../../../Features/store/storeAction";
import {
	generateUniqueId,
	getCapitalizedFirstLetter,
} from "../../../Shared/Utils/helperFunctions";
import { categories } from "../../../test-data";
import useProducts from "../../../Features/products/productActions";
import { ROUTE } from "../../../Shared/Constants";
import { actions } from "../../../Features/store/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../Login/login.styles";
import { motion } from "framer-motion";

import {
	closeModal,
	selectActiveModal,
	showModal,
} from "../../../Features/modal/modalSlice";
import useUsers from "../../../Features/user/userActions";
import { fetchMe } from "../../../Features/user/userSlice";
import { alertError, alertSuccess } from "../../../Features/alert/alertSlice";
import styled from "styled-components";

const MaintenanceMessage = styled(motion.div)`
	text-align: center;
	padding: 20px;
	background-color: #f8d7da;
	color: #721c24;
	border: 1px solid #f5c6cb;
	border-radius: 5px;
	margin: 20px auto;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		width: 100px;
		height: 100px;
		margin-bottom: 20px;
	}
`;

const Screen: React.FC = () => {
	const { id } = useParams();
	const { getStoreByName, sellerStore, updateStore, updateStoreFollowership } =
		useStore();
	const { getProducts, myproducts } = useProducts();
	const { createChat, updateUser } = useUsers();
	const me = useSelector(fetchMe);
	const nav = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState("");
	const userID = me?.UUID || localStorage.getItem("uuid");

	useEffect(() => {
		const fetchStore = async () => {
			try {
				await getStoreByName(id + "/store");
			} catch (error) {
				dispatch(showModal("storeModal"));
				dispatch(actions.setSellerStore({}));
			}
		};
		fetchStore();
		return () => {
			dispatch(closeModal("storeModal"));
		};
	}, [id]);

	useEffect(() => {
		const checkAndSetUUID = async () => {
			let uuid = localStorage.getItem("uuid");
			if (!uuid) {
				uuid = generateUniqueId();
				localStorage.setItem("uuid", uuid);
			}
			if (me && !me?.UUID) {
				await updateUser({ id: me.id.toString(), UUID: uuid });
			}
		};
		checkAndSetUUID();
	}, [me]);

	useEffect(() => {
		const updateStoreReq = async () => {
			if (sellerStore?.id && !sellerStore.visitors.includes(userID)) {
				await updateStore({ id: sellerStore?.id, visitor: userID });
			}
		};
		updateStoreReq();
	}, [userID, sellerStore]);

	useEffect(() => {
		const fetchProducts = async () => {
			await getProducts({ store: sellerStore?.name, limit: 1000, offset: 0 });
		};
		fetchProducts();
	}, [sellerStore]);

	const handleMessage = async () => {
		setLoading("message");
		try {
			const users = [
				{ id: me?.id, name: me?.fullname, avatar: me?.avatar },
				{
					id: sellerStore?.user,
					name: sellerStore?.name,
					avatar: sellerStore?.thumbnail,
				},
			];
			await createChat({ users });
			nav(ROUTE.MESSAGING + "/" + me?.id);
		} catch (error: any) {
			console.log(error.message);
		} finally {
			setLoading("");
		}
	};

	const handleFollowStore = async (action: string) => {
		setLoading("follow");
		if (!me?.id) {
			dispatch(alertError("Please Login First!!"));
			nav(ROUTE.LOGIN);
			return;
		}
		const payload = {
			follower_id: me?.id,
			follower_name: me?.fullname,
			follower_image: me?.avatar,
			store_id: sellerStore?.id,
			action,
		};
		try {
			await updateStoreFollowership(payload);
			dispatch(alertSuccess("Updated successfully"));
		} catch (error: any) {
			console.log(error.message);
		} finally {
			setLoading("");
		}
	};

	if (!sellerStore?.status)
		return (
			<Page>
				<BackgroundPhoto
					background={
						sellerStore?.background ||
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLbvWGTFQh6OGWPfkLx2xBS_OP3oZJzQubA&s"
					}
				/>
				<Container>
					<div className="profile-image">
						{getCapitalizedFirstLetter(sellerStore?.name) || "A"}
					</div>
					<ShopInfo>
						<div className="title">
							<h1>{sellerStore?.name?.toUpperCase()}</h1>
							<p>{sellerStore?.description}</p>
							<div className="buttons">
								<Button
									className="button"
									width={117}
									border="1px solid #FA3434 "
									color="#FA3434"
									disabled={loading === "follow"}
									loading={loading === "follow"}
									onClick={() =>
										handleFollowStore(
											sellerStore?.followers?.some(
												(f: any) => f.follower_id == me?.id
											)
												? "unfollow"
												: "follow"
										)
									}
								>
									{loading === "follow" ? (
										<span>Loading...</span>
									) : sellerStore?.followers?.some(
											(f: any) => f.follower_id == me?.id
									  ) ? (
										"Unfollow"
									) : (
										"Follow"
									)}
								</Button>
								<Button
									className="button"
									width={117}
									disabled={loading === "message"}
									loading={loading === "message"}
									onClick={handleMessage}
								>
									{loading === "message" ? (
										<span>Loading...</span>
									) : (
										<img src={message} />
									)}
									Message
								</Button>
								<Button
									className="button"
									width={117}
									background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
									color="#FFFFFF"
								>
									<ReportIcon />
									Report
								</Button>
							</div>
						</div>
						<div className="contact-info">
							<div className="contact">
								<h2>Contact</h2>
								<p>{sellerStore?.phone}</p>
								<p>{sellerStore?.email}</p>
							</div>
							<div className="address">
								<h2>Address</h2>
								<p>{sellerStore?.address}</p>
							</div>
						</div>
					</ShopInfo>
					<MaintenanceMessage
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4.5V3m0 0a9 9 0 11-9 9h1.5a7.5 7.5 0 107.5-7.5zm0 0a9 9 0 119 9h-1.5a7.5 7.5 0 00-7.5-7.5z"
							/>
						</svg>
						<h2>Store is Currently in Maintenance Mode</h2>
						<p>Please check back later.</p>
					</MaintenanceMessage>
				</Container>
			</Page>
		);

	return (
		<Page>
			<BackgroundPhoto
				background={
					sellerStore?.background ||
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLbvWGTFQh6OGWPfkLx2xBS_OP3oZJzQubA&s"
				}
			/>
			<Container>
				<div className="profile-image">
					{getCapitalizedFirstLetter(sellerStore?.name) || "A"}
				</div>
				<ShopInfo>
					<div className="title">
						<h1>{sellerStore?.name?.toUpperCase()}</h1>
						<p>{sellerStore?.description}</p>
						<div className="buttons">
							<Button
								className="button"
								width={117}
								border="1px solid #FA3434 "
								color="#FA3434"
								disabled={loading === "follow"}
								loading={loading === "follow"}
								onClick={() =>
									handleFollowStore(
										sellerStore?.followers?.some(
											(f: any) => f.follower_id === me?.id
										)
											? "unfollow"
											: "follow"
									)
								}
							>
								{loading === "follow" ? (
									<span>Loading...</span>
								) : sellerStore?.followers?.some(
										(f: any) => f.follower_id === me?.id
								  ) ? (
									"Unfollow"
								) : (
									"Follow"
								)}
							</Button>
							<Button
								className="button"
								width={117}
								disabled={loading === "message"}
								loading={loading === "message"}
								onClick={handleMessage}
							>
								{loading === "message" ? (
									<span>Loading...</span>
								) : (
									<img src={message} />
								)}
								Message
							</Button>
							<Button
								className="button"
								width={117}
								background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
								color="#FFFFFF"
							>
								<ReportIcon />
								Report
							</Button>
						</div>
					</div>
					<div className="contact-info">
						<div className="contact">
							<h2>Contact</h2>
							<p>{sellerStore?.phone}</p>
							<p>{sellerStore?.email}</p>
						</div>
						<div className="address">
							<h2>Address</h2>
							<p>{sellerStore?.address}</p>
						</div>
					</div>
				</ShopInfo>
				<MainSection>
					<Top>
						<SearchTab>
							<BsSearch className="icon" />
							<input
								type="text"
								className="search-input"
								placeholder="Search"
							/>
						</SearchTab>
						<div className="filters">
							<select name="Category">
								<option value="" disabled selected hidden>
									Category
								</option>
								{categories.map((category, i) => (
									<option key={i}>{category.title}</option>
								))}
							</select>
							<select name="sort">
								<option value="" disabled selected hidden>
									Last added
								</option>
							</select>
						</div>
					</Top>
					{myproducts?.length ? (
						<ProductSection>
							<View
								className="view"
								mode="grid"
								gridItems={myproducts}
								itempergrid={7}
								type="productGrid"
								gap="20px"
								showPagination={false}
							/>
						</ProductSection>
					) : (
						<div
							className="no_product"
							onClick={() => nav(ROUTE.SELLER_PRODUCTTYPE)}
						>
							<img src={noCatalog2} alt="" width={100} />
							<h2>No Product</h2>
							<p>This store has no products</p>
							<Button
								className="button"
								width={117}
								background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
								color="#FFFFFF"
								onClick={() => nav(ROUTE.HOME)}
							>
								Go Home
							</Button>
						</div>
					)}
				</MainSection>
			</Container>
		</Page>
	);
};

const LiveView = () => {
	const { sellerStore } = useStore();
	const activeModal = useSelector(selectActiveModal);
	const nav = useNavigate();
	const ModalContent = (
		<Modal>
			<div className="labedl">
				<p style={{ color: "red", fontSize: 18, fontWeight: 700 }}>
					Store does not exist !!
				</p>
				<Button
					className="button"
					width={117}
					onClick={() => nav("/")}
					background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
					color="#FFFFFF"
				>
					Go Home
				</Button>
			</div>
		</Modal>
	);

	return (
		<Layout
			layout={"blank"}
			component={Screen}
			isLoading={!sellerStore}
			showModal={activeModal}
			modalWidth={500}
			popUpContent={ModalContent}
			navMode="noSearch"
		/>
	);
};

export default LiveView;
