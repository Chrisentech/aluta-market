import { Field } from "formik";
import styled from "styled-components";
import { AppColors } from "../../../../Shared/Constants";

export const Wrapper = styled.div`
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
  .card {
    width: calc(100% - 160px);
    margin: 20px 0;
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
      padding: 15px 30px;
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
    div {
      padding: 0;
    }
    .card {
      width: 100%;
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

export const GridItem = styled.div<{ background: string }>`
  border-radius: 6px;
  background: ${({ background }) => (background ? background + "4d" : "")};
  height: 265px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  .badge {
    width: 50px;
    height: 50px;
    background: #fff;
  }

  .title {
    color: #000;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    /* Title-H4 */
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
    letter-spacing: -0.2px;
  }
  .label {
    color: var(--gray-600, #505050);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 80%;
    margin: 20px auto;
  }
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

export const Input = styled(Field)<{
  error: boolean;
  type: string;
  readOnly?: boolean;
  height?: string;
}>`
  width: ${({ type }) =>
    type === "checkbox" ? "unset" : "calc(100% -  40px)"};
  height: ${({ height }) => (height ? height : "inherit")};
  padding: 20px;
  border-radius: 10px;
  color: ${({ readOnly }) =>
    readOnly ? `${AppColors.brandColor}` : "inherit"};
  background: ${({ readOnly }) => (readOnly ? "#bdc4cd" : "#f7fafc")};
  border: ${({ error }) => (error ? "1px solid red" : "0")};
  outline: 0;
  margin: 5px 0px 10px 0;
  cursor: ${(readOnly) => (readOnly ? `not-allowed` : "inherit")};
`;

export const ErrorMessageWrapper = styled.div`
  color: red;
  margin-bottom: 5px;
`;

export const Screen = styled.div``;
