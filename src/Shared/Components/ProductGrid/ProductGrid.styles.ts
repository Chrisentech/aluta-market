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
      margin:0 0 20px 0 
		}
		.detail {
			font-family: inter;
			height: 35%;
			background: #fff;
			p:first-child {
				font-size: 16px;
				font-weight: 500;
				line-height: 22px;
				color: #1c1c1c;
			}
			p:nth-child(2) {
				font-size: 16px;
				font-weight: 400;
				line-height: 24px;
				letter-spacing: -0.2px;
				color: #8b96a5;
			}
		}
	}
`;