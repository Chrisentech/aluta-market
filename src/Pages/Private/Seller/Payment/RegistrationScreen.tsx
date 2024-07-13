import React, { useState } from "react";
import Layout from "../../../../Layouts";
import { Button, Card } from "../../../../Shared/Components";
import {
	FormControl,
	ErrorMessageWrapper,
	Wrapper,
	Label,
	Input,
} from "./payment.styles";
import { FaRegUserCircle } from "react-icons/fa";
import * as yup from "yup";
import { Formik, Form } from "formik";

const initialValues = {
	surname: "",
	firstName: "",
	middleName: "",
};

const Screen: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const nameSchema = yup.object().shape({
		surname: yup.string().required("Surname cannot be empty"),
		firstName: yup.string().required("First name cannot be empty"),
	});

	const validationSchema = yup.lazy(() => nameSchema);

	const handleSubmit = (values: any) => {
		setLoading(true);

		alert(JSON.stringify(values));
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	};

	return (
		<Wrapper>
			<h2>Enable Payment</h2>
			<Card
				width="100%"
				padding="40px 80px"
				height="500px"
				borderRadius="20px"
				onHover={false}
				className="card"
			>
				<div className="center">
					<div className="badge">
						<FaRegUserCircle size={45} />
					</div>
					<h3>What’s your name?</h3>
					<p>as it appears on Government IDs</p>
					<p className="p-21">We’ll use this to create an account for you</p>
					<Formik
						initialValues={initialValues}
						onSubmit={handleSubmit}
						validationSchema={validationSchema}
					>
						{({ errors, touched }) => (
							<Form>
								<FormControl>
									<Label>Surname</Label>
									<Input name="surname" type="text" />
									{errors.surname &&
										touched.surname && ( // Display error message if touched and has an error
											<ErrorMessageWrapper>
												{errors.surname}
											</ErrorMessageWrapper>
										)}
								</FormControl>
								<FormControl>
									<Label>Middle Name</Label>
									<Input name="middleName" type="text" />
									{errors.middleName &&
										touched.middleName && ( // Display error message if touched and has an error
											<ErrorMessageWrapper>
												{errors.middleName}
											</ErrorMessageWrapper>
										)}
								</FormControl>
								<FormControl>
									<Label>First Name</Label>
									<Input name="firstName" type="text" />
									{errors.firstName &&
										touched.firstName && ( // Display error message if touched and has an error
											<ErrorMessageWrapper>
												{errors.firstName}
											</ErrorMessageWrapper>
										)}
								</FormControl>
								<Button
									disabled={loading}
									width={200}
									loading={loading}
									className="paymentBtn classic"
									type="submit"
								>
									Keep Moving
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</Card>
		</Wrapper>
	);
};

const RegsitrationScreen = () => {
	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={false}
			navMode="noSearch"
		/>
	);
};

export default RegsitrationScreen;
