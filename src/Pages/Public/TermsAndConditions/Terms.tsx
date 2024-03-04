import React from "react";
import Layout from "../../../Layouts";
import {
	Icon,
	MainBlock,
	Page,
	TitleBlock,
	UList,
	Wrapper,
} from "./Terms.style";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Screen: React.FC = () => {
	return (
		<Page>
			<Wrapper>
				<TitleBlock>
					<Icon>
						<BiSolidMessageSquareDetail size={27} />
					</Icon>
					<h1>Terms and Conditions</h1>
				</TitleBlock>
				<MainBlock>
					<section id="welcome">
						<h2>Welcome to Alutamarket!</h2>
						<p>
							These terms and conditions serve as a guide for the use of the{" "}
							<Link to="/" className="link">
								www.alutamarket.com
							</Link>{" "}
							website. By accessing this website, it is assumed that you accept
							and agree to abide by these terms and conditions. If you do not
							agree with any part of these terms and conditions, please refrain
							from using Alutamarket.
						</p>
						<p>
							The following terms apply to these Terms and Conditions, Privacy
							Statement, and Disclaimer Notice, as well as any agreements made.
						</p>
						<UList disc>
							<li>
								<span>
									<em>"Client,"</em> <em>"You,"</em> and <em>"Your"</em> refer
									to you, the user of this website, who complies with the
									Company's terms and conditions.{" "}
								</span>
							</li>
							<li>
								<span>
									<em>"The Company,"</em> <em>"Ourselves,"</em> <em>"We,"</em>{" "}
									<em>"Our,"</em> and <em>"Us"</em> refer to our Company.
								</span>
							</li>
							<li>
								<span>
									<em>"Party,</em>" <em>"Parties,"</em> or <em>"Us"</em> refer
									to both the Client and ourselves
								</span>
							</li>
						</UList>
						<p>
							All terms mentioned here include the offer, acceptance, and
							consideration of payment required to carry out our assistance to
							the Client in the most suitable manner to meet the Client's needs
							concerning the Company's services. Any usage of the aforementioned
							terms or other words in the singular, plural, capitalization,
							and/or he/she or they are taken as interchangeable and refer to
							the same entities.
						</p>
						<p>
							Please note that by using Alutamarket, you acknowledge and agree
							to comply with these terms and conditions.
						</p>
					</section>
					<section id="commissions">
						<h3>Commission:</h3>
						<p>
							Alutamarket will charge a commission of 10% on every sale,
							booking, or service payment made through the platform. This
							commission is calculated based on the total transaction amount and
							is applicable to sellers. Please note that we do not charge any
							commission on buyers, but our third-party payment partners may
							apply their respective transaction fees to buyer payments.
						</p>
						<ol className="commissions">
							<li>
								<p>
									<h4>1.&#9;For Sellers: </h4>&#9; When you successfully sell a
									product or service on Alutamarket, a commission fee of 10%
									will be deducted from the total transaction amount before
									disbursing the remaining balance to your account. This
									commission helps us cover various operational costs, including
									platform maintenance, marketing, and space rentage.
								</p>
							</li>
							<li>
								<p>
									<h4>2.&#9;For Buyers: </h4>&#9; Alutamarket does not charge
									any commission on buyers. However, please be aware that our
									third-party payment partners, such as Paystack, Monnify, and
									Flutterwave, may apply their own transaction fees when
									processing buyer payments. These fees are separate from
									Alutamarket's commission and are typically a percentage of the
									transaction amount or a fixed amount per transaction.
								</p>
							</li>
							<li>
								<p>
									<h4>3.&#9;Payment Processing: </h4>
									As mentioned earlier, our third-party payment partners handle
									the processing of financial transactions on Alutamarket. Their
									fees are associated with the secure processing of payments and
									may vary depending on the chosen payment method and partner.
								</p>
							</li>
							<li>
								<p>
									<h4>4.&#9;Reasoning: </h4>&#9; The commission rate of 10% has
									been carefully determined to support the sustainability of
									Alutamarket. This revenue allows us to invest in providing a
									secure and efficient platform, offer customer support, conduct
									marketing campaigns to attract more buyers, and improve
									overall user experience.
								</p>
							</li>
							<li>
								<p>
									<h4>5.&#9;Fairness: </h4>&#9; We believe that this commission
									rate strikes a fair balance between covering our operational
									costs and ensuring that sellers can maximize their profits.
									It's important to note that we do not charge any subscription
									fees or upfront costs for using our platform. We only charge
									this commission after a successful sale or booking.
								</p>
							</li>
						</ol>
						<div className="commissions-footer">
							<p>
								By using Alutamarket, you agree to these commission terms, which
								are an integral part of our commitment to providing a reliable
								and valuable e-commerce platform for both buyers and sellers.
								Your understanding and cooperation in this matter are greatly
								appreciated.
							</p>
						</div>
					</section>
					<section id="cookies">
						<h3>Cookies:</h3>
						<p>
							We use cookies to enhance your experience. By accessing
							Alutamarket, you agree to the use of cookies in accordance with
							our Privacy Policy. Cookies are commonly used on websites to
							improve user experience by remembering user preferences and
							interactions
						</p>
					</section>
					<section id="licence">
						<h3>Licence:</h3>
						<div className="must-not">
							<ul>
								<li>halleluyah</li>
								<li>mamam</li>
								<li>others</li>
								<li></li>
							</ul>
						</div>
					</section>
					<section id="return-policy">
						<h3>Return Policy:</h3>
						<ol className="return-policy">
							<li>
								<h4>Wrong or Damaged Products: </h4>
							</li>
							<li>
								<h4>Unused and Unopened Products: </h4>
							</li>
							<li>
								<h4>Non-Returnable Items: </h4>
							</li>
							<li>
								<h4>Return Process: </h4>
							</li>
							<li>
								<h4>Refunds: </h4>
							</li>
						</ol>
						<div className="return-policy-footer"></div>
					</section>
					<section id="user-generated-comments">
						<h3>User-generated Comments:</h3>
						<div className="must-not">
							<ul>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>
					</section>
					<section id="content-linking">
						<h3>Hyperlinking to our Content:</h3>
						<div className="must-not">
							<ul>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<div className="hyper-extra">
								<p></p>
								<p></p>
								<p></p>
							</div>
						</div>
					</section>
					<section id="iframes">
						<h3>Licence:</h3>
					</section>
					<section id="content-liability">
						<h3>Content Liability:</h3>
					</section>
					<section id="your-privacy">
						<h3>Your Privacy:</h3>
					</section>
					<section id="reservation-of-rights">
						<h3>Reservation of Rights:</h3>
					</section>
					<section id="removal-of-links">
						<h3>Removal of Links from Our Website:</h3>
					</section>
					<section id="disclaimer">
						<h3>Disclaimer:</h3>
						<p></p>
						<p></p>
						<p></p>
					</section>
				</MainBlock>
			</Wrapper>
		</Page>
	);
};

const TermsAndConditions = () => {
	// const { loading } = useSelector((store: any) => store.products);
	return <Layout layout={"full"} component={Screen} isLoading={false} />;
};

export default TermsAndConditions;
