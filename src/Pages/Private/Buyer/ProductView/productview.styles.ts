import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 50vh;
  width: 100%;

  margin: 30px auto;
  background: #f7fafc;
`;

export const Container = styled.div`
  width: 1180px;
  margin: auto;
`;

export const OrderDetail = styled.div`
  width: 100%;
  height: 551px;
  border: 1px solid #dee2e7;
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

interface ProductInfoProps {
  instock?: boolean;
}

export const ProductInfo = styled.div<ProductInfoProps>`
  width: 435px;
  height: 465px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: inter;
  p {
    color: ${({ instock }) => (instock ? '#00B517' : '#FA3434')};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    display: flex;
    align-items: center;
    svg {
      font-size: 25px;
    }    
  }
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DeliveryInfo = styled.div`
  width: 280px;
  height: 513px;
  border: 1px solid #DEE2E7;
  border-radius: 6px;
  box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
  padding: 16px;
  .store {
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    border-bottom: 1px solid #e0e0e0;
  }
`;

interface PriceCardProps {
  SellingPrice?: number;
  discountPrice?: number;
}

export const PriceCard = styled.div<PriceCardProps>`
  width: 430px;
  height: 72px;
  background: #fff0df;
`;

export const InfoCard = styled.div`
  display: flex;

`;

export const CardIcon = styled.div<{background?: string}>`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background: ${({background}) => (background ? background : '#c6f3f1')}
`;

export const Description = styled.div`
  margin-top: 30px;
  width: 880px;
  background: #fff;
  border: 1px solid #DEE2E7;
  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.10);
  padding: 20px;
  font-family: inter;

  .title {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1c1c1c;
  }
  .description {
    font-size: 16px;
    font-weight: 400px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #505050;
    margin: 20px auto;
    text-align: justify;
  }
`;

// Table Styles

export const Table = styled.div`
  display: flex;
  width: 567px;
  flex-direction: column;
  border: 1px solid #DEE2E7;
  border-top: none;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #DEE2E7;
  height: 36px;
  font-family: inter;
  font-size: 16px;
  font-weight: 400;
  color: #505050;
  
  .column {
    flex: 1;
    display: flex;
    padding-left: 10px;
    align-items: center;
    height: 100%;
  }
  .column:first-child {
    background: #EFF2F4;
    border-right: 1px solid #DEE2E7;
  }
`;
