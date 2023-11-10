import React, { useRef, useState, useEffect } from "react";
import Layout from "../../../../../Layouts";
import { useDispatch, useSelector } from "react-redux";

import { convertFromRaw, EditorState } from "draft-js";
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
} from "./createnew.styles";
import { Card, Dropdown } from "../../../../../Shared/Components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdOutlineAddHomeWork, MdOutlineCancel } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
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
	actions,
	selectCategories,
	selectCategory,
} from "../../../../../Features/products/productSlice";

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
	const inputHasError = meta?.error?.length;
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
const variations = ["color", "size", "condition"];

const NewProduct = () => {
	const dispatch = useDispatch();
	const { modals } = useSelector((state: any) => state.modal);
	const [selectedOption, setSelectedOption] =
		useState<string>("Select an Option");

	const handleModalSubmit = () => {
		alert("ffff");
	};
	// const handleOption = (arr, index, val) => {
	//   if (arr.includes.arr[index]) {
	//     setSizeOptions(arr.filter((val) => val !== arr[index]));
	//   } else {
	//     setSizeOptions([...arr, val]);
	//   }
	// };
	const ModalContent: JSX.Element = (
		<Modal>
			{modals.addOptions && (
				<>
					<div className="label">
						<BiArrowBack size={32} color="#bdc4cd" />
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
					<Dropdown
						options={variations}
						selectedOption={selectedOption}
						handleOptionClick={(e) => setSelectedOption(e)}
						padding="15px"
						background="#f7fafc"
						offset="15px"
						className="drpDwn"
					/>
					<Formik
						initialValues={initialValues}
						onSubmit={handleModalSubmit}
						validationSchema={validationSchema}
					>
						<Form>
							{selectedOption === "size" && (
								<FormControl>
									<Label className="label">Add Size</Label>
									{Array(1)
										.fill("*")
										.map((_, index: number) => {
											return (
												<input
													className="input"
													key={index}
													readOnly
													value={"S"}
												/>
											);
										})}
								</FormControl>
							)}
						</Form>
					</Formik>
					{selectedOption !== "Select an Option" && (
						<>
							<OptionButton
								type="button"
								className="addNewBtn"
								// onClick={() => handleOption(sizeOptions, 0, "D")}
							>
								Add New
							</OptionButton>
							<button className="submit lsxaj2" type="button">
								Add Option
							</button>
						</>
					)}
				</>
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
		/>
	);
};

export default NewProduct;
