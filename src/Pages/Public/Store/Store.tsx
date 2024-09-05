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
import {
	arike,
	message,
	noCatalog2,
	profileAdd,
	ReportIcon,
} from "../../../assets";
import { BsSearch } from "react-icons/bs";
import { Button, View } from "../../../Shared/Components";
import { useNavigate, useParams } from "react-router-dom";
import useStore from "../../../Features/store/storeAction";
import { getCapitalizedFirstLetter } from "../../../Shared/Utils/helperFunctions";
import { categories } from "../../../test-data";
import useProducts from "../../../Features/products/productActions";
import { ROUTE } from "../../../Shared/Constants";

const Screen: React.FC = () => {
	const { id } = useParams();
	const { getStoreByName, mystore } = useStore();
	const { getProducts, myproducts } = useProducts();
	const nav = useNavigate();
	console.log(id);
	useEffect(() => {
		const fetchStore = async () => {
			await getStoreByName(id + "/store");
		};

		fetchStore();
	}, [id]);
	useEffect(() => {
		const fetchProducts = async () => {
			await getProducts({ store: mystore?.name, limit: 1000, offset: 0 });
		};
		fetchProducts();
	}, [mystore]);
	// alert(JSON.stringify(products));
	return (
		<Page>
			<BackgroundPhoto background={mystore ? mystore?.background : arike} />
			<Container>
				<div className="profile-image">
					{getCapitalizedFirstLetter(mystore?.name) || "A"}
				</div>
				<ShopInfo>
					<div className="title">
						<h1>{mystore?.name?.toUpperCase()}</h1>
						<p>{mystore?.description}</p>
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
							<p>{mystore?.phone}</p>
							<p>{mystore?.email}</p>
						</div>
						<div className="address">
							<h2>Address</h2>
							<p>{mystore?.address}</p>
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
								itempergrid={5}
								type="productGrid"
								gap="20px"
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
	const { mystore } = useStore();

	return (
		<Layout
			layout={"blank"}
			component={Screen}
			isLoading={!mystore}
			navMode="noSearch"
		/>
	);
};

export default LiveView;
