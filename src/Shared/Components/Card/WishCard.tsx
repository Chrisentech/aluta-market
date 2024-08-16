import React, { useEffect, useState } from "react";
import { WishWrapper } from "./card.styles";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import useUsers from "../../../Features/user/userActions";
import { Loader } from "../Button/Button.styles";

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
	const { addToWishlist, wishlists, getWishlist } = useUsers();
	const isListed = false;
	const [loading, setLoading] = useState(false);

	const handleAddtoWishList = async () => {
		setLoading(true);
		try {
			await addToWishlist(userId as number, productId as number);
			// Optionally, you can update the wishlist status here
		} catch (error) {
			console.error("Error adding to wishlist:", error);
		} finally {
			setLoading(false);
			console.log("wishlist products", wishlists);
		}
	};

	useEffect(() => {
		getWishlist(userId as number);
	}, [addToWishlist, loading]);
	return (
		<WishWrapper boxShadow={boxShadow} onClick={() => handleAddtoWishList()}>
			<>
				{loading ? (
					<Loader />
				) : (
					<>
						{!isListed ? (
							<AiOutlineHeart color="#FA3434" size={size ? size : "26px"} />
						) : (
							<AiFillHeart color="#FA3434" size={size ? size : "26px"} />
						)}
					</>
				)}
			</>
		</WishWrapper>
	);
};

export default WishCard;
