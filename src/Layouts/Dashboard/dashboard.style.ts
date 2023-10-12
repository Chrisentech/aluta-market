import styled from "styled-components";
import { StringLiteral } from "typescript";
// import { AppColors } from "../../Shared/Constants";

export const Wrapper = styled.div`
  background: #f7fafc;
  display: flex;
  position: relative;
  min-height: 100vh;
  main {
    box-sizing: border-box;
    width: calc(100% - 295px);
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    padding: 30px;
    margin: 100px auto 30px auto;
    margin-left: 295.5px;
  }
`;

export const Sidebar = styled.section`
  box-sizing: border-box;
  position: fixed;
  height: 100vh;
  background: #fff;
  margin-top: 50px;
  width: 295px;
  padding-top: 60px;

  .store-title {
    font-family: inter;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.32px;
    font-size: 16px;
    display: inline-flex;
  }
  .avatar {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    color: var(--white, #fff) !important;
    font-family: Inter !important;
    font-size: 24px !important;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 125% */
    letter-spacing: -0.48px;
    justify-content: center;
    align-items: center;
    background: var(
      --primary-gradient,
      linear-gradient(180deg, #ff7612 0%, #ff001f 100%)
    );
    display: inline-flex;
  }
  // top:180px;
`;
export const SidebarMenu = styled.ul`
  width: 270px;
`;
export const SidebarMenuLinks = styled.li<{
  active?: boolean;
  hover?: boolean;
  background?: string;
  color?: string;
}>`
  box-sizing: border-box;
  width: 255px;
  border-radius: ${({ hover }) => (hover ? `0` : "6px")};
  padding: 10px 20px;
  margin: 15px 5px 20px 20px;
  position: relative;
  cursor: pointer;
  font-family: inter;
  line-height: 30px;
  letter-spacing: -0.32px;
  font-weight: ${({ active }) => ( active ? "700" : "400")};
  min-height: ${({ hover }) => (hover ? `100px` : "unset")};
  transition: 0.5s ease;
  background: ${({ active, color }) => ( active ? color + '14' : "unset")};
  // border-right: ${({active, color }) => ( active ? "5px solid " + color : "unset")};
  &:hover {
    button > div > span {
      color: #505050 !important;
    }
  }
  a,
  button > div > span {
    transition: 0.5s ease;
    display: flex;
    gap: 10px;
    align-items: center;
    font-family: Inter !important;
    font-size: 16px !important;
    font-style: normal;
    color: ${(props) =>
      props.active ? "#505050 !important" : "#8b96a5 !important"};
    ul {
      text-align: initial;
      border: none;
      background: transparent;
      color: #8b96a5;
    }
  }
  svg {
    transition: 0.5s ease;
    font-size: 20px;
    color: ${(props) =>
      props.active ? "#505050 !important" : "#8b96a5 !important"};
  }
  &:hover {
    // border-right: ${({ color }) => ( color ? "5px solid " + color : "unset")};
    background: ${({ color }) => ( color ? color + '14' : "unset")};
    a,
    svg {
      color: #505050 !important;
    }
  }
  &::after {
    content: '';
    border-radius: 3px;
    width: 5px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -10px;
    background: ${({ active, color }) => ( active ? color : "unset")};
  }
`;

export const Select = styled.select`
  padding: 20px;
  width: calc(100% - 40px);
  margin: 20px 5px 20px 20px;
  border-radius: 6px;
  outline: 0;
  cursor: pointer;
  border: 0;
  background: #eff2f4;
  option {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    background: #fff;
    height: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
    letter-spacing: -0.32px;
  }
`;

export const MenuTop = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 295px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #EFF2F4;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  &:hover {
    &::-webkit-scrollbar {
      display: block;
    }
  }

  height: calc(100vh - 435px);
`;

export const CustomLink = styled.div`
  position: absolute;
  background: #fff;
  bottom: 0px;
  padding-bottom: 130px;
  width: 100%;
  // border-top: 1px solid #bdc4cd;
  // margin: 0 30px;
  z-index: 2;

  hr {
    width: 70%;
    margin: 0 auto;
  }
`;
