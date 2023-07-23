import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import {
  Wrapper,
  Sidebar,
  SidebarMenu,
  SidebarMenuLinks,
} from "./dashboard.style";
import { BiSolidHome } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import { PiGridFourFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
interface IScreenProps {
  children: ReactNode;
}
const Screen: React.FC<IScreenProps> = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar>
        <SidebarMenu>
          <SidebarMenuLinks active={true}>
            <NavLink to="#">
              <BiSolidHome /> Dashboard
            </NavLink>
          </SidebarMenuLinks>
          <SidebarMenuLinks>
            <NavLink to="#">
              <BsCart3 /> Products
            </NavLink>
          </SidebarMenuLinks>
          <SidebarMenuLinks>
            <NavLink to="#">
              <FiBarChart2 /> Orders
            </NavLink>
          </SidebarMenuLinks>
          <SidebarMenuLinks>
            <NavLink to="#">
              <PiGridFourFill /> Payments
            </NavLink>
          </SidebarMenuLinks>
          <SidebarMenuLinks>
            <NavLink to="#">
              <FaUser /> Deliveries
            </NavLink>
          </SidebarMenuLinks>
          <SidebarMenuLinks>
            <NavLink to="#">
              <MdLock /> Reviews
            </NavLink>
          </SidebarMenuLinks>
          <SidebarMenuLinks>
            <NavLink to="#">
              <FaUser /> Store Settings
            </NavLink>
          </SidebarMenuLinks>
        </SidebarMenu>
      </Sidebar>

      <main>{children}</main>
    </Wrapper>
  );
};

export default Screen;
