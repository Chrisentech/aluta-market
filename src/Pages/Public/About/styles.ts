import styled from "styled-components";

export const Wrapper = styled.div`
	margin-top: 160px;
	min-height: 70vh;
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		@media (max-width: 900px) {
			img {
				width: 200px;
			}
		}
	}
	section {
		width: 80%;
		margin: 0 auto;
		p {
			margin: 30px 0;
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
`;
