import styled from "styled-components";
import { rectangle } from "../../../assets";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 120px;
	background: #005ade;
	border-radius: 8px;
	padding-right: 45px;
	@media (max-width: 890px) {
		height: unset;
		padding: 20px 0;
		flex-direction: column;
	}
	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 45px;

		font-family: inter;
		color: #fff;
		width: 745px;
		background: url(${rectangle});
		background-size: contain;
		background-repeat: no-repeat;
		height: 100%;
		@media (max-width: 890px) {
			width: unset;
			background: unset;
			padding-left: 0;
		}

		.large {
		}
		.small {
			font-size: 16px;
			font-weight: 400;
		}
	}
	.button {
		@media (max-width: 890px) {
			margin: 10px 0;
			width: 92%;
		}
	}
`;
