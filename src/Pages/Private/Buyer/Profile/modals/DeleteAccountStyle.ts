import styled from "styled-components";

export const FormContainer = styled.div<{ deleteAccount?: boolean }>`
	width: 100%;
	height: ${({ deleteAccount }) => (deleteAccount ? "618px" : "468px")};
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: center;
	gap: 15px;

	h2 {
		color: #000;
		text-align: center;
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: 32px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: -0.2px;
	}
	.button {
		// margin-top: 25px;

		color: #fff;
		text-align: center;
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
	input,
	select {
		box-sizing: border-box;
		width: 100%;
		// height: 50px;
		padding: 20px;
		margin-top: 10px;
		border: 1px solid #ccc;
		border-radius: 10px;
		border: none;
		outline: none;
		background: #f7fafc;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 30px;
	right: 48px;
	background: transparent;
	border: none;
	font-size: 18px;
	cursor: pointer;
`;

export const FormImage = styled.div`
	box-sizing: border-box;
	height: 80px;
	// width: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`;

export const Info = styled.p`
	// width: 265px;
	text-align: center;

	color: #505050;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
