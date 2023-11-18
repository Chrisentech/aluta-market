import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;

  .flex {
    display: flex;
    justify-content: space-between;
    margin: 0px 0 30px 0;
    align-items:center;
    position: relative;
    
    h2 {
      color: #1c1c1c;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; 
      letter-spacing: -0.2px;
    }
  }

  .main {
    box-sizing: border-box;
    margin-top: 40px;
    height: auto;
    padding: 20px 45px;
    padding-bottom: 130px;
    border-radius: 20px;
    background: #fff;
    overflow: hidden;
    cursor: auto!important;

    h3 {
      color: #1C1C1C;
      font-family: Inter;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px; 
      letter-spacing: -0.2px;
      padding: 20px 0; 
      border-bottom: 2px solid #DEE2E7;
    }

    .table-wrapper {
      border: 1px solid #DEE2E7;
      border-radius: 6px;

      .total {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 75px;
        padding: 20px 70px;
        height: 75px;

        font-size: 20px;
        font-family: Inter;
        letter-spacing: -0.2px;

        .label {
          color: #8B96A5;
          font-weight: 500;
          line-height: 28px; 
        }

        .value {
          color: #1C1C1C;
          font-weight: 700;
          line-height: 13.5px;
        }
      }
    }
  }
`;

export const OrderStatus = styled.div`
  border-bottom: 1px solid #DEE2E7;
  margin-bottom: 20px;
  padding: 20px 0;

  .info {
    display: flex;
    gap: 130px;
    font-family: Inter;
    color: var(--gray-600, #505050);

    .title {
      width: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 7px;
      justify-content: flex-start;

      font-weight: 600;
      line-height: 28px; 
      letter-spacing: -0.2px;
    }
    .detail {
      font-weight: 400;
    }
    .status {
      background: rgba(13, 110, 253, 0.10);
      color: #0D6EFD;
      font-weight: 500;
      padding: 4px 13px;
      border-radius: 29px;
    }
  }
`;

export const CustomerDetails = styled.div`
  font-family: Inter;

  .bottom {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 130px;

    color: var(--dark, #1C1C1C);

    .contact {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;

      .initial {
        width: 50px;
        height: 50px;
        background: #FF9017;
        border-radius: 50%;

        color: var(--white, #FFF);
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        line-height: 50px;
      }
      .name {
        font-size: 18px;
        font-weight: 600;
        line-height: 20px; 
      }
      .number {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
      }
    }

    .location {
      width: 385px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;

      .address {
        font-weight: 400;
        line-height: 26px;
      }
    }
  }
`;


export const ModalWrapper = styled.div`

`;