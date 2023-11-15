import { useEffect, Fragment } from "react";
import { Card, SkeletonLoader } from "../";
import { IProductGridProps } from "../../../Interfaces";
import { Container } from "./ProductGrid.styles";
import useProducts from "../../../Features/products/productActions";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../Features/products/productSlice";
import { numberWithCommas, truncateText } from "../../Utils/helperFunctions";

const ProductGrid: React.FC<IProductGridProps> = ({
	column,
	row,
	cardWidth,
	cardHeight,
	image,
	alt,
	background,
	children,
}) => {
	const { getProducts } = useProducts();
	const products = useSelector(selectProducts);

	useEffect(() => {
		// Fetch products when the component mounts
		getProducts({ store: "", limit: 12, offset: 0 });
	}, [getProducts]);
	return (
		<Container column={column} row={row} background={background}>
			{(products?.length > 0
				? products
				: Array.from({ length: 12 }).fill(null)
			).map((prd: any, index) => (
				<Fragment key={index}>
					{products?.length > 0 ? (
						<Card width={cardWidth} height={cardHeight} className="card">
							<div className="image">
								<img src={prd?.thumbnail} alt={alt} width={"100%"} />
							</div>
							<div className="detail">
								<p className="price">NGN {numberWithCommas(prd?.price)}</p>
								<p className="name">{truncateText(prd?.name,60)}</p>
							</div>
						</Card>
					) : (
						<SkeletonLoader key={index} width="96%" />
					)}
				</Fragment>
			))}
		</Container>
	);

};

ProductGrid.defaultProps = {
	column: 6,
	row: 1,
	cardWidth: "unset",
	cardHeight: 270,
	background: "white",
	alt: "product image",
};

export default ProductGrid;
