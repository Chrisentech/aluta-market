import { Field } from "formik";
import styled from "styled-components";
import { AppColors, BreakPoints } from "../../../../Shared/Constants";

export const Wrapper = styled.div`
	margin-top: 30px;
	h2 {
		color: var(--dark, #1c1c1c);
		font-feature-settings: "clig" off, "liga" off;
		/* Title-H3 */
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: 32px; /* 133.333% */
		letter-spacing: -0.2px;
	}
		.flex{
		display:flex;
		align-items:center;
		justify-content:space-between;
		margin-bottom:10px;
	gap:10px;
		}
		.view_container{

		}
		.dash_grid{
		display:flex !important}
		.tab_selectors{
		    display: flex;
			column-gap:40px;
			margin:20px 0;
			h2{
			cursor:pointer;
			padding-bottom: 10px;
			font-size:16px;
			}
		}
	.form{
		width:400px;
		margin:auto;
		input{
		background:#F7FAFC}
		@media(max-width:500px){
			width:90%
		}
	}
		.card4 .container{
		width:400px;
		margin:auto;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		.button {
      background: #0D6EFD;
      color: #fff;
      border: 0;
      outline: 0;
      border-radius: 6px;
	  margin-left:auto;
    margin-right: -20px;
      padding: 12px;
      cursor: pointer;
	  font-size:14px;
	  font-weight:700;
	  line-height:16.94px;
	  svg{
	  color:#fff;
	  font-weight:700
	  }

    }
		.account{
		margin-bottom:20px;
		padding:20px;
		position:relative;
		background:#F7FAFC;
		width:400px;
		font-family:Inter;
		min-height:70px;
	
		h2{
		font-weight:700;
		font-size:35px;
		line-height:1.5;
		}
		@media(max-width:500px){
			width:90%
		}
		img{
		position:absolute;
		right:10px;
		top:10px;
		// width:15px
		// height:15px;
		border-radius:50%;
		border:5px solid white
		}
		svg{
		position:absolute;
		right:20px;
		bottom:10px;

		}
		}
		.info2{
		background:#EFF2F4;
		padding:20px;
		width:400px;
		margin:20px 0;
		@media(max-width:500px){
			width:90%
		}
		}
		@media(max-width:500px){
			width:90%
		}
		}
	.card {
		width: 250px !important;
		margin: 20px 0;
		@media (max-width: 1080px) {
			margin: 20px auto;
			padding: 30px;
			width: calc(100% - 60px);
		}
	}
		.	{
		width: calc(100% - 160px) !important;
		margin: 20px 0;
		@media (max-width: 1080px) {
			margin: 20px auto;
			padding: 30px;
			width: calc(100% - 60px);
		}
	}
		.card3{
		input{
		flex: 0.2;
      padding: 10px 29px;
      border-radius: 6px;
      border: 1px solid #8b96a5;
      outline: 0;
      height: 40px;
	  }
		.button {
      background: #0D6EFD;
      color: #fff;
      border: 0;
      outline: 0;
      border-radius: 6px;
	  margin-left:10px;
      padding: 12px;
      cursor: pointer;
	  font-size:14px;
	  font-weight:700;
	  line-height:16.94px;

    }
		}
	.badge {
		width: 70px;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background: #0d6efd;
		color: #fff;
		margin-bottom: 15px;
	}
	.center {
		margin: 20px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		flex-direction: column;

		h3 {
			color: #000;
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			/* Title-H2 */
			font-family: Inter;
			font-size: 32px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: -0.2px;	
      @media (max-width: 930px) {
				font-size: 24px;
			}
		}
		p {
			color: #000;
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 24px;
			font-style: normal;
			font-weight: 400;
			line-height: 32px; /* 133.333% */
			letter-spacing: -0.2px;
       @media (max-width: 930px) {
				font-size: 18px;
			}
		}
		.p-20 {
			color: var(--dark, #1c1c1c);
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			margin: 30px 0;
			width: 292px;
		}
		.p-21 {
			width: unset;
			color: var(--dark, #1c1c1c);
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			margin: 30px 0;
		}
		.paymentBtn {
			border-radius: 10px;
			background: var(--primary, #0d6efd);
			padding: 24px 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 0;
			outline: 0;
			color: var(--white, #fff);
			text-align: center;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			svg {
				margin: 0 0px 0 20px;
				font-size: 24px;
			}
		}
	}
	.grid {
		width: 100%;
		margin-bottom: 100px;
    .card{padding:0 !important;width:100%;}
		@media (max-width: 930px) {
			grid-template-columns: unset !important;
      div{
        width: unset;
		}
		div {
			padding: 0;
		}
		.card {
			width: 100%;
			@media (max-width: 930px) {
				grid-template-columns: unset !important;
			}
		}
	}
	form {
		width: 400px;
		margin: 30px 0;
		.classic {
			width: 100%;
			margin: 20px 0;
			cursor: pointer;
		}
	}
`;

