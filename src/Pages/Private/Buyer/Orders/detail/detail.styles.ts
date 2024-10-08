import styled from "styled-components";

export const Wrapper = styled.div`
	box-sizing: border-box;
	margin-top: 30px;
	svg {
		cursor: pointer;
	}
	.flex {
		display: flex;
		// justify-content: space-between;
		gap: 10px;
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
		box-sizing: border-box;
		margin-top: 40px;
		height: auto;
		padding: 20px 45px;
		padding-bottom: 130px;
		border-radius: 20px;
		background: #fff;
		overflow: hidden;
		cursor: auto !important;
		@media (max-width: 900px) {
			width: 100%;
		}
		h3 {
			color: #1c1c1c;
			font-family: Inter;
			font-size: 20px;
			font-weight: 600;
			line-height: 28px;
			letter-spacing: -0.2px;
			padding: 20px 0;
			border-bottom: 2px solid #dee2e7;
			@media (max-width: 900px) {
				font-size: 16px;
			}
		}

		.table-wrapper {
			border: 1px solid #dee2e7;
			border-radius: 6px;

			.total {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				align-items: center;
				gap: 75px;
				padding: 20px 70px;
				height: 75px;

				font-size: 20px;
				font-family: Inter;
				letter-spacing: -0.2px;

				.label {
					color: #8b96a5;
					font-weight: 500;
					line-height: 28px;
				}

				.value {
					color: #1c1c1c;
					font-weight: 700;
					line-height: 13.5px;
				}
			}
		}
	}
`;

export const OrderStatus = styled.div<{ status?: string }>`
	border-bottom: 1px solid #dee2e7;
	margin-bottom: 20px;
	padding: 20px 0;

	.info {
		display: flex;
		gap: 130px;
		font-family: Inter;
		color: var(--gray-600, #505050);

		.title {
			width: 100px;
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 7px;
			justify-content: flex-start;

			font-weight: 600;
			line-height: 28px;
			letter-spacing: -0.2px;
			@media (max-width: 900px) {
				font-size: smaller;
			}
		}
		.detail {
			font-weight: 400;
			@media (max-width: 900px) {
				font-size: smaller;
			}
		}
		.status {
			background: ${({ status }) =>
				status === "pending"
					? "#ff76121a"
					: status === "processing"
					? "#FF001F1A"
					: "#00B5171A"};
			color: ${({ status }) =>
				status === "pending"
					? "#ff7612"
					: status === "processing"
					? "#FF001F"
					: "#00B517"};
			font-weight: 500;
			padding: 4px 13px;
			border-radius: 29px;
			@media (max-width: 900px) {
				margin: 10px 0;
			}
		}
	}
`;

export const DeliveryDetails = styled.div`
	font-family: Inter;
	display: flex;
	@media (max-width: 900px) {
		flex-direction: column;
	}
	.div {
		flex: 1;
	}
	.bottom {
		padding: 20px 0;
		display: flex;
		flex-direction: column;
		// align-items: center;
		justify-content: flex-start;
		gap: 13px;

		color: var(--dark, #1c1c1c);

		.contact {
			display: flex;
			flex-direction: row;
			gap: 8px;
			align-items: center;

			.initial {
				width: 50px;
				height: 50px;
				background: #ff9017;
				border-radius: 50%;

				color: var(--white, #fff);
				font-size: 24px;
				font-weight: 700;
				text-align: center;
				line-height: 50px;
			}
			.name {
				font-size: 18px;
				font-weight: 600;
				line-height: 20px;
				@media (max-width: 900px) {
					font-size: 16px;
				}
			}
			.number {
				font-size: 16px;
				font-weight: 400;
				line-height: 26px;
			}
		}

		.location {
			width: 385px;
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 8px;

			.address {
				font-weight: 400;
				line-height: 26px;
			}
		}
	}
`;

export const ModalWrapper = styled.div``;
