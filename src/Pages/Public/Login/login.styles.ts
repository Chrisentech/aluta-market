import { Field } from "formik";
import styled from "styled-components";
import { AppColors, BreakPoints } from "../../../Shared/Constants";

export const Container = styled.div`
	width: 100%;
	height: calc(100vh - 120px);
	display: flex;
	flex-direction: column;
	// justify-content: center;
	margin-top: 40px;
	align-items: center;
	position: absolute;
	// top: 20px;
	.option {
		align-items: center;
		display: flex;
		gap: 20px;
		p {
			color: var(--gray-500, #8b96a5);
			text-align: center;
			font-family: Inter;
			font-size: 12px;
			font-style: normal;
			font-weight: 500;
			line-height: 24px; /* 200% */
			letter-spacing: -0.24px;
		}
		.line {
			width: 45%;
			height: 2px;
			background: #e0e5f2;
		}
	}
	form {
		width: 450px;
		@media (${BreakPoints.xs}) {
			width: 88%;
		}
		p,
		a {
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 14px;
			font-style: normal;
			color: #505050;
			font-weight: 700;
			line-height: normal;
			text-align: center;
		}
		a {
			color: #ff001f;
		}
		.googleSignin {
			background-color: #007bff;
			color: #fff;
			padding: 8px !important;
			border: none;
			cursor: pointer;
			box-shadow: none !important;
			width: 100%;
			margin: 20px 0;
			border-radius: 6px !important;
			background: ${AppColors.brandPink} !important;
			justify-content: center;
			div {
				background: transparent !important;
			}
			span {
				color: var(--gray-600, #505050) !important;
				font-family: Inter;
				font-size: 14px;
				font-style: normal;
				font-weight: 500 !important;
				text-align: center;
				line-height: 20px; /* 142.857% */
				letter-spacing: -0.28px;
			}
		}
	}
`;
export const Heading = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		color: #000;
		text-align: center;
		font-feature-settings: "clig" off, "liga" off;
		/* Title-H2 */
		font-family: Inter;
		font-size: 32px !important;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin: 10px 0;
		letter-spacing: -0.2px;
		@media (max-width: 600px) {
			font-size: 24px !important;
		}
	}
	p {
		color: var(--dark, #1c1c1c);
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: -0.2px;
		margin: 0 0 20px 0;
		@media (max-width: 600px) {
			font-size: 14px !important;
		}
	}
	.content {
		width: 78%;
		margin: auto;
	}
`;

export const FormControl = styled.div`
	width: 100%;
	dispaly: flex;
	flex-direction: column;
	gap: 30px;
	position: relative;
	svg {
		position: absolute;
		right: 20px;
		top: 44px;
		cursor: pointer;
		transition: 0.5s ease;
	}
`;

export const Label = styled.label`
	color: #505050;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

export const Input = styled(Field)<{ error: boolean; type: string }>`
	width: ${(props) =>
		props.type === "checkbox" ? "unset" : "calc(100% -  40px)"};
	padding: 20px;
	border-radius: 10px;
	// background: #f7fafc;
	border: ${(props) => (props.error ? "1px solid red" : "0")};
	outline: 0;
	margin: 5px 0px 20px 0;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	color: #505050;
	font-weight: 700;
	line-height: normal;
`;

export const ErrorMessageWrapper = styled.div`
	color: red;
	margin-bottom: 8px;
`;

export const SubmitButton = styled.button<{ loading?: boolean }>`
	background-color: #007bff;
	color: #fff;
	padding: ${(props) => (props.loading ? "7px" : "20px")};
	border: none;
	cursor: pointer;
	width: 100%;
	margin: 20px 0;
	border-radius: 10px;
	background: var(
		--primary-gradient,
		linear-gradient(180deg, #ff7612 0%, #ff001f 100%)
	);
	color: var(--white, #fff);
	text-align: center;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

export const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	span {
		color: var(--gray-600, #505050);
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	a {
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		color: #ff001f;
	}
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
export const Modal = styled.div`
.label{
  display:flex;
  justify-content:space-between;
  margin:20px 0
}
img{
  display:flex;
  justify-content:center;
  tex-align-center
}
.gray{
  background:#EFF2F4;
  padding:18px;
  border-radius:  20px 0 0 20px;
  margin-top:-15px
} svg{
  position:unset !important;
  color:${AppColors.brandGray}
}
input{
  border-radius:   0  20px 20px 0;

}
`;
