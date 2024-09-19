import { Field } from "formik";
import styled from "styled-components";
import { AppColors } from "../../../../../Shared/Constants";
export const Wrapper = styled.div`
  .card {
    display: flex;
    justify-content: center;
    margin: 0px 0 30px 0;
    align-items: center;
    position: relative;
    flex-direction: column;
  }
  h4 ,h3{
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
    margin: 30px 0;
  }

  }
  .badge {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #00b517;
    color: #fff;
  }
  .upload {
    width: 268px;
    height: 268px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px dashed var(--secondary-grey-500, #e0e5f2);
    background: var(--secondary-grey-100, #fafcfe);
    h3 {
      margin-top: -10px;
      color: #ff7612;
      background-clip: text;
      -webkit-background-clip: text;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 160% */
      letter-spacing: -0.4px;
    }
    p {
      color: var(--gray-600, #505050);
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 166.667% */
      letter-spacing: -0.24px;
    }
  }
  .submit {
    display: flex;
    width: 291px;
    height: 42px;
    padding: 0px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 6px;
    margin: 20px auto;
    color: #fff;
    border: 0;
    cursor: pointer;
    outline: 0;
    background: var(
      --primary-gradient,
      linear-gradient(180deg, #ff7612 0%, #ff001f 100%)
    );
  }
  // span {
  //   color: var(--gray-600, #505050);
  //   text-align: center;
  //   font-family: Inter;
  //   font-size: 12px;
  //   font-style: italic;
  //   font-weight: 500;
  //   line-height: 20px; /* 166.667% */
  //   letter-spacing: -0.24px;
  //   // margin: 20px 0 0 0;
  // }
  .options {
    border-radius: 6px;
    background: var(--gray-300, #dee2e7);
    padding: 9px 20px;
    width: 260px;
    color: var(--dark, #1c1c1c);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    margin: 5px 0 20px 0;
    font-weight: 600;
    line-height: normal;
  }

  .upload_container{
  background:#F7FAFC;
  width:calc(100% - 40px);
  height:60px;
  padding:20px;
  margin-top:20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  cursor:pointer;
h2{
  font-size:16px;
  color:#505050;
  font-family:Inter;
  font-weight:400;
  display:flex;
  gap:10px;
  margin-bottom:7px;
align-items:center;
  }
  p{
  font-size:10px;
  color:#505050;
  font-family:Inter;
  }
  }
`;
export const ErrorMessageWrapper = styled.div`
	color: red;
	margin-bottom: 5px;
`;
export const Container = styled.div`
	width: 600px;
	margin: 30px auto;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .image-container {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    border: 1px solid lightgray;
    position: relative;
    margin-bottom:15px;
    .active {   
       border-radius: 6px;
    background: var(--green, #00b517);
    width: 85px;
    padding: 4px 0;
    margin: 10px 0;
    bottom: -27px;
    position: absolute;
}
    }
    img {
      // object-fit: contain;
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
    .svg{
      position: absolute;
      top: 5px;
      right: 5px;
      color: #dee2e7;
    }
  }
  .addBtn {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    border: 1px dashed lightgray;
    background: #f7fafc;
    position: relative;
    svg {
      position: relative;
    }
  }
`;
export const FormControl = styled.div`
	box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: relative;

	// svg {
	//   position: absolute;
	//   right: 20px;
	//   top: 56px;
	//   cursor: pointer;
	//   transition: 0.5s ease;
	// }
	.check {
		margin: -10px 0;
	}
`;
export const Flex = styled.div`
	display: flex;
	gap: 15px;
`;

export const Label = styled.label`
	color: #505050;
	position: relative;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	display: block;
	span {
		color: ${AppColors.brandOrange};
	}
	.info {
		color: #505050;
		font-family: Inter;
		font-size: 12px;
		font-weight: 400;
	}
`;

export const Input = styled(Field)<{
	error?: boolean;
	type?: string;
	readOnly?: boolean;
	height?: string;
}>`
	width: ${(props: any) =>
		props.type === "checkbox" ? "unset" : "calc(100% -  40px)"};
	height: ${(props: any) => (props.height ? props.height : "inherit")};
	padding: 20px;
	border-radius: 10px;
	color: ${(props: any) =>
		props.readOnly ? `${AppColors.brandColor}` : "inherit"};
	background: ${(props: any) => (props.readOnly ? "#bdc4cd" : "#f7fafc")};
	border: ${(props: any) => (props.error ? "1px solid red" : "0")};
	outline: 0;
	margin: 5px 0px 10px 0;
	cursor: ${(props: any) => (props.readOnly ? `not-allowed` : "inherit")};
`;

