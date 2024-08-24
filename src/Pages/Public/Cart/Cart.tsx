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
	PaymentModal,
} from "../../../Shared/Components";
import {
	amexpress,
	applepay,
	deliveryTruckGray,
	lockGray,
	masterpay,
	messageGray,
	noProduct,
	paypal,
	shopGrayScale,
	visa,
} from "../../../assets";
import { CartProduct } from "../../../test-data/data";
import lodash from "lodash";
import {
	formatCurrency,
	IsInHandledProduct,
} from "../../../Shared/Utils/helperFunctions";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../../Features/cart/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { alertSuccess } from "../../../Features/alert/alertSlice";
import { fetchMe } from "../../../Features/user/userSlice";
import { ICartProps } from "../../../Interfaces";
import useUsers from "../../../Features/user/userActions";
import {
	selectActiveModal,
	showModal,
} from "../../../Features/modal/modalSlice";
import { selectLoadingState } from "../../../Features/loading/loadingSlice";

const Screen: React.FC = () => {
	const [products, _] = useState<any[]>(CartProduct);
	const costOfDelivery = 200;
	const discount = 0;
	const tax = 0;
	const { cart, removeAllCart, modifyCart } = useCart();
	const { addToWishlist, wishlists, getWishlist } = useUsers();
	const me: any = useSelector(fetchMe);
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
		if (!wishlists) {
			getWishListedProducts();
		}
	}, [cart]);
	const handleRemoveFromCart = async (productId: string, quantity: number) => {
		setButtonLoader(productId);
		await modifyCart({ productId, user: me?.id, quantity: -quantity });
		dispatch(alertSuccess("product removed successfully!!"));
		setButtonLoader(0);
	};
	const handleRemoveallCart = async (cartID: string) => {
		setButtonLoader(cartID);
		await removeAllCart(parseInt(cartID, 10));
		dispatch(alertSuccess("Cart has been cleared!!"));
		setButtonLoader(0);
	};
	const handlePaymentModal = () => {
		dispatch(showModal("payment"));
	};
	const handleAddSavedLater = async (
		productId: string,
		price: string,
		quantity: number
	) => {
		setButtonLoader(price);
		await addToWishlist(me?.id, parseInt(productId, 10));
		await modifyCart({ productId, user: me?.id, quantity: -quantity });
		dispatch(alertSuccess("product added successfully!!"));
		setButtonLoader(0);
	};
	const getGridItems = () => {
		let currentArray: any[] = [];

		//logic to handle which data to map.... example
		wishlists?.map((prod: any, index: number) => {
			currentArray.push(
				<GridProductCard key={index}>
					<div className="image">
						<ImageCard view="grid" src={prod?.productThumbnail} />
					</div>
					<GridProductDetails>
						<div className="flex">
							<div className="price">
								<span>{formatCurrency(prod?.productPrice)}</span>
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
															{lodash.capitalize(item?.product?.store)}
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
															wishlists
														) && (
															<Button
																disabled={buttonLoader === item?.product?.price}
																loading={buttonLoader === item?.product?.price}
																onClick={() =>
																	handleAddSavedLater(
																		item?.product?.id as string,
																		item?.product?.price,
																		item?.quantity
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
										onClick={handlePaymentModal}
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
					{wishlists?.length > 0 ? (
						<View
							mode="grid"
							itempergrid={6}
							gridItems={getGridItems()}
							cardStyle="card"
							gap="5px"
							className="view"
						/>
					) : (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								height: "300px",
								width: "100%",
								padding: "20px",
								textAlign: "center",
								color: "#777",
							}}
						>
							<img src={noProduct} alt="no_product" width={100} />
							<p style={{ marginBottom: 10 }}>
								You haven't saved any items yet.
							</p>
							<Button color="#fff" background="#FF9017">
								<span>Start Shopping</span>
							</Button>
						</div>
					)}
				</SectionCard>
				<div style={{ height: "30px" }}></div>
				<SectionCard>
					<h3 className="title">Recently viewed</h3>
					{true ? (
						<View
							mode="grid"
							itempergrid={6}
							gridItems={getGridItems()}
							cardStyle="card"
							gap="5px"
							className="view"
						/>
					) : (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								height: "300px",
								width: "100%",
								padding: "20px",
								textAlign: "center",
								color: "#777",
							}}
						>
							<img src={noProduct} alt="no_product" width={100} />
							<p style={{ marginBottom: 10 }}>
								You haven't no recently viewed items yet.
							</p>
							<Button color="#fff" background="#FF9017">
								<span>Start Shopping</span>
							</Button>
						</div>
					)}
				</SectionCard>
				<div className="banner-wrapper">
					<Banner />
				</div>
			</Container>
		</Page>
	);
};

const Cart = () => {
	const activeModal = useSelector(selectActiveModal);
	const { cart } = useCart();
	const costOfDelivery = 200;
	const discount = 0;
	console.log(cart);
	const payload = {
		...cart,
		total: costOfDelivery + (cart?.total ?? 0 + discount),
	};
	const loading = useSelector(selectLoadingState);
	return (
		<Layout
			layout={"full"}
			component={Screen}
			popUpContent={<PaymentModal data={payload} />}
			showModal={activeModal}
			isLoading={!cart || loading}
			navMode="noSearch"
			modalWidth={560}
		/>
	);
};

export default Cart;
