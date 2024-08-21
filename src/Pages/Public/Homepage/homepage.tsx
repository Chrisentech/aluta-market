import React, { useEffect } from "react";
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
	Newsletter,
} from "./homepage.styles";
import { categories, services } from "../../../test-data";
import {
	Card,
	Button,
	LogoutModal,
	SkynetModal,
	SkeletonLoader,
} from "../../../Shared/Components";
import { lol, lor, secure, log } from "../../../assets";
import { MdOutlineInventory2, MdOutlineSearch, MdSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../Shared/Constants";
import { useDispatch, useSelector } from "react-redux";
import { registerImg } from "../../../assets";

import useAuthentication from "../../../Shared/Hooks/useAuth";
import {
	selectActiveModal,
	showModal,
} from "../../../Features/modal/modalSlice";
import { GiCheckedShield } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";
import {
	selectAccomodationProducts,
	selectBeveragesProducts,
	selectGadgetProducts,
	selectProducts,
	selectSkinCareProducts,
} from "../../../Features/products/productSlice";
import {
	generateSlug,
	numberWithCommas,
	truncateText,
} from "../../../Shared/Utils/helperFunctions";
import useProducts from "../../../Features/products/productActions";

const Screen: React.FC = () => {
	const nav = useNavigate();
	const { isAuthenticated } = useAuthentication();
	const me = useSelector((state: any) => state.user.me);
	const dispatch = useDispatch();

	const beveragesProducts = useSelector(selectBeveragesProducts);
	const accomodationProduct = useSelector(selectAccomodationProducts);
	const gadgetsProducts = useSelector(selectGadgetProducts);
	const skincareProducts = useSelector(selectSkinCareProducts);
	const products = useSelector(selectProducts);

	const {
		getBeveragesProducts,
		getAccomodationProducts,
		getGadgetsProducts,
		getSkincareProducts,
		getProducts,
	} = useProducts();

	useEffect(() => {
		// Fetch products when the component mounts
		getProducts({ store: "", limit: 12, offset: 0 });
	}, [getProducts]);

	useEffect(() => {
		const fetchProducts = async () => {
			await getBeveragesProducts();
			await getAccomodationProducts();
			await getGadgetsProducts();
			await getSkincareProducts();
		};

		fetchProducts();
	}, [
		getBeveragesProducts,
		getAccomodationProducts,
		getGadgetsProducts,
		getSkincareProducts,
	]);

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
				<Card className="banner" width={"62%"} height={333} onHover={false}>
					<div className="flex">
						<div className="tt">
							Welcome to the <br /> <span>STUDENTS’ MARKETPLACE</span>
							<br /> designed just for your every needs!
							{!isAuthenticated && (
								<Button
									onClick={() => nav(ROUTE.REGISTER)}
									width={150}
									height={30}
									padding={10}
									gap={10}
									className="btn-start"
									background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
									color="#ffffff"
								>
									Get Started
								</Button>
							)}
						</div>
						<div>
							<img src={registerImg} alt="register-image" width={310} />
						</div>
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
										me?.usertype === "seller"
											? nav(ROUTE.SELLER_DASHBOARD)
											: nav(ROUTE.BUYER_ORDER)
									}
									width={150}
									height={30}
									disabled={!me}
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
			<section
				style={{
					padding: 10,
					borderRadius: 10,
					background: "#fff",
					width: "90%",
					margin: "20px auto",
				}}
			>
				<Header1>Products Students in Your School are Buying</Header1>
				{/* <ProductGrid data={products} isMobile={isMobile} /> */}
				<div className="flex-container" style={{ marginBottom: 10 }}>
					{products?.length
						? products?.slice(0, 6)?.map((prd, i) => {
								return (
									<div
										key={i}
										className="flex-item"
										onClick={() => nav(`/product/view/${prd.id}`)}
									>
										<div className="image">
											<img src={prd.thumbnail} alt={"alt"} width={"80%"} />
										</div>
										<div className="detail">
											<p className="price">NGN {numberWithCommas(prd.price)}</p>
											<p className="name">{truncateText(prd.name, 30)}</p>
										</div>
									</div>
								);
						  })
						: Array(6)
								.fill("*")
								.map((_, i) => {
									return <SkeletonLoader key={i} />;
								})}
				</div>
				<div className="flex-container">
					{products?.length
						? products?.slice(6, 12)?.map((prd, i) => {
								return (
									<div
										key={i}
										className="flex-item"
										onClick={() => nav(`/product/view/${prd.id}`)}
									>
										<div className="image">
											<img src={prd.thumbnail} alt={"alt"} width={"80%"} />
										</div>
										<div className="detail">
											<p className="price">NGN {numberWithCommas(prd.price)}</p>
											<p className="name">{truncateText(prd.name, 30)}</p>
										</div>
									</div>
								);
						  })
						: Array(6)
								.fill("*")
								.map((_, i) => {
									return <SkeletonLoader key={i} />;
								})}
				</div>
			</section>
			{/* Product and Services section */}
			<section className="categories2">
				<h3>Product Categories</h3>
				<GridContainer>
					<GridItem
						isLarge={true}
						background="url('src/assets/image98.png')"
						className="first"
					>
						<div>
							<h2>Product Categories</h2>
							<Button
								color="#1C1C1C"
								gap={10}
								height={40}
								// width={90}
								padding={16}
							>
								View all
							</Button>
						</div>
					</GridItem>
					{categories.map((item, index) => (
						<GridItem
							key={index + item.title}
							background="#fff"
							className="others"
							onClick={() => {
								nav({
									pathname: ROUTE.SEARCH,
									search: `?query=${generateSlug(item.title)}`,
								});
							}}
						>
							<p>{item.title}</p>
							<div>
								<img src={item.image ?? "src/assets/PngItem.png"} alt="item" />
							</div>
						</GridItem>
					))}
				</GridContainer>
				<h3>Skills and Services</h3>
				<GridContainer>
					<GridItem
						isLarge={true}
						background="url('src/assets/image92.png')"
						className="first"
					>
						<div>
							<h2>Skills and Services</h2>
							<Button
								color="#1C1C1C"
								gap={10}
								height={40}
								// width={90}
								padding={16}
							>
								View all
							</Button>
						</div>
					</GridItem>

					{services.map((item, index) => (
						<GridItem
							key={index + item.title}
							background="#fff"
							className="others"
							onClick={() => {
								nav({
									pathname: ROUTE.SEARCH,
									search: `?query=${generateSlug(item.title)}`,
								});
							}}
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
						width: "100%",
						margin: "20px auto",
					}}
				>
					<Header1>Recommended Items</Header1>
					{/* <ProductGrid isMobile={isMobile} />
					 */}
					<div className="flex-container2">
						{skincareProducts?.length
							? skincareProducts?.map((prd: any, i: number) => {
									return (
										<div
											key={i}
											className="flex-item"
											style={{
												width: `16.6666%`,
											}}
										>
											<div className="image">
												<img src={prd.thumbnail} alt={"alt"} width={"80%"} />
											</div>
											<div className="detail">
												<p className="price">
													NGN {numberWithCommas(prd.price)}
												</p>
												<p className="name">{truncateText(prd.name, 30)}</p>
											</div>
										</div>
									);
							  })
							: Array(6)
									.fill("*")
									.map((_, i) => {
										return <SkeletonLoader key={i} />;
									})}
					</div>
				</section>

				<section
					style={{
						padding: 10,
						borderRadius: 10,
						background: "#fff",
						width: "100%",
						margin: "20px auto",
					}}
				>
					<Header1>Food and Beverages</Header1>
					{/* <ProductGrid data={beveragesProducts} isMobile={isMobile} /> */}
					<div className="flex-container2">
						{beveragesProducts?.length
							? beveragesProducts?.map((prd: any, i: number) => {
									return (
										<div
											key={i}
											className="flex-item"
											style={{
												width: `16.6666%`,
											}}
										>
											<div className="image">
												<img src={prd.thumbnail} alt={"alt"} width={"80%"} />
											</div>
											<div className="detail">
												<p className="price">
													NGN {numberWithCommas(prd.price)}
												</p>
												<p className="name">{truncateText(prd.name, 30)}</p>
											</div>
										</div>
									);
							  })
							: Array(6)
									.fill("*")
									.map((_, i) => {
										return <SkeletonLoader key={i} />;
									})}
					</div>
				</section>

				<section
					style={{
						padding: 10,
						borderRadius: 10,
						background: "#fff",
						width: "100%",
						margin: "20px auto",
					}}
				>
					<Header1>Accomodation</Header1>
					{/* <ProductGrid data={accomodationProduct} isMobile={isMobile} /> */}
					<div className="flex-container2">
						{accomodationProduct?.length
							? accomodationProduct?.map((prd: any, i: number) => {
									return (
										<div
											key={i}
											className="flex-item"
											style={{
												width: `16.6666%`,
											}}
										>
											<div className="image">
												<img src={prd.thumbnail} alt={"alt"} width={"80%"} />
											</div>
											<div className="detail">
												<p className="price">
													NGN {numberWithCommas(prd.price)}
												</p>
												<p className="name">{truncateText(prd.name, 30)}</p>
											</div>
										</div>
									);
							  })
							: Array(6)
									.fill("*")
									.map((_, i) => {
										return <SkeletonLoader key={i} />;
									})}
					</div>
				</section>

				<section
					style={{
						padding: 10,
						borderRadius: 10,
						background: "#fff",
						width: "100%",
						margin: "20px auto",
					}}
				>
					<Header1>Gadgets</Header1>
					{/* <ProductGrid data={gadgetsProducts} isMobile={isMobile} /> */}
					<div className="flex-container2">
						{gadgetsProducts?.length
							? gadgetsProducts?.map((prd: any, i: number) => {
									return (
										<div
											key={i}
											className="flex-item"
											style={{
												width: `16.6666%`,
											}}
										>
											<div className="image">
												<img src={prd.thumbnail} alt={"alt"} width={"80%"} />
											</div>
											<div className="detail">
												<p className="price">
													NGN {numberWithCommas(prd.price)}
												</p>
												<p className="name">{truncateText(prd.name, 30)}</p>
											</div>
										</div>
									);
							  })
							: Array(6)
									.fill("*")
									.map((_, i) => {
										return <SkeletonLoader key={i} />;
									})}
					</div>
				</section>

				<section
					style={{
						padding: 10,
						borderRadius: 10,
						background: "#fff",
						width: "100%",
						margin: "20px auto",
					}}
				>
					<Header1>Skin Care</Header1>
					{/* <ProductGrid data={skincareProducts} isMobile={isMobile} /> */}
					<div className="flex-container2">
						{skincareProducts?.length
							? skincareProducts?.map((prd: any, i: number) => {
									return (
										<div
											key={i}
											className="flex-item"
											style={{
												width: `16.6666%`,
											}}
										>
											<div className="image">
												<img src={prd.thumbnail} alt={"alt"} width={"80%"} />
											</div>
											<div className="detail">
												<p className="price">
													NGN {numberWithCommas(prd.price)}
												</p>
												<p className="name">{truncateText(prd.name, 30)}</p>
											</div>
										</div>
									);
							  })
							: Array(6)
									.fill("*")
									.map((_, i) => {
										return <SkeletonLoader key={i} />;
									})}
					</div>
				</section>

				<ProductRequestForm>
					<div className="text" id="quote">
						<h2>An easy way to make request for products</h2>
						<p>
							Can't Find What You Need? Request It Here, and We'll Work Our
							Magic to Make It Available!
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
					<div className="service-card">
						<div className="card-top">
							<img src={lor} alt="" />
						</div>
						<div className="card-bottom">
							<Divider className="divider">
								<MdOutlineSearch />
							</Divider>
							<p>Localized market for the students’ needs</p>
						</div>
					</div>
					<div className="service-card">
						<div className="card-top">
							<img src={lol} alt="" />
						</div>
						<div className="card-bottom">
							<Divider className="divider" color="#00B517">
								<MdOutlineInventory2 />
							</Divider>
							<p>Product safety and return policy</p>
						</div>
					</div>
					<div className="service-card">
						<div className="card-top">
							<img src={log} alt="" />
						</div>
						<div className="card-bottom">
							<Divider className="divider" color="#FF9017">
								<MdSend color="white" />
							</Divider>
							<p>Fast, reliable logistic service</p>
						</div>
					</div>
					<div className="service-card">
						<div className="card-top">
							<img src={secure} alt="" />
						</div>
						<div className="card-bottom">
							<Divider className="divider" color="#FA3434">
								<GiCheckedShield />
							</Divider>
							<p>Secure payment methods</p>
						</div>
					</div>
				</Services>
			</section>

			<Newsletter>
				<h2>Subscribe on our newsletter</h2>
				<p>
					Get daily news on upcoming offers from many suppliers all over the
					campuses
				</p>
				<div>
					<IoMailOutline />
					<input type="text" placeholder="Email" />

					<Button
						width={90}
						height={30}
						padding={10}
						gap={10}
						background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
						color="#ffffff"
					>
						Subscribe
					</Button>
				</div>
			</Newsletter>
		</Home>
	);
};

const HomePage = () => {
	const activeModal = useSelector(selectActiveModal);
	const products = useSelector(selectProducts);

	return (
		<Layout
			layout={"full"}
			component={Screen}
			isLoading={!products}
			showModal={activeModal}
			popUpContent={
				activeModal === "skynet" ? <SkynetModal /> : <LogoutModal />
			}
			modalWidth={560}
		/>
	);
};

export default HomePage;
