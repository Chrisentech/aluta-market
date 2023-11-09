import styled from "styled-components";
import { AppColors, BreakPoints } from "../../Constants";

export const Container = styled.div<{ scrolled?: boolean; mode?: string }>`
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: ${(props: any) =>
    props.scrolled ? `0 2px 4px ${AppColors.brandGray}` : "none"};
  transition: background-color 0.3s, box-shadow 0.3s;
  z-index: 1000;
`;
export const Wrapper = styled.nav`
  display: flex;
  width: 90%;
  margin: 25px auto;
  align-items: center;
  justify-content: space-between;
  .logo {
    flex: 0.2;
  }
  @media (${BreakPoints.large}) {
    width: 90%;
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const SearchContainer = styled.form`
  border: 1px solid #bdc4cd;
  flex: 0.7;
  margin: 0 10px;
  border-radius: 6px;
  display: flex;
  input {
    border: none;
    outline: none;
    padding: 12px;
    width: 70%;
    border-radius: 6px;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    color: ${AppColors.brandGray} !important;
    &::placeholder {
      color: var(--gray-500, #8B96A5);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  select {
    background: transparent;
    outline: none;
    border: 0;
    border-left: 1px solid #bdc4cd;
    padding: 12px;
    cursor: pointer;
    width: 15%;
    padding-right: 15px;
      font-size: 12px;
    color: ${AppColors.brandGray} !important;
    // font-weight: 700;
    option{
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color:black !important;
    }
  }
  button {
    flex: 1;
    padding: 12px;
    background: var(--pr, linear-gradient(180deg, #ff7612 0%, #ff001f 100%));
    border: 0;
    border-radius: 0 6px 6px 0;
    outline: 0;
    color: #fff;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  // flex:0.2;
  min-width: 10%;
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  color: #bdc4cd;
  margin: 0 10px;
  position:relative;
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

export const Sidebar = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 70%;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: ${(props: any) =>
    props.show ? "translateX(0px)" : "translateX(-200vw)"};
  .dismiss {
    color: ${AppColors.brandOrange};
    position: absolute;
    right: 30px;
    top: 27px;
  }
  .title {
    background: ${AppColors.brandGray};
    padding: 20px;
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
    }
  }
`;

export const BlurredBackground = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props: any) => (props.show ? "auto" : "none")};
  transition: opacity 0.3s ease-in-out;
`;
