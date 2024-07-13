import React from "react";
import Layout from "../../../../Layouts";
import { Button, Card, Rating, View } from "../../../../Shared/Components";
import { GridItem, SearchTab, Wrapper } from "./Reviews.styles";
import { BsSearch } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import { ROUTE } from "../../../../Shared/Constants";
import { Top } from "../../../Public/Store/Store.styles";
import { LockIcon, wristwatch } from "../../../../assets";
import { useSelector } from "react-redux";
import { selectStores } from "../../../../Features/store/storeSlice";
import { truncateText } from "../../../../Shared/Utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../Shared/Constants";

const Screen: React.FC = () => {
	const navigate = useNavigate();
	const gridItems = Array.from({ length: 7 }).map((_, index) => (
		<GridItem key={index}>
			<div className="left">
				<div className="images">
					<img src={wristwatch} alt="Wristwatch" />
				</div>
				<div className="info">
					<h3 className="title">{truncateText("Headset", 50)}</h3>
					<p>
						<LockIcon /> <span>25 Sold</span>
					</p>
					<div style={{ display: "flex", gap: 2, color: "#FF9017" }}>
						<Rating numberOfRates={4.3} />
						<p> 4.3 (58)</p>
					</div>
				</div>
			</div>
			<div className="buttons">
				<span>32 reviews</span>
				<Button
					background="#FF9017"
					color="#fff"
					onClick={() => navigate(ROUTE.SELLER_REVIEWS + "/1")}
				>
					View all
				</Button>
			</div>
		</GridItem>
	));
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
				<View
					className="grid"
					mode="grid"
					itempergrid={2}
					type=""
					background="#F7FAFC"
					gap="15px"
					gridItems={gridItems}
				/>
			</Card>
		</Wrapper>
	);
};

const Reviews = () => {
	const stores = useSelector(selectStores);

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={stores.length === 0}
			navMode="noSearch"
		/>
	);
};

export default Reviews;
