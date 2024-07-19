import React from "react";
import { useSelector } from "react-redux";
import { selectStores } from "../../../../Features/store/storeSlice";
import Layout from "../../../../Layouts";
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper } from "./Reviews.styles";
import { Card, Rating } from "../../../../Shared/Components";
import { ArrowLeftIcon } from "../../../../assets";
import { BsStarFill } from "react-icons/bs";

const Screen: React.FC = () => {
	const { state: reviews } = useLocation();

	const navigate = useNavigate();

	const goodReviews = reviews.filter((review: any) => review.rating >= 4);
	const fairReviews = reviews.filter((review: any) => review.rating >= 3);
	const badReviews = reviews.filter((review: any) => review.rating <= 2);
	const nonEmptyArrays = [goodReviews, fairReviews, badReviews].filter(
		(arr) => arr.length > 0
	);
	const repeatCount = nonEmptyArrays.length;
	console.log(reviews.filter(
											(review: any) => Math.round(review.rating) 
										))
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
								<span>
									({
										reviews.filter(
											(review: any) => Math.round(review.rating) === 5
										)?.length
									})
								</span>
							</p>
							<p>
								<span>4</span>
								<BsStarFill color="rgba(255, 144, 23, 1)" />
								<span>
									
									({
										reviews.filter(
											(review: any) => Math.round(review.rating) === 4
										)?.length
									})
								</span>
							</p>
							<p>
								<span>3</span>
								<BsStarFill color="rgba(255, 144, 23, 1)" />
								<span>
									
									({
										reviews.filter(
											(review: any) => Math.round(review.rating) === 3
										)?.length
									})
								</span>
							</p>
							<p>
								<span>2</span>
								<BsStarFill color="rgba(255, 144, 23, 1)" />
								<span>( {
										reviews.filter(
											(review: any) => Math.round(review.rating) === 2
										)?.length
									})</span>
							</p>
							<p>
								<span>1</span>
								<BsStarFill color="rgba(255, 144, 23, 1)" />
								<span> ({
										reviews.filter(
											(review: any) => Math.round(review.rating) === 1
										)?.length
									})</span>
							</p>
						</div>
					</div>
				</div>
				<div
					className="grid_container"
					style={{
						gridTemplateColumns:
							"repeat" + "(" + repeatCount + ", minmax(200px, 1fr))",
					}}
				>
					{/* good */}
					{goodReviews?.length > 0 && (
						<div style={{ height: "100%" }}>
							{goodReviews?.map((review: any, i: number) => {
								return (
									<div className="good" key={i}>
										<h4 className="h">
											<Rating
												numberOfRates={review?.rating * 2}
												starColor="#00b517"
											/>
											<span style={{ color: "#00b517" }}>{review?.rating}</span>
										</h4>
										<p style={{ margin: "15px 0" }}>{review?.message}</p>
										<section
											style={{ display: "flex", alignItems: "center", gap: 10 }}
										>
											<img
												src={review?.image}
												alt=""
												width={50}
												height={50}
												style={{ borderRadius: "50%", objectFit: "cover" }}
											/>
											<div>
												<p>{review?.username}</p>
												<p>12 May,2024</p>
											</div>
										</section>
									</div>
								);
							})}
						</div>
					)}
					{/* fair */}
					{fairReviews?.length > 0 && (
						<div style={{ height: "100%" }}>
							{fairReviews?.map((review: any, i: number) => {
								return (
									<div className="fair" key={i}>
										<h4 className="h">
											<Rating
												numberOfRates={review?.rating * 2}
												starColor="rgb(255, 144, 23)"
											/>
											<span style={{ color: "rgb(255, 144, 23)" }}>
												{review?.rating}
											</span>
										</h4>
										<p style={{ margin: "15px 0" }}>{review?.message}</p>
										<section
											style={{ display: "flex", alignItems: "center", gap: 10 }}
										>
											<img
												src={review?.image}
												alt=""
												width={50}
												height={50}
												style={{ borderRadius: "50%", objectFit: "cover" }}
											/>
											<div>
												<p>{review?.username}</p>
												<p>12 May,2024</p>
											</div>
										</section>
									</div>
								);
							})}
						</div>
					)}

					{/* bad */}
					{badReviews?.length > 0 && (
						<div style={{ height: "100%" }}>
							{badReviews?.map((review: any, i: number) => {
								return (
									<div className="fair" key={i}>
										<h4 className="h">
											<Rating
												numberOfRates={review?.rating * 2}
												starColor="#fa3434"
											/>
											<span style={{ color: "#fa3434" }}>{review?.rating}</span>
										</h4>
										<p style={{ margin: "15px 0" }}>{review?.message}</p>
										<section
											style={{ display: "flex", alignItems: "center", gap: 10 }}
										>
											<img
												src={review?.image}
												alt=""
												width={50}
												height={50}
												style={{ borderRadius: "50%", objectFit: "cover" }}
											/>
											<div>
												<p>{review?.username}</p>
												<p>12 May,2024</p>
											</div>
										</section>
									</div>
								);
							})}
						</div>
					)}
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
