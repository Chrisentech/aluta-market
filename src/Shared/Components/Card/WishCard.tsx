import React, { useState } from "react";
import { WishWrapper } from "./card.styles";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


interface IWishCardProp {
    size?: string;
    boxShadow?: boolean;
    userId?: string;
    productId?: string;
}


const WishCard: React.FC<IWishCardProp> = ({ size, boxShadow }) => {
    const [addToWishList, setAddToWishList] = useState<boolean>(false);

    return (
        <WishWrapper boxShadow={boxShadow} onClick={() => setAddToWishList(!addToWishList)}>
            {!addToWishList ? (
            <AiOutlineHeart color="#FA3434" size={size ? size : '26px'} />
            ) : (
            <AiFillHeart color="#FA3434" size={size ? size : '26px'} />
            )}
        </WishWrapper>
    )
}

export default WishCard;