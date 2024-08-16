import React, { useEffect } from "react";
import Layout from "../../../../Layouts";
import { GridWrapper, Wrapper } from "./SavedForLater.styles";
import { Button, Card, ImageCard } from "../../../../Shared/Components";
import { noProduct } from "../../../../assets";
import { IoMdCart } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import useUsers from "../../../../Features/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe, fetchWishlist } from "../../../../Features/user/userSlice";
import { numberWithCommas } from "../../../../Shared/Utils/helperFunctions";
import {
	selectActiveModal,
	showModal,
} from "../../../../Features/modal/modalSlice";
import Modal from "./modal";
import useCart from "../../../../Features/cart/cartAction";
import { alertSuccess } from "../../../../Features/alert/alertSlice";

const Screen: React.FC = () => {
	const { getWishlist, wishlists, removeFromWishlist } = useUsers();
	const { modifyCart } = useCart();
	const me: any = useSelector(fetchMe);
	const dispatch = useDispatch();

	// const itemNames = cart?.items
	// 	? new Set(cart?.items.map((item) => item.product?.name))
	// 	: new Set();

	// const filteredProduct = wishlists?.filter(
	// 	(product: any) => !itemNames.has(product.productName)
	// );
	const [btnLoading, setbtnLoading] = React.useState<number | string>(0);
	useEffect(() => {
		const fetchData = async () => {
			await getWishlist(me?.id);
		};
		if (!wishlists) {
			fetchData();
		}
	}, [me]);
	const handleAddToCart = async (id: number, name: string) => {
		setbtnLoading(name);
		await modifyCart({
			productName: name,
			productId: 0,
			quantity: 1,
			user: parseInt(me?.id, 10),
		});
		await removeFromWishlist(id);

		setbtnLoading("");

		dispatch(alertSuccess("product moved to cart successfully!!"));
	};
	const handleRemoveFromWishlist = (id: string) => {
		localStorage.setItem("product_id", id);
		dispatch(showModal("saved-for-later-modal"));
	};
	return (
		<Wrapper>
			<div className="flex">
				<h2>Saved For Later</h2>
			</div>

			<Card className="main" width="100%" height={600}>
				{wishlists?.length > 0 ? (
					<GridWrapper>
						{wishlists?.map((wishlist: any, index: number) => {
							return (
								<div className="container" key={index}>
									<MdOutlineCancel
										className="svg"
										size={24}
										onClick={() => handleRemoveFromWishlist(wishlist.productId)}
									/>
									<div className="img">
										<ImageCard
											src={wishlist.productThumbnail}
											width={"100%"}
											imageHeight="100px"
											className="img-wishlist"
										/>
									</div>

									<p className="title">{wishlist.productName}</p>
									<p className="price">
										N{numberWithCommas(wishlist.productPrice)}
									</p>
									<Button
										loading={
											wishlist.productQuantity === 0 ||
											btnLoading === wishlist.productName
										}
										disabled={
											wishlist.productQuantity === 0 ||
											btnLoading === wishlist.productName
										}
										color="#fff"
										background="#FF9017"
										onClick={() =>
											handleAddToCart(wishlist.productId, wishlist.productName)
										}
									>
										<IoMdCart color="#fff" />
										<span>
											{wishlist.productQuantity === 0
												? "Out of stock"
												: "Move to Cart"}
										</span>
									</Button>
								</div>
							);
						})}
					</GridWrapper>
				) : (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							height: "500px",
							width: "100%",
							padding: "20px",
							textAlign: "center",
							color: "#777",
						}}
					>
						<img src={noProduct} alt="no_product" width={100} />
						<p style={{ marginBottom: 10 }}>You haven't saved any items yet.</p>
						<Button color="#fff" background="#FF9017">
							<span>Start Shopping</span>
						</Button>
					</div>
				)}
			</Card>
		</Wrapper>
	);
};

const SavedForOthers = () => {
	const me = useSelector(fetchMe);
	const wishlists: any = useSelector(fetchWishlist);
	const activeModal = useSelector(selectActiveModal);

	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			showModal={activeModal}
			isLoading={!wishlists || !me}
			popUpContent={<Modal />}
			navMode="noSearch"
		/>
	);
};

export default SavedForOthers;
