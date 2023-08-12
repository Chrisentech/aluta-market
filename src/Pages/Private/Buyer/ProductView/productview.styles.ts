import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #F7FAFC;
  overflow-x: hidden;
  text-align: justify;
  h2 {
    color: var(--dark, #1c1c1c);
    font-feature-settings: "clig" off, "liga" off;
    /* Title-H3 */
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.2px;
  }
`
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
  padding: 0px;
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
// `;

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


