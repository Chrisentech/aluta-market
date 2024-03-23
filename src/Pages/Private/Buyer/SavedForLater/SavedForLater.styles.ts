import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 30px 0;
	box-sizing: border-box;
	.flex {
		display: flex;
		justify-content: space-between;
		margin: 0px 0 30px 0;
		align-items: center;
		position: relative;

		h2 {
			color: #1c1c1c;
			font-family: Inter;
			font-size: 24px;
			font-style: normal;
			font-weight: 600;
			line-height: 32px;
			letter-spacing: -0.2px;
		}
	}
`;

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 4fr);
	gap: 10px;
	position: relative;
	@media (max-width: 780px) {
		grid-template-columns: repeat(3, 3fr);
	}
	@media (max-width: 580px) {
		grid-template-columns: repeat(2, 2fr);
	}
	@media (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
	}
	.container {
		position: relative;
		border: 1px solid #ccc;
		padding: 10px;
		border-radius: 10px;
		@media (max-width: 480px) {
			span {
				font-size: smaller;
			}
			p {
				font-size: 12px;
			}
		}
		.img {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.svg {
			position: absolute;
			right: 20px;
			top: 16px;
			color: #ccc;
			@media (max-width: 480px) {
				right: 5px;
				top: 10px;
			}
		}
		.title {
			color: #505050;
			font-weight: 400;
		}
		.price {
			color: #505050;
			font-weight: 700;
			margin-bottom: 10px;
		}
		button {
			flex-direction: row;
			width: 100%;
			@media (max-width: 480px) {
				gap: 3px;
				padding: 12px;
			}
		}
	}
`;
