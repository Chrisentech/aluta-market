import styled from "styled-components";
import { check } from "../../../../assets";

export const Wrapper = styled.div`
	margin: 30px 0;
	box-sizing: border-box;
	.dash_grid_2 {
		grid-template-columns: repeat(2, 1fr) !important;
		img {
			height: 139px !important;
		}
	}
	@media (max-width: 780px) {
		.dash_grid {
			grid-template-columns: unset !important;
		}
		.dash_grid_2 {
			grid-template-columns: repeat(2, 1fr) !important;

			@media (max-width: 480px) {
				grid-template-columns: unset !important;
			}
		}
	}
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

	.main {
		margin-top: 40px;
		// width: 100%;
		min-height: 600px;
		border-radius: 20px;
		background: #fff;
		// padding: 10px;
		// overflow: auto;
	}
`;

export const GridItem = styled.div<{ background?: string }>`
	display: flex;
	gap: 20px;
	align-items: center;
	height: 100%;
	position: relative;

	.dark {
		background: #f4f7fe !important;
		padding: 4px;
		border-radius: 6px;
	}
	.topIcon {
		position: absolute;
		top: -11px;
		right: -8px;
		cursor: pointer;
		display: flex;
		align-item: center;
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
		width: 50%;
		h3 {
			color: var(--gray-500, #8b96a5);
			font-family: Inter;
			font-size: 13px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
		}
		p {
			color: #000;
			font-family: Inter;
			font-size: 24px;
			font-style: normal;
			font-weight: 600;
			line-height: 32px; /* 133.333% */
			letter-spacing: -0.2px;
			margin-top: 3px;
		}
		.navlink {
			color: #000;
			font-family: Inter;
			font-size: 13px;
			font-weight: 400;
		}
	}
`;

export const Main = styled.div`
	margin-top: 40px;
	width: 100%;
	height: 800px;
	border-radius: 20px;
	background: #fff;
	overflow: hidden;
`;

export const Tabs = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	margin-top: 10px;
`;

export const TabOption = styled.div<{ active?: boolean; color?: string }>`
	width: 120px;
	height: 48px;
	padding: 13px 0;
	border-bottom: ${({ active, color }) =>
		active ? `${color} solid 2px` : "#DEE2E7 solid 2px"};
	display: flex;
	align-items: center;
	justify-content: center;

	color: ${({ active, color }) => (active ? color : "#8B96A5")};
	font-family: Inter;
	font-size: 16px;
	font-weight: 700;
	z-index: 4;

	cursor: pointer;
	// transition: 0.3s ease;

	&:hover {
		color: ${({ active, color }) => (active ? color : "#505050")};
		border-bottom: ${({ active, color }) =>
			active ? `${color} solid 2px` : "none"};
	}
`;

export const TabContent = styled.div<{ empty: boolean }>`
	padding: 35px 0px;
	height: 100%;
	display: ${({ empty }) => (empty ? "flex" : "block")};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	margin-top: ${({ empty }) => (empty ? "" : "unset")};
	.text {
		color: #505050;
		text-align: center;
		font-family: Inter;
		letter-spacing: -0.2px;
		font-weight: 600px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		button {
			margin: 10px 0;
		}
		.header {
			font-size: 24px;
			line-height: 32px;
		}
		.info {
			font-size: 20px;
			line-height: 28px;
		}
	}

	.icon {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: #d9d9d9;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.order-card {
		border: solid 1px #dee2e7 !important;
		border-radius: 10px;
		box-shadow: none !important;
	}
`;

export const OrderCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: solid 1px #dee2e7;
		padding-bottom: 20px;

		.right {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			gap: 15px;

			.info {
				height: 100%;
				color: #505050;
				font-family: Inter;
				font-size: 14px;
				font-weight: 600;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.price {
					font-weight: 500;
				}
			}

			.img {
				width: 36px;
				height: 36px;
				border-radius: 6px;
			}
		}
		.icon {
			width: 24px;
			height: 24px;
			border-radius: 50%;
			background: #ff9017;

			color: #fff;
			font-family: Inter;
			font-size: 16px;
			font-weight: 700;
			text-align: center;
			line-height: 24px;
		}
	}
	.bottom {
		.option {
			position: relative;
			padding: 10px 0;
			display: flex;
			align-items: center;
			input[type="checkbox"] {
				appearance: none;
			}
			.custom {
				box-sizing: border-box;
				height: 20px;
				width: 20px;
				background-color: #fff;
				border: 1px solid #bdbdbd;
				border-radius: 4px;
				margin-right: 10px;
			}

			input {
				&:checked {
					~ .custom {
						background: url(${check});
						border: none;
					}
				}
			}
		}
	}
`;
