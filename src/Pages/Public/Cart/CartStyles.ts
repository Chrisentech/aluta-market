import styled from "styled-components";

export const Page = styled.div`
	min-height: 50vh;
	width: 100%;

	margin: 20px auto;
	background: #f7fafc;
`;

export const Container = styled.div`
	width: 90%;
	margin: auto;
	position: relative;
	h1 {
		margin: 25px 0px;
		font-size: 24px;
		font-weight: 600;
		line-height: 32px;
		letter-spacing: -0.2px;
		@media (max-width: 890px) {
			margin-top: 86px;
		}
	}

	.info-container {
		width: 880px;
		display: flex;
		justify-content: flex-start;
		gap: 80px;
		margin: 30px 0;
		@media (max-width: 890px) {
			width: 100%;
			gap: 20px;
			flex-direction: column;
		}
	}
	.banner-wrapper {
		margin: 20px 0 90px 0;
	}
	.new {
		display: flex;
		gap: 20px;
		@media (max-width: 890px) {
			flex-direction: column;
		}
	}
`;

export const Product = styled.div<{ empty: boolean }>`
	box-sizing: border-box;
	width: 100%;
	border-radius: 6px;
	border: 01px solid #dee2e7;
	background: #ffffff;
	padding: 20px;
	.card {
		border-bottom: 1px solid #dee2e7;
		@media (max-width: 890px) {
			height: unset;
		}
	}
	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-family: inter;
		font-weight: 500;
		padding-top: 20px;
	}
`;

export const SectionCard = styled.div`
	width: 100%;
	height: 475px;
	border-radius: 6px;
	border: 1px solid #dee2e7;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 890px) {
		height: unset;
		.view {
			display: block;
			.image {
				padding: 0;
			}
		}
	}
	.title {
		font-family: inter;
		font-size: 20px;
		font-weight: 600;
		line-height: 28px;
		letter-spacing: -0.2px;
		color: #1c1c1c;
		margin-top: 20px;
		align-self: flex-start;
		margin-left: 25px;
	}
	.card {
		box-shadow: none !important;
	}
	.view {
		padding: 0;
	}
`;

export const Empty = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 6px;

	.text {
		color: #505050;
		text-align: center;
		font-family: Inter;
		letter-spacing: -0.2px;
		font-weight: 600px;

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
		width: 140px;
		height: 140px;
		border-radius: 50%;
		background: #d9d9d9;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const RightSection = styled.div`
	box-sizing: border-box;
	// position: absolute;
	// right: 0;
	width: 280px;
	@media (max-width: 890px) {
		width: 100%;
	}
	.coupon {
		box-sizing: border-box;
		height: 110px;
		width: 100%;
		border: 1px solid #dee2e7;
		background: #fff;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: center;
		border-radius: 6px;

		.form {
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 40px;
			overflow: hidden;
			border: 1px solid #dee2e7;
			border-radius: 6px;
			input {
				width: 164px;
				border: none;
				padding-left: 10px;
				outline: none;
				border: none;
				@media (max-width: 890px) {
					width: 100%;
				}
			}
			button {
				background: #fff;
				color: #0d6efd;
				width: 85px;
				display: inline-block;
				border: none;
				border-left: 1px solid #dee2e7;
				cursor: pointer;
				transition: 0.5s all;
				&:hover {
					background: #0d6efd;
					color: #fff;
				}
				@media (max-width: 890px) {
					width: 100%;
				}
			}
		}
	}

	.checkout {
		box-sizing: border-box;
		height: 329px;
		padding: 20px;
		background: #fff;
		border: 1px solid #dee2e7;
		border-radius: 6px;
		margin-top: 12px;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: -0.2px;
		color: #505050;
		display: flex;
		flex-direction: column;
		gap: 5px;
		p {
			display: flex;
			justify-content: space-between;
			.discount {
				color: #fa3434;
			}
			.tax {
				color: #00b517;
			}
		}
		.bottom {
			border-top: 1px solid #e4e4e4;
			margin-top: 10px;
			padding: 20px 0;
			.total {
				span {
					font-weight: 600;
					&:last-child {
						font-size: 20px;
					}
				}
			}
			.button {
				margin-top: 30px;
				font-size: 18px;
				font-weight: 500;
			}
		}
		.footer {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 5px;
			padding: 10px 0;
		}
	}
`;

export const ProductCard = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	// height: 136px;
	font-family: inter;
	@media (max-width: 890px) {
		flex-direction: column;
		height: unset;
	}
	.image {
		min-height: 80px;
		min-width: 80px;
		max-height: 80px;
		max-width: 80px;
		padding: 5px;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #dee2e7;
		margin-right: 10px;
		overflow: hidden;
		@media (max-width: 890px) {
			min-height: 150px;
			min-width: 150px;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	.left-cide {
		display: flex;
		flex-direction: row;
	}
	.right-side {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		@media (max-width: 890px) {
			width: 100%;
			flex-direction: row;
			gap: 10px;
			margin: 20px 0;
			align-items: center;
		}
	}
`;

export const ProductDetails = styled.div`
	h2 {
		font-size: 16px;
		font-weight: 500;
		line-height: 22px;
	}
`;

export const ProductDescr = styled.div`
	display: flex;
	flex-direction: column;
	// height: 116px;
	// margin-top: 10px;
	justify-content: space-between;
	.text {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		gap: 6px;
		color: #8b96a5;
		line-height: 24px;
		letter-spacing: -0.2px;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-self: flex-end;
		gap: 10px;
		@media (max-width: 890px) {
			margin: 10px 0;
		}
	}
	.store-name {
		font-style: italic;
		@media (max-width: 890px) {
			font-size: 12px;
		}
	}
`;

export const InfoCard = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	font-family: Inter;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.2px;
	@media (max-width: 890px) {
		flex-direction: column;
	}
	.head {
		color: #1c1c1c;
	}

	.p {
		color: #a9acb0;
	}

	.img {
		border-radius: 50%;
		width: 48px;
		height: 48px;
		background: #dee2e7;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const GridProductCard = styled.div`
	display: flex;
	flex-direction: column;
	// height: 270px;

	.image {
		height: 200px;
		// width: 220px;
		background: #eee;
		border-radius: 10px;
		padding: 20px;
		// flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const GridProductDetails = styled.div`
	flex: 0.8;
	background: #fff;
	height: 60px;
	padding: 0 10px;
	font-family: Inter;

	h1 {
		color: var(--base-color-gray-800, #606060);
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: -0.2px;
		margin: 10px 0;
	}
	.flex {
		display: flex;
		justify-content: space-between;
	}
	.price {
		display: flex;
		gap: 5px;
		margin: 8px 0;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 28px;
		letter-spacing: -0.2px;
		span:nth-child(2) {
			text-decoration: line-through;
			color: #8b96a5;
			font-size: 16px;
		}
	}

	.button {
		display: flex;
		flex-direction: row;

		font-family: Inter;
		// font-size: 16px;
		font-weight: 500;
	}
`;
