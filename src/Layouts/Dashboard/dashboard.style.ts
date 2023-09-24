import styled from "styled-components";
// import { AppColors } from "../../Shared/Constants";

export const Wrapper = styled.div`
  background: #f7fafc;
  display: flex;
  position: relative;
  min-height: 100vh;
  main {
    width: calc(100% - 250px);
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    padding: 30px;
    margin: 100px auto 30px auto;
    margin-left: 251.5px;
  }
`;

export const Sidebar = styled.section`
  position: fixed;
  height: 100vh;
  background: #fff;
  margin-top: 50px;
  width: 250px;
  padding-top: 60px;

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
export const SidebarMenu = styled.ul``;
export const SidebarMenuLinks = styled.li<{
  active?: boolean;
  hover?: boolean;
}>`
  border-radius: ${({ hover }) => (hover ? `0` : "6px")};
  padding: 10px 20px;
  margin: 15px 5px 20px 20px;
  position: relative;
  cursor: pointer;
  min-height: ${({ hover }) => (hover ? `100px` : "unset")};
  transition: 0.5s ease;
  background: ${(props) => (props.active ? `#00b51714` : "unset")};
  border-right: ${(props) => (props.active ? "5px solid #00B517" : "unset")};
  &:hover {
    button > div > span {
      color: #00b517 !important;
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
      props.active ? "#00B517 !important" : "#8b96a5 !important"};
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
      props.active ? "#00B517 !important" : "#8b96a5 !important"};
  }
  &:hover {
    border-right: 5px solid #00b517;
    background: #00b51714;
    a,
    svg {
      color: #00b517 !important;
    }
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

export const CustomLink = styled.div`
  position: absolute;
  bottom: 130px;
  width: 100%;
  border-top: 1px solid #bdc4cd;
  width: 80%;
  margin: 0 30px;
`;
