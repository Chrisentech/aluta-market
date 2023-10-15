import React, { useState } from "react";
import { 
  CardIcon, Container, 
  DeliveryInfo, Description, 
  InfoCard, OrderDetail, 
  PriceCard, ProductInfo, 
  ProductName, RelatedWrapper, 
  SuggestionsWrapper, 
  Table, TableRow, 
  Variations, Wrapper } from "./productview.styles";
import Layout from "../../../Layouts";
import { BsCheckLg } from 'react-icons/bs'
import { FaXmark } from 'react-icons/fa6'
import { MdOutlineMessage, MdOutlineShoppingBasket } from 'react-icons/md'
import { ProductImages, colorData } from "../../../test-data/data";
import { 
  Breadcrumb, Button, Card, 
  ColorList, ImageCard, 
  ProductCarousel, Rating, 
  Reviews, WishCard } from "../../../Shared/Components";
import { RxDotFilled } from "react-icons/rx";
import { color2, group, rotate3d, square3d } from "../../../assets";
import GridView from "../../../Shared/Components/ViewSelector/GridView";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import ModalContent from "./modals";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../Features/modal/modalSlice";
import { selectActiveModal } from "../../../Features/modal/modalSlice";


const instock = true //to test the reaction if product is in stock
const formatNumber = ( num: number ): string => new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}).format(num);

const DiscountCalc = (
  usualPrice: number, 
  discountPrice: number
): number => {
  return Math.ceil(100 -((discountPrice/usualPrice) * 100))
}
 

