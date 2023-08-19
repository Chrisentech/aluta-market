import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #F7FAFC;
  overflow-x: hidden;
  text-align: justify;
  h2 {
    color: var(--dark, #1c1c1c);
    font-feature-settings: "clig" off, "liga" off;
    /* Title-H3 */
    
  }
`
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  color: #bdc4cd;
  margin: 0 10px;
  cursor: pointer;
  svg {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    font-size: 20px;
  }
  label {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  &:hover {
    svg,
    label {
      color: #ff001f !important;
    }
  }
`;
export const NavBar = styled.div`
  // display: flex;
  gap: 20px;
  background-color: #fff;
  
  .navbar ul{
    list-style-type: none;
    align-items: center;
    overflow: hidden;
    border-width: thin 0px thin 0px;
    border-style: solid;
    border-color: #737373;
    margin: 15px auto;
    padding: 20px;
    

    li {
      font-style: normal;
      font-size: 12px;
      font-weight: 500;
      display: inline;
    }

    li a{
      padding: 10px;
    }

    li a:hover{
      color: #FF4C16;
    }
  }
`
export const Section = styled.div`
  margin: auto;
  width: 80%;
  padding: 10px;
  // justify-content: center;
`
export const NavBar2 = styled.div`
  display: flex;
  align-items: center;
  color: #4d4d4d;

  .navbar2 ul{
    list-style-type: none;
    // align-items: center;
    // justify-content: space-between;
    overflow: hidden;
    margin: 0;
    padding: 0;
    
    li {
      font-style: normal;
      font-size: 12px;
      font-weight: 500;
      display: inline;
    }

    li a{
      padding: 0px 5px;
    }

    li a:hover{
      color: #FF4C16;
    }
`
export const GridItem = styled.div<{ background?: string }>`
  display: flex;
  gap: 20px;
  align-items: center;
  height: 100%;
  position: relative;
  background-color: #fff;

  .productImage{
    // float: left;
    width: 35%;
    border-style: solid;
    border-width: 1px;
    border-color: #999999;
    border-radius: 5px;
    padding: 15px;    
  }

  .productCheck{
    margin: 20px;
    // float: left;
    width: 40%;

    div .desc{
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
      letter-spacing: -0.2px;
    }

    .productPrice{
      background-color: #fff0df;
      padding: 10px 15px;
      margin: 15px 0;
      
      h1{
        font-size: 40px;
        color: #fa3434;
      }
      p{
        font-size: 20px;
        color: #999999;
      }
    }
    button {
      flex: 1;
      padding: 3% 15%;
      border-radius: 6px;
      cursor: pointer;
      font-size:15px;
    }
    #button1{
      background: var(--pr, linear-gradient(180deg, #ff7612 0%, #ff001f 100%));
      color: #fff;
      outline: 0;
      border: 0;
    }

    #button2{
      background: #fff;
      color: var(--pr, linear-gradient(180deg, #ff7612 0%, #ff001f 100%));
      outline: 1;
      border-style: solid;
      border-width: 1px;
      border-color: #999999;
      float: right;
    }
  }

  .productInfo{
    // float: right;
    width: 25%;
    border-style: solid;
    border-width: 1px;
    border-color: #999999;
    border-radius: 5px;
    padding: 10px;  
    align-items:center;

    div .sellerIcon{
      float:left;
      vertical-align: middle;
      line-height: 20px;
      background-color: #c6f3f1;
      padding: 10px;
      margin: 0 10px;
    }

    div .sellerDesc{
      padding: 10px 0;

      h3{
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px; /* 133.333% */
        letter-spacing: -0.2px;
      }
    }
  }





//   .check {
//     display: flex;
//     justify-content: space-between;
//     display: flex;
//     margin: 30px 0;
//     align-items: center;
//     color: var(--green, #00b517);
//     font-family: Inter;
//     font-size: 14px;
//     font-style: normal;
//     // font-weight: 700;
//     line-height: 16px; /* 114.286% */
//     letter-spacing: -0.28px;
 
//   }
// `

export const Main = styled.div`
  .productDesc{
    align-items: center;
    height: 100%;
    justify-content: center;
    color: var(--dark, #1c1c1c);
    font-feature-settings: "clig" off, "liga" off;

    span{
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
      letter-spacing: -0.2px;
    }

  }

`


