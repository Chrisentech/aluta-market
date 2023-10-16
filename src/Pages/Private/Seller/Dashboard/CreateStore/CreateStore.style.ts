// import { Field } from "formik";
import styled from "styled-components";
// import { AppColors } from "../../../../../Shared/Constants";

export const Wrapper = styled.div`
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .switch-box {
      display: flex;
      align-items; center;
      justify-content: flex-end;
      flex-direction: row;
      gap: 20px;
      font-family: inter;
      font-weight: 600;
      font-size: 20px;
      color: #505050;
    }
  }

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
    background: linear-gradient(180deg, #FF7612 0%, #FF001F 100%);
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
    .createBtn {
      border-radius: 10px;
      background: linear-gradient(180deg, #FF7612 0%, #FF001F 100%);
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
      img {
        margin: 0 20px 0 0;
        height: 24px;
        width: 24px;
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
