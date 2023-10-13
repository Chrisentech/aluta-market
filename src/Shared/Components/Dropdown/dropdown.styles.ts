import styled from "styled-components";

export const DropdownWrapper = styled.button<{
  background?: string;
  padding?: string;
  offset?: string;
  margin?: string;
  width?: string;
  type?: string;
}>`
  position: relative;
  padding: ${({ padding }) => (padding ? padding : "10px 0px")};
  margin: ${({ margin }) => (margin ? margin : "20px 5px 20px 20px")};
  width: ${({ width }) => (width ? width : "calc(100% - 40px)")};
  border-radius: 6px;
  outline: 0;
  cursor: pointer;
  min-height: 20px;
  color: #002 !important;
  display: flex;
  flex-direction: column;

  border: ${({ type }) =>
    type === "dropdown_one" ? "1px solid #eff2f4 !important" : "0" };
  background: ${({ background }) =>
    background ? background + " !important" : "transparent !important"};
  transition: 0.6s ease;
  display: flex !important;
  justify-content: ${({ type }) => (type === 'dripdown_one' ? 'center !important' : 'space-between !important')};
  align-items: center !important;
  svg {
    position: absolute;
    right: 10px;
    top: ${({ offset }) =>
      offset ? offset + " !important" : "20px !important"};
    transition: 0.6s ease;
  }
  &:hover {
    background: ${({ type }) => type === "dropdown_one" ? "#fff !important" : "transparent !important"};
    box-shadow: ${({ type }) => type === "dropdown_one" ? '2px -1px 8px #EFF2F4, -2px -1px 8px #EFF2F4 !important' : 'unset !important'};
  }
`;

export const DropdownSelected = styled.div<{ padding?: string }>`
  padding: ${({ padding }) => (padding ? "0" + padding + "px" : "0 10px")};
  cursor: pointer;
  min-width: 100%;
`;

export const DropdownOptions = styled.ul<{ open: boolean, type?: string }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  position: ${({ type }) => (type === "dropdown_one" ? "absolute" : "relative")};
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ type }) =>
  type === "dropdown_one" ? '#fff' : 'transparent'};
  border: ${({ type }) =>
  type === "dropdown_one" ? '1px solid #EFF2F4' : 'none'};
  border-top: none;
  z-index: 1000;
  border-radius: 6px;
  box-shadow: ${({ type }) =>
  type === "dropdown_one" ? '2px 3px 5px #EFF2F4, -2px 3px 5px #EFF2F4' : 'unset'};
`;

export const DropdownOption = styled.li<{ type?: string }>`
  padding: 10px;
  cursor: pointer;
  // height: 44px;
  line-height: ${({ type }) =>
  type === "dropdown_one" ? '44px' : 'unset' };
  border-top: ${({ type }) =>
  type === "dropdown_one" ? '1px solid #eff2f4' : 'none' };

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  color: ${({ type }) =>
  type === "dropdown_one" ? "#000" : "#8B96A5"};
  display: flex;
  padding-left: 35px;
  justify-content: flex-start;

  &:hover {
    color: ${({ type }) =>
    type === "dropdown_one" ? 'unset' : '#000'};
  }
`;
export const PiCaretIcon = styled.div`
  margin-right: 8px;
`;
