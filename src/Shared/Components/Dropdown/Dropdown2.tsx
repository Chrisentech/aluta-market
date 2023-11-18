import React, { ReactNode, useState } from 'react';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import styled from 'styled-components';

// Define the styled components
export const DropdownContainer = styled.button<{
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
  outline: none;
  border: none;
  cursor: pointer;
  min-height: 20px;
  color: #505050;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
 
  background: ${({ background }) =>
    background ? background + " !important" : "transparent !important"};
  transition: 0.6s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  svg {
    position: absolute;
    right: 10px;
    top: calc(50% - 4px)
    transition: 0.6s ease;
  }
`;

const OptionsContainer = styled.div`
  position: absolute;
  padding: 4px 0px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #DEE2E7);
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(80, 80, 80, 0.20);

  top: 110%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  overflow: hidden;
`;

const Option = styled.div<{ background?: string }>`
  box-sizing: border-box;
  padding: 8px 16px;
  text-align: left;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: ${({ background }) => background ? background : "#FFEDE8"};
  }
`;

export const PiCaretIcon = styled.div`
  margin-right: 8px;
  color: #505050;
`;


// Define the types for the props
interface DropdownProps {
  options: any;
  handleOptionEvent: (option: string) => void;
  background?: string;
  selectedOption: string | null;
  optionBackground?: string;
  padding?: string;
  width?: string;
  state?: boolean;
  margin?: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

// Define the Dropdown component
const Dropdown2: React.FC<DropdownProps> = ({ 
  options, 
  background,
  handleOptionEvent,
  selectedOption,
  padding,
  width,
  margin,
  optionBackground,
  disabled,
  className,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setIsOpen(false);
    handleOptionEvent(option)
  };

  return (
    <DropdownContainer 
      onClick={toggleDropdown}
      background={background}
      padding={padding}
      margin={margin}
      // onMouseOver={() => setIsOpen(state ? state : true && !disabled)}
      // onMouseOut={() => setIsOpen(state ? !state : !isOpen && !disabled)}
      width={width}
      className={className}
    >
        {selectedOption || children || 'Choose Option' }
  
      {isOpen ? (
          <PiCaretUpBold as={PiCaretIcon} />
        ) : (
          <PiCaretDownBold as={PiCaretIcon}  />
        )}
      {isOpen && (
        <OptionsContainer>
          {options.map((option: string) => (
            <Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown2;
