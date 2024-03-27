import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 30px 0;
	box-sizing: border-box;
	h2 {
		color: #1c1c1c;
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: 32px;
		letter-spacing: -0.2px;
	}
	.main {
		margin-top: 10px;
	}
	.no_follow {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 500px;
		cursor: not-allowed;
		width: 100%;
		@media (max-width: 480px) {
			img {
				width: 250px;
			}
		}
	}
`;

export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 4fr);
	gap: 10px;
	position: relative;
	@media (max-width: 780px) {
		grid-template-columns: repeat(3, 3fr);
	}
	@media (max-width: 580px) {
		grid-template-columns: repeat(2, 2fr);
	}
	@media (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
	}
	.container {
		position: relative;
		border: 1px solid #ccc;
		padding: 10px;
		border-radius: 8px;
		margin-bottom: 20px;
		.img_container {
		}
	}
	h2 {
		text-align: center;
		font-weight: 600;
		margin: 10px 0;
		@media (max-width: 1028px) {
			font-size: 18px;
		}
	}
	p {
		margin: 10px 0;
		text-align: center;
		@media (max-width: 1028px) {
			font-size: 14px;
		}
	}
	button {
		margin: 10px 0;
		width: 100%;
	}
`;

export const ImgWrapper = styled.div`
	position: relative;
	background: url(https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg)
		no-repeat scroll 0 0;
	background-size: cover;
	width: 100%;
	height: 150px;
	margin-bottom: 27px;
	.avatar {
		position: absolute;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		padding: 2px;
		background: #fff;
		top: 73%;
		left: 40%;
		.img {
			background: url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)
				no-repeat scroll 0 0;
			height: 100%;
			border-radius: 50%;
			width: 100%;
		}
	}
`;
