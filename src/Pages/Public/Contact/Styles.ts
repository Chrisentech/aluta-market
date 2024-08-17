import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 120px;
	min-height: 70vh;
	padding: 30px;
	@media (max-width: 480px) {
		padding: 10px;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 4px;
		h2 {
			font-family: Inter;
			font-weight: 600;
			font-size: 24px;
			@media (max-width: 480px) {
				font-size: 20px;
			}
		}
	}
	section {
		width: 75%;
		margin: 30px auto;
		background: #fff;
		border-radius: 10px;
		padding: 20px;
		min-height: 500px;
		display: flex;

		.child-1 {
			flex: 1 1 calc(35% - 25px);
			background: #0d6efd;
			padding: 25px;
			min-height: 100%;
			border-radius: 10px;
			position: relative;
			color: #fff;
			.svg {
				position: absolute;
				bottom: 0;
				right: 0;
			}
			h2 {
				font-size: 24px;
				font-weight: 600;
				line-heigth: 33.89px;
			}
			.contact {
				margin-top: 60px;
				h2 {
					font-size: 18px;
				}
				,
				p {
					font-size: 16px;
				}
				.flex {
					display: flex;
					gap: 8px;
					align-items: center;
				}
			}
			@media (max-width: 900px) {
				display: none;
			}
		}

		.child-2 {
			height: 100%;
			flex: 1 1 65%;
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			padding: 20px 140px;
			@media (max-width: 900px) {
				padding: 10px;
			}
			label {
				margin-bottom: 10px;
				font-weight: bold;
			}

			input,
			textarea {
				border: none;
				background: #f7fafc;
				border-radius: 10px;
				padding: 15px;
				margin: 20px 0;
				width: calc(100% - 30px);
				outline: none;

				&:focus {
					border-bottom: 1px solid #007bff; /* Blue color for focus */
				}
			}

			button {
				padding: 10px;
				background-color: #007bff; /* Blue color */
				color: #fff;
				border: none;
				cursor: pointer;
				border-radius: 5px;

				&:hover {
					background-color: #0056b3; /* Darker blue on hover */
				}
			}
		}
		p {
			margin: 20px 0;
			font-family: Inter;
			font-size: 18px;
		}
		@media (max-width: 900px) {
			width: unset;
			flex-direction: column; // Stack the children on top of each other
			.child-1,
			.child-2 {
				width: 100%; // Make each child take full width
			}
			p {
				font-size: 16px;
			}
		}
	}
`;
