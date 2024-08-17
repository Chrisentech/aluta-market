import React, { useEffect, useState } from "react";
import {
	Wrapper,
	Menu,
	SearchContainer,
	IconWrapper,
	Container,
	Flex,
	BlurredBackground,
	Sidebar,
	SecondWrapper,
	MenuItem,
	SearchSuggestions,
	Suggestion,
	HomeNavbar,
} from "./navbar.style";
import { FaJediOrder, FaUserAlt } from "react-icons/fa";
import { showModal } from "../../../Features/modal/modalSlice";
import messageIcon from "../../../assets/messages.svg";
import profileIcon from "../../../assets/profile.svg";
import shopIcon from "../../../assets/shop.svg";
// import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTE } from "../../Constants";
import { RxCross2 } from "react-icons/rx";
import { ImUser } from "react-icons/im";
import {
	CartIcon,
	ContactIcon,
	logo,
	SearchIcon,
	ThreeDots,
} from "../../../assets";
import { categories } from "../../../test-data";
import { Badge } from "..";
import { useDispatch, useSelector } from "react-redux";
// import { newMessage } from "../../../Features/notifications/notificationSlice";
import { searchSuggestions } from "../../../Features/products/productSlice";
import useProducts from "../../../Features/products/productActions";
import useAuthentication from "../../Hooks/useAuth";
import { MdOutlineCancel } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { fetchMe } from "../../../Features/user/userSlice";
import useCart from "../../../Features/cart/cartAction";
import { ICartProps } from "../../../Interfaces";
import { debounce } from "lodash";
import { generateSlug } from "../../Utils/helperFunctions";

// Sidebar Component
const SideBar: React.FC<{
	show: boolean;
	onClose: () => void;
	type: string;
}> = ({ show, onClose, type }) => {
	// const nav = useNavigate();
	if (type === "dashboard") {
		return (
			<>
				<Sidebar show={show}>
					<RxCross2 size={26} className="dismiss" onClick={onClose} />
					<div className="title">
						<div>
							<ImUser size={26} />
							<span>Aluko Opeyemi</span>
						</div>
					</div>
				</Sidebar>
				<BlurredBackground show={show} onClick={onClose} />
			</>
		);
	}
	return (
		<>
			<HomeNavbar show={show}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<img src={logo} alt="..." onClick={onClose} />
					<MdOutlineCancel size={20} onClick={onClose} />
				</div>
				<div className="container">
					<ul>
						<li>
							<FaUserAlt size={20} color="#002" />
							<span>Profile</span>
						</li>

						<li>
							<FaMessage size={20} color="#002" />
							<span>Message</span>
						</li>

						<li>
							<FaJediOrder size={20} color="#002" />
							<span>Order</span>
						</li>

						<li>
							{/* <SearchContainer> */}
							<div className="searchbar">
								<input placeholder="Search products and services" />
							</div>
							{/* </SearchContainer> */}
						</li>
					</ul>
				</div>
			</HomeNavbar>
			<BlurredBackground show={show} onClick={onClose} />
		</>
	);
};

// Mobile Navbar Component
const MobileNavbar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
	const [show, setShow] = useState(false);
	const [type, _] = useState("");
	const handleToggleSidebar = () => {
		setShow(!show);
	};
	const { message } = useSelector((st: any) => st.notifications);
	const nav = useNavigate();
	const me: any = useSelector(fetchMe);
	// ...
	const [isToggled, setIsToggled] = useState(false);

	return (
		<div onClick={() => setIsToggled(false)}>
			{/* Blurred background when the Sidebar is open */}
			<BlurredBackground show={show} />
			<Container scrolled={scrolled}>
				<Wrapper>
					<Flex>
						{/* Hamburger menu to toggle the Sidebar */}
						<GiHamburgerMenu size={26} onClick={handleToggleSidebar} />
						<div className="logo">
							<img width={"150"} src={logo} alt="logo" />
						</div>
					</Flex>
					<Flex>
						<SearchIcon />
						<CartIcon color="#000" />
						<ThreeDots onClick={() => setIsToggled(!isToggled)} />
						{isToggled && (
							<div className="dropdown">
								<div className="offset"></div>
								<ul>
									<IconWrapper onClick={() => nav(ROUTE.BUYER_ORDER)}>
										<img src={shopIcon} alt="..." />
										<label>My Orders</label>
									</IconWrapper>
									<IconWrapper onClick={() => nav(ROUTE.MESSAGING + "/1")}>
										{message > 0 && (
											<Badge
												count={
													message < 10 ? (
														message
													) : (
														<small>
															9<span>+</span>
														</small>
													)
												}
											/>
										)}

										<img src={messageIcon} alt="#BDC4CD" />
										<label>Message</label>
									</IconWrapper>
									<IconWrapper
										onClick={() =>
											me?.usertype === "seller"
												? nav(ROUTE.SELLER_PROFILE)
												: nav(ROUTE.BUYER_PROFILE)
										}
									>
										<img src={profileIcon} alt="..." />
										<label>Profile</label>
									</IconWrapper>
									<IconWrapper
										onClick={() =>
											me?.usertype === "seller"
												? nav(ROUTE.SELLER_PROFILE)
												: nav(ROUTE.BUYER_PROFILE)
										}
									>
										<ContactIcon />
										<label>Contact Us</label>
									</IconWrapper>
								</ul>
							</div>
						)}
					</Flex>
				</Wrapper>
				{/* Sidebar component */}
				<SideBar type={type} show={show} onClose={handleToggleSidebar} />
			</Container>
		</div>
	);
};

