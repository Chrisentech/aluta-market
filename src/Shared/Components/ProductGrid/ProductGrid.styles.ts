import styled from 'styled-components';
import { IProductGridProps } from '../../../Interfaces';

export const Container = styled.div<IProductGridProps>`
	box-sizing: border-box;
	display: grid;
	width: 90%;
	margin: 25px auto;
	grid-template-columns: ${({ column }) =>
		column ? "repeat(" + column + ", 1fr)" : "repeat(5, 1fr)"};
	grid-template-rows: ${({ row }) =>
		row ? "repeat(" + row + ", 1fr)" : "repeat(2, 1fr)"};
	grid-row-gap: 20px;
	margin: 20px auto;
	gap: 10px;
	.card {
		display: flex;
		flex-direction: column;
		border: solid 1px #dee2e7;
		.image {
			background: ${({ background }) => (background ? background : "#FFF")};
			display: flex;
			justify-content: center;
			align-items: center;

			margin: 0 0 20px 0;
		}
		.detail {
			font-family: inter;
			height: 35%;
			background: #fff;
			.price {
				color: var(--base-color-dark, #1c1c1c);
				font-feature-settings: "clig" off, "liga" off;
				font-family: Inter;
				font-size: 16px;
				font-style: normal;
				font-weight: 500;
				line-height: 22px; /* 137.5% */
				margin:10px 0;
			}
			.name {
				color: var(--gray-500, #8b96a5);
				font-feature-settings: "clig" off, "liga" off;
				font-family: Inter;
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				line-height: 24px; /* 150% */
				letter-spacing: -0.2px;
			}
		}
	}
`;