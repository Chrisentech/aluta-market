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
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 800px;
  border-radius: 20px;
  background: #fff;
  overflow: hidden;
`; 

export const TopPanel = styled.div`
  height: 404px;
  .button {
    
  }
`;

export const BottomPanel = styled.div`
  width: 95%;
  border-top: solid 1px #EFF2F4;
  margin: auto;

  .cardbox {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .deactivate {
    display: flex;
    flex-direction: column;
    color: #505050;

    .top-card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;

        .deactivate-button {
            font-size: 14px;
            font-weight: 600;
        }

        .top-text {
            font-family: inter;
            font-weight: 700;
            font-size: 14px;
        }
    }

    p {
        font-family: inter;
        font-weight: 500;
        font-size: 12px;
    }
  }
`;

export const BackgroundImg = styled.div<{ img?: string }>`
  height: 300px;
  width: 100%;
  background: ${({ img }) => img ? img : "#DEE2E7"};
  position: relative;
`;

export const ProfileImg = styled.div`
    position: absolute;
    border: solid 5px #fff;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: #EFF2F4;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    bottom: -90px;
    left: 65px;
`;

export const AddImg = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #F7FAFC;
    transition: 0.3s ease-in-out;

    &:hover {
        background: #FFF;
    }
`;
