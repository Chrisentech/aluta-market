import React from "react";
import { Wrapper,Section, NavBar, NavBar2, GridItem, Main,  } from "./productview.styles";
import Layout from "../../../../Layouts";
import { View, ImageCard, Navbar } from "../../../../Shared/Components";
import { cloth } from "../../../../assets/index.tsx";
// Icons
import { IoIosCheckmark} from "react-icons/io";
import {HiOutlineChevronRight} from "react-icons/hi";
import {HiOutlineBars3} from "react-icons/hi2";
import {RxCaretDown} from "react-icons/rx";


const gridItem = [
  <GridItem>
    <div>
      <ImageCard src={cloth} alt="#" width="100" height="100"></ImageCard> 
      <div className="check">
        <IoIosCheckmark color="#00b517" size="45" />
        <span>In stock</span>
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
        <View mode="grid" gridItems= {gridItem}/>
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
