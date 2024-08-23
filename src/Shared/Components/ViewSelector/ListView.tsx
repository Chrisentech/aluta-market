import React, { useState } from "react";
import {
	ListWrapper,
	ProductCard,
	ProductDetails,
	ProductDescr,
	ProductFlex,
	WishCard,
	ViewButton,
	StatusBadge,
} from "./styles.ts";
import { Card, ImageCard, Pagination, Rating } from "../index.ts";
import { PiDotOutlineFill } from "react-icons/pi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AppColors, ROUTE } from "../../Constants/index.ts";
import calculateRating, {
	calculateDiscount,
	numberWithCommas,
	truncateText,
} from "../../Utils/helperFunctions.ts";
import { phone } from "../../../assets/index.tsx";
import usePagination from "../../Hooks/usePagination.tsx";
import { useNavigate } from "react-router-dom";
import { capitalize } from "lodash";

const ListView: React.FC<{
	gap?: string;
	type?: string;
	className?: string;
	listItems?: any[];
}> = ({ gap, type, className, listItems }) => {
	const [wishList, setWishList] = useState<number[]>([]);
	const { currentPage, goToPage, nextPage, prevPage } = usePagination(3);
	const nav = useNavigate();
	const handleAddtoWishList = (id: number) => {
		if (wishList.includes(id)) {
			setWishList(wishList.filter((el) => el !== id));
		} else {
			setWishList([...wishList, id]);
		}
	};
	if (type === "order") {
		return (
			<ListWrapper gap={gap} className={className} type={type}>
				{listItems &&
					listItems.map((item: any, index: number) => {
						return (
							<Card
								key={index}
								width="100%"
								hasBoxShadow={true}
								height="139px"
								onHover
								className="card"
								onClick={() =>
									nav(ROUTE.BUYER_ORDER + `${item.uuid}`, { state: item })
								}
							>
								<ProductCard>
									<ImageCard
										className="list"
										view="list"
										src={item?.products[0].thumbnail}
									/>
									<ProductDetails>
										<h1>{item?.products[0].name}</h1>
										<div className="price">
											<span>
												&#8358;{" "}
												{numberWithCommas(
													calculateDiscount(
														item?.products[0]?.price,
														item?.products[0]?.discount
													)
												)}
											</span>
											<span>
												&#8358; {numberWithCommas(item?.products[0].price)}
											</span>
										</div>
										<ProductFlex>
											<div>Order TAM00294 </div>
										</ProductFlex>

										<StatusBadge status={item.status}>
											{capitalize(item.status)}
										</StatusBadge>
										<div className="time">Monday 10-11-2023</div>
									</ProductDetails>
									<div className="detail">View details</div>
								</ProductCard>
							</Card>
						);
					})}
				<Pagination
					totalPages={3}
					currentPage={currentPage}
					goToPage={goToPage}
					nextPage={nextPage}
					prevPage={prevPage}
					handlePageSizeChange={() => alert(currentPage)}
				/>
			</ListWrapper>
		);
	}
	if (type === "review") {
		return (
			<ListWrapper gap={gap} className={className} type={type}>
				{Array(6)
					.fill("*")
					.map((_, index: number) => {
						return (
							<Card
								key={index}
								width="100%"
								hasBoxShadow={true}
								height="139px"
								onHover
								className="card"
								onClick={() => nav(ROUTE.BUYER_PRODUCT_REVIEW + `${index}`)}
							>
								<ProductCard>
									<ImageCard className="list" view="list" src={phone} />
									<ProductDetails>
										<h1>Canon Camera EOS 2000, Black 10x zoom</h1>
										<div className="price">
											<span>&#8358;80,000</span>
											<span>&#8358;92,000</span>
										</div>
										<ProductFlex>
											<div>Order TAM00294</div>
										</ProductFlex>

										<StatusBadge status="delivered">Delivered</StatusBadge>
										<div className="time">Monday 10-11-2023</div>
									</ProductDetails>
									<div className="detail">Rate Product</div>
								</ProductCard>
							</Card>
						);
					})}
				<Pagination
					totalPages={3}
					currentPage={currentPage}
					goToPage={goToPage}
					nextPage={nextPage}
					handlePageSizeChange={() => alert(currentPage)}
					prevPage={prevPage}
				/>
			</ListWrapper>
		);
	}
	return (
		<ListWrapper gap={gap} className={className} type={type}>
			{listItems?.map((product: any, index: number) => {
				const ratings =
					product?.review?.map((review: any) => review.rating) || [];
				const averageRating = calculateRating(ratings);
				return (
					<Card
						key={index}
						width="100%"
						hasBoxShadow={true}
						height="200px"
						onHover
						className="card"
					>
						<ProductCard>
							<ImageCard width="300px" view="list" src={product?.thumbnail} />
							<ProductDetails>
								<h1>{product?.name}</h1>
								<div className="price">
									<span>&#8358;{product?.price}</span>
									<span>&#8358;{product?.discount}</span>
								</div>
								<ProductFlex>
									<div>
										<Rating
											numberOfRates={parseInt(averageRating.toFixed(1))}
										/>
										<span className="rating">
											{parseInt(averageRating.toFixed(1))}
										</span>
									</div>
									<div>
										<PiDotOutlineFill color={AppColors.brandGray} size={16} />
										<span>154 orders</span>
									</div>
								</ProductFlex>
								<ProductDescr>
									{truncateText(product?.description, 200)}
								</ProductDescr>
								<ViewButton to={`/product/view/${product.id}`}>
									View Details
								</ViewButton>
							</ProductDetails>
							<WishCard>
								{wishList.includes(index + 1) ? (
									<AiFillHeart
										color="#FA3434"
										size="26px"
										onClick={() => handleAddtoWishList(index + 1)}
									/>
								) : (
									<AiOutlineHeart
										color="#FA3434"
										size="26px"
										onClick={() => handleAddtoWishList(index + 1)}
									/>
								)}
							</WishCard>
						</ProductCard>
					</Card>
				);
			})}
			<Pagination
				totalPages={3}
				currentPage={currentPage}
				goToPage={goToPage}
				handlePageSizeChange={() => alert(currentPage)}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
		</ListWrapper>
	);
};

export default ListView;
