import styled from "styled-components";

export const Container = styled.div`
	max-height: 672px;
	background: #fff;
	display: flex;
	flex-direction: column;
	// align-items: center;
	// justify-content: center;
	gap: 10px;
	padding: 20px 0;
	overflow: auto;
	.error {
		color: red;
		font-style: italic;
		margin-bottom: 10px;
		font-size: 12px;
	}
	.header {
		display: flex;
		padding: 15px 20px;
		background: #f7fafc;
		width: 100%;
		align-items: center;
		width: calc(100% - 40px);
		align-items: center;
		justify-content: space-between;
		p {
			flex: 1;
			text-align: center;
			font-weight: 500;
			font-size: 16px;
			line-height: 19.36px;
			font-family: "Inter";
		}
	}
	.flex {
		display: flex;
		align-items: start;
		gap: 20px;
	}
	.content {
		padding: 10px 15px;
		margin: 10px;
		margin: 10px 0;
		h2 {
			font-family: Inter;
			font-weight: 600;
			font-size: 18px;
		}
		p {
			font-family: Inter;
			font-weight: 400;
			font-size: 16px;
			margin-top: 10px;
		}
		/* Hide the default radio button */
		.radio-container input[type="radio"] {
			position: absolute;
			opacity: 0;
			cursor: pointer;
		}

		/* Create a custom radio button */
		.checkmark {
			position: relative;
			height: 20px;
			width: 20px;
			cursor: pointer;
			background-color: #eee;
			border: 1px #eee;
			border-radius: 50%;
			display: inline-block;
			margin-right: 10px;
		}

		/* When the radio button is checked, add a background color */
		.radio-container input[type="radio"]:checked ~ .checkmark {
			// background-color: #2196f3;
		}

		/* Create the indicator (the dot/circle inside the radio button) */
		.checkmark::after {
			content: "";
			position: absolute;
			display: none;
		}

		.radio-container input[type="radio"]:checked ~ .checkmark::after {
			display: block;
		}

		/* Style the indicator */
		.radio-container .checkmark::after {
			top: 50%;
			left: 50%;
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background: #00b517;
			transform: translate(-50%, -50%);
		}
	}
`;

export const Img = styled.div`
	img {
		height: 40px;
		widht: 40px;
	}
`;

export const Label = styled.p`
	color: #000;
	text-align: center;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: -0.2px;
`;

export const Info = styled.p`
	width: 340px;
	text-align: center;
	color: #505050;
`;

export const SubmitButton = styled.button<{ loading?: boolean }>`
	background: #f7690c;
	color: #fff;
	padding: ${(props) => (props.loading ? "7px" : "20px")};
	border: none;
	cursor: pointer;
	width: 100%;
	margin: 20px 0;
	border-radius: 10px;
	color: var(--white, #fff);
	text-align: center;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
