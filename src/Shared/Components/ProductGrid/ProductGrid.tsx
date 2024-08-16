import { useEffect } from "react";
import { Card, SkeletonLoader } from "../";
import { IProductGridProps } from "../../../Interfaces";
import { Container } from "./ProductGrid.styles";
import useProducts from "../../../Features/products/productActions";
import { numberWithCommas, truncateText } from "../../Utils/helperFunctions";
import { useNavigate } from "react-router-dom";

const ProductGrid: React.FC<IProductGridProps> = ({
	column,
	row,
	cardWidth,
	cardHeight,
	isMobile,
	alt,
	data,
	background,
}) => {
	const { getProducts } = useProducts();
	const nav = useNavigate();

	useEffect(() => {
		// Fetch products when the component mounts
		getProducts({ store: "", limit: 12, offset: 0 });
	}, [getProducts]);

	const renderProducts = (productList: any[]) => {
		return productList.slice(0, 12).map((prd) => (
			<Card
				key={prd.id}
				width={cardWidth}
				height={cardHeight}
				className="card"
				onClick={() => nav(`/product/view/${prd.id}`)}
			>
				<div className="image">
					<img src={prd.thumbnail} alt={alt} width={"100%"} />
				</div>
				<div className="detail">
					<p className="price">NGN {numberWithCommas(prd.price)}</p>
					<p className="name">{truncateText(prd.name, 30)}</p>
				</div>
			</Card>
		));
	};

	const renderSkeletons = () => {
		return Array.from({ length: isMobile ? 4 : 12 }).map((_, index) => (
			<SkeletonLoader key={index} width="96%" className={"ad"} />
		));
	};

	const productData = data;
	const hasProducts = productData && productData.length > 0;

	return (
		<Container column={column} row={row} background={background}>
			{hasProducts ? renderProducts(productData) : renderSkeletons()}
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
