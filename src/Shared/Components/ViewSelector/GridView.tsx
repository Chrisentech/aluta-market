import React, { useState } from "react";
import {
  GridWrapper,
  ProductCard,
  ProductDetails,
  ProductFlex,
  WishCard,
} from "./styles.ts";
import { Card, Pagination, ImageCard, Rating } from "../index.ts";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import usePagination from "../../Hooks/usePagination.tsx";
import { phone } from "../../../assets/index.tsx";

const GridView: React.FC<{
  gap?: string;
  type?: string;
  itempergrid?: any;
  className?:string
  gridItems?: any[];
}> = ({ gap, type, itempergrid, className,gridItems }) => {
  const [addToWishList, _] = useState(false);
  const { currentPage, goToPage, nextPage, prevPage } = usePagination(3);
  if (type === "productGrid") {
    return (
      <>
        <GridWrapper gap={gap} itempergrid={itempergrid} className={className}>
          {Array(6)
            .fill("*")
            .map((_, index) => {
              return (
                <Card
                  key={index}
                  width="100%"
                  hasBoxShadow={true}
                  height="200px"
                  onHover
                  className="card"
                >
                  <ProductCard view="grid">
                    <ImageCard view="grid" src={phone} />

                    <ProductDetails view="grid">
                      <div className="flex">
                        <div className="price">
                          <span>&#8358;80,000</span>
                          <span>&#8358;92,000</span>
                        </div>
                        <WishCard>
                          {!addToWishList ? (
                            <AiOutlineHeart color="#FA3434" size="26px" />
                          ) : (
                            <AiFillHeart color="#FA3434" size="26px" />
                          )}
                        </WishCard>
                      </div>
                      <ProductFlex>
                        <div>
                          <Rating numberOfRates={7.5} />
                          <span className="rating">7.5</span>
                        </div>
                      </ProductFlex>

                      <h1>Canon Camera EOS 2000, Black 10x zoom</h1>
                    </ProductDetails>
                  </ProductCard>
                </Card>
              );
            })}
        </GridWrapper>
        <Pagination
          totalPages={3}
          currentPage={currentPage}
          goToPage={goToPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </>
    );
  }
  return (
    <>
      <GridWrapper
        gap={gap}
        itempergrid={itempergrid}
        className={className}
        type="productGrid"
      >
        {gridItems?.length &&
          gridItems?.map((gridItem, index) => {
            return (
              <Card
                key={index}
                width="100%"
                hasBoxShadow={true}
                height="92px"
                onHover
                className="card"
              >
                {gridItem}
              </Card>
            );
          })}
      </GridWrapper>
    </>
  );
};

GridView.defaultProps = {
  itempergrid: 4,
};

export default GridView;
