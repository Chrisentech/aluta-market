import React, { useState } from "react";
import Layout from "../../../../Layouts";
import {
	Wrapper,
	FormControl,
	Label,
	Input,
	ErrorMessageWrapper,
	Modal,
	SubmitButton,
} from "./createInvoice.styles";
import { Puff } from "react-loading-icons";
import { Button } from "../../../../Shared/Components";
import { InvoiceIcon, ErrorIcon, phone, CircleCheck } from "../../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, useField } from "formik";
// import * as yup from "yup";
import { BiArrowBack, BiMinus, BiPlus } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineCancel } from "react-icons/md";
import { AppColors } from "../../../../Shared/Constants";
import {
	selectActiveModal,
	showModal,
	closeModal,
} from "../../../../Features/modal/modalSlice";
import { Incrementor } from "../Products/New/createnew.styles";
const Screen: React.FC = () => {
	const dispatch = useDispatch();

	const initialValues: any = {
		customer: "",
		due_date: "",
		item: "",
		delivery_details: "",
	};
	const handleSubmit = (values: any) => {
		alert(JSON.stringify(values));
	};
	return (
		<Wrapper>
			<header>
				<InvoiceIcon />
				<h2>Create payment invoice</h2>
				<p>to recieve payment for your product or service</p>
			</header>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form>
					<FormControl>
						<Label>Customer Details</Label>
						<CustomField
							name="customer"
							type="text"
							onSelect={() => dispatch(showModal("details"))}
						/>
					</FormControl>

					<FormControl>
						<Label>Due Date</Label>
						<CustomField name="customer" type="date" />
					</FormControl>

					<FormControl>
						<Label style={{ marginBottom: 10 }}>Item Description</Label>

						{true ? (
							<div style={{ marginBottom: 30 }}>
								<div className="descr">
									<div className="div">
										<span
											style={{
												background: "#f7fafc",
												padding: 5,
												borderRadius: 6,
											}}
										>
											<img src={phone} width={50} />
										</span>
										<div>
											<p>Phone</p>
											<p>N220,000</p>
										</div>
									</div>

									<div
										style={{
											display: "flex",
											gap: 25,
											flexDirection: "column",
										}}
									>
										<MdDeleteOutline
											className="delte"
											color="red"
											size="22px"
										/>
										<Incrementor style={{ marginTop: 29, width: "unset" }}>
											<div className="leftButton" style={{ padding: 6 }}>
												<BiMinus />
											</div>
											<div className="main" style={{ padding: 6 }}>
												{2}
											</div>
											<div className="rightButton" style={{ padding: 6 }}>
												<BiPlus />
											</div>
										</Incrementor>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										marginTop: 20,
										justifyContent: "end",
										paddingBottom: 20,
										borderBottom: "1px solid #ccc",
									}}
								>
									<Button
										type="button"
										padding={20}
										onClick={() => dispatch(showModal("product"))}
									>
										<span>Add Item</span>
									</Button>
								</div>
							</div>
						) : (
							<CustomField
								name="customer"
								type="text"
								placeholder="Create Item"
								onSelect={() => dispatch(showModal("product"))}
							/>
						)}

						<div
							style={{
								display: "flex",
								margin: "20px 0",
								justifyContent: "space-between",
								cursor: "pointer",
							}}
							onClick={() => dispatch(showModal("delivery"))}
						>
							<Label>Delivery Details (optional)</Label>
							<CircleCheck />
						</div>

						<Button
							width={"100%"}
							type="button"
							padding={20}
							background="#0d6efd"
							color="#ffffff"
						>
							{/* <AiOutlinePlus /> */}
							Generate Invoice
						</Button>
					</FormControl>
				</Form>
			</Formik>
		</Wrapper>
	);
};

const CustomField: React.FC<{
	name: string;
	type: string;
	checked?: boolean;
	placeholder?: string;
	onSelect?: React.ChangeEventHandler<HTMLInputElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ name, type, onSelect, placeholder }) => {
	const [field, meta] = useField(name);
	const inputHasError = meta?.error?.length ? true : false;

	return (
		<>
			<Input
				placeholder={placeholder}
				{...field}
				error={inputHasError}
				type={type}
				onSelect={onSelect}
			/>
			{meta.touched && meta.error && (
				<div style={{ display: "flex", gap: 2, alignItems: "center" }}>
					<div style={{ position: "relative" }}>
						<ErrorIcon
							style={{ position: "relative", right: 0, left: 0, top: 0 }}
						/>
					</div>
					<ErrorMessageWrapper>{meta.error}</ErrorMessageWrapper>
				</div>
			)}
		</>
	);
};

