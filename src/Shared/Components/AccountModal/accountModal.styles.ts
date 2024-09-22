import styled from "styled-components";
// import { Field } from "formik";

export const Container = styled.div`
	max-height: 672px;
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	// justify-content: center;
	gap: 10px;
	padding: 20px 0;
	overflow: auto;
    h2{
    color: #000;
    text-align:center
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: -0.2px;
    }
    .select{
    margin:10px 0;
    .mwt-control{
    background:#f7fafc
    }
    }
	.error {
		color: red;
		font-style: italic;
		margin-bottom: 10px;
		font-size: 12px;
	}
	.header {
		display: flex;
		padding: 15px 20px;
		// background: #f7fafc;
		width: 100%;
		width: calc(100% - 40px);
		align-items: flex-end;
		justify-content: end;
        svg{

        }
		p {
			flex: 1;
			text-align: center;
			font-weight: 500;
			font-size: 16px;
			line-height: 19.36px;
			font-family: "Inter";
		}
	}

	form {
		width: 80%;
		margin: 20px auto;
		input,
		select {
			width: calc(100% - 40px);
			padding: 15px 20px;
			border-radius: 10px;
			outline: 0;
			margin: 10px 0;
			background: #f7fafc;
			border: none;
		}
		select {
			width: 100%;
			option {
				font-size: 16px;
				line-height: 19px;
				font-family: "Inter";
				margin: 10px;
			}
		}
		label {
		font-family:"Inter",
		font-weight:600;
		font-size:16px
		}
	}
		.gateway{
		padding:20px;
		background:#F7FAFC;
		display:flex;
		align-items:center;
		gap:10px;
		width:80%;
		border-radius:10px;
		margin:10px;
		h2{
		font-size:16px;
		color:#505050;
		font-weight:600;
		font-family: Inter;
		}
		p{
		font-size:12px;
		color:#505050;
		font-family: Inter;
		font-weight:500
		}
		}
`;

export const Img = styled.div`
	img {
		height: 40px;
		widht: 40px;
	}
`;

export const Label = styled.p`
	color: #000;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 16px;
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

export const SubmitButton = styled.button<{ loading?: boolean }>`
	background: #0D6EFD;
	color: #fff;
	padding: ${(props) => (props.loading ? "7px" : "20px")};
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


export const FormControl = styled.div`
	width: 100%;
	dispaly: flex;
	flex-direction: column;
	gap: 30px;
	position: relative;
`;

export const Input = styled.input <{ error?: boolean; type: string }>`
	width: ${(props) =>
        props.type === "checkbox" ? "unset" : "calc(100% -  40px)"};
	padding: 20px;
	border-radius: 10px;
	background: #f7fafc;
	border: ${(props) => (props.error ? "1px solid red" : "0")};
	outline: 0;
	margin: 5px 0px 20px 0;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	color: #505050;
	font-weight: 700;
	line-height: normal;
	&::nth-child(2) {
		background: red;
	}
	@media (min-width: 768px) {
		width: 500px;
	}
`;


export const Select = styled.select <{ error?: boolean; type: string }>`
	width: 100%;
	padding: 20px;
	border-radius: 10px;
	background: #f7fafc;
	border: ${(props) => (props.error ? "1px solid red" : "0")};
	outline: 0;
	margin: 5px 0px 20px 0;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	color: #505050;
	font-weight: 700;
	line-height: normal;
	&::nth-child(2) {
		background: red;
	}
	@media (min-width: 768px) {
		width: 500px;
	}
`;