import React, { useEffect } from "react";
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
import { message, noCatalog2, profileAdd, ReportIcon } from "../../../assets";
import { BsSearch } from "react-icons/bs";
import { Button, View } from "../../../Shared/Components";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "../../../Features/store/storeAction";
import { getCapitalizedFirstLetter } from "../../../Shared/Utils/helperFunctions";
import { categories } from "../../../test-data";
import useProducts from "../../../Features/products/productActions";
import { ROUTE } from "../../../Shared/Constants";
import { actions } from "../../../Features/store/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../Login/login.styles";
import {
	closeModal,
	selectActiveModal,
	showModal,
} from "../../../Features/modal/modalSlice";

const Screen: React.FC = () => {
	const { id } = useParams();
	const { getStoreByName, sellerStore } = useStore();
	const { getProducts, myproducts } = useProducts();
	const nav = useNavigate();
	const dispatch = useDispatch();

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
		const fetchProducts = async () => {
			await getProducts({ store: sellerStore?.name, limit: 1000, offset: 0 });
		};
		fetchProducts();
	}, [sellerStore]);
	// alert(JSON.stringify(products));
	return (
		<Page>
			<BackgroundPhoto
				background={
					sellerStore?.background
						? sellerStore?.background
						: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLbvWGTFQh6OGWPfkLx2xBS_OP3oZJzQubA&s"
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
							>
								<img src={profileAdd} />
								Follow
							</Button>
							<Button
								className="button"
								width={117}
								border="1px solid #FA3434 "
								color="#FA3434"
							>
								<img src={message} />
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
							<BsSearch className="icon">search</BsSearch>
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
								{categories.map((category, i) => {
									return <option key={i}>{category.title}</option>;
								})}
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
