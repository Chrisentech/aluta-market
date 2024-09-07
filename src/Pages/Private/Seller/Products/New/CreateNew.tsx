import React, { useRef, useState, useEffect } from "react";
import Layout from "../../../../../Layouts";
import { useDispatch, useSelector } from "react-redux";

// import * as Icons from "images/icons";
import {
	Wrapper,
	ImageWrapper,
	Container,
	FormControl,
	Incrementor,
	Input,
	TextEditor,
	OptionButton,
	Flex,
	Label,
	ErrorMessageWrapper,
	Modal,
	ModalWrapper,
	SizeVariantCard,
	Img,
	ColorVariantCard,
	SubmitButton,
	// ConditionVariantCard,
} from "./createnew.styles";
import {
	AddProductImage,
	Card,
	Dropdown,
	UploadModal,
} from "../../../../../Shared/Components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
	MdDeleteOutline,
	MdOutlineAddHomeWork,
	MdOutlineCancel,
} from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, useFormikContext, useField } from "formik";
import * as yup from "yup";
import { AiOutlinePlus } from "react-icons/ai";
import { IProductProps } from "../../../../../Interfaces";
import { BiPlus, BiMinus, BiArrowBack } from "react-icons/bi";
import axios from "axios";
import {
	closeModal,
	selectActiveModal,
	showModal,
} from "../../../../../Features/modal/modalSlice";
import useProducts from "../../../../../Features/products/productActions";
import {
	// actions,
	selectCategories,
	selectCategory,
	selectCatlogue,
} from "../../../../../Features/products/productSlice";
import Dropdown2 from "../../../../../Shared/Components/Dropdown/Dropdown2";
import useVariants from "../../../../../test-data/variant-data";
import { IoMdClose } from "react-icons/io";
import { CircleCheck, image34 } from "../../../../../assets";
import { numberWithCommas } from "../../../../../Shared/Utils/helperFunctions";
import { selectStore } from "../../../../../Features/store/storeSlice";
import { Puff } from "react-loading-icons";
import { AppColors, ROUTE } from "../../../../../Shared/Constants";
import {
	alertError,
	alertSuccess,
} from "../../../../../Features/alert/alertSlice";
import { selectLoadingState } from "../../../../../Features/loading/loadingSlice";

const initialValues: IProductProps = {
	name: "",
	price: 0,
	discount: 0,
	category: 0,
	subcategory: 0,
	description: "",
	thumbnail: "",
	file: "",
	variants: [],
	review: [],
	type: "",
	// option: [],
};

const validationSchema = yup.object().shape({
	discount: yup.number().typeError("Product Discount must be a number"),
	name: yup.string().required("Product Name cannot be empty"),
	price: yup
		.number()
		.typeError("Product Price must be a number")
		.min(100, "Product Price cannot be less than N100")
		.required("Product Price cannot be empty"),
});
const variationValidationSchema = yup.object().shape({
	name: yup.string().required("Product Name cannot be empty"),
	price: yup
		.number()
		.typeError("Product Price must be a number")
		.min(100, "Product Price cannot be less than N100")
		.required("Product Price cannot be empty"),
	discount: yup.number().typeError("Product Discount must be a number"),
	// .positive("Product Discount must be a positive number"),
	// category: yup.string().required("Select an option"),
	// subcategory: yup.string().required("Select an option"),
});

