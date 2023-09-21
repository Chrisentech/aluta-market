import React from "react";
import { CardIcon, Container, DeliveryInfo, Description, InfoCard, OrderDetail, PriceCard, ProductInfo, Table, TableRow, Wrapper } from "./productview.styles";
import Layout from "../../../../Layouts";
import { BsCheckLg } from 'react-icons/bs'
import { FaXmark } from 'react-icons/fa6'
import { ProductImages } from "../../../../test-data/data";
import { Breadcrumb, Button, ProductCarousel, Rating } from "../../../../Shared/Components";


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
              <p><BsCheckLg /> in stock</p>
            ) : (
              <p><FaXmark /> not in stock</p>
            )}
            <div>
              <h2>Men’s Short Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
              //wishlistcard
            </div>
            <div>
              <Rating numberOfRates={4.3} />
              <span> 32 reviws</span>
              <span> 154 sold</span>
            </div>
            <PriceCard>
              <p>{formatNumber(4500.00)}</p>
              <p>{formatNumber(4800.00)} <span>-{DiscountCalc(4800, 4500)}%</span></p>
            </PriceCard>
            <div className="buttons">
              <Button color="#fff" background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%);" height={45} width={199} padding={16} gap={10}>Buy Now</Button>
              <Button border="solid 1px #e6e9ed" background="#fff" width={199} height={45} padding={16} gap={10}>Add to Cart</Button>
            </div>
          </ProductInfo>
          <DeliveryInfo>
            <div className="store">
              <InfoCard>
                  <CardIcon background="">
                  </CardIcon>
                  <div className="card-info">
                    <p className="header"></p>
                    <p className="store-name"></p>
                  </div>   
              </InfoCard>
              <Button width={248} height={40} padding={16} gap={10} background="#FF9017" className="button" color="#fff">View Store</Button>
            </div>
            <div className="delivery-details">
              <InfoCard>
                <CardIcon>
                </CardIcon>
                <div className="card-info">
                  <p className="header"></p>
                  <p className="fee">Fee: <span>N700</span></p>
                  <p className="detail">
                    Scarlet Hostel, adjacent Yemco Saloon, Education, Fuoye, Oye Delivery within 24 hours
                  </p>
                </div>
              </InfoCard>
              <InfoCard>
                <CardIcon>
                </CardIcon>
                <div className="card-info">
                  <p className="header"></p>
                  <p className="fee">Fee: <span>N200</span></p>
                  <p className="detail">
                    Peniel Plaza, opp Fuoye school gate, Oye Ekiti Pickup within 6 hours
                  </p>
                </div>
              </InfoCard>
              <InfoCard>
                <CardIcon>
                </CardIcon>
                <div className="card-info">
                  <p className="header"></p>
                  <p className="fee">Fee: <span>N700</span></p>
                  <p className="detail">
                    Kindly return any bad or wrong product to our station within 24 hours of delivery for refund.
                  </p>
                </div>
              </InfoCard>
            </div>
    
          </DeliveryInfo>
        </OrderDetail>
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
      </Container>
    </Wrapper>
  );
};

const ProductView: React.FC = () => (
  <Layout layout="full" component={Screen} state={false}/>
);

export default ProductView;
