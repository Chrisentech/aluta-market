import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 50vh;
	width: 100%;

	margin: 30px auto;
	background: #f7fafc;
`;

export const Container = styled.div`
	box-sizing: border-box;
	width: 90%;
	margin: auto;
	position: relative;
	.lol-order {
		@media (max-width: 900px) {
			grid-template-columns: 100% !important;
		}
	}
`;

export const OrderDetail = styled.div`
	box-sizing: border-box;

	// width: 100%;
	min-height: 551px;
	border: 1px solid #dee2e7;
	background: #fff;
	border-radius: 6px;
	padding: 20px;
	margin-top: 84px;
	//   display: flex;
	gap: 20px;
	display: grid;
	grid-template-columns: repeat(3, 3fr);
	flex-direction: row;
	//   justify-content: space-between;
	align-items: flex-start;
	@media (max-width: 1520px) {
		grid-template-columns: repeat(2, 3fr);
	}
	@media (max-width: 978px) {
		grid-template-columns: repeat(1, 3fr);
	}
`;

interface ProductInfoProps {
	instock?: boolean;
}

export const ProductInfo = styled.div<ProductInfoProps>`
	width: 435px;
	height: 465px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-family: inter;
	@media (max-width: 978px) {
		width: 100%;
	}
	@media (max-width: 678px) {
		// width: 82%;
	}
	.average-rate {
		font-size: 16px;
		font-weight: 400;
		color: #ff9017;
	}
	.product-status {
		color: ${({ instock }) => (instock ? "#00B517" : "#FA3434")};
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: -0.2px;
		display: flex;
		align-items: center;
		svg {
			font-size: 25px;
		}
	}
	.buttons {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const ProductName = styled.div`
	.heading {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		gap: 15px;
		@media (max-width: 678px) {
			display: block;
		}
		h2 {
			font-size: 20px;
			color: #1c1c1c;
			font-weight: 600;
			line-height: 28px;
			letter-spacing: -0.2px;
			@media (max-width: 678px) {
				font-size: 16px;
			}
		}
	}
	.list {
		display: flex;
		flex-direction: row;
		gap: 7px;
		margin-top: 10px;
		font-size: 16px;
		font-weight: 400px;
		color: #787a80;
		align-items: center;
		@media (max-width: 678px) {
			gap: 0;
		}
		.item {
			display: flex;
			align-items: center;
			gap: 5px;
		}
	}
`;

export const Variations = styled.div`
	.colors {
	}
	.sizes {
		margin-top: 10px;
		div {
			display: flex;
			flex-direction: row;
			gap: 10px;
			margin-top: 10px;
			margin-bottom: 20px;
			@media (max-width: 780px) {
				flex-wrap: wrap;
			}
		}
	}
`;

export const DeliveryInfo = styled.div`
	box-sizing: border-box;
	overflow: hidden;
	// width: 280px;
	height: 513px;
	border: 1px solid #dee2e7;
	border-radius: 6px;
	box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
	padding: 16px;
	color: #1c1c1c;
	@media (max-width: 1520px) {
		display: none;
	}
	.store {
		height: 120px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 20px;
		border-bottom: 1px solid #e0e0e0;
		.button {
			margin-top: -5px;
		}
	}
	.delivery-details {
		display: flex;
		flex-direction: column;
		padding: 20px 0px;
		justify-content: space-between;
		gap: 10px;
	}
`;

interface PriceCardProps {
	SellingPrice?: number;
	discountPrice?: number;
}

export const PriceCard = styled.div<PriceCardProps>`
	box-sizing: border-box;
	width: 430px;
	height: 72px;
	padding-left: 15px;
	padding-top: 5px;
	background: #fff0df;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-family: inter;
	@media (max-width: 780px) {
		width: 100%;
	}
	@media (max-width: 450px) {
		width: 82%;
	}
	p:first-child {
		color: #fa343a;
		font-size: 32px;
		font-weight: 800;
		letter-spacing: -0.2px;
	}
	p:nth-child(2) {
		color: #969696;
		span:first-child {
			text-decoration: line-through;
		}
		span:nth-child(2) {
			color: #fa343a;
		}
	}
`;

export const InfoCard = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	font-family: inter;
	width: 100%;
	gap: 10px;
	.store-name {
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: -0.2px;
	}
	.header {
		font-weight: 700;
		line-height: 24px;
		letter-spacing: -0.2px;
	}
	.fee {
		font-size: 12px;
		line-height: 24px;
		letter-spacing: -0.2px;
	}
	.detail {
		font-size: 12px;
		font-weight: 500;
	}

	span {
		font-weight: 700;
	}
	.action {
		font-weight: 700;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		align-items: center;
		cursor: pointer;
	}
	&:first-child {
		.action {
			color: #00b517;
		}
	}
	&:last-child {
		.action {
			color: #ff9017;
		}
	}
`;

export const CardIcon = styled.div<{ background?: string }>`
	min-width: 48px;
	height: 48px;
	border-radius: 4px;
	background: ${({ background }) => (background ? background : "#c6f3f1")};
	font-size: 28px;
	font-weight: 600px;
	line-height: 24px;
	letter-spacing: -0.2px;
	display: flex;
	align-items: center;
	justify-content: center;
	.initial {
		color: rgba(76, 167, 167, 0.6);
	}
`;

export const Description = styled.div`
	box-sizing: border-box;
	margin-top: 30px;
	// width: 880px;
	background: #fff;
	border: 1px solid #dee2e7;
	border-radius: 6px;
	box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
	padding: 20px;
	font-family: inter;
	max-height: 500px;
	overflow: auto;
	.title {
		font-size: 20px;
		font-weight: 600;
		line-height: 28px;
		letter-spacing: -0.2px;
		color: #1c1c1c;
	}
	.description {
		font-size: 16px;
		font-weight: 400px;
		line-height: 24px;
		letter-spacing: -0.2px;
		color: #505050;
		margin: 20px auto;
		text-align: justify;
	}
`;

// Table Styles

export const Table = styled.div`
	display: flex;
	width: 567px;
	flex-direction: column;
	border: 1px solid #dee2e7;
	border-top: none;
`;

export const TableRow = styled.div`
	display: flex;
	flex-direction: row;
	border-top: 1px solid #dee2e7;
	height: 36px;
	font-family: inter;
	font-size: 16px;
	font-weight: 400;
	color: #505050;

	.column {
		flex: 1;
		display: flex;
		padding-left: 10px;
		align-items: center;
		height: 100%;
	}
	.column:first-child {
		background: #eff2f4;
		border-right: 1px solid #dee2e7;
	}
`;

export const SuggestionsWrapper = styled.div`
	box-sizing: border-box;
	// width: 280px;
	height: 553px;
	border-radius: 6px;
	border: 1px solid #dee2e7;
	background: #fff;
	margin-top: 30px;
	// position: absolute;
	right: 0;
	font-family: inter;
	font-size: 16px;
	display: flex;
	padding: 20px 0px;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	.title {
		align-self: flex-start;
		padding-left: 10px;
		color: #1c1c1c;
		font-family: Inter;
		font-size: 16px;
		font-weight: 600;
	}
	.card {
		display: flex;
		flex-direction: row;
		gap: 10px;
		align-items: center;
		.image {
			box-sizing: border-box;
			width: 88px;
			height: 80px;
			border: 1px solid #e0e0e0;
			border-radius: 6px;
		}
		.name {
			font-weight: 400;
			@media (max-width: 800px) {
				font-size: 16px;
			}
		}
	}
`;

export const RelatedWrapper = styled.div`
	// width: 1180px;
	min-height: 350px;
	border-radius: 6px;
	border: 1px solid #dee2e7;
	background: #fff;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	// align-items: center;
	.grid-wrapper {
		margin-top: 20px;
		overflow: auto;
		@media (max-width: 800px) {
			scrollbar-width: none; /* Firefox */
			-ms-overflow-style: none;
			&::-webkit-scrollbar {
				display: none;
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
		// margin-left: 25px;
	}
`;

export const DiscountBanner = styled.div`
	// width: 100%;
	height: 70px;
	border-radius: 5px;
	background: #237cff;
	margin-bottom: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	color: #fff;
	p {
		font-size: 24px;
		line-height: 32px;
	}
`;
