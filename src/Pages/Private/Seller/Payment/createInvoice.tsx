import React, { useEffect, useRef, useState } from "react";
import Layout from "../../../../Layouts";
import {
	Wrapper,
	FormControl,
	Label,
	Input,
	ErrorMessageWrapper,
	Modal,
	SubmitButton,
	PrintButton,
	TableCell,
	Footer,
	TableHeader,
	InvoiceItems,
	CallToActionButton,
	TotalRow,
	Section,
	InvoiceDetails,
	CompanyInfo,
	InvoiceHeader,
	Reciever,
	InvoiceContainer,
} from "./createInvoice.styles";
import { Puff } from "react-loading-icons";
import { Button } from "../../../../Shared/Components";
import { InvoiceIcon, ErrorIcon, CircleCheck } from "../../../../assets";
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
import {
	actions,
	selectStore,
	selectStoreInvoice,
} from "../../../../Features/store/storeSlice";
import {
	calculateTotalPrice,
	generateOrderNumber,
	numberWithCommas,
} from "../../../../Shared/Utils/helperFunctions";
import { alertError } from "../../../../Features/alert/alertSlice";
import { useReactToPrint } from "react-to-print";
import { capitalize } from "lodash";
const Screen: React.FC = () => {
	const dispatch = useDispatch();
	const invoice = useSelector(selectStoreInvoice);
	const contentRef = useRef<any>(null);
	const reactToPrintFn = useReactToPrint({ contentRef });
	const uuid = generateOrderNumber();
	const store = useSelector(selectStore);
	const [products, setProducts] = useState(invoice?.products || []);
	const [customer, _] = useState(invoice?.customer || { name: "" });

	const initialValues: any = {
		customer: customer,
		due_date: "",
		item: products,
		delivery_details: "",
	};
	const handleSubmit = (values: any) => {
		const payload = {
			due_date: values.due_date,
			customer: invoice.customer,
			items: invoice.products,
			uuid,
		};
		if (payload.customer && payload.due_date && payload.items.length > 0) {
			reactToPrintFn();
		} else {
			dispatch(alertError("Please fill all important fields"));
			return;
		}
	};
	const handleDelete = (index: number) => {
		const updatedProducts = products.filter((_: any, i: number) => i !== index);
		setProducts(updatedProducts);
		const updatedInvoice = {
			...invoice,
			products: updatedProducts,
		};

		dispatch(actions.setInvoice(updatedInvoice));
	};
	return (
		<Wrapper>
			<header>
				<InvoiceIcon />
				<h2>Create payment invoice</h2>
				<p>to recieve payment for your product or service</p>
			</header>
			<Formik
				enableReinitialize
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				<Form>
					<FormControl>
						<Label>Customer Details</Label>
						<CustomField
							name="customer"
							type="text"
							placeholder="Click to add Customer details"
							value={invoice?.customer?.name}
							onSelect={() => dispatch(showModal("details"))}
						/>
					</FormControl>

					<FormControl>
						<Label>Due Date</Label>
						<CustomField name={"due_date"} type="date" />
					</FormControl>

					<FormControl>
						<Label style={{ marginBottom: 10 }}>Item Description</Label>

						{invoice?.products?.length > 0 ? (
							<div>
								{invoice?.products?.map((product: any, index: number) => (
									<div
										key={index}
										style={{
											marginBottom: 10,
										}}
									>
										<div className="descr">
											<div className="div">
												<span
													style={{
														background: "#f7fafc",
														padding: 5,
														borderRadius: 6,
													}}
												>
													<svg
														width="48"
														height="48"
														viewBox="0 0 48 48"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<rect
															width="48"
															height="48"
															rx="6"
															fill="#0D6EFD"
															fill-opacity="0.1"
														/>
														<path
															d="M34.947 18.4266L24.6803 24.3733C24.267 24.6133 23.747 24.6133 23.3203 24.3733L13.0536 18.4266C12.3203 17.9999 12.1336 16.9999 12.6936 16.3733C13.0803 15.9333 13.5203 15.5733 13.987 15.3199L21.2136 11.3199C22.7603 10.4533 25.267 10.4533 26.8136 11.3199L34.0403 15.3199C34.507 15.5733 34.947 15.9466 35.3336 16.3733C35.867 16.9999 35.6803 17.9999 34.947 18.4266Z"
															fill="#0D6EFD"
														/>
														<path
															d="M23.2393 26.8535V35.9468C23.2393 36.9602 22.2127 37.6268 21.306 37.1868C18.5593 35.8402 13.9327 33.3202 13.9327 33.3202C12.306 32.4002 10.9727 30.0802 10.9727 28.1735V21.2935C10.9727 20.2402 12.0793 19.5735 12.986 20.0935L22.5727 25.6535C22.9727 25.9068 23.2393 26.3602 23.2393 26.8535Z"
															fill="#0D6EFD"
														/>
														<path
															d="M24.7617 26.8535V35.9468C24.7617 36.9602 25.7884 37.6268 26.6951 37.1868C29.4417 35.8402 34.0684 33.3202 34.0684 33.3202C35.6951 32.4002 37.0284 30.0802 37.0284 28.1735V21.2935C37.0284 20.2402 35.9217 19.5735 35.0151 20.0935L25.4284 25.6535C25.0284 25.9068 24.7617 26.3602 24.7617 26.8535Z"
															fill="#0D6EFD"
														/>
													</svg>
												</span>
												<div>
													<p>{product?.name}</p>
													<p>N{numberWithCommas(product?.price)}</p>
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
													onClick={() => handleDelete(index)}
													size="22px"
												/>
												<Incrementor style={{ marginTop: 29, width: "unset" }}>
													<div className="leftButton" style={{ padding: 6 }}>
														<BiMinus />
													</div>
													<div className="main" style={{ padding: 6 }}>
														{product.quantity}
													</div>
													<div className="rightButton" style={{ padding: 6 }}>
														<BiPlus />
													</div>
												</Incrementor>
											</div>
										</div>
									</div>
								))}
								<div
									style={{
										display: "flex",
										marginTop: 20,
										justifyContent: "end",
										paddingBottom: 20,
										borderBottom: "1px solid #EFF2F4",
									}}
								></div>
								<Button
									type="button"
									padding={20}
									className="buttbton"
									onClick={() => dispatch(showModal("product"))}
								>
									<span>Add Item</span>
								</Button>
							</div>
						) : (
							<Button
								type="button"
								padding={20}
								width={"100%"}
								onClick={() => dispatch(showModal("product"))}
							>
								<span>Create Item</span>
							</Button>
						)}

						<div
							style={{
								display: "flex",
								margin: "12px 0",
								justifyContent: "space-between",
								cursor: "pointer",
								borderBottom: "1px solid #EFF2F4",
								paddingBottom: "3px",
							}}
							onClick={() => dispatch(showModal("delivery"))}
						>
							<Label>Delivery Details (optional)</Label>
							{true ? (
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.59 8.29492L12 12.8749L7.41 8.29492L6 9.70492L12 15.7049L18 9.70492L16.59 8.29492Z"
										fill="#8B96A5"
									/>
								</svg>
							) : (
								<CircleCheck />
							)}
						</div>

						<Button
							width={"100%"}
							type="submit"
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

			<div style={{ display: "none" }}>
				<div ref={contentRef}>
					<InvoiceContainer>
						<InvoiceHeader>
							<CompanyInfo>
								<div
									style={{
										display: "flex",
										gap: 10,
										marginBottom: 30,
										alignItems: "center",
									}}
								>
									<img
										src={store?.thumbnail}
										alt="Logo"
										style={{ width: 30 }}
									/>
									<h3>{capitalize(store?.name)}</h3>
								</div>
								<p>{window.location.origin + "/" + store?.link}</p>
							</CompanyInfo>
							<InvoiceDetails>
								<h1>Invoice</h1>
							</InvoiceDetails>
						</InvoiceHeader>
						<Reciever>
							<p>Reciever:</p>
							<h3>{invoice?.customer?.name}</h3>
							<p>{invoice?.customer?.email}</p>
							<p>{invoice?.customer?.number}</p>
						</Reciever>
						<Section>
							<div>
								<p>
									<span>Invoice ID: </span>
									<span>{uuid}</span>
								</p>
								<p>
									<span>Due Date:</span>
									<span>{}</span>
								</p>
								<h3>
									<span>Amount:</span>
									<span>
										NGN{" "}
										{numberWithCommas(calculateTotalPrice(invoice?.products))}
									</span>
								</h3>
							</div>
							<div
								className="diff"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "end",
								}}
							>
								<h3>Pay Options</h3>
								<p>{store?.accounts[0]?.account_number}</p>
								<p>{store?.accounts[0]?.bank_name}</p>
								<p>{store?.accounts[0]?.account_name}</p>
								<CallToActionButton
									as="a"
									href="https://yourpaymentgateway.com"
									target="_blank"
									onClick={() => alert("Thank you for your payment!")}
								>
									Pay Now
								</CallToActionButton>
							</div>
						</Section>
						{/* Invoice Items Section */}
						<InvoiceItems>
							<thead>
								<tr>
									<TableHeader>DESCRIPTION</TableHeader>
									<TableHeader>UNIT PRICE</TableHeader>
									<TableHeader>QTY</TableHeader>
									<TableHeader>TOTAL</TableHeader>
								</tr>
							</thead>
							<tbody>
								{invoice?.products?.map((product: any, index: number) => (
									<tr key={index}>
										<TableCell>{product.name}</TableCell>
										<TableCell>NGN {numberWithCommas(product.price)}</TableCell>
										<TableCell>{product.quantity}</TableCell>
										<TableCell>
											NGN {numberWithCommas(product.price * product.quantity)}
										</TableCell>
									</tr>
								))}
							</tbody>
						</InvoiceItems>

						<div style={{ maxWidth: "300px", marginLeft: "auto" }}>
							<tbody>
								<TotalRow>
									<TableCell>SUBTOTAL</TableCell>
									<TableCell style={{ whiteSpace: "nowrap" }}>
										NGN{" "}
										{numberWithCommas(calculateTotalPrice(invoice?.products))}
									</TableCell>
								</TotalRow>
							</tbody>

							<PrintButton>
								<tbody>
									<TotalRow>
										<TableCell>TOTAL</TableCell>
										<TableCell style={{ whiteSpace: "nowrap" }}>
											NGN{" "}
											{numberWithCommas(calculateTotalPrice(invoice?.products))}
										</TableCell>
									</TotalRow>
								</tbody>
							</PrintButton>
						</div>

						<Footer>
							e-invoice by{" "}
							<a style={{ color: "#ff001f" }} href="#">
								{" "}
								Alutamarket.com
							</a>
						</Footer>
					</InvoiceContainer>
				</div>
			</div>
		</Wrapper>
	);
};

