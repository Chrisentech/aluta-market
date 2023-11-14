import React, { useState } from 'react';
import styled from 'styled-components';

// Define the styled components
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SelectButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 1;
`;

const Option = styled.div`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// Define the types for the props
interface DropdownProps {
  options: string[];
}

// Define the Dropdown component
const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <SelectButton onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
      </SelectButton>
      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
