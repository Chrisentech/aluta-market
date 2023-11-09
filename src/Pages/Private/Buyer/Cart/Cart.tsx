import React from 'react';
import Layout from '../../../../Layouts';
import { 
    Container, Empty, 
    Page, Product,
    ProductCard, ProductDescr, 
    RightSection, 
    ProductDetails,
    InfoCard,
    SectionCard,
} from './CartStyles';
import { Banner, Button, Card, ItemCounter, View } from '../../../../Shared/Components';
import { amexpress, applepay, deliveryTruckGray, lockGray, masterpay, messageGray, paypal, phone, visa } from '../../../../assets';
import GridView from '../../../../Shared/Components/ViewSelector/GridView';

const hasProduct: boolean = true;
const items: number = 4;

const Screen: React.FC = () => {
    return (
        <Page>
            <Container>
                <h1>My Cart <span>{'(' + items + ')'}</span></h1>
                {hasProduct && 
                <RightSection>
                    <div className="coupon">
                        <p>Have a coupon?</p>
                        <form action="" className="form">
                            <input type="text" placeholder='Add coupon'/>
                            <button type="submit">Apply</button>
                        </form>
                    </div>
                    <div className="checkout">
                        <p><span className="label">Subtotal:</span><span className="cost">N113,099.49</span></p>
                        <p><span className="label">Delivery:</span><span className="cost">N2,000.00</span></p>
                        <p><span className="label">Discount:</span><span className="cost discount">- N60.00</span></p>
                        <p><span className="label">Tax:</span><span className="cost tax">+ N14.00</span></p>
                        <div className="bottom">
                            <p className="total"><span>Total:</span><span>N113,053.49</span></p>
                            <Button className="button" 
                            width="100%" height="54px" 
                            background='#00B517' color="#fff"
                            >Checkout</Button>
                            <div className='footer'>
                                <img src={amexpress} />
                                <img src={applepay} />
                                <img src={masterpay} />
                                <img src={paypal} />
                                <img src={visa} />
                            </div>
                        </div>
                    </div>
                </RightSection>
                }
                <Product>
                    {hasProduct ? 
                        Array(items).fill(null).map((_, index) => (
                            <Card
                                key={index}
                                hasBoxShadow={false}
                                width="auto"
                                height="136px"
                                padding="20px 0"
                                onHover={false}
                                className="card"
                                >
                                    <ProductCard>
                                        <div className="left-side">
                                            <div className="image">
                                                <img src={phone} alt=''/>
                                            </div>
                                            <ProductDetails>
                                                <h2>Canon Camera EOS 2000, Black 10x zoom</h2>
                                                <ProductDescr>
                                                    <div className="text">
                                                        <p className='Variations'>
                                                            Variation: Sizes: M, Color: blue
                                                        </p>
                                                        <p className="store-name">
                                                            Arike Collection
                                                        </p>
                                                    </div>
                                                    <div className="buttons">
                                                        <Button
                                                            width={70}
                                                            height={30}
                                                            borderRadius={6}
                                                            background='#FA3434'
                                                            color="#FFF"
                                                        >
                                                            Remove
                                                        </Button>
                                                        <Button
                                                            width={103}
                                                            padding={10}
                                                            height={30}
                                                            borderRadius={6}
                                                            background='#FFF'
                                                            border="#DEE2E7 solid 1px"
                                                            color="#0D6EFD"
                                                        >Save for later</Button>
                                                    </div>
                                                </ProductDescr>
                                            </ProductDetails>
                                        </div>
                                        <div className="right-side">
                                            <p>N7,098.99</p>
                                            <ItemCounter initialValue={1} />
                                        </div>
                                    </ProductCard>
                                </Card>
                        )) :
                        <Empty>No Product in Cart</Empty>}
                    <footer>
                        <Button 
                            border="1px solid #DEE2E7"
                            background='#F7FAFC'
                            width="auto"
                            padding={9}
                            color="#FF001F"
                        >
                            Back to shop
                        </Button>
                        {hasProduct && <Button background="#FA3434" color="#fff" width="auto" padding={16}>Remove all</Button>}
                    </footer>
                </Product>
                <div className='info-container'>
                    <InfoCard>
                        <div className='img'>
                            <img src={lockGray} />
                        </div>
                        <div className="pcontainer">
                            <p className="head">Secure payment</p>
                            <p className="p">No more sales scam</p>
                        </div>
                    </InfoCard>
                    <InfoCard>
                        <img src={messageGray} />
                        <div className="pcontainer">
                            <p className="head">Customer support</p>
                            <p className="p">Speak to us, we are here</p>
                        </div>
                    </InfoCard>
                    <InfoCard>
                        <img src={deliveryTruckGray} />
                        <div className="pcontainer">
                            <p className="head">Fast delivery</p>
                            <p className="p">Max of 48 hours delivery </p>
                        </div>
                    </InfoCard>
                </div>

                <SectionCard>
                    <h3 className="title">Saved for later</h3>
                    {/* <View
                        itempergrid={4}
                        gridItems={[
                            Array(4).fill('').map(_, index) => (
                                <Card
                                    key={index}
                                    width="100%"
                                    hasBoxShadow={true}
                                    height="200px"
                                    onHover
                                    className="card"
                                >
                                    <ProductCard >
                                        <ImageCard view="grid" src={phone} />

                                        <ProductDetails view="grid">
                                            <div className="flex">
                                            <div className="price">
                                                <span>&#8358;80,000</span>
                                                <span>&#8358;92,000</span>
                                            </div>
                                            <WishCard />
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
                            ),
                        ]}
                    /> */}
                    <GridView 
                        gridItems={Array(4).fill(null)} 
                        gap="10px" 
                        itempergrid={4} 
                        cardType="type2" 
                        type="productGrid"
                        background="#EEEEEE"  
                    />

                </SectionCard>
                <div style={{ height: "30px" }}></div>
                <SectionCard>
                    <h3 className="title">Recently viewed</h3>
                </SectionCard>
                <Banner />
            </Container>
        </Page>
    )
} 

const Cart = () => {
    // const { loading } = useSelector((store: any) => store.products);
    return <Layout layout={"full"} component={Screen} state={false} />;
};

export default Cart;
