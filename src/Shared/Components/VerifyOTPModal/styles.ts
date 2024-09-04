import styled from "styled-components";

export const Container = styled.div<{ success: boolean }>`
  box-sizing: border-box;
  // width: 400px;
  height: ${({ success }) => (success ? "390px" : "450px")};
  cursor: auto;

  .title {
    text-align: center;
    color: var(--dark, #1c1c1c);
    font-feature-settings: "clig" off, "liga" off;
    /* Title-H3 */
    font-family: Inter;
    font-size: 24px;
    gap: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.2px;
    margin: 20px 0 0 0;
  }
  .label {
    display: flex;
    justify-content: center; 
    line-spacing: 
    text-align:center;
    margin-bottom: -5px;font-family: Inter;
    font-size: 32px !important;
    font-style: normal;
    font-weight: 600;
  }
 `;

export const Input = styled.input`
	height: 50px;
	width: 50px;
	border-radius: 7px;
	outline: none;
	border: none;
	background: #f7fafc;
	text-align: center;
	font-size: 42px;
	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export const FormControl = styled.div`
	width: 100%;
	// position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.message {
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: -0.2px;

		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	div {
		display: flex;
		gap: 6px;
		margin: 30px 0 20px 0;
	}
	svg {
		position: absolute;
		right: 20px;
		top: 56px;
		cursor: pointer;
		transition: 0.5s ease;
	}
	.check {
		margin: -10px 0;
	}
	.error {
		color: red;
		margin-bottom: 5px;
	}
`;

export const Img = styled.div<{ background: string }>`
	width: 80px;
	height: 80px;
	margin: 18px 0 18pxpx 0;
	background: ${({ background }) => background};
	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Top = styled.div`
	height: 70px;
	background: transparent;
	position: relative;
	.close-button {
		position: absolute;
		right: 18px;
		top: 18px;
		cursor: pointer;
	}
`;

export const ResendButton = styled.button`
	display: inline-block;
	color: #000 !important;
	border: 0;
	outline: 0;
	cursor: pointer;
	font-size: 14px;
	background: transparent !!important;
	font-weight: 700 !important;
	padding:5px

`;

export const SuccessContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 18px;
	height: calc(100% - 100px);
`;
