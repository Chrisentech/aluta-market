import React, { useRef, useState, useEffect } from "react";
import Layout from "../../../../../Layouts";
import { Wrapper } from "./createnew.styles";
import { Card } from "../../../../../Shared/Components";
import { MdUpload, MdOutlineAddHomeWork } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../../Shared/Constants";

const Screen: React.FC = () => {
	const [files, setFiles] = useState<File[] | null>(null);
	const hiddenInputRef = useRef<HTMLInputElement | null>(null);
	const navigate = useNavigate();
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = e.target.files;
		if (selectedFiles) {
			setFiles(Array.from(selectedFiles)); // Convert FileList to an array
		}
	};

	const handleUploadClick = () => {
		hiddenInputRef.current?.click(); // Programmatically trigger the file input click event
	};
	const fileData = files && files;
	useEffect(() => {
		// Focus the input element when the component mounts
		hiddenInputRef.current?.focus();
	}, []);
	const hasFile = !!files?.length ?? 0;
	return (
		<Wrapper>
			<h4>Create new product or service</h4>

			<Card className="card" width={"100%"} onHover={false} height={"570px"}>
				<div className="badge">
					<MdOutlineAddHomeWork size={30} />
				</div>
				<h3>Let’s get started</h3>
				<div className="upload" onClick={handleUploadClick}>
					<MdUpload size={100} />
					<h3>Upload Files</h3>
					<p>PNG and JPG files are allowed</p>
				</div>
				{hasFile && <span>You Selected {files?.length} files</span>}
				<input
					multiple
					style={{ display: "none" }}
					type="file"
					ref={hiddenInputRef}
					accept=".jpg, .jpeg, .png"
					onChange={handleFileChange}
				/>

				<button
					onClick={() =>
						navigate(ROUTE.SELLER_ADDPRODUCT, { state: { fileData } })
					}
					className="submit"
					disabled={!hasFile}
				>
					Proceed to add details
				</button>
				{/* </NavLink> */}
			</Card>
		</Wrapper>
	);
};
const NewProduct = () => {
	return (
		<Layout
			layout={"dashboard"}
			component={Screen}
			isLoading={false}
			navMode="noSearch"
			modalWidth="400px"
		/>
	);
};
export default NewProduct;
