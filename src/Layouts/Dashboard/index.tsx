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
  dashboard, dashboardUnfilled, 
  documentText, documentTextUnfilled, 
  emptyWallet, emptyWalletUnfilled, 
  sendSquare, settings, settingsUnfilled, 
  shop, shopUnfilled, shoppingCart, 
  shoppingCartUnfilled, userTag, userTagUnfilled 
} from "../../assets";
interface IScreenProps {
  children: ReactNode;
}

const Screen: React.FC<IScreenProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [hover, setHover] = useState("");

  const options = ["+ Create a new Store"];
  const [active, setActive] = useState("");
  const [selectedOption, setSelectedOption] = useState(" Arike Collection");

  const handleOptionClick = (option: string) => {
    if (option === "+ Create a new Store") {
      navigate(ROUTE.SELLER_CREATESTORE )
    } else {
      setSelectedOption(option);
    }
  };


  useEffect(() => {
    // Based on the current path, update the active state
    if (currentPath === ROUTE.SELLER_DASHBOARD) {
      setActive("dashboard");
    } else if (
      currentPath === ROUTE.SELLER_PRODUCTS ||
      currentPath === ROUTE.SELLER_ADDPRODUCT ||
      currentPath === ROUTE.SELLER_NEWPRODUCT
    ) {
      setActive("products");
    } else if (currentPath === "#") {
      setActive("orders");
    } else if (
      currentPath === ROUTE.SELLER_PAYMENT ||
      currentPath.includes(ROUTE.SELLER_PAYMENT_REG)
    ) {
      setActive("payments");
    } else if (currentPath === "#") {
      setActive("reviews");
    } else if (currentPath === "#") {
      setActive("settings");
    } else if (currentPath === "#") {
      setActive("profile");
    } else {
      setActive(""); // Set default active state here
    }
  }, [currentPath]);
  return (
		<Wrapper>
			<Sidebar>
				<Dropdown
					background="#eff2f4"
					options={options}
					type="dropdown_one"
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
							active={active === "products"}
							onClick={() => setActive("products")}
							color="#FF001F"
						>
							<Link to={ROUTE.SELLER_PRODUCTS}>
								{active === "products" ? (
									<img src={shoppingCart} />
								) : (
									<img src={shoppingCartUnfilled} />
								)}{" "}
								Products
							</Link>
						</SidebarMenuLinks>
						<SidebarMenuLinks
							active={active === "orders"}
							color="#FF9017"
							onClick={() => {
								setActive("orders");
							}}
						>
							<Link to="#">
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
							<Link to="#">
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
						<SidebarMenuLinks>
							<Link to={ROUTE.SELLER_DASHBOARD + "/logout"}>
								<img src={sendSquare} /> Log out
							</Link>
						</SidebarMenuLinks>
					</CustomLink>
				</SidebarMenu>
			</Sidebar>

			<main>{children}</main>
		</Wrapper>
	);
};

export default Screen;
