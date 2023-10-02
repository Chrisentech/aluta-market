import React from 'react';
import Layout from '../../../Layouts';
import { Container, Empty, Page, Product, ProductCard, ProductDescr, RightSection, ProductDetails } from './CartStyles';
import { Button, Card, ImageCard } from '../../../Shared/Components';
import { phone } from '../../../assets';

const hasProduct: boolean = true;

const Screen: React.FC = () => {
    return (
        <Page>
            <Container>
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
                            <p className="Total"><span>Tax:</span><span>N113,053.49</span></p>
                            <Button>Checkout</Button>
                        </div>
                        <footer></footer>
                    </div>
                </RightSection>
                <Product>
                    {(hasProduct === true) ? 
                        Array(3).fill(null).map((_, index) => (
                            <Card
                                key={index}
                                width="100%"
                                hasBoxShadow={true}
                                height="126px"
                                padding="10px"
                                className="card"
                                >
                                    <ProductCard>
                                        <div className="image">
                                            <ImageCard view="list" src={phone} />
                                        </div>
                                        <ProductDetails>
                                        <h1>Canon Camera EOS 2000, Black 10x zoom</h1>
                                        <div className="price">
                                            <span>&#8358;80,000</span>
                                            <span>&#8358;92,000</span>
                                        </div>
                                        <ProductDescr>
                                            Lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing 
                                        </ProductDescr>
                                        </ProductDetails>
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
                
            </Container>
        </Page>
    )
} 

const Cart = () => {
    // const { loading } = useSelector((store: any) => store.products);
    return <Layout layout={"full"} component={Screen} state={false} />;
};

export default Cart;
