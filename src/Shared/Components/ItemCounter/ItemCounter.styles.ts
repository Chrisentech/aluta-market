import styled from 'styled-components';

export const CounterContainer = styled.div`
    box-sizing: border-box;
    height: 40px;
    width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    border: 1px solid #DEE2E7;
    border-radius: 6px;
    overflow: hidden;
    background: #FFFFFF;
    font-family: inter;
    font-size: 16px;
    font-weight: 500;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 70px;
        border-right: 1px solid #DEE2E7;
        border-left: 1px solid #DEE2E7;
    }
`;

export const Button = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    color: #505050;
    border: none;
    background: #FFFFFF;
`;