const CreateInvoice = () => {
	const [loading, _] = useState(false);
	const dispatch = useDispatch();
	const activeModal = useSelector(selectActiveModal);
	const UserModal = () => {
		return (
			<Modal>
				{true && (
					<>
						<div className="label">
							<BiArrowBack size={32} color="#bdc4cd" />
							<MdOutlineCancel
								className="svg"
								size={32}
								color="#bdc4cd"
								onClick={() => dispatch(closeModal("details"))}
							/>
						</div>

						<Formik initialValues={{}} onSubmit={() => alert("Wife")}>
							<Form>
								<FormControl>
									<Label>Customer Name</Label>
									<CustomField name="name" type="name" />
								</FormControl>
								<FormControl>
									<Label>Phone Number</Label>
									<CustomField name="number" type="number" />
								</FormControl>
								<FormControl>
									<Label>Email Address</Label>
									<CustomField name="email" type="email" />
								</FormControl>
								<SubmitButton
									loading={loading}
									disabled={loading}
									type="submit"
								>
									{" "}
									{loading ? (
										<Puff
											stroke={AppColors.brandOrange}
											strokeOpacity={0.125}
										/>
									) : (
										"Continue"
									)}
								</SubmitButton>
							</Form>
						</Formik>
					</>
				)}
			</Modal>
		);
	};
	const ProductModal = () => {
		return (
			<Modal>
				{true && (
					<>
						<div className="label">
							<BiArrowBack size={32} color="#bdc4cd" />
							<MdOutlineCancel
								className="svg"
								size={32}
								color="#bdc4cd"
								onClick={() => dispatch(closeModal("product"))}
							/>
						</div>
						<div className="content">
							<h2 style={{ margin: "20px 0", textAlign: "center" }}>
								Create Item
							</h2>
						</div>
						<Formik initialValues={{}} onSubmit={() => alert("Wife")}>
							<Form>
								<FormControl>
									<Label>Item Descripton</Label>
									<CustomField name="name" type="name" />
								</FormControl>
								<FormControl>
									<Label>Amount(no comma)</Label>
									<CustomField name="number" type="number" />
								</FormControl>
								<FormControl>
									<Label>Quantity</Label>
									<CustomField name="quantity" type="number" />
								</FormControl>
								<SubmitButton
									loading={loading}
									disabled={loading}
									type="submit"
								>
									{" "}
									{loading ? (
										<Puff
											stroke={AppColors.brandOrange}
											strokeOpacity={0.125}
										/>
									) : (
										"Continue"
									)}
								</SubmitButton>
							</Form>
						</Formik>
					</>
				)}
			</Modal>
		);
	};

	const DeliveryModal = () => {
		return (
			<Modal>
				{true && (
					<>
						<div className="label">
							<BiArrowBack size={32} color="#bdc4cd" />
							<MdOutlineCancel
								className="svg"
								size={32}
								color="#bdc4cd"
								onClick={() => dispatch(closeModal("product"))}
							/>
						</div>
						<div className="content">
							<h2 style={{ margin: "20px 0", textAlign: "center" }}>
								Delivery Details
							</h2>
						</div>
						<Formik initialValues={{}} onSubmit={() => alert("Wife")}>
							<Form>
								<FormControl>
									<Label>Delivery Option</Label>
									<CustomField name="option" type="option" />
								</FormControl>
								<FormControl>
									<Label>Home Address</Label>
									<CustomField name="number" type="number" />
								</FormControl>
								<FormControl>
									<Label>
										<span style={{ fontWeight: 700, color: "black" }}>
											Delivery Fee:{" "}
										</span>{" "}
										N1,500
									</Label>
								</FormControl>
								<SubmitButton
									loading={loading}
									disabled={loading}
									type="submit"
								>
									{" "}
									{loading ? (
										<Puff
											stroke={AppColors.brandOrange}
											strokeOpacity={0.125}
										/>
									) : (
										"Continue"
									)}
								</SubmitButton>
							</Form>
						</Formik>
					</>
				)}
			</Modal>
		);
	};
	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			showModal={activeModal}
			isLoading={false}
			popUpContent={
				activeModal === "details" ? (
					<UserModal />
				) : activeModal === "delivery" ? (
					<DeliveryModal />
				) : (
					<ProductModal />
				)
			}
			navMode="noSearch"
		/>
	);
};

export default CreateInvoice;
