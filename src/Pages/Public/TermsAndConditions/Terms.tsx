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
								www.thealutamarket.com
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
						<p>
							Unless otherwise stated, www.thealutamarket.com/www.alutamarket.ng
							and/or its licensors own the intellectual property rights for all
							content on Alutamarket. All intellectual property rights are
							reserved. You may access this content for personal use, subject to
							the restrictions outlined in these terms and conditions.{" "}
						</p>
						<div className="must-not">
							<p>You must not:</p>
							<ul>
								<li>- Republish material from Alutamarket</li>
								<li>- Sell, rent, or sublicense material from Alutamarket</li>
								<li>
									- Reproduce, duplicate, or copy material from Alutamarket
								</li>
								<li>- Redistribute content from Alutamarket</li>
							</ul>
						</div>
					</section>
					<section id="return-policy">
						<h3>Return Policy:</h3>
						<p>
							At Alutamarket, we want you to have a satisfying shopping
							experience. We understand that sometimes, returns may be
							necessary. Please familiarize yourself with our return and refund
							policy outlined below:
						</p>
						<ol className="return-policy">
							<li>
								<h4>Wrong or Damaged Products: </h4>
								<p>
									If you receive the wrong product or if it arrives damaged,
									please contact our customer support team within 12 hours of
									receiving the item. We will arrange for a return and provide
									you with a refund at no additional cost. Note that the
									delivery fee is not refundable.
								</p>
							</li>
							<li>
								<h4>Unused and Unopened Products: </h4>
								<p>
									If you change your mind about a product and it remains unused
									and unopened, you may request a return within 12 hours of
									receiving it. Please note that return shipping costs will be
									the responsibility of the buyer. Once we receive the returned
									item in its original condition, we will issue a refund,
									excluding the original shipping fees.
								</p>
							</li>
							<li>
								<h4>Non-Returnable Items: </h4>
								<p>
									For hygiene and safety reasons, certain items cannot be
									returned. These may include perishable goods such as foods,
									intimate apparel, and products that pose a health risk if
									opened or used. Please check the product description or
									contact our customer support team for further information
									regarding specific items.
								</p>
							</li>
							<li>
								<h4>Return Process: </h4>
								<p>
									To initiate a return, kindly return the product to the pickup
									station you picked from, or contact our customer support team
									if the product was home delivered. Our team will initiate the
									return process and provide you with the necessary
									instructions. Please ensure that the item is securely packaged
									for return shipping.
								</p>
							</li>
							<li>
								<h4>Refunds: </h4>
								<p>
									Once we receive the returned item and verify its condition, we
									will initiate the refund process. The seller will be
									contacted, and refunds will be issued in the original form of
									payment, unless otherwise specified. Please allow a reasonable
									processing time for the refund to be reflected in your
									account. Please note that our return policy may be subject to
									change, and any updates will be communicated on our website.
									We reserve the right to reject returns that do not comply with
									the stated policy or if the item has been used, damaged, or
									altered.
								</p>
							</li>
						</ol>
						<div className="return-policy-footer"></div>
					</section>
					<section id="user-generated-comments">
						<h3>User-generated Comments:</h3>
						<p>
							Certain parts of the website allow users to post and exchange
							opinions and information. Comments posted on the website are the
							views and opinions of the individuals who posted them and do not
							necessarily reflect the views and opinions of
							www.thealutamarket.com, its agents, and/or affiliates. While we do
							not filter or review comments before their presence on the
							website, we reserve the right to monitor and remove any comments
							that are deemed inappropriate, offensive, or in breach of these
							Terms and Conditions.
						</p>
						<p>
							By posting comments on our website, you warrant and represent
							that:
						</p>
						<div className="must-not">
							<ul>
								<li>
									- You have the right to post the comments and possess all
									necessary licenses and consents to do so.
								</li>
								<li>
									- The comments do not infringe upon any intellectual property
									rights of third parties, including but not limited to
									copyrights, patents, or trademarks.
								</li>
								<li>
									- The comments do not contain any defamatory, libelous,
									offensive, indecent, or unlawful material that invades
									privacy.
								</li>
								<li>
									- The comments will not be used for solicitation, promotion of
									business or custom, or for any commercial or unlawful
									activities.
								</li>
							</ul>
							<p>
								By posting comments on our website, you grant
								www.thealutamarket.com/www.alutamarket.ng a non-exclusive
								license to use, reproduce, edit, and authorize others to use,
								reproduce, and edit your comments in any form, format, or media.
							</p>
						</div>
					</section>
					<section id="content-linking">
						<h3>Hyperlinking to our Content:</h3>
						<p>
							Certain organizations are allowed to link to our website without
							needing prior written approval. These include government agencies,
							search engines, news organizations, and online directory
							distributors. Additionally, system-wide Accredited Businesses
							(excluding certain non-profit organizations) may also link to our
							website.
						</p>
						<p>
							However, these links must not be deceptive, falsely imply
							sponsorship or endorsement, or misrepresent the context of the
							linking party's site. We may consider and approve link requests
							from other types of organizations, such as consumer and business
							information sources, community sites, charities, educational
							institutions, and trade associations.
						</p>
						<p>
							Approved organizations may hyperlink to our website using our
							corporate name, URL, or any other appropriate description.
							However, using our logo or artwork for linking requires a
							trademark license agreement and is not allowed without prior
							authorization.
						</p>
					</section>
					<section id="iframes">
						<h3>iFrames</h3>
						<p>
							You are not permitted to create frames around our webpages that
							alter the visual presentation or appearance of our website without
							prior approval and written permission.
						</p>
					</section>
					<section id="content-liability">
						<h3>Content Liability:</h3>
						<p>
							We want everyone to have a positive experience on our platform, so
							we do our best to monitor and manage the content that's posted.
							However, we can't guarantee that all content will be accurate,
							appropriate, or free from errors.
						</p>
						<p>
							As a user, you're responsible for the content you upload or share
							on our platform. This means you should make sure that any content
							you post is accurate, lawful, and respectful of others' rights. We
							reserve the right to remove any content that violates our terms of
							service or community guidelines.
						</p>
						<p>
							While we strive to keep our platform safe and secure, we can't be
							held liable for any harm or damage caused by user-generated
							content. If you come across any content that you believe is
							inappropriate or harmful, please report it to us so we can take
							appropriate action.
						</p>
						<p>
							By using our platform, you agree to take responsibility for your
							own content and to respect the rights and privacy of others.
							Together, we can create a positive and supportive community where
							everyone feels welcome and valued.
						</p>
					</section>
					<section id="your-privacy">
						<h3>Your Privacy:</h3>
						<p>
							Please refer to our Privacy Policy for detailed information
							regarding how we handle your data.
						</p>
					</section>
					<section id="reservation-of-rights">
						<h3>Reservation of Rights:</h3>
						<p>
							We reserve the right to request the removal of any links,
							including specific links, to our website. By linking to our
							website, you agree to promptly remove any links upon our request.
							We also retain the right to amend these terms and conditions and
							our linking policy at any time. Continuous linking to our website
							implies your acceptance of and compliance with these linking terms
							and conditions.
						</p>
						<p>
							Furthermore, we have the authority to remove any content from the
							website that we deem unsuitable, regardless of the source or
							nature of the content.
						</p>
					</section>
					<section id="removal-of-links">
						<h3>Removal of Links from Our Website:</h3>
						<p>
							If you find any link on our website that you consider offensive,
							please feel free to contact us at any time. We will review
							requests for link removal but are not obligated to take action or
							respond directly.
						</p>
						<p>
							While we strive to ensure the accuracy and completeness of the
							information on our website, we do not guarantee its accuracy or
							that the website will remain available or that the material on the
							website will be kept up to date.
						</p>
					</section>
					<section id="disclaimer">
						<h3>Disclaimer:</h3>
						<p>
							To the maximum extent permitted by applicable law, we exclude all
							representations, warranties, and conditions related to our website
							and its use. Nothing in this disclaimer will:
						</p>
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
