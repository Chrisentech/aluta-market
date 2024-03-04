import React from "react";
import Layout from "../../../../Layouts";
import { Card, View } from "../../../../Shared/Components";
import { GridItem, Wrapper2 } from "./products.styles";
import {
	BsFillArrowRightSquareFill,
	BsFillCreditCard2BackFill,
} from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../Shared/Constants";
import { BiArrowBack } from "react-icons/bi";
import { playBtn } from "../../../../assets";
import { GiBeachBag, GiHamburgerMenu } from "react-icons/gi";

const Screen: React.FC = () => {
	const navigate = useNavigate();
	return (
		<Wrapper2>
			<h2>My Catalog</h2>
			<Card
				width="100%"
				padding="40px 80px"
				height="500px"
				borderRadius="20px"
				onHover={false}
				className="card"
			>
				<div className="flex">
					<div
						className="fav"
						style={{ display: "flex", alignItems: "center" }}
					>
						<BiArrowBack size={24} />
						<span className="title">Create a new listing</span>
					</div>

					<div
						className="tt"
						style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
					>
						<img src={playBtn} alt="" />
						<span style={{ textDecoration: "underline" }}>
							How to upload Products
						</span>
					</div>
				</div>
				<View
					className="grid"
					mode="grid"
					itempergrid={3}
					type=""
					gap="15px"
					gridItems={[
						<GridItem
							background="#00B517"
							onClick={() => navigate(ROUTE.SELLER_ADDPRODUCT)}
						>
							<section className="badge">
								<GiBeachBag color="#00B517" size="24" />
							</section>
							<h3 className="title">Physical Product</h3>
							<div className="label">
								Sell all kinds of physical products, from clothes, books,
								appliances and every products
							</div>
						</GridItem>,
						<GridItem background="#FF9017">
							<section className="badge">
								<GiHamburgerMenu color="#FF9017" size="24" />
							</section>
							<h3 className="title">Digital Product</h3>
							<div className="label">
								Sell your eBooks, courses, downloadable products, music, tickets
								to events, collect departmental/faculty dues and other payments
							</div>
						</GridItem>,
						<GridItem background="#FA3434">
							<section className="badge">
								<LuLayoutDashboard color="#FA3434" size="24" />
							</section>
							<h3 className="title">Services</h3>
							<div className="label">
								Sell any kind of service, from coaching services to
								consultations to counseling sessions to design services, e.t.c.
							</div>
						</GridItem>,
					]}
				/>
			</Card>
		</Wrapper2>
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
