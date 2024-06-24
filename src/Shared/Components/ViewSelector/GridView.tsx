import {
	GridWrapper,
	ProductCard,
	ProductDetails,
	ProductFlex,
} from "./styles.ts";
import { Card, Pagination, ImageCard, Rating, WishCard } from "../index.ts";
import usePagination from "../../Hooks/usePagination.tsx";
import { image34, phone } from "../../../assets/index.tsx";
import { numberWithCommas } from "../../Utils/helperFunctions.ts";
import { useNavigate } from "react-router-dom";

interface IGridProps {
	gap?: string;
	type?: string;
	itempergrid?: any;
	className?: string;
	gridItems?: any[];
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
	if (type === "productGrid") {
		return (
			<>
				<GridWrapper gap={gap} itempergrid={itempergrid} className={className}>
					{gridItems?.map((product, index) => {
						return cardType === "type1" ? (
							<Card
								key={index}
								width="100%"
								hasBoxShadow={true}
								height="200px"
								onHover
								className="card"
								onClick={() => nav(`/product/view/${product.id}`)}
							>
								<ProductCard view="grid">
									<ImageCard
										view="grid"
										className="grid_img"
										src={product ? product?.thumbnail : phone}
									/>

									<ProductDetails view="grid">
										<div className="flex">
											<div className="price">
												<span>
													&#8358;{numberWithCommas(product?.price) || "80, 000"}
												</span>
												<span>
													&#8358;
													{numberWithCommas(product?.discount) || "8, 000"}
												</span>
											</div>
											<WishCard />
										</div>
										<ProductFlex>
											<div>
												<Rating numberOfRates={7.5} />
												<span className="rating">7.5</span>
											</div>
										</ProductFlex>

										<h1>Canon Camera EOS 2000, Black 10x zoom</h1>
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
										<ImageCard view="grid" src={image34} />
									</div>
									<ProductDetails view="grid">
										<div className="flex">
											<div className="price">
												<span>&#8358;32,000</span>
											</div>
										</div>
										<h1>Xiaomi Redmi 8 Original </h1>
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
		);
	}
	return (
		<>
			<GridWrapper
				gap={gap}
				itempergrid={itempergrid}
				className={className}
				type="productGrid"
			>
				{!!gridItems?.length &&
					gridItems?.map((gridItem, index) => {
						return (
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
						);
					})}
			</GridWrapper>
		</>
	);
};

GridView.defaultProps = {
	itempergrid: 4,
};

export default GridView;
