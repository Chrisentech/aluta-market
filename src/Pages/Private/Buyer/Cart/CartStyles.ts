import styled from "styled-components";

export const Page = styled.div`
    min-height: 50vh;
    width: 100%;

    margin: 30px auto;
    background: #f7fafc;
`;

export const Container = styled.div`
    width: 1180px;
    margin: auto;
    position: relative;
    h1 {
        margin: 25px 0px;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px; 
        letter-spacing: -0.2px;
    }
`;

export const Product = styled.div`
    box-sizing: border-box;
    width: 880px;
    border-radius: 6px;
    border: 1px solid #DEE2E7;
    background: #FFFFFF;
    padding: 20px;
    .card {
        border-bottom: 1px solid #DEE2E7;
    }
    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: inter;
        font-weight: 500;
        padding-top: 20px;
    }
`;

export const Empty = styled.div`
    
`;

export const RightSection = styled.div`
    box-sizing: border-box;
    position: absolute;
    right: 0;
    width: 280px;
    .coupon {
        box-sizing: border-box;
        height: 110px;
        width: 100%;
        border: 1px solid #dee2e7;
        background: #fff;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        border-radius: 6px;
    
        .form {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 40px;
            overflow: hidden;
            border: 1px solid #dee2e7;
            border-radius: 6px;
            input {
                width: 164px;
                border: none;
                padding-left: 10px;
            }
            button {
                background: #fff;
                color: #0d6efd;
                width: 85px;
                display: inline-block;
                border: none;
                border-left: 1px solid #dee2e7;
                cursor: pointer;
            }
        }
    }

    .checkout {
        box-sizing: border-box;
        height: 329px;
        padding: 20px;
        background: #fff;
        border: 1px solid #dee2e7;
        border-radius: 6px;
        margin-top: 12px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.2px;
        color: #505050;
        display: flex;
        flex-direction: column;
        gap: 5px;
        p {
            display: flex;
            justify-content: space-between;
            .discount {
                color: #FA3434;
            }
            .tax {
                color: #00B517;
            }
        }
        .bottom {
            border-top: 1px solid #E4E4E4;
            margin-top: 10px;
            padding: 20px 0;
            .total {
                span {
                    font-weight: 600;
                    &:last-child {
                        font-size: 20px;
                    }
                }
            }
            .button {
                margin-top: 30px;
                font-size: 18px;
                font-weight: 500;
            }
        }
        .footer {
            display: flex;
            flex-direction: row;
            align-items: center; 
            justify-content: center;
            gap: 5px;
            padding: 10px 0;
        }
    }
`;

export const ProductCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  height: 136px;
  font-family: inter;
  .image {
    min-height: 80px;
    min-width: 80px;
    max-height: 80px;
    max-width: 80px;
    padding: 5px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dee2e7;
    margin-right: 10px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
  }
  .left-side {
    display: flex;
    flex-direction: row;
  }
  .right-side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const ProductDetails = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
  }
`;

export const ProductDescr = styled.div`
  display: flex;
  flex-direction: column;
  height: 116px;
  justify-content: space-between;
  .text {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: #8B96A5;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-self: flex-end;
  }
`;
