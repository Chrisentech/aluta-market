import {
	GridWrapper,
	ProductCard,
	ProductDetails,
	ProductFlex,
} from "./styles.ts";
import { Card, Pagination, ImageCard, Rating, WishCard } from "../index.ts";
import usePagination from "../../Hooks/usePagination.tsx";
import { phone } from "../../../assets/index.tsx";
import calculateRating, {
	numberWithCommas,
	truncateText,
} from "../../Utils/helperFunctions.ts";
import { useNavigate } from "react-router-dom";

interface IGridProps {
	gap?: string;
	type?: string;
	itempergrid?: any;
	className?: string;
	gridItems?: any;
	cardType?: string;
	cardStyle?: string;
	showPagination?: boolean;
	background?: string;
}

const GridView: React.FC<IGridProps> = ({
	gap,
	type,
	itempergrid,
	className,
	gridItems,
	cardType,
	cardStyle,
	showPagination,
	background,
}) => {
	const { currentPage, goToPage, nextPage, prevPage } = usePagination(3);
	const nav = useNavigate();

	return (
		<>
			{type === "productGrid" && (
				<>
					<GridWrapper
						gap={gap}
						itempergrid={itempergrid}
						className={className}
					>
						{gridItems?.map((product: any, index: number) => {
							// Extract individual ratings
							const ratings =
								product?.review?.map((review: any) => review.rating) || [];
							const averageRating = calculateRating(ratings);

							return cardType === "type1" ? (
								<Card
									key={index}
									width="100%"
									hasBoxShadow={false}
									height="200px"
									onHover
									className="card"
									onClick={() => nav(`/product/view/${product.id}`)}
								>
									<ProductCard view="grid" background={background}>
										<ImageCard
											view="grid"
											className="grid_img"
											src={product?.thumbnail || product?.image[0] || phone}
										/>

										<ProductDetails view="grid">
											<div className="flex">
												<div className="price">
													<span>
														&#8358;
														{numberWithCommas(product?.price) || "80,000"}
													</span>
													<span>
														&#8358;
														{numberWithCommas(product?.discount) || "8,000"}
													</span>
												</div>
												<WishCard />
											</div>
											<ProductFlex>
												<div>
													{product?.review?.length >= 2 && (
														<>
															{" "}
															<Rating
																numberOfRates={parseInt(
																	averageRating.toFixed(1)
																)}
															/>
															<span className="rating">
																{parseInt(averageRating.toFixed(1))}
															</span>
														</>
													)}
												</div>
											</ProductFlex>

											<h1>{product?.name}</h1>
										</ProductDetails>
									</ProductCard>
								</Card>
							) : cardType === "type2" ? (
								<Card
									key={index}
									className="card"
									padding={0}
									height={254}
									width={212}
									borderRadius={6}
								>
									<ProductCard view="grid" background={background}>
										<div className="image">
											<ImageCard
												view="grid"
												src={product?.thumbnail ?? "image34"}
											/>
										</div>
										<ProductDetails view="grid">
											<div className="flex">
												<div className="price">
													<span>
														&#8358;
														{numberWithCommas(product?.price) ?? "32,000"}
													</span>
												</div>
											</div>
											<h1>
												{truncateText(product?.name, 40) ??
													"Xiaomi Redmi 8 Original"}
											</h1>
										</ProductDetails>
									</ProductCard>
								</Card>
							) : (
								""
							);
						})}
					</GridWrapper>
					{showPagination && (
						<Pagination
							totalPages={3}
							handlePageSizeChange={() => alert(currentPage)}
							currentPage={currentPage}
							goToPage={goToPage}
							nextPage={nextPage}
							prevPage={prevPage}
						/>
					)}
				</>
			)}
			{type !== "productGrid" && (
				<GridWrapper
					gap={gap}
					itempergrid={itempergrid}
					className={className}
					type="productGrid"
				>
					{!!gridItems?.length &&
						gridItems.map((gridItem: any, index: number) => (
							<Card
								key={index}
								width="100%"
								hasBoxShadow={true}
								height="92px"
								onHover
								className={cardStyle}
							>
								{gridItem}
							</Card>
						))}
				</GridWrapper>
			)}
		</>
	);
};

GridView.defaultProps = {
	itempergrid: 4,
};

export default GridView;
