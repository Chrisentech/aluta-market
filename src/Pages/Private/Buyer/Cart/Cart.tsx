import React from 'react';
import Layout from '../../../../Layouts';
import { 
    Container, Empty, 
    Page, Product, 
    ProductCard, ProductDescr, 
    RightSection, 
    ProductDetails,
} from './CartStyles';
import { Button, Card, ItemCounter } from '../../../../Shared/Components';
import { amexpress, applepay, masterpay, paypal, phone, visa } from '../../../../assets';

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
                                                        <Button>Remove</Button>
                                                        <Button>Save for later</Button>
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
                
            </Container>
        </Page>
    )
} 

const Cart = () => {
    // const { loading } = useSelector((store: any) => store.products);
    return <Layout layout={"full"} component={Screen} state={false} />;
};

export default Cart;