export const TextEditor = styled.div<{
	error?: boolean;
	type?: string;
	readOnly?: boolean;
	height?: string;
	width?: string;
}>`
	.ql-editor {
		padding: unset;
	}
	.ql-container {
		width: ${(props: any) =>
			props.width ? props.width : "calc(100% -  40px)"};
		height: ${(props: any) => (props.height ? props.height : "inherit")};
		overflow-y: ${(props: any) => (props.height ? "auto" : "inherit")};
		padding: 20px;
		border-radius: 10px;
		color: ${(props: any) =>
			props.readOnly ? `${AppColors.brandColor}` : "inherit"};
		background: ${(props: any) => (props.readOnly ? "#bdc4cd" : "#f7fafc")};
		border: ${(props: any) => (props.error ? "1px solid red" : "0")};
		outline: 0;
		margin: 5px 0px 10px 0;
		cursor: ${(props: any) => (props.readOnly ? `not-allowed` : "inherit")};
	}
	// Overiding Editor styles
	.rdw-editor-toolbar {
		border-radius: 10px !important;
	}
	.rdw-editor-main {
		background: #f7fafc;
		height: 150px;
		overflow: auto;
		margin-bottom: 10px;
		padding: 0 10px;
		li,
		ol {
			list-style: square !important;
		}
	}
	.rdw-option-wrapper {
		border: none !important;
	}
	.rdw-option-active {
		box-shadow: none !immportant;
		background: #f7fafc !important;
	}
`;

export const Incrementor = styled.div<{ small?: boolean }>`
	display: flex;
	position: relative;
	width: ${({ small }) => (small ? "84px" : "200px")};
	height: ${({ small }) => (small ? "28px" : "unset")};
	.leftButton {
		border-radius: 6px 0 0 6px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: ${({ small }) => (small ? "5px" : "10px")};
		border: 1px solid ${AppColors.brandGray};
		cursor: pointer;
		flex: 0.2;
		svg {
			position: unset !important;
		}
	}
	.rightButton {
		border-radius: 0 6px 6px 0;
		display: flex;
		border: 1px solid ${AppColors.brandGray};
		justify-content: center;
		padding: ${({ small }) => (small ? "5px" : "10px")};
		flex: 0.2;
		cursor: pointer;
		align-items: center;
		svg {
			position: unset !important;
		}
	}
	.main {
		display: flex;
		justify-content: center;
		border: 1px solid ${AppColors.brandGray};
		padding: 10px;
		flex: 0.6;
		align-items: center;
		cursor: not-allowed;
		outline: 0;
	}
`;
export const OptionButton = styled.button`
	background: #f7fafc;
	border: none;
	outline: none;
	color: ${AppColors.brandOrange};
	padding: 12px 10px !important;
	font-family: Inter;
	width: 100%;
	font-size: 16px;
	// margin: 20px 0;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	border-radius: 6px;
	margin-top: 23px;
	cursor: pointer;
`;

export const Modal = styled.div`
  box-sizing: border-box;
  // padding: 50px;
  min-height: 400px;

  .label {
    display: flex;
    justify-content: space-between; 
    margin-left: 20px;
    margin-bottom: -5px;
  }
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
  .info {
    padding: 10px;
    border-radius: 6px;
    margin: 0 auto;
    text-align: center;
    width: 60%;
    margin-bottom: 30px;
  }
  .gray {
    background: ${AppColors.brandGray};
    width: 80%;
  }
  .addNewBtn {
    margin: unset;
    float: right;
    width: 157px;
    height: 56px;
    border: 1px solid var(--gray-300, #DEE2E7);
    margin-bottom: 30px;
  }
  
  // .invisible {
  //   visibility: none;
  // }
 
  }
  .input {
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 6px;
    margin: 0px auto 20px auto;
    &[readonly] {
      background: #f7fafc;
      cursor: not-allowed !important;
    }
  }
  .lsxaj2 {
    width: 100%;
    height: 56px;
    border-radius: 10px;
    margin: 40px auto;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
  }
  .popup {
  .card {
    padding-bottom: 0px !important;
  }
  .size-variant {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
    flex-direction: row;
    width: 100%;

    .close {
      position: absolute;
      right: 10px;
      top: calc(50% - 12px);
    }
    .input {
      border: none; 
      outline: none;
      border-radius: 10px;
      background: #F7FAFC;

      color: #1C1C1C;
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 100%; 
      letter-spacing: -0.32px;
    }
    .price {
      padding: 15px 20px; 
    }
  }
  .drpDwn {
    margin: 10px 0;
    width: 100% !important;
  }
`;

export const ModalWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
`;

export const SizeVariantCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  padding: 5px 20px;
  background: #F7FAFC;
  border-radius: 10px;

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: gree;

    .info {
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: green;

    .icon {
      
    }
  }
`;

export const Img = styled.div<{ background: string }>`
	min-width: 50px;
	min-height: 50px;
	border-radius: 6px;
	border: 1px solid #dee2e7;
	background: ${({ background }) =>
		background ? `url(${background})` : "#FFF"};
	background-size: contain;
	background-repeat: no-repeat;
`;

export const ColorVariantCard = styled.div`
	font-family: Inter;

	label {
		color: #505050;
		font-size: 12px;
		font-weight: 500;
		letter-spacing: -0.2px;

		input {
			height: 50px;
			border: none;
			outline: none;
			background: #f7fafc;
			font-size: 16px;
		}
	}
`;

export const ConditionVariantCard = styled.div``;
export const SubmitButton = styled.button<{ loading?: boolean }>`
	background-color: #007bff;
	color: #fff;
	padding: ${(props) => (props.loading ? "7px" : "20px")};
	border: none;
	cursor: pointer;
	width: 100%;
	margin: 20px 0;
	border-radius: 10px;
	background: var(
		--primary-gradient,
		linear-gradient(180deg, #ff7612 0%, #ff001f 100%)
	);
	color: var(--white, #fff);
	text-align: center;
	font-feature-settings: "clig" off, "liga" off;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
