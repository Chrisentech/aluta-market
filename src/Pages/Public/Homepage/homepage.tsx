import React from "react";
import Layout from "../../../Layouts";
import { 
  Home,
  Hero,
  Offers,
  GridContainer,
  GridItem,
  ProductRequestForm,
  FormContainer,
  Header1,
  Services,
  Divider,
 } from "./homepage.styles";
import { categories } from "../../../test-data";
import { Card, Button, Timer, ProductGrid } from "../../../Shared/Components";
import { image26, image104 } from "../../../assets";
import {MdOutlineInventory2} from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../Shared/Constants";

const Screen: React.FC = () => {
  const nav = useNavigate()
  return (
    <Home>
      <Hero>
        <div className="categories">
          {categories.map((category) => (
            <div 
              className="category"
              key={category.title}
            >
              {category.title}
            </div>
          ))}
          <div className="category">All Categories</div>
        </div>
        <Card 
          className="banner"
          width={624}
          height={333}
          background={'url("src/assets/banner.png")'}
        >
          <div>
            <p>Latest Trending</p>
            <p>Electronic Items</p>
            <Button color='#1C1C1C'>Learn more</Button>
          </div>
        </Card>
        <div className="card-section">
          <Card 
            className="card1"
            borderRadius={6}
            background="#ffe3e3" 
            width={200} 
            height={110}
          >
            <div className="top">
              <img src="src/assets/Avatar.png" alt="" />
              <p>hi user <br/>let's get</p>
            </div>
            <div className="bottom">
              <Button onClick={()=>nav(ROUTE.REGISTER)} width={150} height={30} padding={10} gap={10} background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)" color="#ffffff">Join now</Button>
              <Button onClick={()=>nav(ROUTE.LOGIN)} width={150} height={30} padding={10} gap={10} background="#ffffff" color="#fa3434">Log in</Button>
            </div>
          </Card>
          <Card
            className="card2"
            width={200}
            height={55}
            borderRadius={6}
            background="#f38332"
          >
            <p>Get US $10 off with a new supplier</p>
          </Card>
          <Card
            className="card2"
            width={200}
            height={55}
            borderRadius={6}
            background="#55bdc3"
          >
            <p>Send quotes with supplier preferences</p>
          </Card>
        </div>
      </Hero>
      <Offers>
        <div className="info-card">
          <div className="top">
            <p>Deals and Offers</p>
            <p>Hygiene equipments</p>
          </div>
          <Timer className="timer"/>
        </div>
        <div className="product-cards">
          {Array(5).fill("*").map((_, index) => (
            <Card
              className='card'
              key={index}
              width='179px'
              height='95px'
              background='#fff'
              borderRadius='none'
            >
              <div className="top">
                <img src="src/assets/camera.png" alt="camera" />
              </div>
              <div className="bottom">
                <p>Pro Cameras</p>
                <span>-40%</span>
              </div>
            </Card>
          ))}
        </div>
        
      </Offers>

      {/* Product and Services section */}
      <section>
        <GridContainer>
          <GridItem isLarge={true} background="url('src/assets/image98.png')" className="first">
            <div>
              <p>Product Categories</p>
              <Button color='#1C1C1C'gap={10} height={40} width={90} padding={16} >view all</Button>
            </div>
          </GridItem>
          {categories.map((item, index) => (
            <GridItem key={index + item.title} background='#fff' className="others">
              <p>{item.title}</p>
              <div>
                <img src="src/assets/PngItem.png" alt="item" />
              </div>
            </GridItem>
          ))};
        </GridContainer>
        <GridContainer>
          <GridItem isLarge={true} background="url('src/assets/image92.png')" className="first">
            <div>
              <p>Skills and Services</p>
              <Button color='#1C1C1C'gap={10} height={40} width={90} padding={16} >view all</Button>
            </div>
          </GridItem>
          {categories.map((item, index) => (
            <GridItem key={index + item.title} background='#fff' className="others">
              <p>{item.title}</p>
              <div>
                <img src="src/assets/events.png" alt="item" />
              </div>
            </GridItem>
          ))};
        </GridContainer>

        <ProductRequestForm>
          <div className="text">
            <h2>An easy way to make request for products</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <FormContainer>
            <h2>Send quote to sellers</h2>
            <input type="text" name="item" placeholder="what item do you need?" className="input1" />
            <textarea name="details" placeholder="Type for more details" />
            <div className="quantity">
              <input type="text" name="quantity" placeholder="Quantity" />
              <select name="unit">
                <option value="Pcs">Pcs</option>
                <option value="Kg">Kg</option>
                <option value="Liters">Liters</option>
              </select>
            </div>
            <button type="submit">Send Inquiry</button>
          </FormContainer>
        </ProductRequestForm>
      </section>

      {/* Recommended Section */}
      <section>   
        <Header1>Recommended Items</Header1>
        <ProductGrid 
          image={image26}
          row={2}
        >
          <p>N10,000</p>
          <p>Leather Wallet</p>
        </ProductGrid>
      </section>
      <section>   
        <Header1>Our Extra Services</Header1>
        <Services>
          {Array(4).fill('.').map(( _, index ) => (
              <div className="service-card" key={index}>
                <div className="card-top">
                  <img src={image104} alt="" />
                </div>
                <div className="card-bottom">
                  <Divider className="divider">
                    <MdOutlineInventory2 />
                  </Divider>
                  <p>some random stuff</p>
                </div>
              </div>
          ))}
        </Services>
      </section>

      {/* <div style={{ width: 900, margin: "30px auto" }}>
        <View mode="flex" itempergrid={3} type="productGrid" />
      </div> */}
    </Home>
  );
};

const HomePage = () => {
  // const { loading } = useSelector((store: any) => store.products);
  return <Layout layout={"full"} component={Screen} state={false} />;
};

export default HomePage;
