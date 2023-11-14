import React from "react";
import Layout from "../../../Layouts";
import {
	Home,
	Hero,
	GridContainer,
	GridItem,
	ProductRequestForm,
	FormContainer,
	Header1,
	Services,
	Divider,
} from "./homepage.styles";
import { categories, services } from "../../../test-data";
import {
	Card,
	Button,
	ProductGrid,
	LogoutModal,
} from "../../../Shared/Components";
import { image26, image104 } from "../../../assets";
import { MdOutlineInventory2 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../Shared/Constants";
import { useDispatch, useSelector } from "react-redux";


import useAuthentication from "../../../Shared/Hooks/useAuth";
import {
	selectActiveModal,
	showModal,
} from "../../../Features/modal/modalSlice";

const Screen: React.FC = () => {
	const nav = useNavigate();
	const { isAuthenticated } = useAuthentication();
	const me = useSelector((state: any) => state.user.me);
	const dispatch = useDispatch();

	return (
		<Home>
			<Hero>
				<div className="categories">
					{categories.map((category) => (
						<div className="category" key={category.title}>
							{category.title}
						</div>
					))}
					<div className="category">All Categories</div>
				</div>
				<Card
					className="banner"
					width={"62%"}
					height={333}
					background={'url("src/assets/banner.png")'}
				>
					<div>
						<p>Latest Trending</p>
						<p>Electronic Items</p>
						<Button color="#1C1C1C">Learn more</Button>
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
							<img
								src={me?.avatar ?? "src/assets/Avatar.png"}
								alt=""
								height={50}
							/>
							{!isAuthenticated ? (
								<p>
									Hi comrade <br />
									let's get Started
								</p>
							) : (
								<p>
									Hi {me?.fullname?.split(" ")[1]} <br />
									Welcome back
								</p>
							)}
						</div>
						<div className="bottom">
							{isAuthenticated ? (
								<Button
									onClick={() =>
										me?.usertype === "seller" ?? nav(ROUTE.SELLER_DASHBOARD)
									}
									width={150}
									height={30}
									padding={10}
									gap={10}
									background="purple"
									color="#ffffff"
								>
									My Dashboard
								</Button>
							) : (
								<Button
									onClick={() => nav(ROUTE.REGISTER)}
									width={150}
									height={30}
									padding={10}
									gap={10}
									background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
									color="#ffffff"
								>
									Join now
								</Button>
							)}
							{isAuthenticated ? (
								<Button
									onClick={() => dispatch(showModal("logout"))}
									width={150}
									height={30}
									padding={10}
									gap={10}
									background="#f00"
									color="#fff"
								>
									Log out
								</Button>
							) : (
								<Button
									onClick={() => nav(ROUTE.LOGIN)}
									width={150}
									height={30}
									padding={10}
									gap={10}
									background="#ffffff"
									color="#fa3434"
								>
									Log in
								</Button>
							)}
						</div>
					</Card>
					<Card
						className="card2"
						width={200}
						height={136}
						color="#000"
						borderRadius={6}
						background="#00B51726"
					>
						<strong>
							This Place is <br /> reserved for ads
						</strong>
					</Card>
				</div>
			</Hero>
			{/* <Offers>
				<div className="info-card">
					<div className="top">
						<p>Deals and Offers</p>
						<p>Hygiene equipments</p>
					</div>
					<Timer className="timer" />
				</div>
				<div className="product-cards">
					{Array(6)
						.fill("*")
						.map((_, index) => (
							<Card
								className="card"
								key={index}
								width={"unset"}
								padding={"2em"}
								height="95px"
								background="#fff"
								borderRadius="none"
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
			</Offers> */}
			{/* Best Selling Section */}
			<section
				style={{
					padding: 10,
					borderRadius: 10,
					background: "#fff",
					width: "calc(90% - 20px)",
					margin: "20px auto",
				}}
			>
				<Header1>Products Students in Your School are Buying</Header1>
				<ProductGrid />
			</section>
			{/* Product and Services section */}
			<section>
				<GridContainer>
					<GridItem
						isLarge={true}
						background="url('src/assets/image98.png')"
						className="first"
					>
						<div>
							<p>Product Categories</p>
							<Button
								color="#1C1C1C"
								gap={10}
								height={40}
								width={90}
								padding={16}
							>
								view all
							</Button>
						</div>
					</GridItem>
					{categories.map((item, index) => (
						<GridItem
							key={index + item.title}
							background="#fff"
							className="others"
						>
							<p>{item.title}</p>
							<div>
								<img src={item.image ?? "src/assets/PngItem.png"} alt="item" />
							</div>
						</GridItem>
					))}
				</GridContainer>
				<GridContainer>
					<GridItem
						isLarge={true}
						background="url('src/assets/image92.png')"
						className="first"
					>
						<div>
							<p>Skills and Services</p>
							<Button
								color="#1C1C1C"
								gap={10}
								height={40}
								width={90}
								padding={16}
							>
								view all
							</Button>
						</div>
					</GridItem>
					{services.map((item, index) => (
						<GridItem
							key={index + item.title}
							background="#fff"
							className="others"
						>
							<p>{item.title}</p>
							<div>
								<img src={item.image ?? "src/assets/events.png"} alt="item" />
							</div>
						</GridItem>
					))}
				</GridContainer>
				{/* Recommended Section */}
				<section
					style={{
						padding: 10,
						borderRadius: 10,
						background: "#fff",
						width: "calc(90% - 20px)",
						margin: "20px auto",
					}}
				>
					<Header1>Recommended Items</Header1>
					<ProductGrid />
				</section>

				<ProductRequestForm>
					<div className="text" id="quote">
						<h2>An easy way to make request for products</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt.
						</p>
					</div>
					<FormContainer>
						<h2>Send quote to sellers</h2>
						<input
							type="text"
							name="item"
							placeholder="what item do you need?"
							className="input1"
						/>
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

			<section>
				<Header1>Our Extra Services</Header1>
				<Services>
					{Array(4)
						.fill(".")
						.map((_, index) => (
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
	const activeModal = useSelector(selectActiveModal);
	return (
		<Layout
			layout={"full"}
			component={Screen}
			showModal={activeModal}
			state={false}
			popUpContent={<LogoutModal />}
		/>
	);
};

export default HomePage;
