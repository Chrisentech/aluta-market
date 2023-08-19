import React from "react";
import { 
  Wrapper,
  Section, 
  NavBar, 
  NavBar2, 
  GridItem, 
  Main,  
} from "./productview.styles";
import Layout from "../../../../Layouts";
import { View, ImageCard, Rating } from "../../../../Shared/Components";
import { cloth } from "../../../../assets/index.tsx";
// Icons
import { IoIosCheckmark} from "react-icons/io";
import {HiOutlineChevronRight, HiOutlineHeart} from "react-icons/hi";
import {HiOutlineBars3} from "react-icons/hi2";
import {RxCaretDown} from "react-icons/rx";
import {BiCommentDetail} from "react-icons/bi";
import {AiTwotoneMinusCircle} from "react-icons/ai";
import {MdOutlineShoppingBasket} from "react-icons/md";
import {TbH3, TbLetterA} from "react-icons/tb"


const gridItem = [
  <GridItem>
    <div className="productImage">
      <ImageCard src={cloth} view="grid" width="50"></ImageCard> 
    </div>
    <div className="productCheck">
      <div style={{color:"#00b517", fontSize:15}}>
        <IoIosCheckmark size="20"/>
        <span>In stock</span>
      </div>
      <div>
        <span className="desc">Men's Short Sleeve T-Shirt Cotton Base Layer Slim Muscle</span>
        <span><HiOutlineHeart style={{color: "#fa3434", float: "right"}} size={30}/></span>
      </div>
      <div style={{color:"#999999", }}>
        <span><Rating numberOfRates={5}/></span>
        <span> 4.3</span>
        <span><AiTwotoneMinusCircle size={8} style={{margin: "2px 10px"}}/></span>
        <span><BiCommentDetail/> 32 reviews</span>
        <span><AiTwotoneMinusCircle size={8} style={{margin: "2px 10px"}}/></span>
        <span><MdOutlineShoppingBasket/> 154 sold</span>
      </div>
      <div className="productPrice">
        <h1>N4,500.00</h1>
        <p><s>N4800</s><span style={{color: "#fa3434"}}> -32%</span></p>
      </div>
      <div className="colors">
        <h4>Colors:</h4>
      </div>
      <div className="size">
        <h4>Size:</h4>
      </div>
      <div style={{margin: "10px 0"}}>
        <button id="button1" type="submit">Buy now</button>
        <button id="button2" type="submit">Add to cart</button>
      </div>

    </div>
    <div className="productInfo">
      <div>
        <div className="sellerIcon">
          <TbLetterA color={"#7dc5c4"} size={30}/> 
        </div>
        <div className="sellerDesc">
          <h3>Seller's Information</h3>
          <p>Arike Collection</p>
        </div>
      </div>
    </div>
  </GridItem>
];

const Screen: React.FC = () => {
  return (
    <Wrapper>
      <NavBar>
        <div className="navbar">
          <ul>
            <li><a href='#'> <HiOutlineBars3 /> All category</a></li>
            <li><a href='#'>Hot offers</a></li>
            <li><a href='#'>Skynet</a></li>
            <li><a href='#'>Aluta Food</a></li>
            <li><a href='#'>Restaurants</a></li>
            <li><a href='#'>Help <RxCaretDown/></a></li>
          </ul>
        </div>
      </NavBar>
      <Section>
        <NavBar2>
          <div className="navbar2">
              <ul>
                <li><a href='#'>Home</a></li>
                <li><HiOutlineChevronRight/></li>
                <li><a href='#'>Clothing</a></li>
                <li><HiOutlineChevronRight/></li>
                <li><a href='#'>Men's wear</a></li>
                <li><HiOutlineChevronRight/></li>
                <li><a href='#'>Summer clothing</a></li>
              </ul>
            </div>
        </NavBar2>
        <View mode="grid" gridItems= {gridItem} itempergrid={1}/>
        <Main>
          <div className="productDesc">
            <span>Description</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Commodi voluptates consequuntur amet quam, et, placeat 
              sapiente dolorum tempore, quas esse eveniet! Odit enim 
              accusamus eveniet suscipit iste voluptatem necessitatibus? 
              Illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Commodi voluptates consequuntur amet quam, et, placeat 
              sapiente dolorum tempore, quas esse eveniet! Odit enim 
              accusamus eveniet suscipit iste voluptatem necessitatibus? 
              Illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Commodi voluptates consequuntur amet quam, et, placeat 
              sapiente dolorum tempore, quas esse eveniet! Odit enim 
              accusamus eveniet suscipit iste voluptatem necessitatibus? 
              Illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Commodi voluptates consequuntur amet quam, et, placeat 
              sapiente dolorum tempore, quas esse eveniet! Odit enim 
              accusamus eveniet suscipit iste voluptatem necessitatibus? 
              Illum.</p>
          </div>
        </Main>
      </Section>
      
    </Wrapper>
  );
};

// const ProductView: React.FC = () => {
//     <Layout component={Screen} />
// };
const ProductView = () => {
  return <Layout layout={"full"} component={Screen} state={false} />;
};

export default ProductView;
