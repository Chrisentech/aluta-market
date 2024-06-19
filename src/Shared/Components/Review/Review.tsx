import React from "react";
import {
	Ratings,
	ReviewCard,
	Wrapper,
	CustomerReviews,
	ReviewContainer,
	SummaryBox,
	User,
} from "./Review.styles";
import { Rating } from "..";
import { userPic } from "../../../assets";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import calculateRating from "../../Utils/helperFunctions";

interface IReviewProps {
	width?: number | string;
	data?: any;
}

const Reviews: React.FC<IReviewProps> = ({ width, data }) => {
	const ratings: any = data ? data?.map((review: any) => review.rating) : [];
	// Calculate the average rating
	const averageRating = calculateRating(ratings);
	return (
		<Wrapper width={width}>
			<header>
				<h3>Customers' Reviews</h3>
				<p className="action">
					<BiSolidRightArrowSquare size={18} />
					Read all
				</p>
			</header>
			<ReviewContainer>
				<Ratings>
					<p className="heading">Verified Ratings</p>
					<SummaryBox>
						{averageRating.toFixed(1)}/5
						<div>
							<Rating numberOfRates={parseInt(averageRating.toFixed(1))} />
						</div>
						{data?.length} verified ratings
					</SummaryBox>
					<div className="ratings-wrapper">
						<div className="ratings-box">
							<div className="rates">
								<span>5.0</span>
								<Rating numberOfRates={5} />
							</div>
							<span className="frequency">16</span>
						</div>
						<div className="ratings-box">
							<div className="rates">
								<span>4.0</span>
								<Rating numberOfRates={4} />
							</div>
							<span className="frequency">4</span>
						</div>
						<div className="ratings-box">
							<div className="rates">
								<span>3.0</span>
								<Rating numberOfRates={3} />
							</div>
							<span className="frequency">5</span>
						</div>
						<div className="ratings-box">
							<div className="rates">
								<span>2.0</span>
								<Rating numberOfRates={2} />
							</div>
							<span className="frequency">5</span>
						</div>
						<div className="ratings-box">
							<div className="rates">
								<span>1.0</span>
								<Rating numberOfRates={1} />
							</div>
							<span className="frequency">1</span>
						</div>
					</div>
				</Ratings>
				<CustomerReviews>
					<p className="heading">Customer Review&#40;14&#41;</p>

					{data?.map((rev: any, i: number) => {
						return (
							<ReviewCard key={i}>
								<div>
									<Rating numberOfRates={parseInt(rev.rating)} />
								</div>
								<p className="comment">{rev.message}</p>
								<User>
									<div>
										<img
											src={rev.image}
											alt=""
											width={30}
											// height={50}
											// style={{ borderRadius: "50%" }}
										/>
									</div>
									<div>
										<p className="name">{rev.username}</p>
										<p className="date-posted">12 November 2023</p>
									</div>
								</User>
							</ReviewCard>
						);
					})}
				</CustomerReviews>
			</ReviewContainer>
		</Wrapper>
	);
};

export default Reviews;
