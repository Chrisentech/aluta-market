import React, { useEffect, useState } from "react";
import Layout from "../../../Layouts";
import {
	Container,
	Empty,
	Page,
	Product,
	ProductCard,
	ProductDescr,
	RightSection,
	ProductDetails,
	InfoCard,
	SectionCard,
	GridProductCard,
	GridProductDetails,
} from "./CartStyles";
import {
	Banner,
	Button,
	Card,
	ImageCard,
	ItemCounter,
	View,
} from "../../../Shared/Components";
import {
	amexpress,
	applepay,
	deliveryTruckGray,
	image34,
	lockGray,
	masterpay,
	messageGray,
	paypal,
	shopGrayScale,
	visa,
} from "../../../assets";
import { CartProduct } from "../../../test-data/data";
import {
	formatCurrency,
	IsInHandledProduct,
} from "../../../Shared/Utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../../Features/cart/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { alertSuccess } from "../../../Features/alert/alertSlice";
import { fetchMe, fetchWishlist } from "../../../Features/user/userSlice";
import { ICartProps } from "../../../Interfaces";
import useUsers from "../../../Features/user/userActions";

const Screen: React.FC = () => {
	const [products, _] = useState<any[]>(CartProduct);
	const costOfDelivery = 2000;
	const discount = 60;
	const tax = 14;
	const { cart, removeAllCart, modifyCart } = useCart();
	const { addToWishlist, getWishlist } = useUsers();
	const me: any = useSelector(fetchMe);
	const wishlist: any = useSelector(fetchWishlist);
	const [cartItems, setCartItems] = useState<ICartProps | null>(cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const totalCartPrice =
		cartItems?.total !== undefined
			? cartItems?.total + costOfDelivery + tax - discount
			: 0;

	const hasProduct: boolean = products.length > 0;
	const [buttonLoader, setButtonLoader] = useState<any>(0);
	const getWishListedProducts = async () => {
		await getWishlist(me?.id);
	};
	useEffect(() => {
		setCartItems(cart);
		getWishListedProducts();
	}, [cart]);
	const handleRemoveFromCart = async (productId: string, quantity: number) => {
		setButtonLoader(productId);
		await modifyCart({ productId, user: me?.id, quantity: -quantity });
		dispatch(alertSuccess("product removed successfully!!"));
		setButtonLoader(0);
	};
	const handleRemoveallCart = async (cartID: string) => {
		setButtonLoader(cartID);
		await removeAllCart(parseInt(cartID, 10), me?.id);
		dispatch(alertSuccess("Cart has been cleared!!"));
		setButtonLoader(0);
	};
	const handleAddSavedLater = async (productId: string, price: string) => {
		setButtonLoader(price);
		await addToWishlist(me?.id, parseInt(productId, 10));
		dispatch(alertSuccess("product added successfully!!"));
		setButtonLoader(0);
	};
	const getGridItems = () => {
		let currentArray: any[] = [];

		//logic to handle which data to map.... example
		wishlist?.map((prod: any, index: number) => {
			currentArray.push(
				<GridProductCard key={index}>
					<div className="image">
						<ImageCard view="grid" src={prod?.productThumbnail} />
					</div>
					<GridProductDetails>
						<div className="flex">
							<div className="price">
								<span>&#8358;{formatCurrency(prod?.productPrice)}</span>
							</div>
						</div>
						<h1>{prod?.productName} </h1>
						<Button
							border="1px solid #DEE2E7"
							background="#FFF"
							width="auto"
							padding={9}
							color="#FF001F"
							className="button"
						>
							<MdOutlineShoppingCart /> Move to Cart
						</Button>
					</GridProductDetails>
				</GridProductCard>
			);
		});
		return currentArray;
	};

	return (
		<Page>
			<Container>
				<h1>
					My Cart{" "}
					<span>
						{cartItems?.items?.length
							? "(" + cartItems?.items?.length + ")"
							: ""}
					</span>
				</h1>
				<div className="new">
					<Product empty={cartItems?.items?.length === 0}>
						{cartItems?.items?.length ? (
							cartItems?.items?.map((item, index) => (
								<Card
									key={index}
									hasBoxShadow={false}
									width="auto"
									height="136px"
									padding="20px 0"
									onHover={false}
									className="card"
								>
									<ProductCard>
										<div className="left-side">
											<div className="image">
												<img src={item?.product?.thumbnail} alt="" />
											</div>
											<ProductDetails>
												<h2>{item?.product?.name}</h2>
												<ProductDescr>
													<div className="text">
														{item?.product?.variants && (
															<p className="Variations">
																Variation: Sizes: M, Color: blue
															</p>
														)}
														<p className="store-name" style={{ fontSize: 12 }}>
															{item?.product?.store}
														</p>
													</div>
													<div className="buttons">
														{cartItems?.items &&
															cartItems?.items?.length > 1 && (
																<Button
																	width={"auto"}
																	padding={10}
																	height={30}
																	borderRadius={6}
																	background="#FA3434"
																	color="#FFF"
																	disabled={
																		buttonLoader ===
																		(item?.product?.id as string)
																	}
																	loading={
																		buttonLoader ===
																		(item?.product?.id as string)
																	}
																	onClick={() =>
																		handleRemoveFromCart(
																			item?.product?.id as string,
																			item?.quantity
																		)
																	}
																>
																	Remove
																</Button>
															)}
														{!IsInHandledProduct(
															item?.product?.name,
															wishlist
														) && (
															<Button
																disabled={buttonLoader === item?.product?.price}
																loading={buttonLoader === item?.product?.price}
																onClick={() =>
																	handleAddSavedLater(
																		item?.product?.id as string,
																		item?.product?.price
																	)
																}
																borderRadius={6}
																background="#FFF"
																border="#DEE2E7 solid 1px"
																color="#0D6EFD"
															>
																Save for later
															</Button>
														)}
													</div>
												</ProductDescr>
											</ProductDetails>
										</div>
										<div className="right-side">
											<p style={{ marginBottom: 10 }}>
												{formatCurrency(
													item?.quantity * Number(item?.product?.price)
												)}
											</p>
											<ItemCounter initialValue={Number(item?.quantity)} />
										</div>
									</ProductCard>
								</Card>
							))
						) : (
							<Empty>
								<div className="icon">
									<img src={shopGrayScale} alt="" />
								</div>
								<div className="text">
									<p className="header">
										<b>Empty Cart</b>
									</p>
									<p className="info">You have no items added</p>
								</div>
								<Button
									border="1px solid #DEE2E7"
									background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
									width="275px"
									padding={9}
									color="#FFF"
									onClick={() => navigate("/")}
								>
									Go to Market
								</Button>
							</Empty>
						)}
						{hasProduct && (
							<footer>
								<Button
									border="1px solid #DEE2E7"
									background="#F7FAFC"
									width="auto"
									padding={9}
									color="#FF001F"
									onClick={() => navigate("/")}
								>
									Back to shop
								</Button>
								{cartItems?.items && cartItems?.items?.length > 0 && (
									<Button
										background="#FA3434"
										color="#fff"
										width="auto"
										disabled={
											cart?.items?.length == 0 ||
											(buttonLoader === cartItems?.id && !!cartItems?.id)
										}
										loading={buttonLoader === cartItems?.id && !!cartItems?.id}
										padding={16}
										onClick={() =>
											handleRemoveallCart(cartItems?.id?.toString() || "0")
										}
									>
										Remove all
									</Button>
								)}
							</footer>
						)}
					</Product>
					{cart?.items && cart?.items?.length > 0 && (
						<RightSection>
							<div className="coupon">
								<p>Have a coupon?</p>
								<form action="" className="form">
									<input type="text" placeholder="Add coupon" />
									<button type="submit">Apply</button>
								</form>
							</div>
							<div className="checkout">
								<p>
									<span className="label">Subtotal:</span>
									<span className="cost">
										{formatCurrency(cartItems?.total)}
									</span>
								</p>
								<p>
									<span className="label">Delivery:</span>
									<span className="cost">{formatCurrency(costOfDelivery)}</span>
								</p>
								<p>
									<span className="label">Discount:</span>
									<span className="cost discount">
										- {formatCurrency(discount)}
									</span>
								</p>
								<p>
									<span className="label">Tax:</span>
									<span className="cost tax">+ {formatCurrency(tax)}</span>
								</p>
								<div className="bottom">
									<p className="total">
										<span>Total:</span>
										<span>{formatCurrency(totalCartPrice)}</span>
									</p>
									<Button
										className="button"
										width="100%"
										height="40px"
										background="#00B517"
										color="#fff"
									>
										Checkout
									</Button>
									<div className="footer">
										<img src={amexpress} />
										<img src={applepay} />
										<img src={masterpay} />
										<img src={paypal} />
										<img src={visa} />
									</div>
								</div>
							</div>
						</RightSection>
					)}
				</div>
				<div className="info-container">
					<InfoCard>
						<div className="img">
							<img src={lockGray} />
						</div>
						<div className="pcontainer">
							<p className="head">Secure payment</p>
							<p className="p">No more sales scam</p>
						</div>
					</InfoCard>
					<InfoCard>
						<img src={messageGray} />
						<div className="pcontainer">
							<p className="head">Customer support</p>
							<p className="p">Speak to us, we are here</p>
						</div>
					</InfoCard>
					<InfoCard>
						<img src={deliveryTruckGray} />
						<div className="pcontainer">
							<p className="head">Fast delivery</p>
							<p className="p">Max of 48 hours delivery </p>
						</div>
					</InfoCard>
				</div>

				<SectionCard>
					<h3 className="title">Saved for later</h3>
					<View
						mode="grid"
						itempergrid={6}
						gridItems={getGridItems()}
						cardStyle="card"
						gap="5px"
						className="view"
					/>
				</SectionCard>
				<div style={{ height: "30px" }}></div>
				<SectionCard>
					<h3 className="title">Recently viewed</h3>
					<View
						mode="grid"
						itempergrid={6}
						gridItems={getGridItems()}
						cardStyle="card"
						gap="5px"
						className="view"
					/>
				</SectionCard>
				<div className="banner-wrapper">
					<Banner />
				</div>
			</Container>
		</Page>
	);
};

const Cart = () => {
	// const { loading } = useSelector((store: any) => store.products);
	const { cart } = useCart();
	return (
		<Layout
			layout={"full"}
			component={Screen}
			isLoading={!cart}
			navMode="noSearch"
		/>
	);
};

export default Cart;
