import React, { ReactNode, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	Wrapper,
	Sidebar,
	SidebarMenu,
	SidebarMenuLinks,
	CustomLink,
	MenuTop,
} from "./dashboard.style";
// import { PiGridFourFill } from "react-icons/pi";

// import { HiMiniShoppingCart, HiOutlineDocumentText } from "react-icons/hi";
import { ROUTE } from "../../Shared/Constants";
import { Dropdown } from "../../Shared/Components";
import {
	BagFilled,
	BagUnFilled,
	BecomeFilled,
	BecomeUnfilled,
	DownloadUnfilled,
	Download_Filled,
	Follow,
	FollowFilled,
	HeartFilled,
	HeartUnFilled,
	RateFilled,
	dashboard,
	dashboardUnfilled,
	documentText,
	documentTextUnfilled,
	emptyWallet,
	emptyWalletUnfilled,
	sendSquare,
	settings,
	settingsUnfilled,
	shop,
	shopUnfilled,
	shoppingCart,
	shoppingCartUnfilled,
	userTag,
	userTagUnfilled,
} from "../../assets";
import useStore from "../../Features/store/storeAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../../Features/user/userSlice";
import { showModal } from "../../Features/modal/modalSlice";
// import useStore from "../../Features/store/storeAction";
// import { useSelector } from "react-redux";
interface IScreenProps {
	children: ReactNode;
}