const CustomField: React.FC<{
	name: string;
	type: string;
	value?: string;
	checked?: boolean;
	placeholder?: string;
	onSelect?: React.ChangeEventHandler<HTMLInputElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ name, type, onSelect, placeholder, value }) => {
	const [field, meta] = useField(name);
	const inputHasError = meta?.error?.length ? true : false;

	return (
		<>
			<Input
				placeholder={placeholder}
				{...field}
				error={inputHasError}
				value={value}
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
	const invoice = useSelector(selectStoreInvoice);

	const [data, setdata] = useState(invoice?.customer);

	useEffect(() => {
		if (invoice) {
			setdata(invoice?.customer);
		}
	}, [data]);
	const UserModal = () => {
		const invoice = useSelector(selectStoreInvoice); // Get the latest invoice data
		const [data, setdata] = useState(
			invoice?.customer || { name: "", number: "", email: "" }
		);

		useEffect(() => {
			if (invoice) {
				setdata(invoice.customer || { name: "", number: "", email: "" });
			}
		}, [invoice]); // Update data whenever the invoice changes

		const handleSubmit = (values: any) => {
			const updatedInvoice = {
				...invoice,
				customer: values, // Update the delivery part
			};

			dispatch(actions.setInvoice(updatedInvoice));
			dispatch(closeModal("details"));
		};

		return (
			<Modal>
				<div className="label">
					<BiArrowBack size={32} color="#bdc4cd" />
					<MdOutlineCancel
						className="svg"
						size={32}
						color="#bdc4cd"
						onClick={() => dispatch(closeModal("details"))}
					/>
				</div>

				<Formik
					initialValues={data} // Use the current data
					enableReinitialize // Allow Formik to reset when initialValues change
					onSubmit={handleSubmit}
				>
					{({ handleChange, values }) => (
						<Form>
							<FormControl>
								<Label>Customer Name</Label>
								<CustomField
									name="name"
									type="text"
									value={values.name}
									onChange={(e) => {
										handleChange(e);
										setdata((prev: any) => ({ ...prev, name: e.target.value }));
									}}
								/>
							</FormControl>
							<FormControl>
								<Label>Phone Number</Label>
								<CustomField
									name="number"
									type="text"
									value={values.number}
									onChange={(e) => {
										handleChange(e);
										setdata((prev: any) => ({
											...prev,
											number: e.target.value,
										}));
									}}
								/>
							</FormControl>
							<FormControl>
								<Label>Email Address</Label>
								<CustomField
									name="email"
									type="email"
									value={values.email}
									onChange={(e) => {
										handleChange(e);
										setdata((prev: any) => ({
											...prev,
											email: e.target.value,
										}));
									}}
								/>
							</FormControl>
							<SubmitButton loading={loading} disabled={loading} type="submit">
								{loading ? (
									<Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
								) : (
									"Continue"
								)}
							</SubmitButton>
						</Form>
					)}
				</Formik>
			</Modal>
		);
	};

	const ProductModal = () => {
		const dispatch = useDispatch();
		const invoice = useSelector(selectStoreInvoice);
		const [products, setProducts] = useState(invoice?.products || []);

		useEffect(() => {
			if (invoice) {
				setProducts(invoice.products || []);
			}
		}, [invoice]);

		const handleSubmit = (values: any) => {
			setProducts((prevProducts: any) => [...prevProducts, values]);
			const updatedInvoice = {
				...invoice,
				products: [...products, values], // Update the delivery part
			};
			dispatch(actions.setInvoice(updatedInvoice));
			dispatch(closeModal("product")); // Close the modal after submission
		};

		return (
			<Modal>
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
						<h2 style={{ margin: "12px 0", textAlign: "center" }}>
							Create Item
						</h2>
					</div>
					<Formik
						initialValues={{ name: "", price: "", quantity: "" }}
						onSubmit={handleSubmit}
					>
						<Form>
							<FormControl>
								<Label>Item Description</Label>
								<CustomField name="name" type="text" />
							</FormControl>
							<FormControl>
								<Label>Amount (no comma)</Label>
								<CustomField name="price" type="number" />
							</FormControl>
							<FormControl>
								<Label>Quantity</Label>
								<CustomField name="quantity" type="number" />
							</FormControl>
							<SubmitButton loading={loading} disabled={loading} type="submit">
								{" "}
								{loading ? (
									<Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
								) : (
									"Continue"
								)}
							</SubmitButton>
						</Form>
					</Formik>
				</>
			</Modal>
		);
	};

	const DeliveryModal = () => {
		const [_, setdata] = useState(
			invoice?.delivery || { option: "", fee: "", address: "" }
		);

		useEffect(() => {
			if (invoice) {
				setdata(invoice.delivery || { option: "", fee: "", address: "" });
			}
		}, [invoice]); // Update data whenever the invoice changes

		const handleSubmit = (values: any) => {
			const updatedInvoice = {
				...invoice,
				delivery: values, // Update the delivery part
			};

			dispatch(actions.setInvoice(updatedInvoice));
			dispatch(closeModal("details"));
		};
		return (
			<Modal>
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
						<h2 style={{ margin: "12px 0", textAlign: "center" }}>
							Delivery Details
						</h2>
					</div>
					<Formik
						initialValues={{ option: "", fee: "", address: "" }}
						enableReinitialize
						onSubmit={handleSubmit}
					>
						{({ handleChange, values }) => (
							<Form>
								<FormControl>
									<Label>Delivery Option</Label>
									<CustomField
										name="option"
										type="text"
										value={values?.option}
										onChange={(e) => {
											handleChange(e);
											setdata((prev: any) => ({
												...prev,
												option: e.target.value,
											}));
										}}
									/>
								</FormControl>
								<FormControl>
									<Label>Home Address</Label>
									<CustomField
										name="address"
										type="text"
										value={values.address}
										onChange={(e) => {
											handleChange(e);
											setdata((prev: any) => ({
												...prev,
												address: e.target.value,
											}));
										}}
									/>
								</FormControl>
								<FormControl>
									<Label>
										<span style={{ fontWeight: 700, color: "black" }}>
											Delivery Fee:{" "}
										</span>{" "}
										N1,500
									</Label>
									<CustomField name="fee" type="hidden" value="1500" />
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
						)}
					</Formik>
				</>
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
