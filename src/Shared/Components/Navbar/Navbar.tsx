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
	dashboard,
	logo,
	SearchIcon,
	ThreeDots,
} from "../../../assets";
import { categories } from "../../../test-data";
import { Badge, Dropdown } from "..";
import { useDispatch, useSelector } from "react-redux";
// import { newMessage } from "../../../Features/notifications/notificationSlice";
import { searchSuggestions } from "../../../Features/products/productSlice";
import useProducts from "../../../Features/products/productActions";
import useAuthentication from "../../Hooks/useAuth";
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
	const [selectedOption, setSelectedOption] = useState("null");
	const options = ["+ Create a new Store"];
	const navigate = useNavigate();
	const me: any = useSelector(fetchMe);

	const handleOptionClick = (option: string) => {
		if (option === "+ Create a new Store") {
			navigate(ROUTE.SELLER_CREATESTORE);
		} else {
			setSelectedOption(option);
		}
	};

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
				<header>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 10,
							// justifyContent: "space-between",
						}}
					>
						<span style={{ fontSize: 24 }} onClick={onClose}>
							&times;
						</span>
						<img src={logo} width={100} alt="..." onClick={onClose} />
						{/* < size={20}  /> */}
					</div>

					<SearchIcon />

					<ThreeDots />
				</header>

				<div className="container">
					{me?.usertype === "seller" && (
						<Dropdown
							background="#eff2f4"
							options={options}
							type="dropdown_one"
							allowHover={false}
							selectedOption={selectedOption}
							handleOptionClick={handleOptionClick}
							className="dropdown-two"
						/>
					)}
					<ul>
						<li>Skynet</li>
						<li>Food Basket</li>
						<li>Resturants</li>
						<li>Help</li>
					</ul>
					{/* Seller Menu */}
					{me?.usertype === "seller" && (
						<ul>
							<li onClick={() => navigate(ROUTE.SELLER_DASHBOARD)}>
								<img src={dashboard} width={20} />
								<span>Dashboard</span>
							</li>
							<li onClick={() => navigate(ROUTE.SELLER_PRODUCTS)}>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.25 23.2438C17.2165 23.2438 18 22.4603 18 21.4938C18 20.5273 17.2165 19.7438 16.25 19.7438C15.2835 19.7438 14.5 20.5273 14.5 21.4938C14.5 22.4603 15.2835 23.2438 16.25 23.2438Z"
										fill="url(#paint0_linear_6332_20785)"
									/>
									<path
										d="M8.25 23.2438C9.2165 23.2438 10 22.4603 10 21.4938C10 20.5273 9.2165 19.7438 8.25 19.7438C7.2835 19.7438 6.5 20.5273 6.5 21.4938C6.5 22.4603 7.2835 23.2438 8.25 23.2438Z"
										fill="url(#paint1_linear_6332_20785)"
									/>
									<path
										opacity="0.4"
										d="M4.84 4.68378L4.64 7.13377C4.6 7.60377 4.97 7.99377 5.44 7.99377H20.75C21.17 7.99377 21.52 7.67377 21.55 7.25377C21.68 5.48377 20.33 4.04378 18.56 4.04378H6.28999C6.18999 3.60378 5.98999 3.18377 5.67999 2.83377C5.18999 2.30377 4.49 1.99377 3.77 1.99377H2C1.59 1.99377 1.25 2.33377 1.25 2.74377C1.25 3.15377 1.59 3.49377 2 3.49377H3.74001C4.05001 3.49377 4.34 3.62378 4.55 3.84378C4.76 4.07378 4.86 4.37378 4.84 4.68378Z"
										fill="url(#paint2_linear_6332_20785)"
									/>
									<path
										d="M20.5101 9.49377H5.17006C4.75006 9.49377 4.41005 9.81377 4.37005 10.2238L4.01005 14.5738C3.87005 16.2738 5.21006 17.7438 6.92006 17.7438H18.0401C19.5401 17.7438 20.8601 16.5138 20.9701 15.0138L21.3001 10.3438C21.3401 9.88378 20.9801 9.49377 20.5101 9.49377Z"
										fill="url(#paint3_linear_6332_20785)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_6332_20785"
											x1="16.25"
											y1="19.7438"
											x2="16.25"
											y2="23.2438"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
										<linearGradient
											id="paint1_linear_6332_20785"
											x1="8.25"
											y1="19.7438"
											x2="8.25"
											y2="23.2438"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
										<linearGradient
											id="paint2_linear_6332_20785"
											x1="11.4043"
											y1="1.99377"
											x2="11.4043"
											y2="7.99377"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
										<linearGradient
											id="paint3_linear_6332_20785"
											x1="12.6515"
											y1="9.49377"
											x2="12.6515"
											y2="17.7438"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
									</defs>
								</svg>

								<span>Catalog</span>
							</li>
							<li onClick={() => navigate(ROUTE.SELLER_ORDERS)}>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M21.37 12.1338V18.1238C21.37 20.8838 19.13 23.1238 16.37 23.1238H7.63C4.87 23.1238 2.63 20.8838 2.63 18.1238V12.2038C3.39 13.0238 4.47 13.4938 5.64 13.4938C6.9 13.4938 8.11 12.8638 8.87 11.8538C9.55 12.8638 10.71 13.4938 12 13.4938C13.28 13.4938 14.42 12.8938 15.11 11.8938C15.88 12.8838 17.07 13.4938 18.31 13.4938C19.52 13.4938 20.62 13.0038 21.37 12.1338Z"
										fill="#FF9017"
									/>
									<path
										d="M14.99 1.99377H8.98997L8.24997 9.35377C8.18997 10.0338 8.28997 10.6738 8.53997 11.2538C9.11997 12.6138 10.48 13.4938 12 13.4938C13.54 13.4938 14.87 12.6338 15.47 11.2638C15.65 10.8338 15.76 10.3338 15.77 9.82377V9.63377L14.99 1.99377Z"
										fill="#FF9017"
									/>
									<path
										opacity="0.6"
										d="M22.36 9.01377L22.07 6.24377C21.65 3.22377 20.28 1.99377 17.35 1.99377H13.51L14.25 9.49377C14.26 9.59377 14.27 9.70377 14.27 9.89377C14.33 10.4138 14.49 10.8938 14.73 11.3238C15.45 12.6438 16.85 13.4938 18.31 13.4938C19.64 13.4938 20.84 12.9038 21.59 11.8638C22.19 11.0638 22.46 10.0538 22.36 9.01377Z"
										fill="#FF9017"
									/>
									<path
										opacity="0.6"
										d="M6.59002 1.99377C3.65002 1.99377 2.29002 3.22377 1.86002 6.27377L1.59002 9.02377C1.49002 10.0938 1.78002 11.1338 2.41002 11.9438C3.17002 12.9338 4.34002 13.4938 5.64002 13.4938C7.10002 13.4938 8.50002 12.6438 9.21002 11.3438C9.47002 10.8938 9.64002 10.3738 9.69002 9.83377L10.47 2.00377H6.59002V1.99377Z"
										fill="#FF9017"
									/>
									<path
										d="M11.35 17.4038C10.08 17.5338 9.12 18.6138 9.12 19.8938V23.1238H14.87V20.2438C14.88 18.1538 13.65 17.1638 11.35 17.4038Z"
										fill="#FF9017"
									/>
								</svg>
								<span>Orders</span>
							</li>
							<li onClick={() => navigate(ROUTE.SELLER_PAYMENT)}>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5 15.7438C4.06 15.7438 3.19 16.0738 2.5 16.6238C1.58 17.3538 1 18.4838 1 19.7438C1 20.4938 1.21 21.2038 1.58 21.8038C2.27 22.9638 3.54 23.7438 5 23.7438C6.01 23.7438 6.93001 23.3738 7.63 22.7438C7.94 22.4838 8.21 22.1638 8.42 21.8038C8.79 21.2038 9 20.4938 9 19.7438C9 17.5338 7.21 15.7438 5 15.7438ZM7.07001 19.3138L4.94 21.2838C4.8 21.4138 4.60999 21.4838 4.42999 21.4838C4.23999 21.4838 4.04999 21.4138 3.89999 21.2638L2.91 20.2738C2.62 19.9838 2.62 19.5037 2.91 19.2137C3.2 18.9237 3.68 18.9237 3.97 19.2137L4.45 19.6938L6.05 18.2137C6.35 17.9337 6.83 17.9538 7.11 18.2538C7.39 18.5538 7.37001 19.0338 7.07001 19.3138Z"
										fill="#0D6EFD"
									/>
									<path
										opacity="0.4"
										d="M19.48 13.6938H21.5V12.2538C21.5 10.1838 19.81 8.49377 17.74 8.49377H6.25999C4.18999 8.49377 2.5 10.1838 2.5 12.2538V16.6238C3.19 16.0738 4.06 15.7438 5 15.7438C7.21 15.7438 9 17.5338 9 19.7438C9 20.4938 8.79 21.2038 8.42 21.8038C8.21 22.1638 7.94 22.4838 7.63 22.7438H17.74C19.81 22.7438 21.5 21.0538 21.5 18.9838V17.7938H19.6C18.52 17.7938 17.53 17.0038 17.44 15.9238C17.38 15.2938 17.62 14.7038 18.04 14.2938C18.41 13.9138 18.92 13.6938 19.48 13.6938Z"
										fill="#0D6EFD"
									/>
									<path
										d="M14.85 4.69378V8.49376H6.25999C4.18999 8.49376 2.5 10.1838 2.5 12.2538V8.58379C2.5 7.39379 3.23 6.33375 4.34 5.91375L12.28 2.91375C13.52 2.45375 14.85 3.36378 14.85 4.69378Z"
										fill="#0D6EFD"
									/>
									<path
										d="M22.56 14.7138V16.7739C22.56 17.3239 22.12 17.7738 21.56 17.7938H19.6C18.52 17.7938 17.53 17.0038 17.44 15.9238C17.38 15.2938 17.62 14.7038 18.04 14.2938C18.41 13.9138 18.92 13.6938 19.48 13.6938H21.56C22.12 13.7138 22.56 14.1638 22.56 14.7138Z"
										fill="#0D6EFD"
									/>
									<path
										d="M14 13.4938H7C6.59 13.4938 6.25 13.1538 6.25 12.7438C6.25 12.3338 6.59 11.9938 7 11.9938H14C14.41 11.9938 14.75 12.3338 14.75 12.7438C14.75 13.1538 14.41 13.4938 14 13.4938Z"
										fill="#0D6EFD"
									/>
								</svg>

								<span>Payments</span>
							</li>
							<li onClick={() => navigate(ROUTE.SELLER_REVIEWS)}>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M21 7.74377V17.7438C21 20.7438 19.5 22.7438 16 22.7438H8C4.5 22.7438 3 20.7438 3 17.7438V7.74377C3 4.74377 4.5 2.74377 8 2.74377H16C19.5 2.74377 21 4.74377 21 7.74377Z"
										fill="#FF9017"
									/>
									<path
										d="M18.5 9.99377H16.5C14.98 9.99377 13.75 8.76377 13.75 7.24377V5.24377C13.75 4.83377 14.09 4.49377 14.5 4.49377C14.91 4.49377 15.25 4.83377 15.25 5.24377V7.24377C15.25 7.93377 15.81 8.49377 16.5 8.49377H18.5C18.91 8.49377 19.25 8.83377 19.25 9.24377C19.25 9.65377 18.91 9.99377 18.5 9.99377Z"
										fill="#FF9017"
									/>
									<path
										d="M12 14.4938H8C7.59 14.4938 7.25 14.1538 7.25 13.7438C7.25 13.3338 7.59 12.9938 8 12.9938H12C12.41 12.9938 12.75 13.3338 12.75 13.7438C12.75 14.1538 12.41 14.4938 12 14.4938Z"
										fill="#FF9017"
									/>
									<path
										d="M16 18.4938H8C7.59 18.4938 7.25 18.1538 7.25 17.7438C7.25 17.3338 7.59 16.9938 8 16.9938H16C16.41 16.9938 16.75 17.3338 16.75 17.7438C16.75 18.1538 16.41 18.4938 16 18.4938Z"
										fill="#FF9017"
									/>
								</svg>
								<span>Reviews</span>
							</li>
							<li onClick={() => navigate(ROUTE.SELLER_STORESETTINGS)}>
								<svg
									width="21"
									height="20"
									viewBox="0 0 21 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M0.963501 10.6238V8.86383C0.963501 7.82383 1.81291 6.96383 2.86218 6.96383C4.67093 6.96383 5.41041 5.68383 4.50104 4.11383C3.98141 3.21383 4.29119 2.04383 5.20056 1.52383L6.92936 0.533833C7.71881 0.0638329 8.7381 0.343833 9.20778 1.13383L9.3177 1.32383C10.2171 2.89383 11.696 2.89383 12.6054 1.32383L12.7153 1.13383C13.185 0.343833 14.2043 0.0638329 14.9938 0.533833L16.7226 1.52383C17.6319 2.04383 17.9417 3.21383 17.4221 4.11383C16.5127 5.68383 17.2522 6.96383 19.0609 6.96383C20.1002 6.96383 20.9596 7.81383 20.9596 8.86383V10.6238C20.9596 11.6638 20.1102 12.5238 19.0609 12.5238C17.2522 12.5238 16.5127 13.8038 17.4221 15.3738C17.9417 16.2838 17.6319 17.4438 16.7226 17.9638L14.9938 18.9538C14.2043 19.4238 13.185 19.1438 12.7153 18.3538L12.6054 18.1638C11.706 16.5938 10.2271 16.5938 9.3177 18.1638L9.20778 18.3538C8.7381 19.1438 7.71881 19.4238 6.92936 18.9538L5.20056 17.9638C4.29119 17.4438 3.98141 16.2738 4.50104 15.3738C5.41041 13.8038 4.67093 12.5238 2.86218 12.5238C1.81291 12.5238 0.963501 11.6638 0.963501 10.6238Z"
										fill="url(#paint0_linear_5564_31598)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_5564_31598"
											x1="10.9616"
											y1="0.304932"
											x2="10.9616"
											y2="19.1827"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
									</defs>
								</svg>

								<span>Store settings</span>
							</li>
						</ul>
					)}

					{me?.usertype === "buyer" && (
						<ul>
							<li onClick={() => navigate(ROUTE.BUYER_ORDER)}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.40002 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.47 17.53C20.76 19.99 20 22 16.5 22H7.51003C4.00003 22 3.24002 19.99 3.54002 17.53L4.44003 10.03C4.66003 8.09 5.00002 6.5 8.40002 6.5Z"
										stroke="#FA3434"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8"
										stroke="#FA3434"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M20.41 17.03H8"
										stroke="#FA3434"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										opacity="0.4"
										d="M16.49 22H7.50996C3.99996 22 3.23997 19.99 3.52997 17.53L4.42996 10.03C4.65996 8.09 4.99996 6.5 8.39996 6.5H15.6C19 6.5 19.34 8.09 19.57 10.03L20.32 16.28L20.47 17.53C20.48 17.61 20.49 17.69 20.5 17.77C20.71 20.12 19.89 22 16.49 22Z"
										fill="#FA3434"
									/>
									<path
										d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z"
										fill="#FA3434"
									/>
									<path
										d="M20.5 17.77C20.47 17.78 20.44 17.78 20.41 17.78H8C7.59 17.78 7.25 17.44 7.25 17.03C7.25 16.61 7.59 16.28 8 16.28H20.32L20.47 17.53C20.48 17.61 20.49 17.69 20.5 17.77Z"
										fill="#FA3434"
									/>
								</svg>
								<span>My Orders</span>
							</li>
							<li onClick={() => navigate(ROUTE.BUYER_SAVED_ORDER)}>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22 9.43375C22 10.6237 21.81 11.7237 21.48 12.7437H2.52C2.19 11.7237 2 10.6237 2 9.43375C2 6.34375 4.49 3.84375 7.56 3.84375C9.37 3.84375 10.99 4.72375 12 6.07375C13.01 4.72375 14.63 3.84375 16.44 3.84375C19.51 3.84375 22 6.34375 22 9.43375Z"
										fill="#FF9017"
									/>
									<path
										opacity="0.4"
										d="M21.48 12.7438C19.9 17.7438 15.03 20.7338 12.62 21.5538C12.28 21.6738 11.72 21.6738 11.38 21.5538C8.97002 20.7338 4.10002 17.7438 2.52002 12.7438H21.48Z"
										fill="#FF9017"
									/>
								</svg>
								<span>Saved For Later</span>
							</li>
							<li onClick={() => navigate(ROUTE.BUYER_STORES_FOLLOWED)}>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M9 2.48755C6.38 2.48755 4.25 4.61755 4.25 7.23755C4.25 9.80755 6.26 11.8875 8.88 11.9775C8.96 11.9675 9.04 11.9675 9.1 11.9775C9.12 11.9775 9.13 11.9775 9.15 11.9775C9.16 11.9775 9.16 11.9775 9.17 11.9775C11.73 11.8875 13.74 9.80755 13.75 7.23755C13.75 4.61755 11.62 2.48755 9 2.48755Z"
										fill="#00B517"
									/>
									<path
										d="M14.08 14.6376C11.29 12.7776 6.73996 12.7776 3.92996 14.6376C2.65996 15.4876 1.95996 16.6376 1.95996 17.8676C1.95996 19.0976 2.65996 20.2376 3.91996 21.0776C5.31996 22.0176 7.15996 22.4876 8.99996 22.4876C10.84 22.4876 12.68 22.0176 14.08 21.0776C15.34 20.2276 16.04 19.0876 16.04 17.8476C16.03 16.6176 15.34 15.4776 14.08 14.6376Z"
										fill="#00B517"
									/>
									<path
										opacity="0.4"
										d="M19.99 7.82753C20.15 9.76753 18.77 11.4675 16.86 11.6975C16.85 11.6975 16.85 11.6975 16.84 11.6975H16.81C16.75 11.6975 16.69 11.6975 16.64 11.7175C15.67 11.7675 14.78 11.4575 14.11 10.8875C15.14 9.96753 15.73 8.58753 15.61 7.08753C15.54 6.27753 15.26 5.53753 14.84 4.90753C15.22 4.71753 15.66 4.59753 16.11 4.55753C18.07 4.38753 19.82 5.84753 19.99 7.82753Z"
										fill="#00B517"
									/>
									<path
										d="M21.99 17.0776C21.91 18.0476 21.29 18.8876 20.25 19.4576C19.25 20.0076 17.99 20.2676 16.74 20.2376C17.46 19.5876 17.88 18.7776 17.96 17.9176C18.06 16.6776 17.47 15.4876 16.29 14.5376C15.62 14.0076 14.84 13.5876 13.99 13.2776C16.2 12.6376 18.98 13.0676 20.69 14.4476C21.61 15.1876 22.08 16.1176 21.99 17.0776Z"
										fill="#00B517"
									/>
								</svg>
								<span>Followed Stores</span>
							</li>
							<li onClick={() => navigate(ROUTE.BUYER_PRODUCT_REVIEW)}>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M21 7.48755V17.4875C21 20.4875 19.5 22.4875 16 22.4875H8C4.5 22.4875 3 20.4875 3 17.4875V7.48755C3 4.48755 4.5 2.48755 8 2.48755H16C19.5 2.48755 21 4.48755 21 7.48755Z"
										fill="#FF9017"
									/>
									<path
										d="M18.5 9.73755H16.5C14.98 9.73755 13.75 8.50755 13.75 6.98755V4.98755C13.75 4.57755 14.09 4.23755 14.5 4.23755C14.91 4.23755 15.25 4.57755 15.25 4.98755V6.98755C15.25 7.67755 15.81 8.23755 16.5 8.23755H18.5C18.91 8.23755 19.25 8.57755 19.25 8.98755C19.25 9.39755 18.91 9.73755 18.5 9.73755Z"
										fill="#FF9017"
									/>
									<path
										d="M12 14.2375H8C7.59 14.2375 7.25 13.8975 7.25 13.4875C7.25 13.0775 7.59 12.7375 8 12.7375H12C12.41 12.7375 12.75 13.0775 12.75 13.4875C12.75 13.8975 12.41 14.2375 12 14.2375Z"
										fill="#FF9017"
									/>
									<path
										d="M16 18.2375H8C7.59 18.2375 7.25 17.8975 7.25 17.4875C7.25 17.0775 7.59 16.7375 8 16.7375H16C16.41 16.7375 16.75 17.0775 16.75 17.4875C16.75 17.8975 16.41 18.2375 16 18.2375Z"
										fill="#FF9017"
									/>
								</svg>

								<span>Rate and Review</span>
							</li>
							<li onClick={() => navigate(ROUTE.SELLER_CREATESTORE)}>
								<svg
									width="25"
									height="25"
									viewBox="0 0 25 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M12 16.1875V16.7975H2V16.1875C2 14.4275 2.43997 13.9875 4.21997 13.9875H9.78003C11.56 13.9875 12 14.4275 12 16.1875Z"
										fill="url(#paint0_linear_5564_31628)"
									/>
									<path
										d="M2 16.7976V18.2976V20.2876C2 22.0476 2.43997 22.4876 4.21997 22.4876H9.78003C11.56 22.4876 12 22.0476 12 20.2876V18.2976V16.7976H2Z"
										fill="url(#paint1_linear_5564_31628)"
									/>
									<g opacity="0.4">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M22 14.7375C22.4142 14.7375 22.75 15.0733 22.75 15.4875C22.75 19.7718 19.2842 23.2375 15 23.2375C14.7298 23.2375 14.4805 23.0922 14.3474 22.8571C14.2142 22.6219 14.2179 22.3334 14.3569 22.1017L15.4069 20.3517C15.62 19.9965 16.0807 19.8813 16.4359 20.0944C16.791 20.3075 16.9062 20.7682 16.6931 21.1234L16.4218 21.5756C19.1909 20.9332 21.25 18.4541 21.25 15.4875C21.25 15.0733 21.5858 14.7375 22 14.7375Z"
											fill="url(#paint2_linear_5564_31628)"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M7.57821 3.39948C4.8091 4.04191 2.75 6.52097 2.75 9.48755C2.75 9.90176 2.41421 10.2375 2 10.2375C1.58579 10.2375 1.25 9.90176 1.25 9.48755C1.25 5.20334 4.71579 1.73755 9 1.73755C9.2702 1.73755 9.51952 1.88289 9.65265 2.11802C9.78578 2.35315 9.78214 2.64172 9.64312 2.87342L8.59313 4.62342C8.38002 4.9786 7.91933 5.09378 7.56414 4.88067C7.20896 4.66756 7.09378 4.20687 7.30689 3.85168L7.57821 3.39948Z"
											fill="url(#paint3_linear_5564_31628)"
										/>
									</g>
									<path
										opacity="0.4"
										d="M23 6.98755H14C14 9.46755 16.02 11.4875 18.5 11.4875C20.99 11.4875 23 9.46755 23 6.98755Z"
										fill="url(#paint4_linear_5564_31628)"
									/>
									<path
										d="M23 6.98755C23 4.49755 20.99 2.48755 18.5 2.48755C16.02 2.48755 14 4.49755 14 6.98755H23Z"
										fill="url(#paint5_linear_5564_31628)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_5564_31628"
											x1="7"
											y1="13.9875"
											x2="7"
											y2="16.7975"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
										<linearGradient
											id="paint1_linear_5564_31628"
											x1="7"
											y1="16.7976"
											x2="7"
											y2="22.4876"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
										<linearGradient
											id="paint2_linear_5564_31628"
											x1="18.5"
											y1="14.7375"
											x2="18.5"
											y2="23.2375"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
										<linearGradient
											id="paint3_linear_5564_31628"
											x1="5.5"
											y1="1.73755"
											x2="5.5"
											y2="10.2375"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
										<linearGradient
											id="paint4_linear_5564_31628"
											x1="18.5"
											y1="6.98755"
											x2="18.5"
											y2="11.4875"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
										<linearGradient
											id="paint5_linear_5564_31628"
											x1="18.5"
											y1="2.48755"
											x2="18.5"
											y2="6.98755"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#FF7612" />
											<stop offset="1" stop-color="#FF001F" />
										</linearGradient>
									</defs>
								</svg>
								<span>Become a seller</span>
							</li>
							<li onClick={() => navigate(ROUTE.BUYER_DOWNLOAD)}>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.8 9.48755H12.75V13.9275L14.82 11.8575C14.97 11.7075 15.16 11.6375 15.35 11.6375C15.54 11.6375 15.73 11.7075 15.88 11.8575C16.17 12.1475 16.17 12.6275 15.88 12.9175L12.53 16.2675C12.24 16.5575 11.76 16.5575 11.47 16.2675L8.12 12.9175C7.83 12.6275 7.83 12.1475 8.12 11.8575C8.41 11.5675 8.89 11.5675 9.18 11.8575L11.25 13.9275V9.48755H7.2C4 9.48755 2 11.4875 2 14.6875V17.2775C2 20.4875 4 22.4875 7.2 22.4875H16.79C19.99 22.4875 21.99 20.4875 21.99 17.2875V14.6875C22 11.4875 20 9.48755 16.8 9.48755Z"
										fill="#0D6EFD"
									/>
									<path
										d="M12.75 3.23755C12.75 2.82755 12.41 2.48755 12 2.48755C11.59 2.48755 11.25 2.82755 11.25 3.23755V9.48755H12.75V3.23755Z"
										fill="#0D6EFD"
									/>
								</svg>
								<span>Downloads</span>
							</li>
						</ul>
					)}

					<ul style={{ borderBottom: "none" }}>
						<li>
							<svg
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.4"
									d="M18.9524 19.4479H18.1929C17.3934 19.4479 16.634 19.7553 16.0744 20.3107L14.3655 21.9867C13.5861 22.7504 12.317 22.7504 11.5375 21.9867L9.82869 20.3107C9.26908 19.7553 8.49962 19.4479 7.71017 19.4479H6.96069C5.30184 19.4479 3.96277 18.1289 3.96277 16.5025V5.68261C3.96277 4.05616 5.30184 2.73718 6.96069 2.73718H18.9524C20.6112 2.73718 21.9503 4.05616 21.9503 5.68261V16.5025C21.9503 18.119 20.6112 19.4479 18.9524 19.4479Z"
									fill="#0D6EFD"
								/>
								<path
									d="M12.9565 11.0677C14.2424 11.0677 15.2849 10.0332 15.2849 8.75705C15.2849 7.48086 14.2424 6.44629 12.9565 6.44629C11.6705 6.44629 10.6281 7.48086 10.6281 8.75705C10.6281 10.0332 11.6705 11.0677 12.9565 11.0677Z"
									fill="#0D6EFD"
								/>
								<path
									d="M15.6346 15.6794C16.444 15.6794 16.9137 14.7868 16.464 14.1223C15.7845 13.1207 14.4654 12.4463 12.9565 12.4463C11.4475 12.4463 10.1284 13.1207 9.4489 14.1223C8.99921 14.7868 9.4689 15.6794 10.2783 15.6794H15.6346Z"
									fill="#0D6EFD"
								/>
							</svg>
							<span>Profile</span>
						</li>
						<li>
							<svg
								width="24"
								height="25"
								viewBox="0 0 24 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.2"
									d="M16.19 2.74377H7.82002C4.18002 2.74377 2.01001 4.91377 2.01001 8.55377V16.9238C2.01001 20.5638 4.18002 22.7338 7.82002 22.7338H16.19C19.83 22.7338 22 20.5638 22 16.9238V8.55377C22 4.91377 19.83 2.74377 16.19 2.74377Z"
									fill="#FA3434"
								/>
								<path
									d="M9.16997 14.8338C9.35997 14.8338 9.54997 14.7638 9.69997 14.6138L14.08 10.2338V12.6638C14.08 13.0738 14.42 13.4138 14.83 13.4138C15.24 13.4138 15.58 13.0738 15.58 12.6638V8.42382C15.58 8.32382 15.56 8.23382 15.52 8.13382C15.44 7.95382 15.3 7.80382 15.11 7.72382C15.02 7.68382 14.92 7.66382 14.82 7.66382H10.58C10.17 7.66382 9.82997 8.00382 9.82997 8.41382C9.82997 8.82382 10.17 9.16382 10.58 9.16382H13.01L8.62998 13.5438C8.33998 13.8338 8.33998 14.3138 8.62998 14.6038C8.78998 14.7638 8.97997 14.8338 9.16997 14.8338Z"
									fill="#FA3434"
								/>
								<path
									d="M18.7099 17.0239C18.5799 16.6339 18.1599 16.4239 17.7599 16.5539C14.0399 17.7939 9.94993 17.7939 6.22993 16.5539C5.83993 16.4239 5.40994 16.6339 5.27994 17.0239C5.14994 17.4139 5.35994 17.8439 5.74994 17.9739C7.75994 18.6439 9.86994 18.9839 11.9899 18.9839C14.1099 18.9839 16.2199 18.6439 18.2299 17.9739C18.6299 17.8339 18.8399 17.4139 18.7099 17.0239Z"
									fill="#FA3434"
								/>
							</svg>
							<span>Log Out</span>
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
						<GiHamburgerMenu size={20} onClick={handleToggleSidebar} />
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
									<IconWrapper
										onClick={() => nav(ROUTE.MESSAGING + "/" + me?.id)}
									>
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
						{/**<GiHamburgerMenu size={20} />*/}
						{/**<MenuItem to="#">All Categories</MenuItem>*/}
						{/**<MenuItem to="#">Hot Offers</MenuItem>*/}
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