// export const GridItem = styled.section<{ background: string }>`
// 	border-radius: 6px;
// 	background: ${({ background }) => (background ? background + "4d" : "")};
// 	height: 265px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	text-align: center;
// 	flex-direction: column;
// 	width: 100%;
// 	.badge {
// 		width: 50px;
// 		height: 50px;
// 		background: #fff;
// 	}

// 	.title {
// 		color: #000;
// 		text-align: center;
// 		font-feature-settings: "clig" off, "liga" off;
// 		/* Title-H4 */
// 		font-family: Inter;
// 		font-size: 20px;
// 		font-style: normal;
// 		font-weight: 600;
// 		line-height: 28px; /* 140% */
// 		letter-spacing: -0.2px;
// 	}
// 	.label {
// 		color: var(--gray-600, #505050);
// 		text-align: center;
// 		font-feature-settings: "clig" off, "liga" off;
// 		font-family: Inter;
// 		font-size: 13px;
// 		font-style: normal;
// 		font-weight: 400;
// 		line-height: normal;
// 		width: 80%;
// 		margin: 20px auto;
// 	}
// `;

export const GridItem = styled.div<{ background?: string }>`
	display: flex;
	gap: 20px;
	align-items: center;
	height: 100%;
	position: relative;
	width: 250px;
	.wrap {
		width: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60px;
		border-radius: 50%;
		background: ${({ background }) => (background ? background + "4d" : "")};
		.icon {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			background: ${({ background }) => (background ? background : "")};
		}
	}

	.info {
		h3 {
			color: var(--gray-500, #8b96a5);
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 13px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
		}
		p {
			color: #000;
			font-feature-settings: "clig" off, "liga" off;
			font-family: Inter;
			font-size: 24px;
			font-style: normal;
			font-weight: 600;
			line-height: 32px; /* 133.333% */
			letter-spacing: -0.2px;
			margin-top: 3px;
			@media (max-width: 1530px) {
				font-size: 20px;
				@media (max-width: 1426px) {
					font-size: 18px;
					@media (max-width: 1082px) {
						font-size: 14px;
					}
				}
			}
		}
	}
`;

export const Label = styled.label<{ checkbox?: boolean; small?: boolean }>`
	color: #505050;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: ${({ small }) => (small ? "12px" : "16px")};
	font-style: normal;
	font-weight: ${({ checkbox }) => (checkbox ? "400" : "500")};
	line-height: normal;
	display: flex;
	align-items: center;
	@media (${BreakPoints.xs}) {
		font-size: 12px;
	}
	span {
		color: ${AppColors.brandOrange};
	}
	.terms {
		font-weight: 400;
		font-size: 16px;
		font-family: inter;
	}
`;

export const ErrorMessageWrapper = styled.div`
	color: red;
	margin-bottom: 8px;
	font-family: Inter;
	font-size: 10px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: -0.2px;
`;
export const Input = styled(Field) <{ error: boolean; type: string }>`
	width: ${(props) =>
		props.type === "checkbox" ? "unset" : "calc(100% -  40px)"};
	padding: 20px;
	border-radius: 10px;
	// background: #f7fafc;
	border: ${(props) => (props.error ? "1px solid red" : "0")};
	outline: 0;
	margin: 5px 0px 20px 0;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	color: #505050;
	font-weight: 700;
	line-height: normal;
`;

export const Screen = styled.div``;

// for form

export const Heading = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		color: #000;
		text-align: center;
		font-feature-settings: "clig" off, "liga" off;
		/* Title-H2 */
		font-family: Inter;
		font-size: 32px !important;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin: 10px 0;
		letter-spacing: -0.2px;
		@media (max-width: 600px) {
			font-size: 24px !important;
		}
	}
	p {
		color: var(--dark, #1c1c1c);
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: -0.2px;
		margin: 0 0 20px 0;
		@media (max-width: 600px) {
			font-size: 14px !important;
		}
	}
	.content {
		width: 78%;
		margin: auto;
	}
`;

export const FormControl = styled.div`
	width: 100%;
	dispaly: flex;
	flex-direction: column;
	gap: 30px;
	position: relative;
	svg {
		position: absolute;
		right: 20px;
		top: 44px;
		cursor: pointer;
		transition: 0.5s ease;
	}
`;

export const SubmitButton = styled.button<{ loading?: boolean }>`
	background-color: #0d6efd;
	color: #fff;
	padding: ${(props) => (props.loading ? "7px" : "20px 10px")};
	border: none;
	cursor: pointer;
	width: 100%;
	margin: 20px 0;
	border-radius: 10px;

	color: var(--white, #fff);
	text-align: center;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
