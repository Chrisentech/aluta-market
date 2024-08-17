import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 70vh;
	margin-top: 150px;
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h1,
		h2 {
			color: #1c1c1c !important;
			font-size: 32px;
			font-weight: 600;
			margin-bottom: 10px;
			letter-spacing: -0.2px;
			@media (max-width: 780px) {
				font-size: 24px;
			}
		}
		.icon {
			border-radius: 50%;
			width: 68px;
			height: 67px;
			background: linear-gradient(180deg, #ff7612 0%, #ff001f 100%);
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	section {
		width: 80%;
		margin: 0 auto;
		p {
			margin: 20px 0;
			font-family: Inter;
			font-size: 18px;
		}

		@media (max-width: 900px) {
			width: 90%;
			p {
				font-size: 16px;
			}
		}
	}

	ol {
		li {
			list-style: numeric !important;
			font-weight: bold;
			font-size: 16px;
			margin-left: 23px;
			h2 {
				font-size: 16px;
				margin-top: 10px;
			}
			p {
				font-weight: 400;
			}
			a {
				color: #0d6efd;
				margin: 0 4px;
			}
		}
	}
`;
