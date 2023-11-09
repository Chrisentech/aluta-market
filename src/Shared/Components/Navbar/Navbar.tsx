import React, { useState } from "react";
import {
	Wrapper,
	Menu,
	SearchContainer,
	IconWrapper,
	Container,
	Flex,
	BlurredBackground,
	Sidebar,
} from "./navbar.style";
import { FaUser, FaUserAlt } from "react-icons/fa";
import { MdMessage, MdFavorite, MdLogin, MdLockClock } from "react-icons/md";
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
import { useDispatch, useSelector } from "react-redux";
import { newMessage } from "../../../Features/notifications/notificationSlice";
import useAuthentication from "../../Hooks/useAuth";

// Sidebar Component
const SideBar: React.FC<{ show: boolean; onClose: () => void }> = ({
	show,
	onClose,
}) => {
	return (
		<Sidebar show={show}>
			<RxCross2 size={26} className="dismiss" onClick={onClose} />
			<div className="title">
				<div>
					<ImUser size={26} />
					<span>Aluko Opeyemi</span>
				</div>
			</div>
		</Sidebar>
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
	const { isAuthenticated } = useAuthentication();
	const dispatch = useDispatch();
  const nav = useNavigate()
	console.log("User is logged in", isAuthenticated);
	return (
		<Container scrolled={scrolled} mode={mode}>
			<Wrapper>
				{/* Logo */}
				<NavLink className="logo" to={ROUTE.HOME}>
					<img width={"150"} src={logo} alt="logo" />
				</NavLink>
				{/* Search container */}
				{mode !== "blank" && (
					<SearchContainer>
						<input placeholder="Search products, brands and services" />
						<select>
							<option selected disabled value="">
								All Category
							</option>
							{categories.map((category, i) => {
								return <option key={i}>{category.title}</option>;
							})}
						</select>
						<button type="submit">Search</button>
					</SearchContainer>
				)}
				{/* Menu icons */}
				<Menu>
					{isAuthenticated ? (
						<>
							<IconWrapper>
								<FaUser color="#BDC4CD" />
								<label>Profile</label>
							</IconWrapper>
							<IconWrapper>
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

								<MdMessage color="#BDC4CD" />
								<label>Message</label>
							</IconWrapper>
							<IconWrapper onClick={() => dispatch(newMessage())}>
								<MdFavorite background="#BDC4CD" />
								<label>Orders</label>
							</IconWrapper>
							<IconWrapper>
								<Badge count={4} />
								<BsFillCartFill color="#BDC4CD" />
								<label>My cart</label>
							</IconWrapper>
						</>
					) : (
						<>
							<IconWrapper>
								<Badge count={4} />
								<BsFillCartFill color="#BDC4CD" />
								<label>My cart</label>
							</IconWrapper>
							<IconWrapper onClick={()=>nav(ROUTE.LOGIN)}>
								<FaUserAlt background="#BDC4CD" />
								<label>Sign in/ Sign Up</label>
							</IconWrapper>
						</>
					)}
				</Menu>
			</Wrapper>
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
