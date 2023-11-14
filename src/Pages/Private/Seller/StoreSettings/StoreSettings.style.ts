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

  .store-info {
    box-sizing: border-box;
    display: flex; 
    flex-direction: row;
    position: relative;
    padding-top: 25px;

    .store-name {
      margin-left: 100px;
      font-family: Inter;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.2px;
    }
    .button {
      position: absolute;
      right: 17px;
    }
  }
`;

export const BottomPanel = styled.div`
  width: 95%;
  height: calc(100% - 404px);
  border-top: solid 1px #EFF2F4;
  margin: auto;
  position: relative;

  .buttons {
    display: flex;
    flex-direction: row; 
    gap: 8px;
    position: absolute;
    bottom: 25px;
    right: 0;
  }
`;

export const BackgroundImg = styled.div<{ img?: string }>`
  height: 300px;
  width: 100%;
  background: ${({ img }) => img ? img : "#DEE2E7"};
  position: relative;
`;

export const ProfileImg = styled.div`
    position: relative;
    border: solid 5px #fff;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: #EFF2F4;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    top: -135px;
    left: 70px;
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

export const UploadImg = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  padding: 0;
  height: 40.3px;
  border-radius: 6px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: translateY(-1px);
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 10px;
`;

export const TabOption = styled.div<{ active?: boolean }>`
    width: 120px;
    height: 48px;
    padding: 13px 0;
    border-bottom: ${({ active }) => (active) ? "#FF7612 solid 2px" : "#DEE2E7 solid 2px"};
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({active}) => active ? "#FF7612" : "#8B96A5"};
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    z-index: 4;

    cursor: pointer;
    // transition: 0.3s ease;

    &:hover {
      color:${({active}) => active ? "#FF7612" : "#505050"};
      border-bottom: ${({ active }) => active ? "#FF7612 solid 2px" : "none"};
    }
`;

export const Cardbox = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 200px;


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

export const StoreDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 45px;
  margin-bottom: 200px;

  label {
    color: #505050;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; 
    letter-spacing: -0.2px;
  }

  .desc-input {
    height: 80px;
    width: 400px;
    border: none;
    outline: none;
    background: #F7FAFC;
  }
`;

export const ContactDetails = styled.div`
  .form {
    width: 860px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 20px;
    margin-top: 45px;
    margin-bottom: 200px;

    .bracket {
      font-size: 12px;
    }
    
    label {
      color: #505050;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      line-height: 32px; 
      letter-spacing: -0.2px;
    
      min-width: calc(50% - 60px);
    }
  }
`;

export const InputField = styled.input`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 20px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 10px;
  border: none;
  outline: none;
  background: #F7FAFC;
`;