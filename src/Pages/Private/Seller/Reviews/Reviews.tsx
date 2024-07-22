import React, { useEffect } from "react";
import Layout from "../../../../Layouts";
import {
	Button,
	Card,
	LogoutModal,
	Rating,
	View,
} from "../../../../Shared/Components";
import { GridItem, SearchTab, Wrapper } from "./Reviews.styles";
import { BsSearch } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import { ROUTE } from "../../../../Shared/Constants";
import { Top } from "../../../Public/Store/Store.styles";
import { bagHappy, LockIcon } from "../../../../assets";
import { useSelector } from "react-redux";
import {
	selectStore,
	selectStores,
} from "../../../../Features/store/storeSlice";
import { truncateText } from "../../../../Shared/Utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../Shared/Constants";
import useProducts from "../../../../Features/products/productActions";
import { selectActiveModal } from "../../../../Features/modal/modalSlice";
export const sumTotalRating = (arr: any) => {
	return (arr?.reduce((a: number, b: any) => a + b?.rating, 0) / 10).toFixed(1);
};
const Screen: React.FC = () => {
	const navigate = useNavigate();
	const store = useSelector(selectStore);

	const { getProducts, myproducts } = useProducts();
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				if (store) {
					await getProducts({
						store: store.name,
						limit: 1000,
						offset: 0,
					});
				}
			} catch (error: any) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, [store]);

	const getReviewedProducts = () => {
		return myproducts?.filter((item: any) => item.review);
	};

	const gridItems = getReviewedProducts()?.map(
		(product: any, index: number) => (
			<GridItem key={index}>
				<div className="left">
					<div className="images">
						<img src={product?.thumbnail} alt="product_image" />
					</div>
					<div className="info">
						<h3 className="title">{truncateText(product?.name, 50)}</h3>
						<p>
							<LockIcon /> <span>25 Sold</span>
						</p>
						<div
							style={{
								display: "flex",
								gap: 2,
								color: "#FF9017",
								marginTop: 10,
							}}
						>
							<Rating
								numberOfRates={parseInt(sumTotalRating(product?.review))}
							/>
							<p> {sumTotalRating(product?.review)} (18)</p>
						</div>
					</div>
				</div>
				<div className="buttons">
					<span>{product?.review?.length} review(s)</span>
					<Button
						background="#FF9017"
						color="#fff"
						onClick={() =>
							navigate(ROUTE.SELLER_REVIEWS + "/1", { state: product.review })
						}
					>
						View all
					</Button>
				</div>
			</GridItem>
		)
	);
	return (
		<Wrapper>
			<h2>Product Reviews</h2>
			<Card
				width="100%"
				padding=""
				height="500px"
				borderRadius="20px"
				onHover={false}
				className="card"
			>
				<Top>
					<SearchTab>
						<BsSearch className="icon">search</BsSearch>
						<input type="text" className="search-input" placeholder="Search" />
					</SearchTab>
					<div className="filters">
						<select name="Category">
							<option value="" disabled selected hidden>
								Category
							</option>
							<option value="Accessories">Asccessories</option>
							<option value="Clothing">Clothing</option>
							<option value="Food">Food</option>
						</select>
						<select name="sort">
							<option value="" disabled selected hidden>
								Last added
							</option>
						</select>
					</div>
				</Top>
				{getReviewedProducts()?.length ? (
					<View
						className="grid"
						mode="grid"
						itempergrid={2}
						type=""
						background="#F7FAFC"
						gap="15px"
						gridItems={gridItems}
					/>
				) : (
					<>
						<div className="icon">
							<img src={bagHappy} alt="" />
							<div className="text">
								<p className="">No Review</p>
								<p className="info">You have no reviewed orders</p>
							</div>
						</div>
					</>
				)}
			</Card>
		</Wrapper>
	);
};

const Reviews = () => {
	const stores = useSelector(selectStores);
	const activeModal = useSelector(selectActiveModal);

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={stores.length === 0}
			navMode="noSearch"
			showModal={activeModal}
			popUpContent={<LogoutModal />}
		/>
	);
};

export default Reviews;
