import { Field } from "formik";
import styled from "styled-components";
import { AppColors } from "../../../../Shared/Constants";

export const Wrapper = styled.div`
	margin: 30px 0;
	h2 {
		color: #1c1c1c;
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: 32px;
		letter-spacing: -0.2px;
		margin: 10px 0;
	}
	head {
		display: flex;
		gap: 15px;
		align-items: center;
		// justify-content: center;
		border-bottom: 1px solid #dee2e7;
		padding-bottom: 15px;
	}
	.flex {
		display: flex;
		gap: 20px;
		align-items: flex-start;
		margin: 20px 0;
		@media (max-widh: 480px) {
			gap: 5px;
		}
		h3 {
			margin: 10px 10px 0 10px;
		}

		svg {
			font-size: 24px;
			margin: 10px;
			&:nth-chid(1) {
				margin: 10px 10px 10px 0;
			}
			@media (max-width: 480px) {
				margin: 5px;
			}
		}
	}
	.text {
		border-bottom: 1px solid #dee2e7;
		margin: 10px 0;
		padding: 10px 0;
	}
	.main {
		position: relative;
	}
	.btn {
		position: absolute;
		right: 30px;
		bottom: 30px;
	}
`;
export const FormControl = styled.div`
	width: 100%;
	dispaly: flex;
	flex-direction: column;
	gap: 30px;
	position: relative;
`;

export const Label = styled.p`
	color: #505050;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

export const CustomCheckbox = styled.input.attrs({ type: "checkbox" })`
	/* Hide the default checkbox appearance */
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	cursor: pointer;
	width: 20px;
	height: 20px;
	position: relative;
	background-color: ${AppColors.brandOrange};
	border: 2px solid ${AppColors.brandOrange};
	border-radius: 4px; /* Add some rounding to the checkbox */
	display: inline-block;
	vertical-align: middle;

	&:checked {
		background-color: red; /* You can change the background color when checked */
		border-color: red; /* You can change the border color when checked */
	}

	/* Create a custom checkmark inside the checkbox */
	&:after {
		content: "\\2714";
		position: absolute;
		top: 1px;
		left: 3px;
		width: 12px;
		height: 12px;
		color: white !important; /* Set the checkmark color */
		border-radius: 2px;
		display: none; /* Hide the checkmark by default */
	}

	/* Show the checkmark when the checkbox is checked */
	&:checked:after {
		display: block;
	}
`;

export const ErrorMessageWrapper = styled.div`
	color: red;
	margin-bottom: 8px;
`;

export const Input = styled(Field)<{ error: boolean; type: string }>`
	width: ${(props) =>
		props.type === "checkbox" ? "unset" : "calc(100% -  40px)"};
	padding: 20px;
	border-radius: 10px;
	background: #f7fafc;
	border: ${(props) => (props.error ? "1px solid red" : "0")};
	outline: 0;
	margin: 5px 0px 20px 0;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	color: #505050;
	font-weight: 700;
	line-height: normal;
	&::nth-child(2) {
		background: red;
	}
	@media (min-width: 768px) {
		width: 500px;
	}
`;

export const TextArea = styled.textarea<{
	error: boolean;
	onChange: any;
	col: number;
}>`
	width: calc(100% - 40px);
	padding: 20px;
	border-radius: 10px;
	background: #f7fafc;
	border: ${(props) => (props.error ? "1px solid red" : "0")};
	outline: 0;
	margin: 5px 0px 20px 0;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	color: #505050;
	font-weight: 700;
	line-height: normal;
	&::nth-child(2) {
		background: red;
	}
	@media (min-width: 768px) {
		width: 500px;
	}
`;
