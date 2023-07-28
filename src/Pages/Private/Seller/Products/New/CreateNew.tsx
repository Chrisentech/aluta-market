import React, { useRef, useState, useEffect } from "react";
import Layout from "../../../../../Layouts";
import { useDispatch, useSelector } from "react-redux";
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

const initialValues: IProductProps = {
  name: "",
  price: 0,
  discount: 0,
  category: "",
  subcategory: "",
  description: "",
  option: [],
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
  category: yup.string().required("Select an option"),
  subcategory: yup.string().required("Select an option"),
});

const Screen: React.FC = () => {
  const location = useLocation();
  const { fileData } = location.state;
  const dispatch = useDispatch();
  const [files, setFiles] = useState<any | string[]>(fileData); // Changed the type to string[] to hold Blob URLs
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
      setThumbNails(blobURLs[0]);

      // Cleanup: Revoke the object URLs when the component unmounts
      return () => {
        blobURLs.forEach((url: any) => URL.revokeObjectURL(url));
      };
    }
  }, [files]);
  const [thumbNails, setThumbNails] = useState<string | undefined>(
    imageUrls[0]
  );

  const handleRemoveImage = (url: string) => {
    if (thumbNails === url) {
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
  const handleSubmit = (values: IProductProps) => {
    // Handle form submission here
    console.log(values);
  };
  useEffect(() => {
    // Focus the input element when the component mounts
    hiddenInputRef.current?.focus();
  }, [files]);

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
                      onClick={() => setThumbNails(imageUrl)}
                    />
                    {thumbNails === imageUrl && <div className="active"></div>}
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
                  <CustomField
                    name="category"
                    type="select"
                    options={["Select"]}
                    background="#f7fafc"
                    padding={"17px 10px"}
                    margin={"5px 0"}
                  />
                </FormControl>
                <FormControl>
                  <Label>
                    Sub Category<span>*</span>{" "}
                  </Label>
                  <CustomField
                    name="subcategory"
                    type="select"
                    options={["Select"]}
                    background="#f7fafc"
                    padding={"17px 10px"}
                    margin={"5px 0"}
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <Label>
                  Product description<span>*</span>{" "}
                </Label>

                <CustomField type="" height="100px" name="description" />
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
                    onClick={() => dispatch(showModal())}
                  >
                    Add Options
                  </OptionButton>
                </FormControl>
              </Flex>
            </Form>
          </Formik>
        </Container>
        {/* Replace "#" with the correct route for your component */}
        <NavLink to="#">
          <button className="submit" disabled={true}>
            Publish Product
          </button>
        </NavLink>
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
  const { show } = useSelector((state: any) => state.modal);
  const [selectedOption, setSelectedOption] =
    useState<string>("Select an Option");
  const handleSubmit = () => {};
  // const handleOption = (arr, index, val) => {
  //   if (arr.includes.arr[index]) {
  //     setSizeOptions(arr.filter((val) => val !== arr[index]));
  //   } else {
  //     setSizeOptions([...arr, val]);
  //   }
  // };
  const ModalContent = (
    <Modal>
      {true && (
        <>
          <div className="label">
            <BiArrowBack size={32} color="#bdc4cd" />
            <MdOutlineCancel
              className="svg"
              size={32}
              color="#bdc4cd"
              onClick={() => dispatch(closeModal())}
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
            onSubmit={handleSubmit}
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
                        <Input
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
      showModal={show}
      layout={"dashboard"}
      component={Screen}
      popUpContent={ModalContent}
      state={false}
    />
  );
};

export default NewProduct;
