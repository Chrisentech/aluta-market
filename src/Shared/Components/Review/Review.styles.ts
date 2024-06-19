import styled from "styled-components";

interface IWrapperProps {
	width?: number | string;
}

export const Wrapper = styled.div<IWrapperProps>`
	box-sizing: border-box;
	width: ${({ width }) => (width ? width : "880px")};
	border: 1px solid #dee2e7;
	background: #fff;
	border-radius: 6px;
	margin: 30px 0;
	font-family: inter;
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px;
		border-bottom: 1px solid #dee2e7;

		h3 {
			font-size: 20px;
			font-weight: 600;
			line-height: 28px;
			letter-spacing: -0.2px;
			color: #1c1c1c;
		}
		.action {
			font-weight: 700;
			font-size: 14px;
			display: flex;
			flex-direction: row;
			align-items: center;
			cursor: pointer;
			color: #ff9017;
		}
	}
`;

export const ReviewContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding: 20px;
	gap: 50px;
	max-height: 400px;
	@media (max-width: 800px) {
		display: block;
		overflow: scroll;
	}
	.heading {
		color: #505050;
		font-size: 16px;
		font-weight: 600;
		line-height: 28px;
		letter-spacing: -0.2px;
	}
`;

export const CustomerReviews = styled.div`
	overflow: auto;
	height: 400px;
	width: 100%;
	@media (max-width: 800px) {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export const Ratings = styled.div`
	.ratings-wrapper {
		margin-top: 20px;
		.ratings-box {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 5px;
			.rates {
				display: flex;
				flex-direction: row;
				span {
					margin-right: 5px;
				}
			}
			.frequency {
				align-self: flex-end;
			}
		}
	}
`;

export const ReviewCard = styled.div`
	margin-top: 15px;
	padding-bottom: 10px;
	border-bottom: 1px solid #eff2f4;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 20px;
	.comment {
		width: 80%;
		color: #505050;
		font-size: 16px;
		font-weight: 400;
		letter-spacing: -0.6px;
		align-text: justify;
	}
`;

export const SummaryBox = styled.div`
	width: 176px;
	height: 145px;
	border-radius: 6px;
	background: #f7fafc;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

export const User = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	div:first-child {
		overflow: hidden;
		.img {
			width: 30px;
			height: 30px;
		}
	}
	div:nth-child(2) {
		.name {
			color: #000;
			font-size: 12px;
			font-weight: 600;
		}
		.date-posted {
			color: #000;
			font-size: 10px;
			font-weight: 400;
		}
	}
`;
