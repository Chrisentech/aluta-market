import styled from "styled-components";
import { Field } from "formik";
import { BreakPoints, AppColors } from "../../../../Shared/Constants";

export const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 120px);
	display: flex;
	flex-direction: column;
	// justify-content: center;
	margin-top: 40px;
	align-items: center;
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
.descr{
background:#fff;
padding:20px;
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
    margin:20px 0;
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
		right: 20px;
		top: 44px;
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

export const Input = styled(Field)<{ error?: boolean; type: string }>`
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
margin-top:20px;
}
form{
width:100%}
.label{
  display:flex;
  justify-content:space-between;
  margin:20px 0
}
img{
  display:flex;
  justify-content:center;
  tex-align-center
}
.gray{
  background:#EFF2F4;
  padding:18px;
  border-radius:  20px 0 0 20px;
  margin-top:-15px
} svg{
  position:unset !important;
  color:${AppColors.brandGray}
}

`;
export const SubmitButton = styled.button<{ loading?: boolean }>`
	background-color: #0d6efd;
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
