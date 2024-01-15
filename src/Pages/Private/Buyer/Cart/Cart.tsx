import React, {useState} from 'react';
import Layout from '../../../../Layouts';
import { 
    Container, Empty, 
    Page, Product,
    ProductCard, ProductDescr, 
    RightSection, 
    ProductDetails,
    InfoCard,
    SectionCard,
    GridProductCard,
    GridProductDetails,
} from './CartStyles';
import { Banner, Button, Card, ImageCard, ItemCounter, View } from '../../../../Shared/Components';
import { amexpress, applepay, deliveryTruckGray, image34, lockGray, masterpay, messageGray, paypal, shopGrayScale, visa } from '../../../../assets';
import { CartProduct } from '../../../../test-data/data';
import { formatCurrency } from '../../../../Shared/Utils/helperFunctions';
import { useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';


const costOfDelivery = 2000
const discount = 60
const tax = 14

const Screen: React.FC = () => {
    const [products, setProducts] = useState<any[]>(CartProduct)
    const navigate = useNavigate();

    const sumOfPrices = products.reduce((accumulator, currentObject) => {
        const price = Number(currentObject.price) || 0; 
        return accumulator + price;
      }, 0);

    const hasProduct: boolean = products.length > 0;

    const getGridItems = () => {
        let currentArray: any[] = []

        //logic to handle which data to map.... example
        Array(4).fill('.').map((_, index) => {
          currentArray.push(
            <GridProductCard key={index}>
                <div className="image">
                    <ImageCard view="grid" src={image34}/>
                </div>
                <GridProductDetails>
                    <div className="flex">
                        <div className="price">
                        <span>&#8358;32,000</span>
                        </div>
                    </div>
                    <h1>Xiaomi Redmi 8 Original </h1>
                    <Button 
                        border="1px solid #DEE2E7"
                        background='#FFF'
                        width="auto"
                        padding={9}
                        color="#FF001F"
                        className="button"
                    >
                        <MdOutlineShoppingCart /> Move to Cart
                    </Button>
                </GridProductDetails>
            </GridProductCard>
          )
        })
        return currentArray
    }

    return (
        <Page>
            <Container>
                <h1>My Cart <span>{'(' + products.length + ')'}</span></h1>
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
                        <p><span className="label">Subtotal:</span><span className="cost">{formatCurrency(sumOfPrices)}</span></p>
                        <p><span className="label">Delivery:</span><span className="cost">{formatCurrency(costOfDelivery)}</span></p>
                        <p><span className="label">Discount:</span><span className="cost discount">- {formatCurrency(discount)}</span></p>
                        <p><span className="label">Tax:</span><span className="cost tax">+ {formatCurrency(tax)}</span></p>
                        <div className="bottom">
                            <p className="total"><span>Total:</span><span>{formatCurrency(sumOfPrices + costOfDelivery + tax - discount)}</span></p>
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
                <Product empty={!hasProduct}>
                    {hasProduct ? 
                        products.map((item, index) => (
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
                                                <img src={item.img} alt=''/>
                                            </div>
                                            <ProductDetails>
                                                <h2>{item.item}</h2>
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
                                            <p>{formatCurrency(Number(item.price))}</p>
                                            <ItemCounter initialValue={Number(item.quantity)} />
                                        </div>
                                    </ProductCard>
                                </Card>
                        )) :
                        <Empty>
                            <div className="icon"><img src={shopGrayScale} alt="" /></div>
                            <div className="text">
                            <p className="header">No Orders</p>
                            <p className="info">You have no items added</p>
                            </div>
                            <Button 
                                border="1px solid #DEE2E7"
                                background='linear-gradient(180deg, #FF7612 0%, #FF001F 100%)'
                                width="275px"
                                padding={9}
                                color="#FFF"
                                onClick={() => navigate('/')}
                            >
                                Go to Market
                            </Button>
                        </Empty>}
                    {hasProduct && 
                        <footer>
                            <Button 
                                border="1px solid #DEE2E7"
                                background='#F7FAFC'
                                width="auto"
                                padding={9}
                                color="#FF001F"
                                onClick={() => navigate('/')}
                            >
                                Back to shop
                            </Button>
                            <Button 
                                background="#FA3434" 
                                color="#fff" width="auto" 
                                padding={16}
                                onClick={() => setProducts([])}
                            >Remove all</Button>
                        </footer>}
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
                    <View
                        mode="grid"
                        itempergrid={4}
                        gridItems={getGridItems()}
                        cardStyle='card'
                        gap='5px'
                    />
                </SectionCard>
                <div style={{ height: "30px" }}></div>
                <SectionCard>
                    <h3 className="title">Recently viewed</h3>
                    <View
                        mode="grid"
                        itempergrid={4}
                        gridItems={getGridItems()}
                        cardStyle='card'
                        gap='5px'
                        className='view'
                    />
                </SectionCard>
                <div className="banner-wrapper">
                    <Banner />
                </div>
            </Container>
        </Page>
    )
} 

const Cart = () => {
    // const { loading } = useSelector((store: any) => store.products);
    return <Layout layout={"full"} component={Screen} state={false} navMode='noSearch'/>;
};

export default Cart;
