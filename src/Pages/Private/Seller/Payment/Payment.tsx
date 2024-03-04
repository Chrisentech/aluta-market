import React from "react";
import Layout from "../../../../Layouts";
import { Card, View } from "../../../../Shared/Components";
import { GridItem, Wrapper } from "./payment.styles";
import {
	BsFillArrowRightSquareFill,
	BsFillCreditCard2BackFill,
} from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { TbClockHeart } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../Shared/Constants";

const Screen: React.FC = () => {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<h2>Enable Payment</h2>
			<Card
				width="100%"
				padding="40px 80px"
				height="500px"
				borderRadius="20px"
				onHover={false}
				className="card"
			>
				<div className="center">
					<section className="badge">
						<AiFillDollarCircle size={30} />
					</section>
					<h3>Setup your account</h3>
					<p>and start collecting payments</p>
					<p className="p-20">
						You will get a free bank account, collect payments via multiple
						channels
					</p>
					<button
						className="paymentBtn"
						style={{ cursor: "pointer" }}
						onClick={() => navigate(ROUTE.SELLER_PAYMENT_REG + "/1")}
					>
						Start setup for payment <BsFillArrowRightSquareFill />
					</button>
				</div>

				<View
					className="grid"
					mode="grid"
					itempergrid={3}
					type=""
					gap="15px"
					gridItems={[
						<GridItem background="#00B517">
							<section className="badge">
								<BsFillCreditCard2BackFill color="#00B517" size="24" />
							</section>
							<h3 className="title">Easy Payment Options</h3>
							<div className="label">
								Give your customers multiple ways to pay you - with transfers,
								cards, ussd & even split payments
							</div>
						</GridItem>,
						<GridItem background="#FF9017">
							<section className="badge">
								<IoWalletOutline color="#FF9017" size="24" />
							</section>
							<h3 className="title">Dedicated Business Account</h3>
							<div className="label">
								You get a dedicated business account number - this helps you
								separate your business finance
							</div>
						</GridItem>,
						<GridItem background="#FA3434">
							<section className="badge">
								<TbClockHeart color="#FA3434" size="24" />
							</section>
							<h3 className="title">72 hours withdrawal</h3>
							<div className="label">
								Funds can only be withdrawn after to your bank account after 72
								hours in case of refund
							</div>
						</GridItem>,
					]}
				/>
			</Card>
		</Wrapper>
	);
};

const Payment = () => {
	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={false}
			navMode="noSearch"
		/>
	);
};

export default Payment;
