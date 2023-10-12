import styled from "styled-components";
import { AppColors } from "../../Constants";

export const Container = styled.div`

  .label {
    display: flex;
    justify-content: center; 
    // margin-left: 20px;
    text-align:center;
    margin-bottom: -5px;font-family: Inter;
    font-size: 24px !important;
    font-style: normal;
    font-weight: 600;
  }
  .title {
    text-align: center;
    color: var(--dark, #1c1c1c);
    font-feature-settings: "clig" off, "liga" off;
    /* Title-H3 */
    font-family: Inter;
    font-size: 24px;
    gap: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.2px;
    margin: 20px 0 0 0;
  }
  .info {
    padding: 10px;
    border-radius: 6px;
    margin: 0 auto;
    text-align: center;
    width: 60%;
    margin-bottom: 30px;
  }
  .gray {
    background: ${AppColors.brandGray};
    width: 80%;
  }
  .addNewBtn {
    margin: unset;
    float: right;
    width: 100px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  .drpDwn {
    margin: 10px 20px;
  }
 
  }
  .input {
    padding:  15px;
    width: 86%;
      border-radius: 6px;
     display:flex;
     align-items:center;
     justify-content:center
   } 
   .lsxaj2 { 
      width: 86%;
    margin: 40px aut  o;
   } 
     .popup {
    .card {  
        padding-bottom: 40px;
        width:300px
    }  
 `;

export const Input = styled.input`
  height: 50px;
  width: 50px;
  border-radius: 7px;
  outline: none;
  // border: 1px;
  text-align: center;
  font-size: 42px;
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
`;


export const FormControl = styled.div`
  width: 100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
  position: relative;
  div {
    display: flex;
    gap: 6px;
    margin: 30px 0 0 0;
  }
  svg {
    position: absolute;
    right: 20px;
    top: 56px;
    cursor: pointer;
    transition: 0.5s ease;
  }
  .check {
    margin: -10px 0;
  }
  .error {
    color: red;
    margin-bottom: 5px;
  }
  img{
    margin-bottom:10px
  }
`;

export const ResendButton = styled.button`
color: #002;
border:0;
outline:0;
cursor:pointer;
font-size:14px;
background:transparent;
margin:10px 0;
float:right

`