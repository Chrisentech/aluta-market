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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

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
`;
export const Flex = styled.div`
  display: flex;
  gap: 15px;
`;

export const Label = styled.label`
  color: #505050;
  font-feature-settings: "clig" off, "liga" off;
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
    color: var(--gray-600, #505050);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
}>`
  .ql-container {
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
    li, ol {
      list-style: square !important;
    }
  }
  .rdw-option-wrapper{
    border:none !important
  }
  .rdw-option-active{
    box-shadow:none !immportant;
    background:#f7fafc !important;
  }
`;

export const Incrementor = styled.div<{ width?: string }>`
display:flex;
position:relative;
width:${({ width }) => (width ? width : "200px")};
.leftButton{
  border-radius:6px 0 0 6px;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:10px;
  border:1px solid ${AppColors.brandGray};
  cursor:pointer;
  flex:0.2; 
  svg{
    position:unset !important
  }
}
.rightButton{
  border-radius: 0  6px 6px 0;
  display:flex;
  border:1px solid ${AppColors.brandGray};
  justify-content:center;
  padding:10px;
  flex:0.2;
  cursor:pointer;
  align-items:center;
  svg{
    position:unset !important
  }
}
.main{
  display:flex;
  justify-content:center;
  border:1px solid ${AppColors.brandGray};
  padding:10px;
  flex:0.6;
  align-items:center;
  cursor:not-allowed;
  outline:0

}
}
`;
export const OptionButton = styled.button`
  background: #f7fafc;
  border: none;
  outline: none;
  color: ${AppColors.brandOrange};
  padding: 12px 10px !important;
  font-family: Inter;
  width: 200px;
  font-size: 16px;
  margin: auto auto auto 91px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 6px;
  margin-top: 23px;
  cursor: pointer;
`;

export const Modal = styled.div`
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
    width: 100px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  .drpDwn {
    margin: 10px 20px;
  }
 
  }
  .input {
    padding: 15px;
    width: 86%;
    border-radius: 6px;
    margin: 0px auto 20px auto;
    &[readonly] {
      background: #f7fafc;
      cursor: not-allowed;
    }
  }
  .lsxaj2 {
    width: 86%;
    margin: 40px auto;
  }
   .popup {
    .card {
      padding-bottom: 74px;
    }
`;
