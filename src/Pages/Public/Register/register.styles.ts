import { Field } from "formik";
import styled from "styled-components";
import { AppColors, BreakPoints } from "../../../Shared/Constants";
import { check } from "../../../assets";

export const Container = styled.div`
	width: 100%;
	height: calc(100vh - 95px);
	display: flex;
	position: absolute;
	@media (${BreakPoints.xs}) {
		top: 10px;
	}
`;

export const RightPanel = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (${BreakPoints.xs}) {
		display: none;
	}
`;

export const FirstScreen = styled.div<{ userType: string }>`
	transition: 0.9s ease;
	position: absolute;
	top: 80px;
	transform: ${(props: any) =>
		props.userType !== "seller" ? "translateY(0vh)" : "translateY(-220vh)"};
	//   display: ${(props: any) =>
		props.userType !== "seller" ? "block" : "none"};
	@media (${BreakPoints.xs}) {
		top: 30px;
		width: 90%;
	}
`;
export const SecondScreen = styled.div<{ userType: string }>`
	position: absolute;
	top: 80px;
	transition: 0.9s ease;
	// display: ${(props: any) =>
		props.userType !== "seller" ? "none" : "block"};
	transform: ${(props: any) =>
		props.userType !== "seller" ? "translateY(-220vh)" : "translateY(0vh)"};
	@media (${BreakPoints.xs}) {
		width: 90%;
		top: 30px;
	}
`;
export const LeftPanel = styled.div`
	width: 50%;
	//   background:red;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (${BreakPoints.xs}) {
		width: 100%;
	}
	.back {
		top: -33px;
		left: -100px;
		position: absolute;
		font-size: 32px;
		color: ${AppColors.brandGray};
		cursor: pointer;
		@media (${BreakPoints.xs}) {
			left: -15px;
			font-size: 24px;
		}
	}
	.option {
		align-items: center;
		display: flex;
		margin: 30px 0 35px 0;
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
		position: relative;
		margin-bottom: 115px;

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
	}
`;
export const Heading = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		color: ${AppColors.brandOrange};
		text-align: center;
		font-feature-settings: "clig" off, "liga" off;
		/* Title-H2 */
		font-family: Inter;
		font-size: 32px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin: 0;
		letter-spacing: -0.2px;
		@media (${BreakPoints.xs}) {
			font-size: 24px;
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
		margin: 0 0 10px 0;
		@media (${BreakPoints.xs}) {
			font-size: 14px;
		}
	}
`;

export const FormControl = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: relative;
	margin-bottom: 20px;
	svg {
		position: absolute;
		right: 20px;
		top: 56px;
		cursor: pointer;
		transition: 0.5s ease;
	}
`;

export const Label = styled.label<{ checkbox?: boolean; small?: boolean }>`
	color: #505050;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: ${({ small }) => (small ? "12px" : "16px")};
	font-style: normal;
	font-weight: ${({ checkbox }) => (checkbox ? "400" : "500")};
	line-height: normal;
	display: flex;
	align-items: center;
	@media (${BreakPoints.xs}) {
		font-size: 12px;
	}
	span {
		color: ${AppColors.brandOrange};
	}
	.terms {
		font-weight: 400;
		font-size: 16px;
		font-family: inter;
	}
`;

export const CustomCheckbox = styled.input.attrs({ type: "checkbox" })<{
	checked?: boolean;
}>`
	appearance: none;
	~ .custom {
		display: inline-block;
		box-sizing: border-box;
		height: 20px;
		width: 20px;
		background-color: #fff;
		border: 1px solid #bdbdbd;
		border-radius: 4px;
		margin-right: 10px;
	}

	&:checked {
		~ .custom {
			background: url(${check});
			border: none;
		}
	}
`;

export const Input = styled(Field)<{
	error: boolean;
	type: string;
	readOnly?: boolean;
}>`
	width: ${(props: any) =>
		props.type === "checkbox" ? "unset" : "calc(100% -  40px)"};
	padding: 20px;
	border-radius: 10px;
	color: ${(props: any) =>
		props.readOnly ? `${AppColors.brandColor}` : "inherit"};
	background: ${(props: any) => (props.readOnly ? "#bdc4cd" : "#f7fafc")};
	border: ${(props: any) => (props.error ? "1px solid red" : "0")};
	outline: 0;
	margin: 5px 0px 0 0;
	cursor: ${(props: any) => (props.readOnly ? `not-allowed` : "inherit")};

	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 100%; /* 16px */
	letter-spacing: -0.32px;
	@media (${BreakPoints.xs}) {
		width: ${(props: any) => (props.type === "checkbox" ? "unset" : "100%")};
	}
`;
export const Select = styled.select<{ error: boolean; type: string }>`
  width: ${(props: any) => (props.type === "checkbox" ? "unset" : "100%")};
  padding: 20px;
  cursor: pointer;
  border-radius: 10px;
  background: #f7fafc;
  border: ${(props: any) => (props.error ? "1px solid red" : "0")};
  outline: 0;
  margin: 5px 0px 10px 0;
  position: relative;
  display: inline-block;
  &::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 100px; /* Adjust this value as needed */
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black; /* Adjust the color as needed */
  pointer-events: none;
  margin-top: -2.5px; /* Half of the border-top width to center the arrow */

  option {
    
  }
`;

export const ErrorMessageWrapper = styled.div`
	color: red;
	margin-bottom: 8px;
`;

export const SubmitButton = styled.button<{
	active?: boolean;
	loading?: boolean;
}>`
	// background-color: #007bff;
	// color: #fff;
	padding: ${(props) => (props.loading ? "7px" : "20px")};
	border: none;
	cursor: pointer;
	width: 100%;
	margin: 10px 0;
	border-radius: 10px;
	background: ${({ active }) =>
		active
			? "var(--primary-gradient, linear-gradient(180deg, #ff7612 0%, #ff001f 100%))"
			: "#DEE2E7"};
	color: ${({ active }) => (active ? "var(--white, #fff)" : "#505050")};
	text-align: center;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	@media (${BreakPoints.xs}) {
		width: 111%;
		padding: 15px 20px;
	}
`;

export const Hint = styled.span`
	color: #ff9017;
	font-family: Inter;
	font-size: 10px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: -0.2px;
`;

export const Trademark = styled.p`
	color: ${AppColors.brandGray};
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px; /* 171.429% */
	letter-spacing: -0.28px;
	// position:absolute;
	// bottom:0px
`;

export const Footer = styled.footer`
	height: 60px;
	position: fixed;
	bottom: 0;
	background: #fff;
	width: 100vw;
	padding-top: 10px;

	p {
		width: 90%;
		margin: auto;
		color: #bdc4cd;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 24px; /* 171.429% */
		letter-spacing: -0.28px;
	}
`;
