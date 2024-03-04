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
					<div className="logo_content">
						Bringing Nigerian students together in Solidarity
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
							<NavLink to="#">FAQs</NavLink>
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
							<NavLink to="#">Contact Us</NavLink>
						</li>
						<li>
							<NavLink to="#">Terms and Conditions</NavLink>
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
					<option>🇫🇷 French</option>
					<option>🇳🇬 Yoruba</option>
				</select>
			</FooterBottom>
		</Wrapper>
	);
};

export default Footer;
