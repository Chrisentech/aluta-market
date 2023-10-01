import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 50vh;
  width: 100%;

  margin: 30px auto;
  background: #f7fafc;
`;

export const Container = styled.div`  
  box-sizing: border-box;
  width: 1180px;
  margin: auto;
  position: relative;
`;

export const OrderDetail = styled.div`
  box-sizing: border-box;
  width: 1180%
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
  
  .average-rate {
    font-size: 16px;
    font-weight: 400;
    color: #FF9017;
  }
  .product-status {
    color: ${({ instock }) => (instock ? "#00B517" : "#FA3434")};
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

export const ProductName = styled.div`
  .heading {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    h2 {
      font-size: 20px;
      color: #1c1c1c;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: -0.2px;
    }
  }
  .list {
    display: flex;
    flex-direction: row;
    gap: 7px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400px;
    color: #787A80;
    align-items: center;
    .item {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

export const Variations = styled.div`
  .colors {
    
  }
  .sizes {
    margin-top: 10px;
    div {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
`;

export const DeliveryInfo = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 280px;
  height: 513px;
  border: 1px solid #DEE2E7;
  border-radius: 6px;
  box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
  padding: 16px;
  color: #1c1c1c;
  .store {
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    border-bottom: 1px solid #e0e0e0;
    .button {
      margin-top: -5px;
    }
  }
  .delivery-details {
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    justify-content: space-between;
    gap: 20px;
  }
`;

interface PriceCardProps {
  SellingPrice?: number;
  discountPrice?: number;
}

export const PriceCard = styled.div<PriceCardProps>`
  box-sizing: border-box;
  width: 430px;
  height: 72px;
  padding-left: 15px;
  padding-top: 5px;
  background: #fff0df;
  font-family: inter;
  p:first-child {
    color: #fa343a;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.2px;
  }
  p:nth-child(2) {
    color: #969696;
    span:first-child {
      text-decoration: line-through;
    }
    span:nth-child(2) {
      color: #fa343a;
    }
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  .store-name {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  .header {
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  .fee {
    font-size: 12px;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  .detail {
    font-size: 12px;
    font-weight: 500px
  }

  span {
    font-weight: 700;
  }
`;

export const CardIcon = styled.div<{background?: string}>`
  min-width: 48px;
  height: 48px;
  border-radius: 4px;
  background: ${({background}) => (background ? background : '#c6f3f1')};
  font-size: 28px;
  font-weight: 600px;
  line-height: 24px;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
  justify-content: center;
  .initial {
    color: rgba(76, 167, 167, 0.60);
  }
`;

export const Description = styled.div`
  box-sizing: border-box;
  margin-top: 30px;
  width: 880px;
  background: #fff;
  border: 1px solid #DEE2E7;
  border-radius: 6px;
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


export const SuggestionsWrapper = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 553px;
  border-radius: 6px;
  border: 1px solid #DEE2E7;
  background: #fff;
  margin-top: 30px;
  position: absolute;
  right: 0;
  font-family: inter;
  font-size: 16px;
  display: flex;
  padding: 20px 0px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  .title {
    align-self: flex-start;
    padding-left: 10px;
    color: #1C1C1C;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
  }
  .card {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    .image {
      box-sizing: border-box;
      width: 88px;
      height: 80px;
      border: 1px solid #E0E0E0;
      border-radius: 6px;
    }
    .name {
      font-weight: 400;
      margin-bottom: 10px;
    }
  }
`;

export const RelatedWrapper = styled.div`
  width: 1180px;
  height: 350px;
  border-radius: 6px;
  border: 1px solid #DEE2E7;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .grid-wrapper {
    margin-top: 20px;
  }
  .title {
    font-family: inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #1c1c1c;
    margin-top: 20px;
    align-self: flex-start;
    margin-left: 25px;
  }
`;