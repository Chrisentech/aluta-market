import styled from "styled-components";
import { check } from "../../../../../../assets";

export const FormContainer = styled.div`
	box-sizing: border-box;
	position: relative;
	width: 100%;
	height: 818px;
	background: white;
	border-radius: 24px;
	padding-top: 60px;
	font-family: inter;

	h2 {
		color: #000;
		text-align: center;
		font-size: 32px;
		font-weight: 600;
		letter-spacing: -0.2px;
		margin-top: 10px;
		margin-bottom: 35px;
	}

	form {
		width: 85%;
		margin: auto;
	}

	label {
		display: block;
		margin-bottom: 12px;
		.required {
			color: #fa3434;
		}
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 5px;
	right: 10px;
	background: transparent;
	border: none;
	font-size: 18px;
	cursor: pointer;
`;

export const InputField = styled.input`
	box-sizing: border-box;
	width: 100%;
	height: 50px;
	padding: 20px;
	margin-top: 4px;
	border: 1px solid #ccc;
	border-radius: 10px;
	border: none;
	outline: none;
	background: #f7fafc;
`;

export const TextArea = styled.textarea`
	box-sizing: border-box;
	height: 75px;
	width: 100%;
	padding: 20px;
	margin-top: 4px;
	border: 1px solid #ccc;
	border-radius: 10px;
	border: none;
	outline: none;
	background: #f7fafc;

	&::placeholder {
		font-family: inter;
		font-size: 14px;
		color: #8b96a5;
	}
`;

export const SubmitButton = styled.button<{ submit: boolean }>`
	font-family: inter;
	font-weight: 700;
	font-size: 16px;

	background: ${({ submit }) =>
		submit ? "linear-gradient(180deg, #FF7612 0%, #FF001F 100%)" : "#DEE2E7"};
	color: ${({ submit }) => (submit ? "#FFF" : "#505050")};
	width: 100%;
	margin-top: 12px;
	border: none;
	border-radius: 10px;
	height: 62px;
	transition: 0.1s ease-out;
	cursor: ${({ submit }) => (submit ? "pointer" : "no-drop")};
`;

export const Hint = styled.span`
	display: block;
	padding: 1px 4px 5px 0px;
	color: #ff9017;
	font-size: 10px;
`;

export const CheckBox = styled.label<{ small?: boolean }>`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	color: #1c1c1c;
	font-family: inter;
	font-size: ${({ small }) => (small ? "12px" : "16px")};

	input {
		appearance: none;
	}
	.custom {
		position: relative;
		top: 5px;
		display: inline-block;
		box-sizing: border-box;
		height: 20px;
		width: 20px;
		background-color: #fff;
		border: 1px solid #bdbdbd;
		border-radius: 4px;
		margin-right: 10px;
	}
	&:hover input ~ .custom {
		background-color: #f7fafc;
	}

	input {
		&:checked {
			~ .custom {
				background: url(${check});
				border: none;
			}
		}
	}

	.terms {
		font-weight: 600;
		color: #ff9017;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Message = styled.span`
	color: #fa3434;
	display: block;
	font-size: 10px;
`;
