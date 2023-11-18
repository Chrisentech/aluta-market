import styled from "styled-components"
import { rectangle } from "../../../assets";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  background: #005ADE;
  border-radius: 8px; 
  padding-right: 45px;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 45px;

    font-family: inter;
    color: #FFF;
    width: 745px;
    background: url(${rectangle});
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;

    .large {
      
    }
    .small {
      font-size: 16px;
      font-weight: 400;
    }
  }
  .botton {
    justify-self: flex-end;
  }
`;