// Desktop Navbar Component
const DesktopNavbar: React.FC<{ scrolled: boolean; mode?: string }> = ({
	scrolled,
	mode,
}) => {
	const { message } = useSelector((st: any) => st.notifications);
	const nav = useNavigate();
	const { isAuthenticated } = useAuthentication();
	const [searching, setSearching] = useState(false);
	const searchOptions = useSelector(searchSuggestions);
	const [query, setQuery] = useState("");
	const { getSearchSuggestions, getSearchProducts } = useProducts();
	const { getmyCart, cart } = useCart();
	const me: any = useSelector(fetchMe);
	const [cartItems, setCartItems] = useState<ICartProps | null>(cart);

	const handleSuggestions = debounce((query: string) => {
		getSearchSuggestions(query);
	}, 300);
	const dispatch = useDispatch();
	useEffect(() => {
		if (query.length >= 3) {
			handleSuggestions(query);
		}
		return () => {
			handleSuggestions.cancel();
		};
	}, [query]);

	const handleSearch = async () => {
		await getSearchProducts(query);
		nav({ pathname: ROUTE.SEARCH, search: `?query=${generateSlug(query)}` });
		console.log("clicked");
	};

	const handleSuggestionClicked = (query: string) => {
		setQuery(query);
		nav({ pathname: ROUTE.SEARCH, search: `?query=${generateSlug(query)}` });
	};

	const handleCart = async () => {
		if (!cartItems?.__typename) {
			const userId = me?.id || localStorage.getItem("usr_temp_id") || "0";
			await getmyCart(parseInt(userId, 10));
		}
	};

	useEffect(() => {
		handleCart();
	}, [me]);

	useEffect(() => {
		setCartItems(cart);
	}, [cart]);

	useEffect(() => {
		setSearching(searchOptions.length > 0 && query !== "");
	}, [searchOptions, query]);

	return (
		<Container
			scrolled={scrolled}
			mode={mode}
			onClick={() => setSearching(false)}
		>
			<Wrapper>
				<NavLink className="logo" to={ROUTE.HOME}>
					<img width={"150"} src={logo} alt="logo" />
				</NavLink>
				{mode !== "blank" && (
					<>
						{mode !== "noSearch" && (
							<SearchContainer>
								<div className="searchbar">
									<input
										placeholder="Search products and services"
										value={query}
										onChange={(e) => setQuery(e.target.value)}
										style={{ color: "#002" }}
									/>
									<SearchSuggestions show={searching}>
										{searchOptions.map((suggestion, index) => (
											<Suggestion
												key={index}
												onClick={() => handleSuggestionClicked(suggestion)}
											>
												{suggestion}
											</Suggestion>
										))}
									</SearchSuggestions>
								</div>
								<select>
									<option selected disabled value="">
										All Category
									</option>
									{categories.map((category, i) => (
										<option key={i}>{category.title}</option>
									))}
								</select>
								<button type="button" onClick={handleSearch}>
									Search
								</button>
							</SearchContainer>
						)}
						<Menu>
							{isAuthenticated ? (
								<>
									<IconWrapper
										onClick={() =>
											me?.usertype === "seller"
												? nav(ROUTE.SELLER_PROFILE)
												: nav(ROUTE.BUYER_PROFILE)
										}
									>
										<img src={profileIcon} alt="..." />
										<label>Profile</label>
									</IconWrapper>
									<IconWrapper onClick={() => nav(ROUTE.MESSAGING + "/1")}>
										{message > 0 && (
											<Badge
												count={
													message < 10 ? (
														message
													) : (
														<small>
															9<span>+</span>
														</small>
													)
												}
											/>
										)}

										<img src={messageIcon} alt="#BDC4CD" />
										<label>Message</label>
									</IconWrapper>
									<IconWrapper onClick={() => nav(ROUTE.BUYER_ORDER)}>
										<img src={shopIcon} alt="..." />
										<label>Orders</label>
									</IconWrapper>
									<IconWrapper onClick={() => nav(ROUTE.CART)}>
										{cartItems &&
											cartItems.items &&
											cartItems?.items?.length > 0 && (
												<Badge count={cartItems?.items?.length || 0} />
											)}
										<CartIcon />
										<label>My cart</label>
									</IconWrapper>
								</>
							) : (
								<>
									<IconWrapper onClick={() => nav(ROUTE.CART)}>
										{cartItems &&
											cartItems.items &&
											cartItems?.items?.length > 0 && (
												<Badge count={cartItems?.items?.length || 0} />
											)}
										<CartIcon />
										<label>My cart</label>
									</IconWrapper>
									<IconWrapper onClick={() => nav(ROUTE.LOGIN)}>
										<img src={profileIcon} alt="..." />
										<label>Sign in/ Sign Up</label>
									</IconWrapper>
								</>
							)}
						</Menu>
					</>
				)}
			</Wrapper>
			{mode !== "blank" && mode !== "noSearch" && (
				<>
					<hr />
					<SecondWrapper>
						<GiHamburgerMenu size={20} />
						<MenuItem to="#">All Categories</MenuItem>
						<MenuItem to="#">Hot Offers</MenuItem>
						<MenuItem to="#" onClick={() => dispatch(showModal("skynet"))}>
							Skynet
						</MenuItem>
						<MenuItem to="#">Food Basket</MenuItem>
						<MenuItem to="#">Restaurants</MenuItem>
						<MenuItem to="#">
							<select name="" id="">
								<option value="">Help</option>
							</select>
						</MenuItem>
					</SecondWrapper>
				</>
			)}
		</Container>
	);
};

// Main Navbar Component
const Navbar: React.FC<{
	isMobile: boolean;
	scrolled: boolean;
	mode?: string;
}> = ({ scrolled, isMobile, mode }) => {
	if (isMobile) {
		return <MobileNavbar scrolled={scrolled} />;
	}
	return <DesktopNavbar scrolled={scrolled} mode={mode} />;
};

export { Navbar, SideBar };
