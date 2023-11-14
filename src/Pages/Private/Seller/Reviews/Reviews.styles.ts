import styled from "styled-components"

export const Wrapper = styled.div`
    box-sizing: border-box;
    //   height: 200px;
    width: 100%;
    padding: 20px;
    overflow-x: hidden;
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
`;

export const Top = styled.div`
    box-sizing: border-box;
    height: 95px;
    padding: 20px 40px;
    border-bottom: 1px solid #EFF2F4;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: inter;
    .filters {
        display: flex;
        flex-direction: row;
        height: 48px;
        gap: 15px;
        select {
            box-sizing: border-box;
            height: 100%;
            width: 133px;
            padding: 10px;
            border-radius: 6px;
            outline: none;
            background: #FFFFFF;
            border: 1px solid #DEE2E7;
            font-size: 16px;
            font-weight: 400;
            color: #8B96A5;
        }
    }
`;

export const SearchTab = styled.div`
    box-sizing: border-box;
    // width: 450px;
    height: 48px;
    padding: 8px;
    align-items: center;
    display: flex;
    border: 1px solid #DEE2E7;
    border-radius: 6px;
    overflow: hidden;
    .search-input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 16px;
        &::placeholder {
            color: #8B96A5;
        }
      }
    .icon {
        color: #8B96A5;
        font-size: 22px;
        border: none;
        padding: 8px;
    }
`;

export const GridItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background: #F7FAFC;
    padding: 0px;
    margin: 0px;
    
    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 15px;
      width: 60%;
    }
    .images {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: #FFF;

      img {
        width: 65px;
        height: 65px;
      }
    }
`;