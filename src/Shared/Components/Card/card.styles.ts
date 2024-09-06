import styled from "styled-components";
import { ICardInterface } from "../../../Interfaces";

export const Container = styled.div<ICardInterface>`
	width: ${({ width }) => (width ? `calc(${width} - 40px)` : "400px")};
	min-height: ${({ height }) => (height ? height : "400px")};
	background: ${({ background }) => (background ? background : "#fff")};
	border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "6px")};
	padding: ${({ padding }) => (padding ? padding : "20px")};
	transition: 0.6s ease;
	color: ${({ color }) => (color ? color + " !important" : "inherit")};
	position: relative;
	cursor: pointer !important;
	overflow: hidden;
	box-shadow: ${({ hasBoxShadow }) =>
		hasBoxShadow ? " rgba(149, 157, 165, 0.2) 0px 8px 24px;" : ""};
	border: ${({ allowBorders }) => (allowBorders ? " 1px solid #DEE2E7" : "")};
	@media (max-width: 792px) {
		// padding: ${({ padding }) => (padding ? padding : "")};
	}
	&:hover {
		box-shadow: ${({ onHover }) =>
		onHover ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""};
		transform: translateY(-1px);
	}
`;

// Wish Card Styles

export const WishWrapper = styled.div<{ boxShadow?: boolean }>`
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: ${({ boxShadow }) =>
		boxShadow ? "rgba(0, 0, 0, 0.14) 0px 3px 8px" : "none"};
	cursor: pointer;
	@media (max-width: 678px) {
		display: block;
	}
`;
