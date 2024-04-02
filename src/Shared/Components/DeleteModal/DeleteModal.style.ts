import styled from "styled-components";

export const Container = styled.div`
	height: 483px;
	background: #fff;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;

	.buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 20px;

		.button {
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
		}
	}
`;

export const Img = styled.div`
	background: #fa3434;
	border-radius: 50%;
	width: 80px;
	height: 80px;

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 40px;
		widht: 40px;
	}
`;

export const Label = styled.p`
	color: #000;
	text-align: center;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: -0.2px;
`;

export const Info = styled.p`
	width: 340px;
	text-align: center;
	color: #505050;
`;
