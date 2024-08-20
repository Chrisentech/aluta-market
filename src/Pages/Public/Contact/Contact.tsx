import {
	AddressIcon,
	ContactIcon2,
	FormImg,
	MessageIcon,
	PhoneIcon,
} from "../../../assets";
import Layout from "../../../Layouts";
import { Wrapper } from "./Styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
	name: Yup.string().required("Your name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	phoneNumber: Yup.string().required("Phone number is required"),
	message: Yup.string().required("Please enter your message"),
});
const Screen: React.FC = () => {
	return (
		<Wrapper>
			<div className="center">
				<ContactIcon2 />
				<h2>Stay in touch, Comrades😎</h2>
				<p>Any question or remarks? Just write us a message!</p>
			</div>
			<section>
				<div className="child-1">
					<FormImg className="svg" />
					<h2>Contact Information</h2>
					<p>Say something to start a live chat!</p>
					<div className="contact">
						<div className="flex">
							<PhoneIcon />
							<p>07065424527</p>
						</div>
						<div className="flex">
							<MessageIcon />
							<p>info.alutamarket@gmail.com</p>
						</div>
						<div className="flex" style={{ alignItems: "start" }}>
							<AddressIcon style={{ marginTop: 20 }} />
							<div>
								<p>Our Pickup Stations:</p>
								<h2>FUTA</h2>
								<p>Futa Southgate</p>
								<p>Futa Northgate</p>
								<p>Futa Westgate</p>
								<h2 style={{ marginTop: 20 }}>FUOYE</h2>
								<p>Ikole Campus</p>
								<p>Oye Campus</p>
							</div>
						</div>
					</div>
				</div>
				<Formik
					initialValues={{ name: "", email: "", phoneNumber: "", message: "" }}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ isSubmitting }) => (
						<Form className="child-2">
							<div>
								<label htmlFor="name">Your Name</label>
								<Field type="text" name="name" placeholder="Enter your name" />
								<ErrorMessage name="name" component="div" />
							</div>

							<div>
								<label htmlFor="email">E-mail Address</label>
								<Field
									type="email"
									name="email"
									placeholder="Enter your email"
								/>
								<ErrorMessage name="email" component="div" />
							</div>

							<div>
								<label htmlFor="phoneNumber">Phone Number</label>
								<Field
									type="text"
									name="phoneNumber"
									placeholder="Enter your phone number"
								/>
								<ErrorMessage name="phoneNumber" component="div" />
							</div>

							<div>
								<label htmlFor="message">Your Message Here</label>
								<Field
									as="textarea"
									name="message"
									placeholder="Enter your message"
								/>
								<ErrorMessage name="message" component="div" />
							</div>

							<button type="submit" disabled={isSubmitting}>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</section>
		</Wrapper>
	);
};

const ContactPage = () => {
	return <Layout layout={"full"} component={Screen} isLoading={false} />;
};

export default ContactPage;
