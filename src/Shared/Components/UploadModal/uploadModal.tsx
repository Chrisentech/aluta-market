// UploadModal.js
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "..";
import { closeModal } from "../../../Features/modal/modalSlice";
import { actions } from "../../../Features/products/productSlice";
// import { generatePdfThumbnail } from "../../Utils/helperFunctions";
import axios from "axios";

const ModalContainer = styled.div`
	background: #cccccc91;
	border-radius: 8px;
	padding: 20px;
	width: calc(100% - 40px);
	height: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
`;

const ModalHeader = styled.h2`
	margin: 0 0 20px;
`;

const UploadInput = styled.input`
	margin: 20px 0;
	display: none;
	width: 100%;
	text-align: center;
`;

const FileName = styled.p`
	margin: 10px 0;
	font-size: 14px;
	color: #333;
`;

const ProgressContainer = styled.div`
	width: 100%;
	background: #eee;
	border-radius: 8px;
	margin: 10px 0;
`;

const ProgressBar = styled.div<{ progress: number }>`
	height: 10px;
	width: ${(props) => props.progress}%;
	background: green;
	border-radius: 8px;
	transition: width 0.3s ease;
`;

const UploadModal: React.FC<any> = () => {
	const [file, setFile] = useState<File | null>(null);
	const [uploading, setUploading] = useState(false);
	const [progress, setProgress] = useState(0);
	const [uploaded, setUploaded] = useState(false);
	const dispatch = useDispatch();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [_, setPreview] = useState<any>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (!file) return;
		if (event.target.files) {
			setFile(file);
		}
		const fileType = file.type;
		const fileReader = new FileReader();
		fileReader.onload = () => {
			if (fileType === "application/pdf") {
				// Handle PDF file
				// const resp = generatePdfThumbnail();
				setPreview(fileReader?.result);
			} else if (fileType.startsWith("image/")) {
				// Handle PNG or other images
				console.log({ fileReader });
				setPreview(fileReader.result);
			} else if (fileType === "text/plain") {
				// Handle text files
				console.log({ fileReader });

				setPreview(fileReader.result);
			}
		};

		fileReader.readAsDataURL(file);
	};

	const handleUploadClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleSubmit = async () => {
		if (file) {
			setUploading(true);
			// Create a FormData object
			const formData = new FormData();
			formData.append("file", file); // Add the file to form data
			formData.append("upload_preset", "rbwlt6de"); // Replace with your Cloudinary upload preset
			if (file.type === "application/pdf") {
				formData.append("resource_type", "image"); // Set resource type to 'image' for PDFs
			}
			try {
				// Start the upload request with progress tracking
				const response = await axios.post(
					"https://aluta-market-api.onrender.com/upload",
					formData,
					{
						headers: { "Content-Type": "multipart/form-data" },
						onUploadProgress: (progressEvent: any) => {
							console.log(progressEvent);
							// Calculate progress as a percentage
							const percentCompleted = Math.round(
								(progressEvent.loaded * 100) / progressEvent.total
							);
							setProgress(percentCompleted); // Update progress state
						},
					}
				);
				// Once upload is successful, you can get the URL from the response
				// Assuming response has the Cloudinary URL
				// const cloudinaryUrl = response?.data.secure_url;
				// Update the state with the uploaded image URL
				dispatch(
					actions.setCatalogue({
						fileName: file?.name,
						file: response.data.fileName,
						// thumbnail: cloudinaryUrl,
					})
				);

				// Mark the upload as complete
				setUploaded(true);
			} catch (error) {
				console.error("Error uploading file:", error);
				// Handle the error, e.g., update state to indicate upload failure
			} finally {
				// Reset uploading state
				setUploading(false);
			}
		}
	};

	const handleCloseModal = () => {
		dispatch(closeModal("digital"));
	};

	return (
		<ModalContainer>
			<div style={{ position: "relative", left: 200 }}></div>
			<ModalHeader>Upload File</ModalHeader>
			<img
				src="https://www.freeiconspng.com/uploads/upload-icon-25.png"
				alt="Upload Icon"
				width={150}
			/>
			{!uploading && !uploaded && (
				<>
					<Button
						background={file?.name ? "green" : "blue"}
						color="#fff"
						onClick={handleUploadClick}
					>
						{file?.name ? "Change File" : "Choose File"}
					</Button>
					<UploadInput
						ref={fileInputRef}
						type="file"
						accept=".png, .pdf, .txt"
						onChange={handleFileChange}
					/>
					{file && <FileName>Selected file: {file.name}</FileName>}
					<div style={{ marginTop: 10 }}>
						<Button
							disabled={!file?.name}
							background="green"
							color="#fff"
							onClick={handleSubmit}
						>
							Upload
						</Button>
					</div>
				</>
			)}
			{uploading && (
				<ProgressContainer>
					<ProgressBar progress={progress} />
				</ProgressContainer>
			)}
			{uploaded && (
				<>
					<FileName>Upload complete!</FileName>
					<Button background="green" color="#fff" onClick={handleCloseModal}>
						OK
					</Button>
				</>
			)}
		</ModalContainer>
	);
};

export default UploadModal;
