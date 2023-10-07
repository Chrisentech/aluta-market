import styled from "styled-components";

export const DropdownWrapper = styled.button<{
  background?: string;
  padding?: string;
  offset?: string;
  margin?: string;
  width?: string;
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

  border: ${({ background }) =>
    background ? "0" : "1px solid #eff2f4 !important"};
  background: ${({ background }) =>
    background ? background + " !important" : "transparent !important"};
  transition: 0.6s ease;
  display: flex !important;
  justify-content: space-between;
  align-items: unset !important;
  svg {
    position: absolute;
    right: 10px;
    top: ${({ offset }) =>
      offset ? offset + " !important" : "20px !important"};
    transition: 0.6s ease;
  }
`;

export const DropdownSelected = styled.div`
  padding: 0 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DropdownOptions = styled.ul<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  z-index: 1000;
  border-radius: 6px;
`;

export const DropdownOption = styled.li`
  padding: 10px;
  cursor: pointer;
  border-top: 1px solid #eff2f4;
`;
export const PiCaretIcon = styled.div`
  margin-right: 8px;
`;
