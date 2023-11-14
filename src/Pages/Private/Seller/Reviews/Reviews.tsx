import React from "react";
import Layout from "../../../../Layouts";
import { Button, Card, View } from "../../../../Shared/Components";
import { GridItem, SearchTab, Wrapper } from "./Reviews.styles";
import {
  BsFillArrowRightSquareFill,
  BsFillCreditCard2BackFill,
  BsSearch,
} from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { TbClockHeart } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../Shared/Constants";
import { Top } from "../../../Public/Store/Store.styles";
import { wristwatch } from "../../../../assets";

const Screen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h2>Product Reviews</h2>
      <Card
        width="100%"
        padding=""
        height="500px"
        borderRadius="20px"
        onHover={false}
        className="card"
      >
        <Top>
            <SearchTab>
                <BsSearch className="icon">search</BsSearch>
                <input type="text" className="search-input" placeholder="Search" />
            </SearchTab>
            <div className="filters">
                <select name="Category">
                    <option value="" disabled selected hidden >Category</option>
                    <option value="Accessories">Asccessories</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Food">Food</option>
                </select>
                <select name="sort">
                    <option value="" disabled selected hidden >Last added</option>
                </select>
            </div>
        </Top>
        <View
          className="grid"
          mode="grid"
          itempergrid={2}
          type=""
          gap="15px"
          gridItems={[
            <GridItem>
              <div className="left">
                <div className="images">
                  <img src={wristwatch} alt="" />
                </div>
                <div className="info">
                  <h3 className="title">Easy Payment Options</h3>
                  Give your customers multiple ways to pay you - with transfers,
                  cards, ussd & even split payments
                </div>
              </div>
              <div className="buttons">
                <span>32 reviews</span>
                <Button>
                  View all
                </Button>
              </div>
            </GridItem>
          ]}
        />
      </Card>
    </Wrapper>
  );
};

const Reviews = () => {
  return <Layout layout={"dashboard"} component={Screen} state={false} />;
};

export default Reviews;
