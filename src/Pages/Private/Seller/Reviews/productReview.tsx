import React from "react";
import { useSelector } from "react-redux";
import { selectStores } from "../../../../Features/store/storeSlice";
import Layout from "../../../../Layouts";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Reviews.styles";
import { Card } from "../../../../Shared/Components";
import { ArrowLeftIcon } from "../../../../assets";
import { BsStarFill } from "react-icons/bs";

const Screen: React.FC = () => {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<Card
				width="100%"
				padding=""
				height="600px"
				borderRadius="20px"
				onHover={false}
				className="card"
			>
				<div className="header">
					<div className="flex">
						<ArrowLeftIcon onClick={() => navigate(-1)} />
						<p>Headset's Customer Review</p>
					</div>
					<div>
						<div className="flex">
							<p>Ratings:</p>
							<p>
								<span>5</span>
								<BsStarFill color="rgba(255, 144, 23, 1)" />
								<span> (12)</span>
							</p>
							<p>
								<span>4</span>
								<BsStarFill color="rgba(255, 144, 23, 1)" />
								<span> (12)</span>
							</p>
							<p>
								<span>3</span>
								<BsStarFill color="rgba(255, 144, 23, 1)" />
								<span> (12)</span>
							</p>
							<p>
								<span>2</span>
								<BsStarFill color="rgba(255, 144, 23, 1)" />
								<span> (12)</span>
							</p>
							<p>
								<span>1</span>
								<BsStarFill color="rgba(255, 144, 23, 1)" />
								<span> (12)</span>
							</p>
						</div>
					</div>
				</div>
				<div className="grid_container">
					{/* good */}
					<div>
						<div className="good"></div>
						<div className="good"></div>
						<div className="good"></div>
					</div>
					{/* fair */}
					<div className="fair"></div>
					{/* bad */}
					<div className="bad"></div>
				</div>
			</Card>
		</Wrapper>
	);
};

const ProductReview = () => {
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

export default ProductReview;
