import React, { useRef, useState, useEffect } from "react";
import Layout from "../../../../../Layouts";
import { useDispatch, useSelector } from "react-redux";

// import { convertFromRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
	// ConditionVariantCard,
} from "./createnew.styles";
import { AddProductImage, Card, Dropdown } from "../../../../../Shared/Components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdDeleteOutline, MdOutlineAddHomeWork, MdOutlineCancel } from "react-icons/md";
import {useLocation } from "react-router-dom";
import { Formik, Form, useFormikContext, useField } from "formik";
import * as yup from "yup";
import { AiOutlinePlus } from "react-icons/ai";
import { IProductProps } from "../../../../../Interfaces";
import { BiPlus, BiMinus, BiArrowBack } from "react-icons/bi";
import {
	closeModal,
	showModal,
} from "../../../../../Features/modal/modalSlice";
import useProducts from "../../../../../Features/products/productActions";
import {
	// actions,
	selectCategories,
	selectCategory,
} from "../../../../../Features/products/productSlice";
import Dropdown2 from "../../../../../Shared/Components/Dropdown/Dropdown2";
import useVariants from "../../../../../test-data/variant-data";
import { IoMdClose } from "react-icons/io";
import { image34 } from "../../../../../assets";

const initialValues: IProductProps = {
	name: "",
	price: 0,
	discount: 0,
	category: 0,
	subcategory: 0,
	description: "",
	// option: [],
};

