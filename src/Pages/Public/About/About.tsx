import React from "react";
import { Wrapper } from "./styles";
import Layout from "../../../Layouts";
import { AboutImage } from "../../../assets";

const Screen: React.FC = () => {
	return (
		<Wrapper>
			<div className="center">
				<img src={AboutImage} alt="..." />
			</div>
			<section>
				<p>
					Alutamarket is a multivendor ecommerce website where students connect
					to buy and sell products and services to each other
				</p>
				<p>
					Alutamarket is not just another online marketplace; it's a vibrant
					ecosystem where students converge to buy and sell a wide range of
					products and services. Our platform facilitates connections and
					transactions among students, empowering them to engage in commerce
					while fostering a sense of solidarity and community
				</p>
				<p>
					At the heart of Alutamarket lies our unwavering commitment to
					solidarity—a belief in the collective strength and resilience of
					students united in common purpose. We envision a future where students
					stand together, leveraging their combined talents and resources to
					create a thriving economy that benefits all.
				</p>

				<p>
					Our mission is to provide students with a dynamic marketplace where
					they can not only meet their everyday needs but also explore new
					opportunities and pursue their passions. From textbooks and fashion to
					event tickets and services, Alutamarket offers a diverse array of
					offerings tailored to the unique preferences and lifestyles of the
					student community.
				</p>
				<p>
					Beyond facilitating transactions, Alutamarket serves as a hub for
					student interaction, collaboration, and support. We strive to
					cultivate a culture of unity and camaraderie, where students can come
					together to exchange ideas, share experiences, and uplift one another
					on their journey toward success. Join us as we embark on this exciting
					adventure of empowerment and solidarity, where every student has the
					opportunity to thrive and flourish.
				</p>
			</section>
		</Wrapper>
	);
};

const AboutPage = () => {
	// const { loading } = useSelector((store: any) => store.products);
	return <Layout layout={"full"} component={Screen} isLoading={false} />;
};

export default AboutPage;
