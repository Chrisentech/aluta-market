// UploadModal.js
import React, { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
	background: #fff;
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
`;

const ModalHeader = styled.h2`
	margin: 0 0 20px;
`;

const UploadInput = styled.input`
	margin: 20px 0;
	display: block;
	width: 100%;
	text-align: center;
`;

const UploadModal: React.FC<any> = () => {
	const [file, setFile] = useState(null);

	const handleFileChange = (event: any) => {
		setFile(event.target.files[0]);
	};

	const handleSubmit = () => {
		if (file) {
			// Handle file upload
			console.log("File uploaded:", file);
		}
	};

	return (
		<ModalContainer>
			<ModalHeader>Upload File</ModalHeader>
			<UploadInput
				type="file"
				accept=".png, .pdf, .txt"
				onChange={handleFileChange}
			/>
		</ModalContainer>
	);
};

export default UploadModal;
