import React, { useEffect, useState } from "react";
import {
	CardIcon,
	Container,
	DeliveryInfo,
	Description,
	DiscountBanner,
	InfoCard,
	OrderDetail,
	PriceCard,
	ProductInfo,
	ProductName,
	RelatedWrapper,
	SuggestionsWrapper,
	// Table,
	// TableRow,
	Variations,
	Wrapper,
} from "./productview.styles";
import Layout from "../../../Layouts";
import { BsCheckLg } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineMessage, MdOutlineShoppingBasket } from "react-icons/md";
import { colorData } from "../../../test-data/data";
import {
	// Breadcrumb,
	Button,
	Card,
	ColorList,
	ImageCard,
	ProductCarousel,
	Rating,
	Reviews,
	SkeletonLoader,
	WishCard,
} from "../../../Shared/Components";
import { RxDotFilled } from "react-icons/rx";
import { color2, group, rotate3d, square3d } from "../../../assets";
import GridView from "../../../Shared/Components/ViewSelector/GridView";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import ModalContent from "./modals";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../Features/modal/modalSlice";
import { selectActiveModal } from "../../../Features/modal/modalSlice";
import useProducts from "../../../Features/products/productActions";
import calculateRating, {
	calculateDiscount,
	formatCurrency,
	IsInCart,
} from "../../../Shared/Utils/helperFunctions";
import { RootState } from "../../../store";
import { useNavigate, useParams } from "react-router-dom";
import {
	setLoading,
	setNotLoading,
} from "../../../Features/loading/loadingSlice";
import useStore from "../../../Features/store/storeAction";
import useCart from "../../../Features/cart/cartAction";
import { fetchMe } from "../../../Features/user/userSlice";
import { alertSuccess } from "../../../Features/alert/alertSlice";
import { selectCart } from "../../../Features/cart/cartSlice";
import { searchedProducts } from "../../../Features/products/productSlice";

