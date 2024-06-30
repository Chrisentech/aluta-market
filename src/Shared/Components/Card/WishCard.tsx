import React, { useEffect } from "react";
import { WishWrapper } from "./card.styles";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { fetchWishlist } from "../../../Features/user/userSlice";
import useUsers from "../../../Features/user/userActions";

interface IWishCardProp {
	size?: string;
	boxShadow?: boolean;
	userId?: number;
	productId?: number;
}

const WishCard: React.FC<IWishCardProp> = ({
	size,
	boxShadow,
	userId,
	productId,
}) => {
	// const dispatch = useDispatch();
	const { addToWishlist, getWishlist } = useUsers();
	const wishlist = { fetchWishlist };
	const isListed = false;

	const handleAddtoWishList = () => {
		// ...add product
		console.log(userId, productId);

		addToWishlist(userId as number, productId as number);
		// remove product
	};

	useEffect(() => {
		getWishlist(userId as number);
		console.log("wishlist products", wishlist);
	}, [addToWishlist, wishlist]);
	return (
		<WishWrapper boxShadow={boxShadow} onClick={() => handleAddtoWishList()}>
			{!isListed ? (
				<AiOutlineHeart color="#FA3434" size={size ? size : "26px"} />
			) : (
				<AiFillHeart color="#FA3434" size={size ? size : "26px"} />
			)}
		</WishWrapper>
	);
};

export default WishCard;
