import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 70vh;
	width: 80%;
	margin: 0 auto;
	margin-top: 40px;
	position: relative;
	@media (max-width: 1220px) {
		width: 90%;
	}
	.content {
		padding: 10px 15px;
		margin: 10px;
		margin: 10px 0;
		h2 {
			font-family: Inter;
			font-weight: 600;
			font-size: 18px;
		}
		p {
			font-family: Inter;
			font-weight: 400;
			font-size: 16px;
			margin-top: 10px;
		}
		/* Hide the default radio button */
		.radio-container input[type="radio"] {
			position: absolute;
			opacity: 0;
			cursor: pointer;
		}

		/* Create a custom radio button */
		.checkmark {
			position: relative;
			height: 20px;
			width: 20px;
			cursor: pointer;
			background-color: #eee;
			border: 1px #eee;
			border-radius: 50%;
			display: inline-block;
			margin-right: 10px;
		}

		/* When the radio button is checked, add a background color */
		.radio-container input[type="radio"]:checked ~ .checkmark {
			// background-color: #2196f3;
		}

		/* Create the indicator (the dot/circle inside the radio button) */
		.checkmark::after {
			content: "";
			position: absolute;
			display: none;
		}

		.radio-container input[type="radio"]:checked ~ .checkmark::after {
			display: block;
		}

		/* Style the indicator */
		.radio-container .checkmark::after {
			top: 50%;
			left: 50%;
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background: #00b517;
			transform: translate(-50%, -50%);
		}
	}
	.flex {
		display: flex;
		align-items: start;
		gap: 20px;
		.section {
			&:nth-child(1) {
				flex: 0.7;
				.card {
					.heading {
						border-bottom: 1px solid #dee2e7;
						padding: 10px;
						font-family: Inter;
						font-weight: 600;
						font-size: 20px;
					}
				}
			}
			&:nth-child(2) {
				flex: 0.3;
				.card {
					box-sizing: border-box;
					max-height: 329px;
					padding: 20px;
					background: #fff;
					border-radius: 6px;
					font-size: 16px;
					line-height: 24px;
					letter-spacing: -0.2px;
					margin-top: 37px;
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
						gap: 5px;
						padding: 10px 0;
					}
				}
			}
			.card {
				width: 100%;
				border-radius: 6px;
				background: #fff;
				min-height: 200px;
				margin-bottom: 20px;

				.section2 {
					display: flex;
					align-items: start;
					.img_container {
						background: #e0e0e04d;
						border-radius: 6px;
						width: 120px;
						height: 120px;
						margin: 20px;
						display: flex;
						justify-content: center;
						align-items: center;
						img {
							width: 80px;
							height: 80px;
							object-fit: cover;
						}
					}
					.details {
						margin: 20px 0;
						h2 {
							font-family: Inter;
							font-weight: 500;
							font-size: 16px;
						}
						p {
							font-family: Inter;
							font-weight: 400;
							font-size: 16px;
							color: #8b96a5;
							margin: 5px 0;
						}
					}
				}
			}
		}
	}
`;
