import { ReactNode } from "react";
import styled from "styled-components";

interface IButtonInterface {
	gap?: string | number;
	width?: string | number;
	height?: string | number;
	border?: string | number;
	borderRadius?: string | number;
	hasBoxShadow?: boolean;
	loading?: boolean;
	color?: string | number;
	background?: string;
	className?: string;
	onHover?: boolean;
	padding?: string | number;
	children: ReactNode;
}

export const Container = styled.button<IButtonInterface>`
	display: flex;
	flex-direction: ${({ loading }) => (loading ? "row" : "column")};
	justify-content: center;
	cursor: pointer;
	align-items: center;
	font-size: 14px;
	gap: ${({ gap }) => (gap ? gap : "10px")};
	width: ${({ width }) => (width ? width : "150px")};
	height: ${({ height }) => (height ? height : "40px")};
	border: ${({ border }) => (border ? border : "none")};
	color: ${({ color }) => (color ? color : "#808080")};
	background: ${({ background }) => (background ? background : "#fff")};
	border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "6px")};
	padding: 0 ${({ padding }) => (padding ? padding : "20px")};
	transition: 0.6s ease;
	position: relative;
	cursor: pointer !important;
	padding: ${(props) => (props.loading ? "7px" : "20px")};
	&:hover {
		box-shadow: ${({ onHover }) =>
			onHover ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""};
		transform: translateY(-1px);
	}
`;

export const Loader = styled.div`
	border: 2px solid rgba(0, 0, 0, 0.1);
	border-left-color: #000;
	border-radius: 50%;
	width: 16px;
	height: 16px;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
