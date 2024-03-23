import styled from "styled-components";

export const Wrapper = styled.div`
	box-sizing: border-box;
	//   height: 200px;
	width: 100%;
	padding: 20px;
	overflow-x: hidden;
	@media (max-width: 780px) {
		.dash_grid {
			grid-template-columns: unset !important;
		}
	}

	h2 {
		color: var(--dark, #1c1c1c);
		font-feature-settings: "clig" off, "liga" off;
		/* Title-H3 */
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: 32px; /* 133.333% */
		letter-spacing: -0.2px;
		margin: 10px 0;
		@media (max-width: 1530px) {
			font-size: 20px;
			@media (max-width: 1426px) {
				font-size: 18px;
				@media (max-width: 1082px) {
					font-size: 14px;
				}
			}
		}
	}
`;

export const GridItem = styled.div<{ background?: string }>`
	display: flex;
	gap: 20px;
	align-items: center;
	height: 100%;
	position: relative;

	.topIcon {
		position: absolute;
		top: -11px;
		right: -8px;
		cursor: pointer;
		display: flex;
		align-item: center;
		@media (max-width: 1082px) {
			right: 6px;
			top: 6px;
		}
		span {
			display: flex;
			width: 30px;
			height: 14px;
			padding: 3px 8px 4px 8px;
			justify-content: center;
			align-items: center;
			gap: 10px;
			border-radius: 6px;
			flex-shrink: 0;
			color: var(--base-color-green, #00b517);
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 8px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			letter-spacing: -0.2px;
			background: #00b5174d;
			color: #00b517;
		}
	}
	.wrap {
		width: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60px;
		border-radius: 50%;
		background: ${({ background }) => (background ? background + "4d" : "")};
		.icon {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			background: ${({ background }) => (background ? background : "")};
		}
	}

	.info {
		h3 {
			color: var(--gray-500, #8b96a5);
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 13px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
		}
		p {
			color: #000;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 24px;
			font-style: normal;
			font-weight: 600;
			line-height: 32px; /* 133.333% */
			letter-spacing: -0.2px;
			margin-top: 3px;
			@media (max-width: 1530px) {
				font-size: 20px;
				@media (max-width: 1426px) {
					font-size: 18px;
					@media (max-width: 1082px) {
						font-size: 14px;
					}
				}
			}
		}
	}
`;

export const Main = styled.div`
	display: flex;
	gap: 20px;
	//   width: calc(100% - 60px);
	margin: 30px 0;
	@media (max-width: 1082px) {
		flex-direction: column;
	}
	.flex {
		display: flex;
		justify-content: space-between;
		h2 {
			color: var(--gray-600, #505050);
			font-feature-settings: "clig" off, "liga" off;
			/* Title-h5 */
			font-family: Inter;
			font-size: 18px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
		}
		svg {
			color: #0d6efd;
			font-size: 24px;
		}
	}
	.first-section {
		flex: 0.7;

		.track {
			display: flex;
			margin: 30px 0;
			align-items: center;
			color: var(--green, #00b517);
			font-family: Inter;
			font-size: 14px;
			font-style: normal;
			font-weight: 700;
			line-height: 16px; /* 114.286% */
			letter-spacing: -0.28px;
		}
	}
	.second-section {
		flex: 0.3;
		.card {
			display: flex;
			flex-direction: column;
		}
		.no_product {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 90%;
			width: 100%;
			cursor: not-allowed;
			flex: 0.8;
		}
		.order-card {
			border: solid 1px #dee2e7 !important;
			border-radius: 10px;
			margin: 10px 0;
			padding: 10px;
			box-shadow: none !important;
		}
		svg:first-child {
			//  margin:auto;
			margin-left: -1 0px;
		}
		.label {
			display: flex;
			justify-content: center;
			gap: 100px;
			margin-top: -64px;

			p {
				color: var(--gray-600, #505050);
				font-family: Inter;
				font-size: 18px;
				font-style: normal;
				font-weight: 700;
				line-height: 30px; /* 166.667% */
				letter-spacing: -0.36px;
				text-align: center;
				&:first-child {
					color: var(--gray-400, #bdc4cd);
					font-family: Inter;
					font-size: 12px;
					font-style: normal;
					font-weight: 500;
					line-height: 20px; /* 166.667% */
					letter-spacing: -0.24px;
				}
			}
		}
	}
`;

export const Tracker = styled.div`
	color: var(--secondary-grey-600, #a3aed0);
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px; /* 171.429% */
	letter-spacing: -0.28px;
	border-radius: 7px;
	display: flex;
	width: 123px;
	padding: 10px 13px 9px 12px;
	justify-content: center;
	align-items: center;
	background: #eff2f4;
	margin: 20px 0;
	span {
		margin: 0 10px;
	}
`;

export const PriceTag = styled.h2`
	color: #000;
	font-family: Inter;
	font-size: 34px;
	font-style: normal;
	font-weight: 700;
	line-height: 42px; /* 123.529% */
	letter-spacing: -0.68px;
`;

export const Income = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	p {
		color: var(--green, #00b517);
		text-align: center;
		font-family: DM Sans;
		font-size: 12px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 166.667% */
		letter-spacing: -0.24px;
		svg {
			color: #00b517;
		}
		&:first-child {
			color: var(--gray-400, #bdc4cd);
			font-family: Inter;
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 24px; /* 171.429% */
			letter-spacing: -0.28px;
		}
	}
`;

export const TableWrapper = styled.div`
	.card {
		display: flex;
		flex-direction: column;
	}
	.no_product {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 90%;
		width: 100%;
		cursor: not-allowed;
		flex: 0.8;
	}
	.flex {
		display: flex;
		justify-content: space-between;
		margin-bottom: 15px;

		h2 {
			color: var(--gray-600, #505050);
			font-feature-settings: "clig" off, "liga" off;
			/* Title-h5 */
			font-family: Inter;
			font-size: 18px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
		}
		p {
			background: #dee2e7;
			padding: 6px 8px;
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-item: center;
			cursor: pointer;
		}
	}
`;
