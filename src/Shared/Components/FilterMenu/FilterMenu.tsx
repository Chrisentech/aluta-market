import React, { useState } from  'react';
import { DropdownContainer, OptionsContainer } from './FilterMenu.styles'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const brands: string[] = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
const categories: string[] = ['Mobile Accessories', 'Electronics', 'Smartphones', 'Modern Tech'];
const features: string[] = ['Metallic', 'Plastic', '8GB RAM', 'Super Power', 'Large Memory'];
const condition: string[] = ['Any', 'Refurbished', 'Fairly Used', 'New']

const Dropdown: React.FC<{ category: string; options: string[]; radio?: boolean }> = ({ category, options, radio }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [selectedOption, setSelectedOption] = useState<string>('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
      setIsOpen(false); 
    };
  
    return (
      <DropdownContainer>
        <div className="heading" onClick={toggleDropdown}>
          {category} <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        <OptionsContainer className='body' isOpen={isOpen}>
          {options.map((option) => (
            <div className='list' key={option}>
              {radio ? (<input
                type="radio"
                id={option}
                name={category}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />) : <p>{option}</p>}
            </div>
          ))}
          <p>see all</p>
        </OptionsContainer>
      </DropdownContainer>
    );
};
  
const FilterMenu: React.FC = () => {
return (
    <>
        <Dropdown category='Category' options={categories} />
        <Dropdown category='brands' options={brands} />
        <Dropdown category='Features' options={features} />
    </>
)
}

  export default FilterMenu;  