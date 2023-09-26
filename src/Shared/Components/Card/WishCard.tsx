import React from "react";
import { WishWrapper } from "./card.styles";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


interface IWishCardProp {
    size?: string;
    boxShadow?: boolean;
}


const WishCard: React.FC<IWishCardProp> = ({ size, boxShadow }) => {
    const addToWishList = false;

    return (
        <WishWrapper boxShadow={boxShadow}>
            {!addToWishList ? (
            <AiOutlineHeart color="#FA3434" size={size ? size : '26px'} />
            ) : (
            <AiFillHeart color="#FA3434" size={size ? size : '26px'} />
            )}
        </WishWrapper>
    )
}

export default WishCard;