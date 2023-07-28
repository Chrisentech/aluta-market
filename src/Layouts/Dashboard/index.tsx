import React, { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Wrapper,
  Sidebar,
  SidebarMenu,
  SidebarMenuLinks,
  CustomLink,
} from "./dashboard.style";
import { BiSolidUserPin } from "react-icons/bi";
import { FiBarChart2, FiSettings } from "react-icons/fi";
// import { PiGridFourFill } from "react-icons/pi";

import { IoLogOutOutline, IoWalletOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
// import { HiMiniShoppingCart, HiOutlineDocumentText } from "react-icons/hi";
import { HiMiniShoppingCart, HiOutlineDocumentText } from "react-icons/hi2";
import { ROUTE } from "../../Shared/Constants";
import { Dropdown } from "../../Shared/Components";
interface IScreenProps {
  children: ReactNode;
}

const Screen: React.FC<IScreenProps> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [hover, setHover] = useState("");

  const options = ["Opeyemi's Store", "+ Create a new Store"];
  const [active, setActive] = useState("");
  const [selectedOption, setSelectedOption] = useState(" Opeyemi's Store");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
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
          hasAvatar={true}
          selectedOption={selectedOption}
          handleOptionClick={handleOptionClick}
        />
        <SidebarMenu>
          <SidebarMenuLinks
            active={active === "dashboard"}
            onClick={() => setActive("dashboard")}
          >
            <Link to={ROUTE.SELLER_DASHBOARD}>
              <RxDashboard /> Dashboard
            </Link>
          </SidebarMenuLinks>
          <SidebarMenuLinks
            active={active === "products"}
            onClick={() => setActive("products")}
          >
            <Link to={ROUTE.SELLER_PRODUCTS}>
              <HiMiniShoppingCart /> Products
            </Link>
          </SidebarMenuLinks>
          <SidebarMenuLinks
            active={active === "orders"}
            hover={hover === "orders"}
            onMouseOut={() => setHover("")}
            onMouseOver={() => setHover("orders")}
            onFocus={() => setHover("orders")}
            onClick={() => {
              setHover("orders");
              setActive("orders");
            }}
          >
            <Link to="#">
              <FiBarChart2 />
              <Dropdown
                margin={"0"}
                options={[<span>Orders</span>, <span>Orders</span>]}
                width={"100%"}
                padding={"0"}
                state={hover === "orders"}
                offset={"0"}
                background={"transparent"}
                selectedOption={"Orders"}
                handleOptionClick={handleOptionClick}
              />
            </Link>
          </SidebarMenuLinks>
          <SidebarMenuLinks
            hover={hover === "payments"}
            active={active === "payments"}
            onMouseOut={() => setHover("")}
            onMouseOver={() => setHover("payments")}
            onClick={() => {
              setHover("payments");
              setActive("payments");
            }}
          >
            <Link to={ROUTE.SELLER_PAYMENT}>
              <IoWalletOutline />{" "}
              <Dropdown
                margin={"0"}
                options={["Payments"]}
                width={"100%"}
                padding={"0"}
                state={hover === "payments"}
                offset={"0"}
                background={"transparent"}
                selectedOption={"Payments"}
                handleOptionClick={handleOptionClick}
              />
            </Link>
          </SidebarMenuLinks>
          <SidebarMenuLinks
            active={active === "reviews"}
            onClick={() => setActive("reviews")}
          >
            <Link to="#">
              <HiOutlineDocumentText /> Reviews
            </Link>
          </SidebarMenuLinks>
          <SidebarMenuLinks
            active={active === "settings"}
            onClick={() => setActive("settings")}
          >
            <Link to="#">
              <FiSettings /> Store Settings
            </Link>
          </SidebarMenuLinks>
          <CustomLink>
            <SidebarMenuLinks
              active={active === "profile"}
              onClick={() => setActive("profile")}
            >
              <Link to="#">
                <BiSolidUserPin size="24" /> My Profile
              </Link>
            </SidebarMenuLinks>
            <SidebarMenuLinks>
              <Link to="#">
                <IoLogOutOutline color="red !important" /> Log out
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
