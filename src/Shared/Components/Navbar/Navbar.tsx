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
} from "./navbar.style";
import { FaUserAlt } from "react-icons/fa";
import messageIcon from "../../../assets/messages.svg";
import profileIcon from "../../../assets/profile.svg";
import shopIcon from "../../../assets/shop.svg";
import cartIcon from "../../../assets/shopping-cart.svg";
import { BsCart3, BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTE } from "../../Constants";
import { BiUser } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { ImUser } from "react-icons/im";
import { logo } from "../../../assets";
import { categories } from "../../../test-data";
import { Badge } from "..";
import { useSelector } from "react-redux";
// import { newMessage } from "../../../Features/notifications/notificationSlice";
import { searchSuggestions } from "../../../Features/products/productSlice";
import useProducts from "../../../Features/products/productActions";
import useAuthentication from "../../Hooks/useAuth";

// Sidebar Component
const SideBar: React.FC<{ show: boolean; onClose: () => void }> = ({
	show,
	onClose,
}) => {
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
};

// Mobile Navbar Component
const MobileNavbar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
	const [show, setShow] = useState(false);

	const handleToggleSidebar = () => {
		setShow(!show);
	};

	// ...

	return (
		<>
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
						<BsCart3 size={26} />
						<BiUser size={26} />
					</Flex>
				</Wrapper>
				{/* Sidebar component */}
				<SideBar show={show} onClose={handleToggleSidebar} />
			</Container>
		</>
	);
};

// Desktop Navbar Component
const DesktopNavbar: React.FC<{ scrolled: boolean; mode?: string }> = ({
	scrolled,
	mode,
}) => {
	const { message } = useSelector((st: any) => st.notifications);
	// const dispatch = useDispatch();
	const nav = useNavigate();
	const { isAuthenticated } = useAuthentication();
	const [searching, setSearching] = useState(false);
	const searchOptions = useSelector(searchSuggestions);
	const [query, setQuery] = useState("");
	const { getSearchSuggestions } = useProducts();

	const handleSuggestions = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		getSearchSuggestions(e.target.value);
		// debounce(() => {
		//   getSearchSuggestions(e.target.value)
		// }, 300)
	};

	const handleSearch = () => {
		// getSearchProducts(query)
		console.log("clicked");
	};

	useEffect(() => {
		searchOptions.length > 1 && query !== ""
			? setSearching(true)
			: setSearching(false);
	}, [searchOptions, query]);

	return (
		<Container scrolled={scrolled} mode={mode}>
			<Wrapper>
				{/* Logo */}
				<NavLink className="logo" to={ROUTE.HOME}>
					<img width={"150"} src={logo} alt="logo" />
				</NavLink>
				{/* Search container */}
				{mode !== "blank" && (
					<>
						{mode !== "noSearch" && (
							<SearchContainer>
								<div className="searchbar">
									<input
										placeholder="Search products and services"
										value={query}
										onChange={handleSuggestions}
									/>
									<SearchSuggestions show={searching}>
										{searchOptions.map((suggestion, index) => (
											<Suggestion key={index}>{suggestion}</Suggestion>
										))}
									</SearchSuggestions>
								</div>
								<select>
									<option selected disabled value="">
										All Category
									</option>
									{categories.map((category, i) => {
										return <option key={i}>{category.title}</option>;
									})}
								</select>
								<button onClick={() => handleSearch()}>Search</button>
							</SearchContainer>
						)}
						{/* Menu icons */}
						<Menu>
							{isAuthenticated ? (
								<>
									<IconWrapper>
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
									{/* <IconWrapper onClick={() => dispatch(newMessage())}>
										<img src={shopIcon} alt="..." />
										<label>Orders</label>
									</IconWrapper> */}
									<IconWrapper onClick={() => nav(ROUTE.BUYER_ORDER)}>
										<img src={shopIcon} alt="..." />
										<label>Orders</label>
									</IconWrapper>
									<IconWrapper onClick={() => nav(ROUTE.CART)}>
										<Badge count={4} />
										<img src={cartIcon} alt="..." />
										<label>My cart</label>
									</IconWrapper>
								</>
							) : (
								<>
									<IconWrapper onClick={() => nav(ROUTE.CART)}>
										<Badge count={4} />
										<BsFillCartFill color="#BDC4CD" />
										<label>My cart</label>
									</IconWrapper>
									<IconWrapper onClick={() => nav(ROUTE.LOGIN)}>
										<FaUserAlt color="#BDC4CD" />
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
						<MenuItem to="#">Skynet</MenuItem>
						<MenuItem to="#">Food Basket</MenuItem>
						<MenuItem to="#">Resturants</MenuItem>
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
