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
import { logo } from "../../../assets";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { appleStoreImg, googlePlayImg } from "../../../assets";
import { ROUTE } from "../../Constants";
const Footer: React.FC = () => {
	return (
		<Wrapper>
			<FooterTop>
				<FooterBrand>
					<NavLink className="brand" to={ROUTE.HOME}>
						<img width={"150"} src={logo} alt="logo" />
					</NavLink>
					<div className="logo_content">...thriving together in Solidarity</div>
					<div className="flex">
						<a target="_blank" href="https://web.facebook.com/alutamarket.live">
							<BsFacebook color="#BDC4CD" />
						</a>
						<a target="_blank" href=" https://twitter.com/AlutamarketLive">
							<AiFillTwitterCircle color="#BDC4CD" />
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/company/101179165"
						>
							<TiSocialLinkedinCircular color="#BDC4CD" />
						</a>
						<a
							target="_blank"
							href=" https://www.instagram.com/alutamarket_live/"
						>
							<AiFillInstagram color="#BDC4CD" />
						</a>
						<a target="_blank" href="https://www.youtube.com/@Alutamarket_live">
							<AiFillYoutube color="#BDC4CD" />
						</a>
					</div>
				</FooterBrand>
				<FooterItems>
					<h3>About</h3>
					<ul>
						<li>
							<NavLink to={ROUTE.ABOUT}>About Us</NavLink>
						</li>
						<li>
							<NavLink to={ROUTE.FAQ}>FAQs</NavLink>
						</li>
						<li>
							<NavLink to="#">Our Stations</NavLink>
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
							<NavLink to="#">Categories</NavLink>
						</li>
						<li>
							<NavLink to="#">Return Policy</NavLink>
						</li>
						<li>
							<NavLink to={ROUTE.CONTACT}>Contact Us</NavLink>
						</li>
						<li>
							<NavLink to={ROUTE.TERMS}>Terms and Conditions</NavLink>
						</li>
					</ul>
				</FooterItems>
				<FooterItems>
					<h3>For Users</h3>
					<ul>
						<li>
							<NavLink to={ROUTE.LOGIN}>Login</NavLink>
						</li>
						<li>
							<NavLink to={ROUTE.REGISTER}>Register</NavLink>
						</li>
						<li>
							<NavLink to="#">Settings</NavLink>
						</li>
						<li>
							<NavLink to={ROUTE.BUYER_ORDER}>My Orders</NavLink>
						</li>
					</ul>
				</FooterItems>
				<FooterItems>
					<h3>Get App</h3>
					<li style={{ marginBottom: 15 }}>
						<div className="logo_content" style={{ margin: 0 }}>
							coming soon
						</div>
					</li>
				</FooterItems>
			</FooterTop>
			<FooterBottom>
				<div>&copy; Alutamarket {new Date().getFullYear()}</div>
				<select>
					<option>🇺🇸 English</option>
				</select>
			</FooterBottom>
		</Wrapper>
	);
};

export default Footer;