const Screen: React.FC = () => {
	const { id: product_id } = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const { product, products, getProduct, getSearchProducts, getProducts } =
		useProducts();
	const { getStoreByName, mystore } = useStore();
	const navigate = useNavigate();
	const searchedPrds = useSelector(searchedProducts);
	const me: any = useSelector(fetchMe);
	const { modifyCart } = useCart();
	const userId = me?.id || localStorage.getItem("usr_temp_id") || "0";
	const [loading, setbtnLoading] = useState(false);
	const cart = useSelector(selectCart);
	const filteredProducts =
		searchedPrds?.filter((prd) => prd.id != product_id) || [];

	const handleAddToCart = async () => {
		setbtnLoading(true);
		await modifyCart({
			productId: product_id as string,
			quantity: 1,
			user: parseInt(userId, 10),
		});
		setbtnLoading(false);

		dispatch(alertSuccess("product added to cart successfully!!"));
	};
	const ratings: any = product
		? product?.review?.map((review: any) => review.rating)
		: [];
	// Calculate the average rating
	const averageRating = calculateRating(ratings);

	useEffect(() => {
		const fetchData = async () => {
			dispatch(setLoading());
			try {
				await getProduct(product_id);

				dispatch(setNotLoading());
			} catch (error) {
				console.error("Error fetching product:", error);
				dispatch(setNotLoading());
			}
		};

		fetchData();
	}, [product_id]);

	useEffect(() => {
		const fetchStoreAndProducts = async () => {
			if (product?.store) {
				dispatch(setLoading());
				try {
					await getStoreByName(product.store);
					await getProducts({
						store: product.store,
						type: "desc",
						limit: 5,
						offset: 0,
					});
				} catch (error) {
					console.error("Error fetching store and products:", error);
				} finally {
					dispatch(setNotLoading());
				}
			}
		};

		fetchStoreAndProducts();
	}, [product?.store]);
	useEffect(() => {
		const fetchData = async () => {
			let query = product?.category;
			await getSearchProducts(query);
			// alert("dones");
		};
		fetchData();
	}, [product]);
	return (
		<Wrapper>
			<Container>
				<OrderDetail>
					<ProductCarousel
						images={product?.image}
						thumbnail={
							product?.thumbnail || (product?.image && product.image[0]) || ""
						}
					/>
					<ProductInfo instock={product?.status}>
						{product?.status ? (
							<p className="product-status">
								<BsCheckLg /> in stock
							</p>
						) : (
							<p className="product-status red">
								<FaXmark /> out of stock
							</p>
						)}
						<ProductName>
							<div className="heading">
								<h2>{product?.name}</h2>
								<WishCard
									size="32px"
									boxShadow={false}
									userId={7}
									productId={1}
								/>
							</div>
							<div className="list">
								<div className="average-rate">
									<Rating numberOfRates={parseInt(averageRating.toFixed(1))} />{" "}
									{averageRating.toFixed(1)}
								</div>
								<RxDotFilled size="20px" color="#DBDBDB" />
								<div className="item">
									<MdOutlineMessage size="20px" /> {product?.review?.length}{" "}
									reviews
								</div>
								<RxDotFilled size="20px" color="#DBDBDB" />
								<div className="item">
									<MdOutlineShoppingBasket size="20px" /> 154 sold
								</div>
							</div>
						</ProductName>

						<PriceCard>
							<p>{formatCurrency(product?.price as number)}</p>
							{product?.discount !== 0 && (
								<p>
									<span>{formatCurrency(product?.price)}</span>{" "}
									<span>
										-
										{formatCurrency(
											calculateDiscount(
												product?.price as number,
												product?.discount as number
											)
										)}
										%
									</span>
								</p>
							)}
						</PriceCard>
						{product?.variants && (
							<Variations>
								<div className="colors">
									<p>Colors:</p>
									<ColorList colors={colorData} />
								</div>
								<div className="sizes">
									<p>Sizes</p>
									<div>
										<Button
											borderRadius={8}
											padding={20}
											border="1px solid #DEE2E7"
											gap={10}
											height={38}
											width={71}
										>
											S
										</Button>
										<Button
											borderRadius={8}
											padding={20}
											border="1px solid #DEE2E7"
											gap={10}
											height={38}
											width={71}
										>
											S
										</Button>
										<Button
											borderRadius={8}
											padding={20}
											border="1px solid #DEE2E7"
											gap={10}
											height={38}
											width={71}
										>
											S
										</Button>
										<Button
											borderRadius={8}
											padding={20}
											border="1px solid #DEE2E7"
											gap={10}
											height={38}
											width={71}
										>
											S
										</Button>
										<Button
											borderRadius={8}
											padding={20}
											border="1px solid #DEE2E7"
											gap={10}
											height={38}
											width={71}
										>
											S
										</Button>
									</div>
								</div>
							</Variations>
						)}
						<div className="buttons">
							<Button
								color="#fff"
								background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%);"
								height={49}
								width="100%"
								padding={16}
								disabled={loading || IsInCart(product_id, cart?.items)}
								loading={loading}
								gap={10}
								onClick={() => handleAddToCart()}
							>
								Add to cart
							</Button>
						</div>
					</ProductInfo>
					<DeliveryInfo>
						<div className="store">
							<InfoCard>
								<CardIcon>
									<span className="initial">A</span>
								</CardIcon>
								<div className="card-info">
									<p className="header">Seller’s Information</p>
									<p className="store-name">{mystore?.name?.toUpperCase()}</p>
								</div>
							</InfoCard>
							<Button
								width="100%"
								height={40}
								padding={16}
								gap={10}
								background="#FF9017"
								className="button"
								color="#fff"
								onClick={() => navigate(mystore?.link)}
							>
								View Store
							</Button>
						</div>
						<div className="delivery-details">
							<InfoCard>
								<CardIcon background="rgba(0, 181, 23, 0.10)">
									<img src={group} alt="" />
								</CardIcon>
								<div className="card-info">
									<p className="header">Home Delivery</p>
									<p className="fee">
										Fee: <span>N700</span>
									</p>
									<p className="detail">
										Scarlet Hostel, adjacent Yemco Saloon, Education, Fuoye, Oye{" "}
										<span>Delivery within 24 hours</span>
									</p>
									<p
										className="action"
										onClick={() => dispatch(showModal("changeAddress"))}
									>
										<BiSolidRightArrowSquare size={18} /> Change Address
									</p>
								</div>
							</InfoCard>
							<InfoCard>
								<CardIcon background="rgba(13, 110, 253, 0.1)">
									<img src={square3d} alt="" />
								</CardIcon>
								<div className="card-info">
									<p className="header">Pickup Station</p>
									<p className="fee">
										Fee: <span>N200</span>
									</p>
									<p className="detail">
										Peniel Plaza, opp Fuoye school gate, Oye Ekiti Pickup within
										6 hours
									</p>
								</div>
							</InfoCard>
							<InfoCard>
								<CardIcon background="rgba(255, 144, 23, 0.10)">
									<img src={rotate3d} alt="" />
								</CardIcon>
								<div className="card-info">
									<p className="header">Return Policy</p>
									<p className="fee">
										Fee: <span>N700</span>
									</p>
									<p className="detail">
										Kindly return any bad or wrong product to our station within
										24 hours of delivery for refund.
									</p>
									<p className="action">
										<BiSolidRightArrowSquare size={18} />
										Read more
									</p>
								</div>
							</InfoCard>
						</div>
					</DeliveryInfo>
				</OrderDetail>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "70% 30%",
						gap: 20,
						marginBottom: 30,
					}}
					className="lol-order"
				>
					<div>
						<Description>
							<h3 className="title">Description</h3>
							<div
								className="description"
								dangerouslySetInnerHTML={{ __html: product?.description ?? "" }}
							/>
						</Description>
						{filteredProducts?.length > 0 && (
							<RelatedWrapper style={{ marginTop: 15 }}>
								<h3 className="title">Related Products</h3>
								<div className="grid-wrapper">
									<GridView
										gridItems={filteredProducts}
										gap="20px"
										itempergrid={8}
										type="productGrid"
										cardType="type2"
										background="#EEEEEE"
									/>
								</div>
							</RelatedWrapper>
						)}
					</div>
					<SuggestionsWrapper>
						<h3 className="title">You may like these from same seller</h3>
						{products ? (
							products?.map((product, index) => (
								<Card
									key={index}
									padding={0}
									className="card"
									height={80}
									onHover={false}
									width={"100%"}
								>
									<ImageCard
										width="70px"
										height="70px"
										src={
											product?.thumbnail ||
											(product?.image && product?.image[0]) ||
											color2
										}
										padding="10px"
										className="image"
									/>
									<div>
										<h3 className="name">{product?.name}</h3>
										<div className="price">
											<span>&#8358;80,000</span> -<span> &#8358;92,000</span>
										</div>
									</div>
								</Card>
							))
						) : (
							<SkeletonLoader width="96%" className={"ad"} />
						)}
					</SuggestionsWrapper>
				</div>
				{product?.review && <Reviews width={"100%"} data={product?.review} />}

				<DiscountBanner>
					<div>
						<p>Super discount on more than N1000</p>
						<small>Have you ever finally just lorem ipsum</small>
					</div>
					<Button
						width="120px"
						height={40}
						padding={16}
						gap={10}
						background="#FF9017"
						color="#fff"
					>
						Shop now
					</Button>
				</DiscountBanner>
			</Container>
		</Wrapper>
	);
};

const ProductView: React.FC = () => {
	const activeModal = useSelector(selectActiveModal);
	const isLoading = useSelector((state: RootState) => state.loading.isLoading);
	const { product } = useProducts();

	return (
		<Layout
			showModal={activeModal}
			layout="full"
			component={Screen}
			popUpContent={<ModalContent active={activeModal} />}
			isLoading={isLoading || !product}
			modalWidth={560}
			modalPadding={10}
		/>
	);
};

export default ProductView;
