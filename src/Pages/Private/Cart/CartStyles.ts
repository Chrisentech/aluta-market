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
`;

export const Product = styled.div`
    box-sizing: border-box;
    width: 880px;
    border-radius: 6px;
    border: 1px solid #DEE2E7;
    background: #FFFFFF;
    padding: 20px;
    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: inter;
        font-weight: 500;
        padding-top: 20px;
        border-top: 1px solid #DEE2E7;
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
            }
        }
    }

    .checkout {
        height: 329px;
        padding: 10px;
        background: #fff;
        border: 1px solid #dee2e7;
        
    }
`;

export const ProductCard = styled.div`
  display: flex;
  .image {
    height: 70px;
    width: 70px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dee2e7;
  }
`;

export const ProductDetails = styled.div`

`;

export const ProductDescr = styled.div`

`;