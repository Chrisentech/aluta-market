import React from "react";
import { NavLink } from "react-router-dom";
import {
  Wrapper,
  FooterTop,
  FooterItems,
  FooterBottom,
  FooterBrand,
} from "./footer.styles";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { appleStoreImg, googlePlayImg } from "../../../assets";
const Footer: React.FC = () => {
  return (
    <Wrapper>
      <FooterTop>
        <FooterBrand>
          <div className="brand">Brand</div>
          <div>
            Best information about the company gies here but now lorem ipsum is
          </div>
          <div className="flex">
            <BsFacebook color="#BDC4CD" />
            <AiFillTwitterCircle color="#BDC4CD" />
            <TiSocialLinkedinCircular color="#BDC4CD" />
            <AiFillInstagram color="#BDC4CD" />
            <AiFillYoutube color="#BDC4CD" />
          </div>
        </FooterBrand>
        <FooterItems>
          <h3>About</h3>
          <ul>
            <li>
              <NavLink to="#">About Us</NavLink>
            </li>
            <li>
              <NavLink to="#">Find store</NavLink>
            </li>
            <li>
              <NavLink to="#">Categories</NavLink>
            </li>
            <li>
              <NavLink to="#">Blogs</NavLink>
            </li>
          </ul>
        </FooterItems>
        <FooterItems>
          <h3>Partnership</h3>
          <ul>
            <li>
              <NavLink to="#">About Us</NavLink>
            </li>
            <li>
              <NavLink to="#">Find store</NavLink>
            </li>
            <li>
              <NavLink to="#">Categories</NavLink>
            </li>
            <li>
              <NavLink to="#">Blogs</NavLink>
            </li>
          </ul>
        </FooterItems>
        <FooterItems>
          <h3>Information</h3>
          <ul>
            <li>
              <NavLink to="#">Help center</NavLink>
            </li>
            <li>
              <NavLink to="#">Money Refund</NavLink>
            </li>
            <li>
              <NavLink to="#">Shipping</NavLink>
            </li>
            <li>
              <NavLink to="#">Contact us</NavLink>
            </li>
          </ul>
        </FooterItems>
        <FooterItems>
          <h3>For Users</h3>
          <ul>
            <li>
              <NavLink to="#">Login</NavLink>
            </li>
            <li>
              <NavLink to="#">Register</NavLink>
            </li>
            <li>
              <NavLink to="#">Settings</NavLink>
            </li>
            <li>
              <NavLink to="#">My Orders</NavLink>
            </li>
          </ul>
        </FooterItems>
        <FooterItems>
          <h3>Get App</h3>
          <li style={{ marginBottom: 15 }}>
            <NavLink to="#">
              {" "}
              <img src={appleStoreImg} alt="apple store link" />
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={googlePlayImg} alt="google playstore link" />
            </NavLink>
          </li>
        </FooterItems>
      </FooterTop>
      <FooterBottom>
        <div>&copy; Alutamarket {new Date().getFullYear()}</div>
        <select>
          <option>🇺🇸 English</option>
          <option>🇫🇷 French</option>
          <option>🇳🇬 Yoruba</option>
        </select>
      </FooterBottom>
    </Wrapper>
  );
};

export default Footer;
