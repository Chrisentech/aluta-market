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
import { truncateText } from "../../Utils/helperFunctions.ts";
import { phone } from "../../../assets/index.tsx";
import usePagination from "../../Hooks/usePagination.tsx";
import { useNavigate } from "react-router-dom";

const ListView: React.FC<{
	gap?: string;
	type?: string;
	className?: string;
}> = ({ gap, type, className }) => {
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
								onClick={() => nav(ROUTE.BUYER_ORDER + `${index}`)}
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

										<StatusBadge status="pending">Pending</StatusBadge>
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
			{Array(6)
				.fill("*")
				.map((_, index: number) => {
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
								<ImageCard view="list" src={phone} />
								<ProductDetails>
									<h1>Canon Camera EOS 2000, Black 10x zoom</h1>
									<div className="price">
										<span>&#8358;80,000</span>
										<span>&#8358;92,000</span>
									</div>
									<ProductFlex>
										<div>
											<Rating numberOfRates={7.5} />
											<span className="rating">7.5</span>
										</div>
										<div>
											<PiDotOutlineFill color={AppColors.brandGray} size={16} />
											<span>154 orders</span>
										</div>
									</ProductFlex>
									<ProductDescr>
										{truncateText(
											"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
											200
										)}
									</ProductDescr>
									<ViewButton to="#">View Details</ViewButton>
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
