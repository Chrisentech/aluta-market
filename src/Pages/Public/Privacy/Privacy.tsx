import React from "react";
import { Wrapper } from "./styles";
import Layout from "../../../Layouts";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

const Screen: React.FC = () => {
	return (
		<Wrapper>
			<div className="center">
				<div className="icon">
					<BiSolidMessageSquareDetail size={27} />
				</div>

				<h1>Privacy and Policy</h1>
			</div>
			<section>
				<p>
					At Alutamarket, we value your privacy and are committed to protecting
					your personal information. This Privacy Policy outlines how we
					collect, use, disclose, and safeguard your information when you use
					our platform.
				</p>
				<h2>Information We Collect</h2>
				<p>
					When you register on our platform, we may collect personal information
					such as your name, email address, phone number, and address. We also
					gather transaction details when you make a purchase, including payment
					information.
				</p>
				<h2>How We Use Your Information</h2>
				<p>
					We use the information we collect to provide and improve our services,
					communicate with you, process transactions, and personalize your
					experience on our platform. We may also use your information for
					marketing purposes, but you can opt out of receiving marketing
					communications at any time.
				</p>
				<h2>Information Sharing</h2>
				<p>
					We do not sell, trade, or otherwise transfer your personal information
					to third parties without your consent, except as required by law or to
					fulfill our services (e.g., processing payments). We may share
					non-personal information with trusted third parties for marketing,
					advertising, or analytics purposes.
				</p>
				<h2>Data Security</h2>
				<p>
					We implement various security measures to protect your information
					from unauthorized access, disclosure, alteration, or destruction.
					However, please note that no method of transmission over the internet
					or electronic storage is 100% secure, and we cannot guarantee absolute
					security.
				</p>
				<h2>Your Rights</h2>
				<p>
					You have the right to access, update, or delete your personal
					information. You can also choose to limit the use and disclosure of
					your information. If you have any questions or concerns about our
					Privacy Policy or your data, please contact us.
				</p>
				<h2>Policy Changes</h2>
				<p>
					We may update our Privacy Policy from time to time to reflect changes
					in our practices or legal requirements. We will notify you of any
					significant changes and obtain your consent if required by law.
				</p>
				<p>
					By using our platform, you consent to the terms of this Privacy
					Policy.
				</p>
				<p>Last updated: 15th March, 2024</p>
			</section>
		</Wrapper>
	);
};

const PrivacyPage = () => {
	// const { loading } = useSelector((store: any) => store.products);
	return <Layout layout={"full"} component={Screen} isLoading={false} />;
};

export default PrivacyPage;