const Screen: React.FC<IScreenProps> = ({ children }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const currentPath = location.pathname;
	const me: any = useSelector(fetchMe);
	const { getMyStores } = useStore();
	const options = ["+ Create a new Store"];
	const [active, setActive] = useState("");
	const [selectedOption, setSelectedOption] = useState("null");
	useEffect(() => {
		me?.usertype === "seller" &&
			getMyStores({ user: me?.id, limit: 100, offset: 0 });
	}, [me]);

	const handleOptionClick = (option: string) => {
		if (option === "+ Create a new Store") {
			navigate(ROUTE.SELLER_CREATESTORE);
		} else {
			setSelectedOption(option);
		}
	};

	useEffect(() => {
		localStorage.setItem("isDashboard", "true");
	}, []);
	useEffect(() => {
		// Based on the current path, update the active state
		if (currentPath === ROUTE.SELLER_DASHBOARD) {
			setActive("dashboard");
		} else if (
			currentPath === ROUTE.SELLER_PRODUCTS ||
			currentPath === ROUTE.SELLER_ADDPRODUCT ||
			currentPath === ROUTE.SELLER_NEWPRODUCT ||
			currentPath.includes(ROUTE.SELLER_EDITPRODUCT) ||
			currentPath === ROUTE.SELLER_PRODUCTTYPE
		) {
			setActive("catalog");
		} else if (currentPath === "#") {
			setActive("orders");
		} else if (
			currentPath === ROUTE.SELLER_PAYMENT ||
			currentPath.includes(ROUTE.SELLER_PAYMENT)
		) {
			setActive("payments");
		} else if (
			currentPath === ROUTE.SELLER_REVIEWS ||
			currentPath.includes(ROUTE.SELLER_REVIEWS)
		) {
			setActive("reviews");
		} else if (
			currentPath === ROUTE.SELLER_ORDERS ||
			currentPath.includes(ROUTE.SELLER_ORDERS)
		) {
			setActive("orders");
		} else if (
			currentPath === ROUTE.SELLER_STORESETTINGS ||
			currentPath.includes(ROUTE.SELLER_CREATESTORE)
		) {
			setActive("settings");
		} else if (
			currentPath === ROUTE.SELLER_PROFILE ||
			currentPath === ROUTE.BUYER_PROFILE
		) {
			setActive("profile");
		} else if (
			currentPath === ROUTE.BUYER_ORDER ||
			currentPath.includes(ROUTE.BUYER_ORDER)
		) {
			setActive("buyer_order");
		} else if (
			currentPath === ROUTE.BUYER_SAVED_ORDER ||
			currentPath.includes(ROUTE.BUYER_SAVED_ORDER)
		) {
			setActive("saved");
		} else if (
			currentPath === ROUTE.BUYER_STORES_FOLLOWED ||
			currentPath.includes(ROUTE.BUYER_STORES_FOLLOWED)
		) {
			setActive("follow");
		} else if (
			currentPath === ROUTE.BUYER_PRODUCT_REVIEW ||
			currentPath.includes(ROUTE.BUYER_PRODUCT_REVIEW)
		) {
			setActive("rate");
		} else if (
			currentPath === ROUTE.BUYER_DOWNLOAD ||
			currentPath.includes(ROUTE.BUYER_DOWNLOAD)
		) {
			setActive("download");
		} else {
			setActive(""); // Set default active state here
		}
	}, [currentPath]);
	return (
		<Wrapper>
			{me?.usertype === "seller" ? (
				<Sidebar>
					<Dropdown
						background="#eff2f4"
						options={options}
						type="dropdown_one"
						allowHover={false}
						selectedOption={selectedOption}
						handleOptionClick={handleOptionClick}
						className="dropdown-one"
					/>
					<SidebarMenu>
						<MenuTop>
							<SidebarMenuLinks
								active={active === "dashboard"}
								onClick={() => setActive("dashboard")}
								color="#00B517"
							>
								<Link to={ROUTE.SELLER_DASHBOARD}>
									{active === "dashboard" ? (
										<img src={dashboard} />
									) : (
										<img src={dashboardUnfilled} />
									)}{" "}
									Dashboard
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks
								active={active === "catalog"}
								onClick={() => setActive("catalog")}
								color="#FF001F"
							>
								<Link to={ROUTE.SELLER_PRODUCTS}>
									{active === "catalog" ? (
										<img src={shoppingCart} />
									) : (
										<img src={shoppingCartUnfilled} />
									)}{" "}
									Catalog
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks
								active={active === "orders"}
								color="#FF9017"
								onClick={() => {
									setActive("orders");
								}}
							>
								<Link to={ROUTE.SELLER_ORDERS}>
									{active === "orders" ? (
										<img src={shop} />
									) : (
										<img src={shopUnfilled} />
									)}{" "}
									Orders
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks
								active={active === "payments"}
								onClick={() => {
									setActive("payments");
								}}
								color="#0D6EFD"
							>
								<Link to={ROUTE.SELLER_PAYMENT}>
									{active === "payments" ? (
										<img src={emptyWallet} />
									) : (
										<img src={emptyWalletUnfilled} />
									)}{" "}
									Payments
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks
								active={active === "reviews"}
								onClick={() => setActive("reviews")}
								color="#FF9017"
							>
								<Link to={ROUTE.SELLER_REVIEWS}>
									{active === "reviews" ? (
										<img src={documentText} />
									) : (
										<img src={documentTextUnfilled} />
									)}{" "}
									Reviews
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks
								active={active === "settings"}
								onClick={() => setActive("settings")}
								color="#FF001F"
							>
								<Link to={ROUTE.SELLER_STORESETTINGS}>
									{active === "settings" ? (
										<img src={settings} />
									) : (
										<img src={settingsUnfilled} />
									)}{" "}
									Store Settings
								</Link>
							</SidebarMenuLinks>
						</MenuTop>
						<CustomLink>
							<hr />
							<SidebarMenuLinks
								active={active === "profile"}
								onClick={() => setActive("profile")}
								color="#0D6EFD"
							>
								<Link to={ROUTE.SELLER_PROFILE}>
									{active === "profile" ? (
										<img src={userTag} />
									) : (
										<img src={userTagUnfilled} />
									)}{" "}
									My Profile
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks onClick={() => dispatch(showModal("logout"))}>
								<div
									style={{
										display: "flex",
										gap: 10,
										alignItems: "center",
										color: "#8b96a5",
									}}
								>
									<img src={sendSquare} /> <span>Log out</span>
								</div>
							</SidebarMenuLinks>
						</CustomLink>
					</SidebarMenu>
				</Sidebar>
			) : (
				<Sidebar>
					<SidebarMenu>
						<MenuTop>
							<SidebarMenuLinks
								active={active === "buyer_order"}
								onClick={() => setActive("buyer_order")}
								color="#FA3434"
							>
								<Link to={ROUTE.BUYER_ORDER}>
									{active === "buyer_order" ? (
										<img src={BagFilled} />
									) : (
										<img src={BagUnFilled} />
									)}{" "}
									My Orders
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks
								active={active === "saved"}
								onClick={() => setActive("saved")}
								color="#FF9017"
							>
								<Link to={ROUTE.BUYER_SAVED_ORDER}>
									{active === "saved" ? (
										<img src={HeartFilled} />
									) : (
										<img src={HeartUnFilled} />
									)}{" "}
									Saved For Later
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks
								active={active === "follow"}
								color="#00B517"
								onClick={() => {
									setActive("follow");
								}}
							>
								<Link to={ROUTE.BUYER_STORES_FOLLOWED}>
									{active === "follow" ? (
										<img src={FollowFilled} />
									) : (
										<img src={Follow} />
									)}{" "}
									Followed Stores
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks
								active={active === "rate"}
								onClick={() => {
									setActive("rate");
								}}
								color="#FF9017"
							>
								<Link to={ROUTE.BUYER_PRODUCT_REVIEW}>
									{active === "rate" ? (
										<img src={RateFilled} />
									) : (
										<img src={documentTextUnfilled} />
									)}{" "}
									Rate and Review
								</Link>
							</SidebarMenuLinks>

							<SidebarMenuLinks
								active={active === "settings"}
								onClick={() => setActive("settings")}
								color="#FF7612"
							>
								<Link to={ROUTE.SELLER_CREATESTORE}>
									{active === "settings" ? (
										<img src={BecomeFilled} />
									) : (
										<img src={BecomeUnfilled} />
									)}
									Become a Seller
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks
								active={active === "download"}
								onClick={() => setActive("download")}
								color="#0D6EFD"
							>
								<Link to={ROUTE.BUYER_DOWNLOAD}>
									{active === "download" ? (
										<img src={Download_Filled} />
									) : (
										<img src={DownloadUnfilled} />
									)}{" "}
									Downloads
								</Link>
							</SidebarMenuLinks>
						</MenuTop>
						<CustomLink>
							<hr />
							<SidebarMenuLinks
								active={active === "profile"}
								onClick={() => setActive("profile")}
								color="#0D6EFD"
							>
								<Link to={ROUTE.BUYER_PROFILE}>
									{active === "profile" ? (
										<img src={userTag} />
									) : (
										<img src={userTagUnfilled} />
									)}{" "}
									My Profile
								</Link>
							</SidebarMenuLinks>
							<SidebarMenuLinks onClick={() => dispatch(showModal("logout"))}>
								<div
									style={{
										display: "flex",
										gap: 10,
										alignItems: "center",
										color: "#8b96a5",
									}}
								>
									<img src={sendSquare} /> <span>Log out</span>
								</div>
							</SidebarMenuLinks>
						</CustomLink>
					</SidebarMenu>
				</Sidebar>
			)}

			<main>{children}</main>
		</Wrapper>
	);
};
Screen.defaultProps = {};
export default Screen;
