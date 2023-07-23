import React, { useState } from "react";
import {
  ListWrapper,
  ProductCard,
  ProductImage,
  ProductDetails,
  ProductDescr,
  ProductFlex,
  WishCard,
  ViewButton,
} from "./styles.ts";
import { Card, Pagination, Rating } from "../index.ts";
import { PiDotOutlineFill } from "react-icons/pi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AppColors } from "../../Constants/index.ts";
import { truncateText } from "../../Utils/helperFunctions.ts";
import { phone } from "../../../assets/index.tsx";
import usePagination from "../../Hooks/usePagination.tsx";

const ListView: React.FC<{ gap?: string; type?: string }> = ({ gap, type }) => {
  const [wishList, setWishList] = useState<number[]>([]);
  const { currentPage, goToPage, nextPage, prevPage } = usePagination(3);
  const handleAddtoWishList = (id: number) => {
    if (wishList.includes(id)) {
      setWishList(wishList.filter((el) => el !== id));
    } else {
      setWishList([...wishList, id]);
    }
  };
  console.log(type)
  return (
    <ListWrapper gap={gap}>
      {Array(6)
        .fill("*")
        .map((_, index: number) => {
          return (
            <Card
              key={index}
              width="100%"
              hasBoxShadow={true}
              height="200px"
              onHover
            >
              <ProductCard>
                <ProductImage>
                  <img src={phone} alt="" />
                </ProductImage>
                <ProductDetails>
                  <h1>Canon Camera EOS 2000, Black 10x zoom</h1>
                  <div className="price">
                    <span>&#8358;80,000</span>
                    <span>&#8358;92,000</span>
                  </div>
                  <ProductFlex>
                    <div>
                      <Rating numberOfRates={7.5} />
                      <span className="rating">7.5</span>
                    </div>
                    <div>
                      <PiDotOutlineFill color={AppColors.brandGray} size={16} />
                      <span>154 orders</span>
                    </div>
                  </ProductFlex>
                  <ProductDescr>
                    {truncateText(
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                      200
                    )}
                  </ProductDescr>
                  <ViewButton to="#">View Details</ViewButton>
                </ProductDetails>
                <WishCard>
                  {wishList.includes(index + 1) ? (
                    <AiFillHeart
                      color="#FA3434"
                      size="26px"
                      onClick={() => handleAddtoWishList(index + 1)}
                    />
                  ) : (
                    <AiOutlineHeart
                      color="#FA3434"
                      size="26px"
                      onClick={() => handleAddtoWishList(index + 1)}
                    />
                  )}
                </WishCard>
              </ProductCard>
            </Card>
          );
        })}
      <Pagination
        totalPages={3}
        currentPage={currentPage}
        goToPage={goToPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </ListWrapper>
  );
};

export default ListView;
