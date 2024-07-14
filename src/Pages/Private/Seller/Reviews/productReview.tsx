import React from "react";
import { useSelector } from "react-redux";
import { selectStores } from "../../../../Features/store/storeSlice";
import Layout from "../../../../Layouts";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Reviews.styles";
import { Card, Rating } from "../../../../Shared/Components";
import { ArrowLeftIcon, userPic } from "../../../../assets";
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
				className="review_card"
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
					<div style={{ height: "100%" }}>
						<div className="good">
							<h4 className="h">
								<Rating numberOfRates={10} starColor="#00b517" />
								<span style={{ color: "#00b517" }}>5.0</span>
							</h4>
							<p style={{ margin: "15px 0" }}>
								Thank you for the nice product. I am thrilled to get what I
								ordered for truly. The quality is perfect and t’s worth the
								price😍😍
							</p>
							<section
								style={{ display: "flex", alignItems: "center", gap: 10 }}
							>
								<img src={userPic} alt="" width={50} />
								<div>
									<p>John Smith</p>
									<p>12 May,2024</p>
								</div>
							</section>
						</div>
						<div className="good">
							<h4 className="h">
								<Rating numberOfRates={10} starColor="#00b517" />
								<span style={{ color: "#00b517" }}>5.0</span>
							</h4>
							<p style={{ margin: "15px 0" }}>
								Thank you for the nice product. I am thrilled to get what I
								ordered for truly. The quality is perfect and t’s worth the
								price😍😍
							</p>
							<section
								style={{ display: "flex", alignItems: "center", gap: 10 }}
							>
								<img src={userPic} alt="" width={50} />
								<div>
									<p>John Smith</p>
									<p>12 May,2024</p>
								</div>
							</section>
						</div>
						<div className="good">
							<h4 className="h">
								<Rating numberOfRates={10} starColor="#00b517" />
								<span style={{ color: "#00b517" }}>5.0</span>
							</h4>
							<p style={{ margin: "15px 0" }}>
								Thank you for the nice product. I am thrilled to get what I
								ordered for truly. The quality is perfect and t’s worth the
								price😍😍
							</p>
							<section
								style={{ display: "flex", alignItems: "center", gap: 10 }}
							>
								<img src={userPic} alt="" width={50} />
								<div>
									<p>John Smith</p>
									<p>12 May,2024</p>
								</div>
							</section>
						</div>
						<div className="good">
							<h4 className="h">
								<Rating numberOfRates={10} starColor="#00b517" />
								<span style={{ color: "#00b517" }}>5.0</span>
							</h4>
							<p style={{ margin: "15px 0" }}>
								Thank you for the nice product. I am thrilled to get what I
								ordered for truly. The quality is perfect and t’s worth the
								price😍😍
							</p>
							<section
								style={{ display: "flex", alignItems: "center", gap: 10 }}
							>
								<img src={userPic} alt="" width={50} />
								<div>
									<p>John Smith</p>
									<p>12 May,2024</p>
								</div>
							</section>
						</div>
					</div>
					{/* fair */}
					<div style={{ height: "100%" }}>
						<div className="fair">
							<h4 className="h">
								<Rating numberOfRates={6} starColor="rgb(255, 144, 23)" />
								<span style={{ color: "rgb(255, 144, 23)" }}>3.0</span>
							</h4>
							<p style={{ margin: "15px 0" }}>
								Fair enough. Not the best I expect but I can still make do with
								it🙂🙂
							</p>
							<section
								style={{ display: "flex", alignItems: "center", gap: 10 }}
							>
								<img src={userPic} alt="" width={50} />
								<div>
									<p>John Smith</p>
									<p>12 May,2024</p>
								</div>
							</section>
						</div>
					</div>

					{/* bad */}
					<div style={{ height: "100%" }}>
						<div className="bad">
							<h4 className="h">
								<Rating numberOfRates={6} starColor="#fa3434" />
								<span style={{ color: "#fa3434" }}>3.0</span>
							</h4>
							<p style={{ margin: "15px 0" }}>Very poor product. 🤨</p>
							<section
								style={{ display: "flex", alignItems: "center", gap: 10 }}
							>
								<img src={userPic} alt="" width={50} />
								<div>
									<p>John Smith</p>
									<p>12 May,2024</p>
								</div>
							</section>
						</div>
					</div>
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