const Screen: React.FC = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const { getProducts } = useProducts();
	const [files, setFiles] = useState<any | string[]>(
		location.state?.fileData ?? []
	); // Changed the type to string[] to hold Blob URLs
	const [imageUrls, setImageUrls] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);
	const nav = useNavigate();
	const [description, setDescription] = useState("");
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState<number>(0);
	const [discountedPrice, setDiscountedPrice] = useState(0);
	const [quantity, setQuantity] = useState<number>(1);
	const hiddenInputRef = useRef<HTMLInputElement | null>(null);
	const { state } = useLocation();
	const store = useSelector(selectStore);
	const catalogue = useSelector(selectCatlogue);
	const reduxCategory = useSelector(selectCategory);
	const reduxCategories = useSelector(selectCategories);
	const [imgLoading, setImgLoading] = useState(false);
	const [thumbnail, setthumbnail] = useState<string | undefined>(
		imageUrls[0] || catalogue?.thumbnail
	);

	const [subCategory, setSubcategory] = useState(0);
	const { createProduct, getCategories, getCategory } = useProducts();
	const [alwaysAvailable, setAlwaysavailable] = useState(false);

	const handleSelectCategory = async (name: string) => {
		const cat = reduxCategories.find((el: any) => el.name === name);
		await getCategory(cat.id);
	};
	const handleRemoveImage = (url: string) => {
		if (thumbnail === url) {
			alert("You can't delete the thumbnail");
			return;
		}
		setImageUrls(imageUrls.filter((img: string) => img !== url));
		setFiles(
			files.filter((file: any) => file !== files[imageUrls.indexOf(url)])
		);
	};
	useEffect(() => {
		if (files && imgLoading === true) {
			const fetchCloudinaryUrls = async () => {
				try {
					const cloudinaryUrls = [];
					for (const file of files) {
						const formData = new FormData();
						formData.append("file", file);
						formData.append("upload_preset", "rbwlt6de");
						const response = await axios.post(
							"https://api.cloudinary.com/v1_1/de7i4zy3m/image/upload",
							formData
						);
						cloudinaryUrls.push(response.data.secure_url);
					}
					setImageUrls(cloudinaryUrls);
					setthumbnail(cloudinaryUrls[0]);
					setImgLoading(false);
					localStorage.setItem("thumbnail", cloudinaryUrls[0] || "");
				} catch (error) {
					setImgLoading(false);
					console.error("Error uploading images to Cloudinary:", error);
				}
			};

			fetchCloudinaryUrls();

			return () => {
				// Cleanup: No need to revoke Blob URLs as Cloudinary URLs are used
			};
		}
	}, [files]);

	useEffect(() => {
		if (
			catalogue?.thumbnail &&
			state?.type != "product" &&
			state?.type != "service"
		) {
			setthumbnail(catalogue?.thumbnail);
			setImageUrls([catalogue?.thumbnail, ...imageUrls]);
		}
	}, [catalogue]);
	const HandleUploadImages = (e: React.ChangeEvent<HTMLInputElement>) => {
		setImgLoading(true);
		const selectedFiles: any = e.target.files;
		setFiles([...files, ...selectedFiles]);
		// console.log(files);
	};
	// console.log(imageUrls);

	const handleSubmit = async (values: IProductProps) => {
		setLoading(true);

		if (state?.type === "digital" && !catalogue?.file) {
			dispatch(alertError("Please upload a file for digital products"));
			return;
		}

		let payload: any = {
			description,
			name: productName,
			discount: discountedPrice ?? 0,
			price: productPrice,
			variant: null,
			category: parseInt(reduxCategory.id ?? ""),
			subcategory: subCategory,
			image: imageUrls,
			thumbnail,
			file: catalogue?.file ?? "",
			quantity,
			// type: state?.type, //digital,physical or service
			always_available: alwaysAvailable,
			store: store?.name,
		};
		try {
			// Call the createProduct function to submit the form
			await createProduct(payload);
			console.log(values);
			dispatch(alertSuccess("Product added successfully"));
			await getProducts({ store: store.name, limit: 12, offset: 0 });
			nav(ROUTE.SELLER_PRODUCTS);

			// Log the form values for debugging purposes
		} catch (error: any) {
			setLoading(false);
			if (error.graphQLErrors && error.graphQLErrors.length > 0) {
				for (let index = 0; index < error.graphQLErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.graphQLErrors[index].message).message)
					);
				}
			}
			if (error.protocolErrors && error.protocolErrors.length > 0) {
				for (let index = 0; index < error.protocolErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.protocolErrors[index].message).message)
					);
				}
			}
			if (error.clientErrors && error.clientErrors.length > 0) {
				for (let index = 0; index < error.clientErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.clientErrors[index].message).message)
					);
				}
			}
			if (error.networkErrors && error.networkErrors.length > 0) {
				for (let index = 0; index < error.networkErrors.length; index++) {
					dispatch(
						alertError(JSON.parse(error.networkErrors[index].message).message)
					);
				}
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// Focus the input element when the component mounts
		hiddenInputRef.current?.focus();
	}, [files]);

	useEffect(() => {
		getCategories();
	}, []);

	const handleUpoadDigitalProduct = () => {
		dispatch(showModal("digital"));
	};

	const handleIncreaseQuantity = (q: number) => {
		setQuantity(++q);
	};
	const handleDecreaseQuantity = (q: number) => {
		if (quantity > 1) setQuantity(--q);
	};
	const handleProcedureContentChange = (content: any) => {
		setDescription(content);
	};
	const formats = [
		"header",
		"height",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"color",
		"bullet",
		"indent",
		"link",
		"image",
		"align",
		"size",
	];
	const modules = {
		toolbar: [
			[{ size: ["small", false, "large", "huge"] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[{ list: "ordered" }, { list: "bullet" }],
			["link", "image"],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
				{ align: [] },
			],
			[
				{
					color: [
						"#000000",
						"#e60000",
						"#ff9900",
						"#ffff00",
						"#008a00",
						"#0066cc",
						"#9933ff",
						"#ffffff",
						"#facccc",
						"#ffebcc",
						"#ffffcc",
						"#cce8cc",
						"#cce0f5",
						"#ebd6ff",
						"#bbbbbb",
						"#f06666",
						"#ffc266",
						"#ffff66",
						"#66b966",
						"#66a3e0",
						"#c285ff",
						"#888888",
						"#a10000",
						"#b26b00",
						"#b2b200",
						"#006100",
						"#0047b2",
						"#6b24b2",
						"#444444",
						"#5c0000",
						"#663d00",
						"#666600",
						"#003700",
						"#002966",
						"#3d1466",
						"custom-color",
					],
				},
			],
		],
	};
	const formIsValid =
		!!productName && !!productPrice && !!reduxCategory && !!thumbnail;
	const productCategoryIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

	return (
		<Wrapper>
			<Card className="card" width={"100%"} onHover={false} height={"570px"}>
				<div className="badge">
					<MdOutlineAddHomeWork size={30} />
				</div>
				<h3>Add {state?.type != "service" ? "Product" : "Service"}</h3>
				<Container>
					<ImageWrapper>
						{!!imageUrls.length &&
							imageUrls.map((imageUrl, index) => {
								return (
									<div className="image-container" key={index}>
										<MdOutlineCancel
											className="svg"
											onClick={() => handleRemoveImage(imageUrl)}
										/>
										<img
											src={imageUrl}
											alt="Uploaded Image"
											onClick={() => setthumbnail(imageUrl)}
										/>
										{thumbnail === imageUrl && <div className="active" />}
									</div>
								);
							})}
						<div
							className="addBtn"
							style={{
								border: !thumbnail ? "1px dashed red" : "1px dashed lightgray",
							}}
							onClick={() => hiddenInputRef.current?.click()}
						>
							{imgLoading ? (
								<Puff stroke={AppColors.brandOrange} strokeOpacity={0.125} />
							) : (
								<AiOutlinePlus color="#DEE2E7" size="24" />
							)}
						</div>
						<input
							multiple
							style={{
								display: "none",
							}}
							type="file"
							ref={hiddenInputRef}
							accept=".jpg, .jpeg, .png"
							onChange={HandleUploadImages}
						/>
					</ImageWrapper>
					<div
						className="options"
						style={{
							color: !thumbnail ? "red" : "#1c1c1c",
						}}
					>
						{thumbnail
							? "Choose any of them as thumbnail"
							: "Thumbnails are required"}
					</div>
					<Formik
						initialValues={initialValues}
						onSubmit={handleSubmit}
						validationSchema={!formIsValid && validationSchema}
					>
						{({ errors }) => (
							<Form>
								<FormControl>
									<Label>
										{state?.type != "service" ? "Product Name" : "Service Name"}
										<span>*</span>
									</Label>
									<CustomField
										type="text"
										name={!!productName ? "none" : "name"}
										value={productName}
										onChange={(e: any) => setProductName(e.target.value)}
									/>
								</FormControl>
								<Flex>
									<FormControl>
										<Label>
											Price<span>*</span>{" "}
											<span className="info">(No Commas)</span>
										</Label>
										<CustomField
											name={productPrice > 100 ? "none" : "price"}
											type="number"
											value={productPrice}
											onChange={(e: any) => setProductPrice(e.target.value)}
										/>
									</FormControl>
									<FormControl>
										<Label>
											Discount Price <span className="info">(Optional)</span>
										</Label>
										<CustomField
											name={discountedPrice ? "none" : "discount"}
											type="number"
											min={0}
											value={discountedPrice}
											onChange={(e: any) => setDiscountedPrice(e.target.value)}
										/>
									</FormControl>
								</Flex>
								<Flex>
									<FormControl>
										<Label>
											Category<span>*</span>{" "}
										</Label>
										<Input
											as="select"
											id="selectedCategory"
											name="category"
											onChange={(e: any) =>
												handleSelectCategory(e.target.value)
											}
										>
											<option value="" label="Select a category" />
											{state?.type === "product"
												? reduxCategories
														?.filter((category: any) =>
															productCategoryIds.includes(category.id)
														)
														?.map((category: any) => (
															<option key={category.id} value={category.name}>
																{category.name}
															</option>
														))
												: state?.type === "digital"
												? reduxCategories
														?.filter((category: any) => category.id === "10")
														?.map((category: any) => (
															<option key={category.id} value={category.name}>
																{category.name}
															</option>
														))
												: reduxCategories
														?.slice(11, 21)
														?.map((category: any) => (
															<option key={category.id} value={category.name}>
																{category.name}
															</option>
														))}
										</Input>
									</FormControl>
									<FormControl>
										<Label>
											Sub Category<span>*</span>
										</Label>
										<Input
											as="select"
											id="selectedCategory"
											name="subcategory"
											onChange={(e: any) => setSubcategory(e.target.value)}
										>
											<option value="" label="Select a subcategory" />
											{reduxCategory?.subcategories?.map(
												(category: any, index: number) => (
													<option key={category.slug} value={index + 1}>
														{category.name}
													</option>
												)
											)}
										</Input>
									</FormControl>
								</Flex>
								<FormControl>
									<Label>
										{state?.type != "service" ? "Product" : "Service"}{" "}
										description<span>*</span> min(50 words)
									</Label>
									<TextEditor width={"100%"} height="209px">
										<ReactQuill
											theme="snow"
											modules={modules}
											formats={formats}
											placeholder={`Describe your ${
												state?.type != "service" ? "product" : "service"
											} to your customer`}
											onChange={handleProcedureContentChange}
											// style={{ height: "109px", width: "100%" }}ss
										/>
									</TextEditor>
								</FormControl>
								<Flex>
									<FormControl>
										<Label>
											Manage Quantity <span className="info">(Optional)</span>
										</Label>

										<Incrementor>
											<div
												className="leftButton"
												onClick={() => handleDecreaseQuantity(quantity)}
											>
												<BiMinus />
											</div>
											<div className="main">{quantity}</div>
											<div
												className="rightButton"
												onClick={() => handleIncreaseQuantity(quantity)}
											>
												<BiPlus />
											</div>
										</Incrementor>
										<div style={{ display: "flex", alignItems: "center" }}>
											<CustomField
												name="checkbox"
												type="checkbox"
												onChange={() => setAlwaysavailable(!alwaysAvailable)}
											/>
											<span style={{ marginLeft: 5 }}>Always available</span>
										</div>
									</FormControl>
									{state?.type === "product" && (
										<FormControl>
											<OptionButton
												type="button"
												onClick={() => {
													dispatch(showModal("addOptions"));
												}}
												disabled={!thumbnail || !productPrice || !productName}
											>
												Add Options
											</OptionButton>
										</FormControl>
									)}
								</Flex>
								{state?.type === "digital" && (
									<FormControl>
										{catalogue?.file ? (
											<div className="upload_container">
												<h2>
													{catalogue?.file} <CircleCheck />
												</h2>
											</div>
										) : (
											<div
												className="upload_container"
												onClick={handleUpoadDigitalProduct}
											>
												<h2>
													<svg
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
															stroke="#505050"
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															d="M9 9.51001L12 6.51001L15 9.51001"
															stroke="#505050"
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															d="M12 6.51001V14.51"
															stroke="#505050"
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"
															stroke="#505050"
															stroke-width="1.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>

													<span>Upload Document</span>
												</h2>
												<p>
													txt, doc, docx and pdf are the only acceptable formats
												</p>
											</div>
										)}
									</FormControl>
								)}
								<SubmitButton
									type="submit"
									loading={loading}
									disabled={
										!reduxCategory ||
										!thumbnail ||
										!productPrice ||
										productPrice < 100 ||
										!productName ||
										imgLoading ||
										description.length <= 12 ||
										loading
									}
								>
									{loading ? (
										<Puff
											stroke={AppColors.brandOrange}
											strokeOpacity={0.125}
										/>
									) : (
										`Publish ${
											state?.type != "service" ? "Product" : "Service"
										}`
									)}
								</SubmitButton>
							</Form>
						)}
					</Formik>
				</Container>
				{/* Replace "#" with the correct route for your component */}
			</Card>
		</Wrapper>
	);
};
const CustomField: React.FC<{
	name: string;
	type: string;
	options?: any;
	userType?: string;
	value?: string | number;
	background?: string;
	min?: number;
	onChange?: any;
	padding?: string;
	width?: string;
	checked?: boolean;
	height?: string;
	offset?: string;
	margin?: string;
	readOnly?: boolean;
}> = ({
	name,
	type,
	options,
	value,
	min,
	readOnly,
	height,
	background,
	padding,
	checked,
	offset,
	margin,
	onChange,
}) => {
	const [field, meta] = useField(name);
	const inputHasError = !!meta?.error?.length;
	// console.log(field);
	if (type === "select") {
		return (
			<Dropdown
				options={options}
				selectedOption={options[0]}
				handleOptionClick={() => alert("hi")}
				background={background}
				padding={padding}
				offset={offset}
				margin={margin}
				width={"100%"}
				// onChange={onCLick}
			/>
		);
	}
	if (type === "checkbox") {
		return <input checked={checked} type={"checkbox"} onChange={onChange} />;
	}
	if (type === "textarea") {
		const { values, handleChange } = useFormikContext<any>();
		return (
			<>
				<TextEditor height={height}>
					<ReactQuill
						value={values[name]}
						onChange={(value) => handleChange(name)(value)}
					/>
				</TextEditor>
				{meta.touched && meta.error && (
					<ErrorMessageWrapper>{meta.error}</ErrorMessageWrapper>
				)}
			</>
		);
	}
	return (
		<>
			{/*  value={
          field.name === "discount" || field.name === "price"
            ? numberWithCommas(meta.value)
            : value
        } */}
			<Input
				{...field}
				error={inputHasError}
				type={type}
				value={value}
				min={min}
				height={height}
				readOnly={readOnly}
				onChange={onChange}
			/>
			{meta.touched && meta.error && (
				<ErrorMessageWrapper>{meta.error}</ErrorMessageWrapper>
			)}
		</>
	);
};
const variations = ["Size", "Color", "Condition"];