const validationSchema = yup.object().shape({
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
	const [files, setFiles] = useState<any | string[]>(
		location.state?.fileData ?? []
	); // Changed the type to string[] to hold Blob URLs
	const [imageUrls, setImageUrls] = useState<string[]>([]);
	const [quantity, setQuantity] = useState<number>(1);
	const hiddenInputRef = useRef<HTMLInputElement | null>(null);


	useEffect(() => {
		// Retrieve the URL parameter containing the file data
		if (files) {
			// Create an array of Blob URLs from the fileData
			const blobURLs = files?.map((fileName: string) => {
				return URL.createObjectURL(new Blob([fileName]));
			});
			setImageUrls(blobURLs);
			setthumbnail(blobURLs[0]);

			// Cleanup: Revoke the object URLs when the component unmounts
			return () => {
				blobURLs.forEach((url: any) => URL.revokeObjectURL(url));
			};
		}
	}, [files]);
	const reduxCategory = useSelector(selectCategory);
	const reduxCategories = useSelector(selectCategories);
	const [thumbnail, setthumbnail] = useState<string | undefined>(
		imageUrls[0]
	);

	const [content, setContent] = useState("");
	const { createProduct, getCategories, getCategory } = useProducts();
	const handleContentChange = (text: any) => {
		console.log(text.blocks);
		console.log(content);

		setContent(text.blocks);
		// console.log(convertFromRaw(text.blocks))
	};
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
	const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles: any = e.target.files;
		setFiles([...files, ...selectedFiles]);
	};

	const handleSubmit = async (values: IProductProps) => {
		let payload:any = {
			...values,
      option:null,
			category: parseInt(reduxCategory.id ?? ""),
			subcategory: "",
			images: imageUrls,
      thumbnail,
      quantity,
      store:"Fola's Store",
		};
		try {
			console.log("Form submitted:", payload);
			// Call the createProduct function to submit the form
			await createProduct(payload);

			// Optionally, you can perform any post-submission actions or navigation here

			// Log the form values for debugging purposes
		} catch (error) {
			// Handle any errors that may occur during form submission
			console.error("Error submitting form:", error);
		}
	};

	useEffect(() => {
		// Focus the input element when the component mounts
		hiddenInputRef.current?.focus();
	}, [files]);

	useEffect(() => {
		getCategories();
	}, []);

	const handleIncreaseQuantity = (q: number) => {
		setQuantity(++q);
	};
	const handleDecreaseQuantity = (q: number) => {
		if (quantity > 1) setQuantity(--q);
	};
	return (
		<Wrapper>
			<Card className="card" width={"100%"} onHover={false} height={"570px"}>
				<div className="badge">
					<MdOutlineAddHomeWork size={30} />
				</div>
				<h3>Add Product/Service</h3>
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
										{thumbnail === imageUrl && <div className="active"></div>}
									</div>
								);
							})}
						<div
							className="addBtn"
							onClick={() => hiddenInputRef.current?.click()}
						>
							<AiOutlinePlus color="#DEE2E7" size="24" />
						</div>
						<input
							multiple
							style={{ display: "none" }}
							type="file"
							ref={hiddenInputRef}
							accept=".jpg, .jpeg, .png"
							onChange={handleAddImage}
						/>
					</ImageWrapper>
					<div className="options">Choose any of them as thumbnail</div>
					<Formik
						initialValues={initialValues}
						onSubmit={handleSubmit}
						validationSchema={validationSchema}
					>
						<Form>
							<FormControl>
								<Label>
									Product Name<span>*</span>
								</Label>
								<CustomField name="name" type="text" />
							</FormControl>

							<Flex>
								<FormControl>
									<Label>
										Price<span>*</span>{" "}
										<span className="info">(No Commas)</span>
									</Label>
									<CustomField name="price" type="number" />
								</FormControl>
								<FormControl>
									<Label>
										Discount Price <span className="info">(Optional)</span>
									</Label>
									<CustomField name="discount" type="number" />
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
										onChange={(e: any) => handleSelectCategory(e.target.value)}
									>
										<option value="" label="Select a category" />
										{reduxCategories.map((category: any) => (
											<option key={category.id} value={category.name}>
												{category.name}
											</option>
										))}
									</Input>
								</FormControl>
								<FormControl>
									<Label>
										Sub Category<span>*</span>{" "}
									</Label>
									<Input as="select" id="selectedCategory" name="subcategory">
										<option value="" label="Select a subcategory" />
										{reduxCategory?.subcategories?.map((category: any) => (
											<option key={category.slug} value={category.name}>
												{category.name}
											</option>
										))}
									</Input>
								</FormControl>
							</Flex>
							<FormControl>
								<Label>
									Product description<span>*</span>{" "}
								</Label>
								<TextEditor>
									<Editor
										// editorState={editorState}
										wrapperClassName="wrapper-class"
										editorClassName="editor-class"
										toolbarClassName="toolbar-class"
										onContentStateChange={handleContentChange}
										toolbar={{
											options: [
												"inline",
												"blockType",
												"fontSize",
												"fontFamily",
												"list",
												"textAlign",
												"link",
												"embedded",
												"image",
												"remove",
												"history",
											],

											link: {
												popupClassName: "demo-popup-custom",
												link: { className: "demo-option-custom" },
												unlink: { className: "demo-option-custom" },
											},
											blockType: {
												inDropdown: true,
												options: [
													"Normal",
													"H1",
													"H2",
													"H3",
													"H4",
													"H5",
													"H6",
													"Blockquote",
													"Code",
												],
												className: undefined,
												component: undefined,
												dropdownClassName: undefined,
											},
											fontSize: {
												options: [
													8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72,
													96,
												],
												className: undefined,
												component: undefined,
												dropdownClassName: undefined,
											},
										}}
									/>
								</TextEditor>
								{/* <CustomField
                  type=""
                  height="100px"
                  name="description"
                /> */}
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
								</FormControl>
								<FormControl>
									<OptionButton
										type="button"
										onClick={() => dispatch(showModal("addOptions"))}
									>
										Add Options
									</OptionButton>
								</FormControl>
							</Flex>

							<button type="submit" className="submit" disabled={false}>
								Publish Product
							</button>
						</Form>
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
	value?: string;
	background?: string;
	onChange?: any;
	padding?: string;
	width?: string;
	height?: string;
	offset?: string;
	margin?: string;
	readOnly?: boolean;
}> = ({
	name,
	type,
	options,
	value,
	readOnly,
	height,
	background,
	padding,
	offset,
	margin,
	onChange,
}) => {
	const [field, meta] = useField(name);
	const inputHasError = !!meta?.error?.length;
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
const variations = ["size", "color", "condition"];

const NewProduct = () => {
	const dispatch = useDispatch();
	const { modals } = useSelector((state: any) => state.modal);
	const [sizeStep, setSizeStep] = useState(1)
	const [colorStep, setColorStep] = useState(1)
	const [moreOption, setMoreOption] = useState<string>('No')
	const [selectedOption, setSelectedOption] =
		useState<string | null>(null);		
	const [selectedCondition, setselectedCondition] = useState<string | null>(null)
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

	const sizeVariant = getVariants('size')
	const colorVariant = getVariants('color')
	// const conditionVariant = getVariants('condition')

	const handleDropdownEvent = (option: string) => {
		setSelectedOption(option)
	}
	const handleMoreOption = (option: string) => {
		setMoreOption(option)
	}
	const hasNextStep = (option: string) => {
		if (
			option === 'size' && sizeStep < 2
		) {
			return true
		} else if (option === 'color' && moreOption === "No") {
			if (colorStep < 2) {
				return true
			} else return false
		} else if (option === 'color' && moreOption === "Yes" ) {
			if (colorStep < 4) {
				return true
			} else return false
	
		} else return false
	}
	
	const handleNextStep = (option: string, decrement?: boolean) => {
		if (decrement) {
			if (option === 'size') setSizeStep(sizeStep - 1)
			if (option === 'color') setColorStep(colorStep - 1)
		} else {
			if (option === 'size') setSizeStep(sizeStep + 1)
			if (option === 'color') setColorStep(colorStep + 1)
		}
	}

	const handleAdd = (option: string) => {
		if (option === 'size') setSizeStep(1)
		if (option === 'color') setColorStep(1)
	}


	const ModalContent: JSX.Element = (
		<Modal>
			{modals.addOptions && (
				<ModalWrapper>
					<div className="label">
						<BiArrowBack size={32} color="#bdc4cd" onClick={() => handleNextStep(selectedOption as string, true)}/>
						<MdOutlineCancel
							className="svg"
							size={32}
							color="#bdc4cd"
							onClick={() => dispatch(closeModal("addOptions"))}
						/>
					</div>
					<h3 className="title">Add Product options</h3>
					{selectedOption === "size" ? (
						<div className="info gray">
							Simply use alphabets e.g S,M,L,XXL e.t.c or numbers e.g. 38,45,48
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
						className='drpdwn'
					>Choose Option</Dropdown2>
			
					<Formik
						initialValues={initialValues}
						onSubmit={handleModalSubmit}
						validationSchema={validationSchema}
					>
						<Form>
							{selectedOption === "size" && (
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
																	value={"variant.variant"}
																	onChange={(e) => handleVariantChange(
																		selectedOption, 
																		index, 
																		'variant', 
																		e.target.value)}
																/>
																<IoMdClose className="close" size={24} onClick={() => deleteVariant(selectedOption, index)}/>
															</Label>
															<Label>
																Price
																<input
																	className="input"
																	value={variant.price}
																	onChange={(e) => handleVariantChange(
																		selectedOption, 
																		index, 
																		'price', 
																		e.target.value)}
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
															<Img background={image34}/>
															<div className="info">
																<p>{"variant?.variant"}</p>
																<p>{variant.price}</p>
															</div>
														</div>
														<div className="right">
															<MdDeleteOutline size={19} color="#FA3434" className="icon" onClick={() => deleteVariant(selectedOption, index)}/>
															<Incrementor small>
																<div
																	className="leftButton"
																	onClick={() => decreaseQuantity(selectedOption, index)}
																>
																	<BiMinus />
																</div>
																<div className="main">{variant.quantity}</div>
																<div
																	className="rightButton"
																	onClick={() => increaseQuantity(selectedOption, index)}
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
							{selectedOption === "color" && (
								<FormControl>
									{
										colorStep > 1 ? 
										<>
										{
											moreOption ? 
											<>
											{colorStep === 2 && (
												<ColorVariantCard>
													<label>
															Input value for the option e.g. size?
															<input
																placeholder=""
																className="input"
															/>
														</label>
												</ColorVariantCard>
											)}
											</> :
											<>
												{colorVariant.map((variant, index) => (
													<SizeVariantCard key={variant.id}>
														<div className="left">
															<Img background={image34}/>
															<div className="info">
																<p>{"variant.variant"}</p>
																<p>{variant.price}</p>
															</div>
														</div>
														<div className="right">
															<MdDeleteOutline size={19} color="#FA3434" className="icon" onClick={() => deleteVariant(selectedOption, index)}/>
															<Incrementor small>
																<div
																	className="leftButton"
																	onClick={() => decreaseQuantity(selectedOption, index)}
																>
																	<BiMinus />
																</div>
																<div className="main">{variant.quantity}</div>
																<div
																	className="rightButton"
																	onClick={() => increaseQuantity(selectedOption, index)}
																>
																	<BiPlus />
																</div>
															</Incrementor>
														</div>
													</SizeVariantCard>
											))}
											</>
										}
										</> : 
										<>
										{colorStep === 1 && (
											<>
												<label>
													Does this colour have extra option e.g. size?
													<Dropdown2
														options={['Yes','No']}
														selectedOption={moreOption}
														handleOptionEvent={(handleMoreOption)}
														padding="15px"
														background="#f7fafc"
														className="drpDwn"
													/>
												</label>
												<AddProductImage />
											</>
										)}
										</>
									}
								</FormControl>
							)}
							{selectedOption === "condition" && (
								<FormControl>
										<>
											<Dropdown2
												options={['new', 'fairly used', 'refurbished']}
												selectedOption={selectedCondition}
												handleOptionEvent={(option) => setselectedCondition(option)}
												padding="15px"
												background="#f7fafc"
												className="drpDwn"
											>Choose Option</Dropdown2>
										</>
							</FormControl>
							)}
						</Form>
					</Formik>
					{selectedOption && (
						<>
						{(!(selectedOption === 'color' && colorStep === 1) && hasNextStep(selectedOption)) &&
							<OptionButton
									type="button"
									className="addNewBtn"
									onClick={() => addNewVariant(selectedOption)}
								>
									Add New
								</OptionButton>
						}
						{hasNextStep(selectedOption) ?
							<button className="submit lsxaj2" type="button" onClick={() => handleNextStep(selectedOption)}>
								Next
							</button> : 
							<button className="submit lsxaj2" type="button" onClick={() => handleAdd(selectedOption)}>
							  Add Option
							</button>
						}
						</>
					)}
				</ModalWrapper>
			)}
		</Modal>
	);
	return (
		<Layout
			showModal="addOptions"
			layout={"dashboard"}
			component={Screen}
			popUpContent={ModalContent}
			state={false}
			navMode="noSearch"
		/>
	);
};

export default NewProduct;
