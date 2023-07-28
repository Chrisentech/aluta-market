import styled from "styled-components";

export const Wrapper = styled.div`
  .flex {
    display: flex;
    justify-content: space-between;
    margin: 0px 0 30px 0;
        align-items:center;
    position: relative;
    
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
    button {
      background: #00b517;
      color: #fff;
      border: 0;
      outline: 0;
      border-radius: 6px;
      padding: 10px;
      cursor: pointer;
    }
    input {
      flex: 0.2;
      padding: 10px 29px;
      border-radius: 6px;
      border: 1px solid #8b96a5;
      outline: 0;
      height: 40px;
    }
    .diff {
      position: absolute;
      top: 34px;
      left: 10px;
    }
    .dropdown{
        flex:0.3;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-right:50px
    }
  }
`;
