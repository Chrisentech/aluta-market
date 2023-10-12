import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

export const FormContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 528px;
    height: 719px;
    background: white;
    border-radius: 24px;
    padding-top: 70px;
    font-family: inter;

    h2 {
        color: #000;
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        letter-spacing: -0.2px;
        margin-top: 10px;
        margin-bottom: 35px;
    }
    form {
        width: 399px;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        label {
            font-weight: 600;
            color: #505050;
        }
    }
`;

export const InputField = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding: 20px;
    margin-top: 4px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    border: none;
    outline: none;
    background: #F7FAFC;
`;

export const SubmitButton = styled.button`
    font-family: inter;
    font-weight: 700;
    font-size: 16px;

    background: #00B517;
    color: #fff;
    margin-top: 12px;
    border: none;
    border-radius: 10px;
    height: 62px;
    cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 48px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const FormImage = styled.div`    
    box-sizing: border-box;
    background: #00B517;
    height: 80px;
    width: 80px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    img {
        width: 48px;
        height: 48px;
    }
`;