import styled from "styled-components";
import { AppColors } from "../../Shared/Constants";

export const Wrapper = styled.div<{ loading: boolean }>`
  background: #f7fafc;
  display: flex;
  position: relative;

  main {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px;
  }
`;

export const Sidebar = styled.section`
  postion: fixed;
  height: calc(100vh - 160px);
  background: #fff;
  margin-top: 3px;
  width: 280px;
  padding-top: 60px;
`;
export const SidebarMenu = styled.ul``;
export const SidebarMenuLinks = styled.li<{ active?: boolean }>`
  border-radius: 6px;
  padding: 10px 20px;
  margin: 20px 5px 20px 20px;
  transition: 0.5s ease;

  background: ${(props) => (props.active ? `${AppColors.brandPink}` : "unset")};
  border-right: ${(props) => (props.active ? "5px solid #FF001F" : "unset")};
  a {
    transition: 0.5s ease;
    display: flex;
    gap: 10px;
    align-items: center;
    color: ${(props) =>
      props.active ? "#FF001F !important" : "#8b96a5 !important"};
  }
  svg {
    transition: 0.5s ease;
    font-size: 20px;
    color: ${(props) =>
      props.active ? "#FF001F !important" : "#8b96a5 !important"};
  }
  &:hover {
    border-right: 5px solid #ff001f;
    background: ${AppColors.brandPink};
    a,
    svg {
      color: #ff001f !important;
    }
  }
`;
