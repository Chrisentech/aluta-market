import React from "react";
import {
	BackgroundPhoto,
	Container,
	MainSection,
	Page,
	ProductSection,
	SearchTab,
	ShopInfo,
	Top,
} from "./Store.styles";
import Layout from "../../../Layouts";
import { arike, message, profileAdd, report } from "../../../assets";
import { BsSearch } from "react-icons/bs";
import { Button, View } from "../../../Shared/Components";

const Screen: React.FC = () => {
	return (
		<Page>
			<BackgroundPhoto background={arike} />
			<Container>
				<div className="profile-image">A</div>
				<ShopInfo>
					<div className="title">
						<h1>Arike Collections</h1>
						<p>Sales of clothing materials for lorem ipsum guys and ladies</p>
						<div className="buttons">
							<Button
								className="button"
								width={117}
								background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
								color="#FFFFFF"
							>
								<img src={profileAdd} />
								follow
							</Button>
							<Button
								className="button"
								width={117}
								background="linear-gradient(180deg, #FF7612 0%, #FF001F 100%)"
								color="#FFFFFF"
							>
								<img src={message} />
								Message
							</Button>
							<Button
								className="button"
								width={117}
								border="1px solid #FA3434"
								color="#FA3434"
							>
								<img src={report} />
								Report
							</Button>
						</div>
					</div>
					<div className="contact-info">
						<div className="contact">
							<h2>Contact</h2>
							<p>07021123443</p>
							<p>arikecollections@gmail.com</p>
						</div>
						<div className="address">
							<h2>Address</h2>
							<p>Shop 2, School road, Fuoye Oye Ekiti</p>
						</div>
					</div>
				</ShopInfo>
				<MainSection>
					<Top>
						<SearchTab>
							<BsSearch className="icon">search</BsSearch>
							<input
								type="text"
								className="search-input"
								placeholder="Search"
							/>
						</SearchTab>
						<div className="filters">
							<select name="Category">
								<option value="" disabled selected hidden>
									Category
								</option>
								<option value="Accessories">Asccessories</option>
								<option value="Clothing">Clothing</option>
								<option value="Food">Food</option>
							</select>
							<select name="sort">
								<option value="" disabled selected hidden>
									Last added
								</option>
							</select>
						</div>
					</Top>
					<ProductSection>
						<View
							className="view"
							mode="grid"
							gridItems={Array(30).fill(null)}
							itempergrid={5}
							type="productGrid"
							gap="20px"
						/>
					</ProductSection>
				</MainSection>
			</Container>
		</Page>
	);
};

const Cart = () => {
	// const { loading } = useSelector((store: any) => store.products);
	return <Layout layout={"blank"} component={Screen} isLoading={false} />;
};

export default Cart;
