import styled from "styled-components";
import { Field } from "formik";
import { BreakPoints, AppColors } from "../../../../Shared/Constants";

export const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 112px);
	display: flex;
	flex-direction: column;
	// justify-content: center;
	margin-top: 40px;
	align-items: center;
	padding-bottom:60px;
	.buttbton{
		margin-left:auto;
		margin-top:10px
	}
	.tab_selectors{
		    display: flex;
			column-gap:40px;
			margin:12px 0;
			h2{
			cursor:pointer;
			padding-bottom: 10px;
			font-size:16px;
			}
		}
.descr{
background:#fff;
padding:12px;
border-radius:10px;
display:flex;
justify-content: space-between;
.div{
    display: flex;
	align-items: center;
	gap:10px
	}
img{

}

}
    header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:12px 0;
    margin-bottom:40px;
     h2{
    }
}
    }
form{
width: 450px;
		@media (${BreakPoints.xs}) {
			width: 88%;
		}
}
`;

export const FormControl = styled.div`
	width: 100%;
	dispaly: flex;
	flex-direction: column;
	gap: 30px;
	position: relative;
	.delte {
		position: absolute;
		right: 12px;
		// top: 44px;
		cursor: pointer;
		transition: 0.5s ease;
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

export const Input = styled(Field) <{ error?: boolean; type: string }>`
	width: ${(props) =>
		props.type === "checkbox" ? "unset" : "calc(100% -  40px)"};
	padding: 12px;
	border-radius: 10px;
	// background: #f7fafc;
	border: ${(props) => (props.error ? "1px solid red" : "0")};
	outline: 0;
	margin: 5px 0px 12px 0;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	color: #505050;
	font-weight: 700;
	line-height: normal;
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

export const Modal = styled.div`
padding:30px;
input{
background:#F7FAFC !important;
}
button{
margin-top:12px;
}
form{
width:100%}
.label{
  display:flex;
  justify-content:space-between;
  margin:12px 0
}
img{
  display:flex;
  justify-content:center;
  tex-align-center
}
.gray{
  background:#EFF2F4;
  padding:18px;
  border-radius:  12px 0 0 12px;
  margin-top:-15px
} svg{
  position:unset !important;
  color:${AppColors.brandGray}
}

`;
export const SubmitButton = styled.button<{ loading?: boolean }>`
	background-color: #0d6efd;
	color: #fff;
	padding: ${(props) => (props.loading ? "7px" : "12px")};
	border: none;
	cursor: pointer;
	width: 100%;
	margin: 12px 0;
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
export const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	span {
		color: var(--gray-600, #505050);
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	a {
		font-feature-settings: "clig" off, "liga" off;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		color: #ff001f;
	}
`;


export const InvoiceContainer = styled.div`
	max-width: 900px;
	margin: 0 auto;
	// margin-top: 120px;
	padding: 20px;
	font-family: "Arial", sans-serif;
	height: calc(100vh - 40px);
	// display: flex;
	// flex-direction: column;
	position: relative;
`;

export const InvoiceHeader = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ddd;
	align-items: start;
	padding-bottom: 5px;
	margin-bottom: 20px;
`;

export const Reciever = styled.div`
	margin: 20px 0 20px auto;
	float: inline-end;
	text-align: right;
	p {
	}
`;
export const CompanyInfo = styled.div`
	font-size: 16px;
	font-weight: bold;
	h1 {
		font-sie: 24px;
	}
	h3 {
		font-size: 18px;
		// margin-bottom: 50px;
	}
`;

export const InvoiceDetails = styled.div`
	text-align: right;
	font-size: 14px;
`;
export const Section = styled.div`
	background: #fa343438 !important;
	border-radius: 5px;
	padding: 10px 20px;
	min-height: 40px;
	width: calc(100% - 40px);
	margin-top: 130px;
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	align-items: start;
	p,
	h3 {
		display: flex;
		gap: 20px;
		margin: 10px 0;
	}
	.diff {
		h3,
		p {
			margin: 2px 0;
		}
	}
`;
export const InvoiceItems = styled.table`
	width: 100%;
	margin-bottom: 20px;
	border-collapse: collapse;
	border-spacing: 0;
	table,
	th,
	td {
		border: none;
	}
	thead tr {
	}
`;

export const TableHeader = styled.th`
	padding: 12px 8px;
	text-align: left;
	// background-color: #f4f4f4;
	background: #fa343438 !important;
	border: 1px solid #ddd;
`;

export const TableCell = styled.td`
	padding: 12px 8px;
	text-align: left;
	border-bottom: 1px solid #ddd !important;
	// 
`;

export const TotalRow = styled.tr`
width:100%;
	font-weight: bold;
	// background-color: #f4f4f4;
	td {
		width: 100%;
		border: none !important;
	}
`;

export const CallToActionButton = styled.button`
	background-color: #fa3434;
	color: white;
	font-size: 16px;
	padding: 10px 20px;
	margin-top: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #45a049;
	}
`;

export const PrintButton = styled.button`
	background-color: #fa3434;
	color: white;
	font-size: 16px;
	// padding: 10px ;
	// margin-top: 20px;
	width: 100%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	td {
		width: 100%;
	}
`;

export const Footer = styled.footer`
	border-top: 1px solid #ddd;
	display: flex;
	margin-top: auto;
	font-size: 16px;
	position: absolute;
	padding-top:10px;
	bottom: 20px;
	width: calc(100% - 40px);
`;