const Screen: React.FC = () => {
  const dispatch = useDispatch();

  const breadcrumbs = [
    // should get links and labels dynamically 
    { label: 'Home', link: '/' },
    { label: 'Clothings', link: '/search/Clothings' },
    { label: 'Mens Wear', link: '/search?Clothings/Mens wear' }, 
    { label: 'Summer clothing' }, 
  ];

  return (
    <Wrapper>
      <Container>
        <Breadcrumb items={breadcrumbs}/>
        <OrderDetail>
          <ProductCarousel images={ProductImages}/>
          <ProductInfo instock={instock}>
            {instock ? (
              <p className="product-status"><BsCheckLg /> in stock</p>
            ) : (
              <p className="product-status"><FaXmark /> not in stock</p>
            )}
            <ProductName>
              <div className="heading">
                <h2>Men’s Short Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
                <WishCard size="32px" boxShadow={false} />
              </div>
              <div className="list">
                <div className="average-rate"><Rating numberOfRates={4.3} /> 4.3</div>
                <RxDotFilled size="20px" color="#DBDBDB" /><div className="item"><MdOutlineMessage size="20px" /> 32 reviews</div>
                <RxDotFilled size="20px" color="#DBDBDB" /><div className="item"><MdOutlineShoppingBasket size="20px" /> 154 sold</div>
              </div>
            </ProductName>
            
            <PriceCard>
              <p>{formatNumber(4500.00)}</p>
              <p><span>{formatNumber(4800.00)}</span> <span>-{DiscountCalc(4800, 4500)}%</span></p>
            </PriceCard>
            <Variations>
              <div className="colors">
                <p>Colors:</p>
                <ColorList colors={colorData}/>
              </div>
              <div className="sizes">
                <p>Sizes</p>
                <div>
                  <Button borderRadius={8} padding={20} border="1px solid #DEE2E7" gap={10} height={38} width={71}>S</Button>
                  <Button borderRadius={8} padding={20} border="1px solid #DEE2E7" gap={10} height={38} width={71}>S</Button>
                  <Button borderRadius={8} padding={20} border="1px solid #DEE2E7" gap={10} height={38} width={71}>S</Button>
                  <Button borderRadius={8} padding={20} border="1px solid #DEE2E7" gap={10} height={38} width={71}>S</Button>
                  <Button borderRadius={8} padding={20} border="1px solid #DEE2E7" gap={10} height={38} width={71}>S</Button>
                </div>   
              </div>
            </Variations>
            <div className="buttons">
              <Button color="#fff" background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%);" height={45} width={199} padding={16} gap={10}>Buy Now</Button>
              <Button border="solid 1px #e6e9ed" background="#fff" width={199} height={45} padding={16} gap={10}>Add to Cart</Button>
            </div>
          </ProductInfo>
          <DeliveryInfo>
            <div className="store">
              <InfoCard>
                  <CardIcon><span className="initial">A</span></CardIcon>
                  <div className="card-info">
                    <p className="header">Seller’s Information</p>
                    <p className="store-name">Arike Collections</p>
                  </div>   
              </InfoCard>
              <Button width="100%" height={40} padding={16} gap={10} background="#FF9017" className="button" color="#fff">View Store</Button>
            </div>
            <div className="delivery-details">
              <InfoCard>
                <CardIcon  background="rgba(0, 181, 23, 0.10)">
                  <img src={ group } alt="" />
                </CardIcon>
                <div className="card-info">
                  <p className="header">Home Delivery</p>
                  <p className="fee">Fee: <span>N700</span></p>
                  <p className="detail">
                    Scarlet Hostel, adjacent Yemco Saloon, Education, Fuoye, Oye <span>Delivery within 24 hours</span>
                  </p>
                  <p className="action" onClick={() => dispatch(showModal("changeAddress"))}><BiSolidRightArrowSquare size={18}/> Change Address</p>
                </div>
              </InfoCard>
              <InfoCard>
                <CardIcon background="rgba(13, 110, 253, 0.1)">
                  <img src={ square3d } alt="" />
                </CardIcon>
                <div className="card-info">
                  <p className="header">Pickup Station</p>
                  <p className="fee">Fee: <span>N200</span></p>
                  <p className="detail">
                    Peniel Plaza, opp Fuoye school gate, Oye Ekiti Pickup within 6 hours
                  </p>
                </div>
              </InfoCard>
              <InfoCard>
                <CardIcon background="rgba(255, 144, 23, 0.10)">
                  <img src={ rotate3d } alt="" />
                </CardIcon>
                <div className="card-info">
                  <p className="header">Return Policy</p>
                  <p className="fee">Fee: <span>N700</span></p>
                  <p className="detail">
                    Kindly return any bad or wrong product to our station within 24 hours of delivery for refund.
                  </p>
                  <p className="action"><BiSolidRightArrowSquare size={18}/>Read more</p>
                </div>
              </InfoCard>
            </div>
    
          </DeliveryInfo>
        </OrderDetail>
        <SuggestionsWrapper>
          <h3 className="title">You may like</h3>
          {Array(5).fill(null).map((_, index) => (
            <Card 
              key={index}
              padding={0} 
              className="card" 
              height={80}
              onHover={false}
            >
            <ImageCard width="70px" height="70px" src={color2} padding="10px" className="image"/>
              <div>
                <h3 className="name">Apple Watch Series Space Gray</h3>
                <div className="price">
                  <span>&#8358;80,000</span> -
                  <span> &#8358;92,000</span>
                </div>
              </div>
            </Card>
          ))}
        </SuggestionsWrapper>
        <Description>
          <h3 className="title">Description</h3>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
          <Table>
            <TableRow>
              <div className="column">Model</div>
              <div className="column">#8786867</div>
            </TableRow>
            <TableRow>
              <div className="column">Model</div>
              <div className="column">#8786867</div>
            </TableRow>
            <TableRow>
              <div className="column">Model</div>
              <div className="column">#8786867</div>
            </TableRow>
            <TableRow>
              <div className="column">Model</div>
              <div className="column">#8786867</div>
            </TableRow>
            <TableRow>
              <div className="column">Model</div>
              <div className="column">#8786867</div>
            </TableRow>
          </Table>
        </Description>
        <Reviews />
        <RelatedWrapper>
          <h3 className="title">Related Products</h3>
          <div className="grid-wrapper">
            <GridView gridItems={Array(6).fill(null)} gap="20px" itempergrid={6} type="productGrid" cardType="type2" background="#EEEEEE"  />
          </div>
        </RelatedWrapper>
      </Container>
    </Wrapper>
  );
};

const ProductView: React.FC = () => {
  const activeModal = useSelector(selectActiveModal);
  
  return (
    <Layout
      showModal={activeModal}
      layout="full"
      component={Screen}
      popUpContent={<ModalContent active={activeModal}/>}
      state={false}
    />
  )
};

export default ProductView;