const NewProduct = () => {
	const dispatch = useDispatch();
	const { modals } = useSelector((state: any) => state.modal);
	const [sizeStep, setSizeStep] = useState(1);
	const [colorStep, setColorStep] = useState(1);
	const [moreOption, setMoreOption] = useState<string>("No");
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [selectedCondition, setselectedCondition] = useState<string | null>(
		null
	);
	// const [showMainDropdown, setShowMainDropdown] = useState<boolean>(true)

	const handleModalSubmit = () => {
		alert("ffff");
	};

	const {
		addNewVariant,
		handleVariantChange,
		deleteVariant,
		getVariants,
		increaseQuantity,
		decreaseQuantity,
	} = useVariants();

	const sizeVariant = getVariants("size");
	const colorVariant = getVariants("color");
	// const conditionVariant = getVariants("condition");

	const handleDropdownEvent = (option: string) => {
		setSelectedOption(option);
	};
	const handleMoreOption = (option: string) => {
		setMoreOption(option);
	};
	const hasNextStep = (option: string) => {
		if (option === "Size" && sizeStep < 2) {
			return true;
		} else if (option === "Color" && moreOption === "No") {
			if (colorStep < 2) {
				return true;
			} else return false;
		} else if (option === "Color" && moreOption === "Yes") {
			if (colorStep < 4) {
				return true;
			} else return false;
		} else return false;
	};

	const handleNextStep = (option: string, decrement?: boolean) => {
		if (decrement) {
			if (option === "Size") setSizeStep(sizeStep - 1);
			if (option === "Color") setColorStep(colorStep - 1);
		} else {
			if (option === "Size") setSizeStep(sizeStep + 1);
			if (option === "Color") setColorStep(colorStep + 1);
		}
	};

	const handleAdd = (option: string) => {
		if (option === "Size") setSizeStep(1);
		if (option === "Color") setColorStep(1);
	};

	const ModalContent = () => {
		return (
			<Modal>
				{modals.addOptions && (
					<ModalWrapper>
						<div className="label">
							<BiArrowBack
								size={32}
								color="#bdc4cd"
								onClick={() => handleNextStep(selectedOption as string, true)}
							/>
							<MdOutlineCancel
								className="svg"
								size={32}
								color="#bdc4cd"
								onClick={() => dispatch(closeModal("addOptions"))}
							/>
						</div>
						<h3 className="title">Add Product options</h3>
						{selectedOption === "Size" ? (
							<div className="info gray">
								Simply use alphabets e.g S,M,L,XXL e.t.c or numbers e.g.
								38,45,48
							</div>
						) : (
							<div className="info">
								This Option is for Products that have different size or colors
							</div>
						)}

						<Dropdown2
							options={variations}
							selectedOption={selectedOption}
							handleOptionEvent={handleDropdownEvent}
							padding="15px"
							background="#f7fafc"
							className="drpdwn"
							margin={"10px 0"}
							width="100%"
						>
							Choose Option
						</Dropdown2>

						<Formik
							initialValues={initialValues}
							onSubmit={handleModalSubmit}
							validationSchema={variationValidationSchema}
						>
							<Form>
								{selectedOption === "Size" && (
									<FormControl>
										{sizeStep === 1 && (
											<>
												{sizeVariant.map((variant, index) => {
													return (
														<div className="size-variant" key={variant.id}>
															<Label>
																Add Size
																<input
																	className="input price"
																	value={variant.variant as string}
																	onChange={(e) =>
																		handleVariantChange(
																			selectedOption,
																			index,
																			"variant",
																			e.target.value
																		)
																	}
																/>
																<IoMdClose
																	className="close"
																	size={24}
																	onClick={() =>
																		deleteVariant(selectedOption, index)
																	}
																/>
															</Label>
															<Label>
																Price
																<input
																	className="input"
																	value={parseInt(variant.price)}
																	type="number"
																	min={1}
																	onChange={(e) =>
																		handleVariantChange(
																			selectedOption,
																			index,
																			"price",
																			e.target.value
																		)
																	}
																/>
															</Label>
														</div>
													);
												})}
											</>
										)}
										{sizeStep === 2 && (
											<>
												{sizeVariant.map((variant, index) => (
													<SizeVariantCard key={variant.id}>
														<div className="left">
															<Img
																background={
																	localStorage.getItem("thumbnail") || image34
																}
															/>
															<div className="info">
																<p>{variant?.variant as string}</p>
																<p>
																	N {numberWithCommas(parseInt(variant.price))}
																</p>
															</div>
														</div>
														<div
															className="right"
															style={{ position: "relative" }}
														>
															<MdDeleteOutline
																size={19}
																color="#FA3434"
																className="icon"
																style={{
																	position: "absolute",
																	right: 0,
																	top: -21,
																}}
																onClick={() =>
																	deleteVariant(
																		selectedOption.toLowerCase(),
																		index
																	)
																}
															/>
															<Incrementor small>
																<div
																	className="leftButton"
																	onClick={() =>
																		decreaseQuantity(
																			selectedOption.toLowerCase(),
																			index
																		)
																	}
																>
																	<BiMinus />
																</div>
																<div className="main">{variant.quantity}</div>
																<div
																	className="rightButton"
																	onClick={() =>
																		increaseQuantity(
																			selectedOption.toLowerCase(),
																			index
																		)
																	}
																>
																	<BiPlus />
																</div>
															</Incrementor>
														</div>
													</SizeVariantCard>
												))}
											</>
										)}
									</FormControl>
								)}
								{selectedOption === "Color" && (
									<FormControl>
										{colorStep > 1 ? (
											<>
												{moreOption ? (
													<>
														{colorStep === 2 && (
															<ColorVariantCard>
																<label>
																	Input value for the option e.g. size?
																	<input placeholder="" className="input" />
																</label>
															</ColorVariantCard>
														)}
													</>
												) : (
													<>
														{colorVariant.map((variant, index) => (
															<SizeVariantCard key={variant.id}>
																<div className="left">
																	<Img background={image34} />
																	<div className="info">
																		<p>{"variant.variant"}</p>
																		<p>{variant.price}</p>
																	</div>
																</div>
																<div className="right">
																	<MdDeleteOutline
																		size={19}
																		color="#FA3434"
																		className="icon"
																		onClick={() =>
																			deleteVariant(selectedOption, index)
																		}
																	/>
																	<Incrementor small>
																		<div
																			className="leftButton"
																			onClick={() =>
																				decreaseQuantity(selectedOption, index)
																			}
																		>
																			<BiMinus />
																		</div>
																		<div className="main">
																			{variant.quantity}
																		</div>
																		<div
																			className="rightButton"
																			onClick={() =>
																				increaseQuantity(selectedOption, index)
																			}
																		>
																			<BiPlus />
																		</div>
																	</Incrementor>
																</div>
															</SizeVariantCard>
														))}
													</>
												)}
											</>
										) : (
											<>
												{colorStep === 1 && (
													<>
														<label>
															Does this colour have extra option e.g. size?
															<Dropdown2
																options={["Yes", "No"]}
																selectedOption={moreOption}
																handleOptionEvent={handleMoreOption}
																padding="15px"
																background="#f7fafc"
																className="drpDwn"
															/>
														</label>
														<AddProductImage />
													</>
												)}
											</>
										)}
									</FormControl>
								)}
								{selectedOption === "Condition" && (
									<FormControl>
										<>
											<Dropdown2
												options={["new", "fairly used", "refurbished"]}
												selectedOption={selectedCondition}
												handleOptionEvent={(option) =>
													setselectedCondition(option)
												}
												padding="15px"
												background="#f7fafc"
												className="drpDwn"
											>
												Choose Option
											</Dropdown2>
										</>
									</FormControl>
								)}
							</Form>
						</Formik>
						{selectedOption && (
							<>
								{!(selectedOption === "Color" && colorStep === 1) &&
									hasNextStep(selectedOption) && (
										<OptionButton
											type="button"
											className="addNewBtn"
											onClick={() => addNewVariant(selectedOption)}
										>
											Add New
										</OptionButton>
									)}
								{hasNextStep(selectedOption) ? (
									<button
										className="submit lsxaj2"
										type="button"
										onClick={() => handleNextStep(selectedOption)}
									>
										Next
									</button>
								) : (
									<button
										className="submit lsxaj2"
										type="button"
										onClick={() => handleAdd(selectedOption)}
									>
										Add Option
									</button>
								)}
							</>
						)}
					</ModalWrapper>
				)}
			</Modal>
		);
	};
	const reduxCategories = useSelector(selectCategories);
	const isLoading = useSelector(selectLoadingState);
	const activeModal = useSelector(selectActiveModal);

	return (
		<Layout
			showModal={activeModal}
			layout={"dashboard"}
			component={Screen}
			popUpContent={
				activeModal === "addOptions" ? <ModalContent /> : <UploadModal />
			}
			isLoading={!reduxCategories || isLoading}
			navMode="noSearch"
			modalWidth="500px"
		/>
	);
};

export default NewProduct;
