import React, { useState } from  'react';
import { DropdownContainer, OptionsContainer } from './FilterMenu.styles'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const brands: string[] = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
const categories: string[] = ['Mobile Accessories', 'Electronics', 'Smartphones', 'Modern Tech'];
const features: string[] = ['Metallic', 'Plastic', '8GB RAM', 'Super Power', 'Large Memory'];
const condition: string[] = ['Any', 'Refurbished', 'Fairly Used', 'New']

const Dropdown: React.FC<{ 
  category: string; 
  options: string[]; 
  checkbox?: boolean; 
  onOptionChange?: (category: string, selectedOptions: string[]) => void 
}> = ({ category, options, checkbox, onOptionChange }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const optionValue = event.target.value;
    
      if (selectedOptions.includes(optionValue)) {
        setSelectedOptions(selectedOptions.filter((option) => option !== optionValue));
      } else {
        setSelectedOptions([...selectedOptions, optionValue]);
      }

      if (onOptionChange) onOptionChange(category, selectedOptions);
    
    };
  
    return (
      <DropdownContainer>
        <div className="heading" onClick={toggleDropdown}>
          <span>{category}</span><span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        <OptionsContainer className='body' isOpen={isOpen}>
          {options.map((option) => (
            <div className='list' key={option}>
              {checkbox ? (
              <label className='option'>
                <input
                  type="checkbox"
                  id={option}
                  name={category}
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={handleOptionChange}
                />
                <span className="custom"></span>
                {option}
              </label>) : <p className="option">{option}</p>}
            </div>
          ))}
          <span className='see-all'>see all</span>
        </OptionsContainer>
      </DropdownContainer>
    );
};
  
const FilterMenu: React.FC<{onOptionChange?: (category: string, selectedOptions: string[]) => void}> = ({ onOptionChange }) => {
return (
    <>
        <Dropdown category='Category' options={categories} onOptionChange={onOptionChange}/>
        <Dropdown category='brands' options={brands} checkbox onOptionChange={onOptionChange}/>
        <Dropdown category='Features' options={features} checkbox onOptionChange={onOptionChange}/>
    </>
)
}

  export default FilterMenu;  