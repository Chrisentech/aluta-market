import React from "react";
import { Wrapper } from "./styles";
import Layout from "../../../Layouts";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { ROUTE } from "../../../Shared/Constants";
import { Link } from "react-router-dom";

const Screen: React.FC = () => {
	return (
		<Wrapper>
			<div className="center">
				<div className="icon">
					<BiSolidMessageSquareDetail size={27} />
				</div>
				<h1>FAQs</h1>
			</div>
			<section>
				<h2>General FAQs:</h2>
				<ol>
					<li>
						<h2>What is Alutamarket?</h2>
						<p>
							Alutamarket is an online marketplace designed specifically for
							students and the academic community. It connects buyers and
							sellers, making it easier for students to buy, sell, or trade a
							wide range of products and services.
						</p>
					</li>
					<li>
						<h2>How does Alutamarket work?</h2>
						<p>
							Alutamarket provides a platform where students and other members
							of the academic community can create and manage online stores to
							sell products and services. Buyers can browse these stores, make
							purchases, and leave reviews.
						</p>
					</li>
					<li>
						<h2>Who can use Alutamarket?</h2>
						<p>
							Alutamarket is primarily designed for students, but it's open to
							anyone. Students, staff and individuals living in the academic
							environment can use the platform.
						</p>
					</li>
					<li>
						<h2>How do I sign up as a seller on Alutamarket?</h2>
						<p>
							To become a seller, create an account, and set up your online
							store. You can start listing your products or services for sale
							once your store is ready.
						</p>
					</li>
					<li>
						<h2>Is it free to use Alutamarket?</h2>
						<p>
							Creating an account and browsing the platform is free. However,
							there's a commission fee for each sale made through the platform,
							which helps us maintain and improve the service.
						</p>
					</li>
					<li>
						<h2>How are payments processed on Alutamarket?</h2>
						<p>
							Alutamarket supports multiple payment methods, including
							credit/debit cards and bank transfers. The platform also offers
							escrow services to ensure secure transactions.
						</p>
					</li>
					<li>
						<h2>How can I reach Alutamarket's customer support?</h2>
						<p>
							You can reach our customer support team through the
							<Link to={ROUTE.CONTACT}>Contact Us</Link>
							page or by sending an email to{" "}
							<a href="mailto:support@thealutamarket.com.">
								support@thealutamarket.com.
							</a>{" "}
							We're here to help you with any questions or issues.
						</p>
					</li>
				</ol>
				<h2>Buying FAQs:</h2>
				<ol>
					<li>
						<h2>How can I find products on Alutamarket?</h2>
						<p>
							You can browse products by category or use the search bar to find
							specific items. You can also explore the stores of your favorite
							sellers
						</p>
					</li>
					<li>
						<h2>How do I make a purchase?</h2>
						<p>
							To make a purchase, simply add items to your cart, review your
							order, and proceed to the checkout. Follow the steps to complete
							the payment.
						</p>
					</li>
					<li>
						<h2>What payment methods can I use for purchases?</h2>
						<p>
							Alutamarket accepts various payment methods, including
							credit/debit cards and bank transfers. Choose the one that's most
							convenient for you.
						</p>
					</li>
					<li>
						<h2>Is my payment information secure on Alutamarket?</h2>
						<p>
							Yes, we take data security seriously. Alutamarket uses encryption
							to protect your payment information and ensure it remains secure.
						</p>
					</li>
					<li>
						<h2>What if I have issues with my order?</h2>
						<p>
							If you encounter any issues with your order, you can contact the
							seller directly through the order page. If the issue remains
							unresolved, you can reach out to Alutamarket's customer support.
						</p>
					</li>
				</ol>
				<h2>Selling FAQs:</h2>
				<ol>
					<li>
						<h2>How do I create my own store on Alutamarket?</h2>
						<p>
							Creating a store is easy. Log in, go to your seller dashboard, and
							follow the steps to set up your store with a name, logo, and
							description.
						</p>
					</li>
					<li>
						<h2>What can I sell on Alutamarket?</h2>
						<p>
							You can sell a wide range of products and services on Alutamarket,
							from textbooks and electronics to tutoring services and event
							tickets.
						</p>
					</li>
					<li>
						<h2>How much does it cost to sell on Alutamarket?</h2>
						<p>
							Alutamarket charges 10% commission fee for each sale. This fee
							helps cover the costs of maintaining the platform.
						</p>
					</li>
					<li>
						<h2>Can I ship my products to customers outside my schoo</h2>
						<p>
							While Alutamarket is primarily for the academic community, you can
							choose to offer shipping to customers outside your school. This
							can expand your customer base.
						</p>
					</li>
					<li>
						<h2>
							What happens if a buyer doesn't receive their order or is unhappy
							with it?
						</h2>
						<p>
							Alutamarket offers dispute resolution services to help resolve
							such issues. Sellers and buyers can work together to find a
							solution, and Alutamarket's support team can assist if needed.
						</p>
					</li>
				</ol>
			</section>
		</Wrapper>
	);
};

const FaqPage = () => {
	// const { loading } = useSelector((store: any) => store.products);
	return <Layout layout={"full"} component={Screen} isLoading={false} />;
};

export default FaqPage;
