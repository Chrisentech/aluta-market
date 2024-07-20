import styled from "styled-components";

export const Wrapper = styled.div`
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 90%;
		margin: 20px auto;
	}
	h2 {
		font-size: 32px;
		font-weigth: 700;
		font-family: "Inter";
		line-height: 38.73px;
		margin: 10px 0;
	}
	p {
		font-size: 16px;
		font-family: "Inter";
		line-height: 19.36px;
		margin-bottom: 30px;
	}
	.info {
		padding: 15px;
		width: 75%;
		margin: auto;
		min-height: 200px;
		background: #eff2f4;
		margin-bottom: 30px;
		border-radius: 6px;
		font-weight: 500;
		font-size: 14px;
		line-height: 16.94px;
	}
`;
