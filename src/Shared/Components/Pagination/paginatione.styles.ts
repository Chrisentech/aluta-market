import styled from "styled-components";
import { AppColors } from "../../Constants";

export const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	//   justify-content: flex-end;
	flex-direction: row-reverse;
	gap: 30px;
	margin-bottom: 20px;
`;

export const PaginationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 20px;
	background: #dee2e7;
	padding: 0;
	border-radius: 8px;
	//   width: 300px;
	border: 1px solid ${AppColors.brandGray};
`;
export const PageButton = styled.button<{ active?: boolean }>`
	font-size: 16px;
	padding: 10px 20px;
	margin: 0 1px;
	//   border-radius: 6px;
	height: 40px;
	width: auto;
	border: none;
	color: ${(props) => (props.active ? `#fff` : "#002")};

	background-color: ${(props) => (props.active ? `#002` : "#fff")};
	cursor: pointer;
	&:disabled {
		background: #ccc !important;
		color: #dee2e7;
	}
	&:last-child {
		margin: 0;
		border-radius: 0 6px 6px 0;
	}
	&:first-child {
		border-radius: 6px 0px 0px 6px;
		margin-left: 0;
	}
`;

export const Dots = styled.span`
	margin: 0px;
	padding: 0 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	height: 40px;
	width: 100%;
`;

export const Select = styled.select`
	height: 40px;
	margin-top: 20px;
	border-radius: 8px;
	background: #fff;
	padding: 0 20px;
	width: 125px;
	color: var(--dark, #1c1c1c);
	font-family: Inter;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-align: unset;
	outline: 0;
	cursor: pointer;
	border: 1px solid ${AppColors.brandGray};
`;
