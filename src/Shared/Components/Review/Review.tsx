import React from "react"
import { Ratings, ReviewCard, Wrapper, CustomerReviews, ReviewContainer, SummaryBox, User } from "./Review.styles"
import { Rating } from "..";
import { userPic } from "../../../assets";
import { BiSolidRightArrowSquare } from "react-icons/bi";


interface IReviewProps {
    width?: number;
}

const Reviews: React.FC<IReviewProps> = ({ width }) => {
    return (
        <Wrapper width={width}>
            <header>
                <h3>Customers' Reviews</h3>
                <p className="action"><BiSolidRightArrowSquare size={18}/>Read all</p>
            </header>
            <ReviewContainer>
                <Ratings>
                    <p className="heading">Verified Ratings</p>
                    <SummaryBox>
                        4.3/5
                        <div><Rating numberOfRates={4}/></div>
                        31 verified ratings
                    </SummaryBox>
                    <div className="ratings-wrapper">
                        <div className="ratings-box">
                            <div className="rates"><span>5.0</span><Rating numberOfRates={5}/></div>
                            <span className="frequency">16</span>
                        </div>
                        <div className="ratings-box">
                            <div className="rates"><span>4.0</span><Rating numberOfRates={4}/></div>
                            <span className="frequency">4</span>
                        </div>
                        <div className="ratings-box">
                            <div className="rates"><span>3.0</span><Rating numberOfRates={3}/></div>
                            <span className="frequency">5</span>
                        </div>
                        <div className="ratings-box">
                            <div className="rates"><span>2.0</span><Rating numberOfRates={2}/></div>
                            <span className="frequency">5</span>
                        </div>
                        <div className="ratings-box">
                            <div className="rates"><span>1.0</span><Rating numberOfRates={1}/></div>
                            <span className="frequency">1</span>
                        </div>
                    </div>
                </Ratings>
                <CustomerReviews>
                    <p className="heading">Customer Review&#40;14&#41;</p>
                    <ReviewCard>
                        <div><Rating numberOfRates={5}/></div>
                        <p className="comment">Thank you for the nice product. 
                        I am thrilled to get what I ordered for truly. 
                        The quality is perfect and it’s worth the pay</p>
                        <User>
                            <div>
                                <img src={userPic} alt="" />
                            </div>
                            <div>
                                <p className="name">John Smith</p>
                                <p className="date-posted">12 November 2023</p>
                            </div>
                        </User>
                    </ReviewCard>
                    <ReviewCard>
                        <div><Rating numberOfRates={5}/></div>
                        <p className="comment">Thank you for the nice product. 
                        I am thrilled to get what I ordered for truly. 
                        The quality is perfect and it’s worth the pay</p>
                        <User>
                            <div>
                                <img src={userPic} alt="" />
                            </div>
                            <div>
                                <p className="name">John Smith</p>
                                <p className="date-posted">12 November 2023</p>
                            </div>
                        </User>
                    </ReviewCard>
                    <ReviewCard>
                        <div><Rating numberOfRates={5}/></div>
                        <p className="comment">Thank you for the nice product. 
                        I am thrilled to get what I ordered for truly. 
                        The quality is perfect and it’s worth the pay</p>
                        <User>
                            <div>
                                <img src={userPic} alt="" />
                            </div>
                            <div>
                                <p className="name">John Smith</p>
                                <p className="date-posted">12 November 2023</p>
                            </div>
                        </User>
                    </ReviewCard>
                </CustomerReviews>
            </ReviewContainer>
        </Wrapper>
    )
};

export default Reviews;