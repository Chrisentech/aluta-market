import React, { useEffect, useState } from  'react';
import { DropdownContainer, FilterContainer, OptionsContainer } from './FilterMenu.styles'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RangeSlider } from '..';

const brands: string[] = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
const categories: string[] = ['Mobile Accessories', 'Electronics', 'Smartphones', 'Modern Tech'];
const features: string[] = ['Metallic', 'Plastic', '8GB RAM', 'Super Power', 'Large Memory'];
const condition: string[] = ['Any', 'Refurbished', 'Fairly Used', 'New']

const Dropdown: React.FC<{ 
  category: string; 
  options?: string[]; 
  type?: 'radio' | 'checkbox' | 'slider' | 'ratings' | 'default'; 
  onOptionChange?: (category: string, selectedOptions: string[]) => void 
}> = ({ category, options, type, onOptionChange }) => {
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
    };

    useEffect(() => {
      if (onOptionChange) onOptionChange(category, selectedOptions);
    }, [selectedOptions, onOptionChange])
  
    return (
      <DropdownContainer>
        <div className="heading" onClick={toggleDropdown}>
          <span>{category}</span><span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        <OptionsContainer className='body' isOpen={isOpen}>
          {(type !== 'slider') ? 
            (options?.map((option) => (
              <div className='list' key={option}>
                {type !== 'default'  ? (
                <label className='option'>
                  <input
                    type={type}
                    id={option}
                    name={category}
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={handleOptionChange}
                  />
                  <span className="custom"></span>
                  {option}
                </label>) : <p className="option">{option}</p>}
              </div>))) 
             : (<RangeSlider />)}
             {(type !== 'slider') && (<span className="see-all">See all</span>)}
        </OptionsContainer>
      </DropdownContainer>
    );
};


const FilterMenu: React.FC<{onOptionChange?: (category: string, selectedOptions: string[]) => void}> = ({ onOptionChange }) => {
  return (
      <FilterContainer>
          <Dropdown category='Category' options={categories} type="default" onOptionChange={onOptionChange}/>
          <Dropdown category='brands' options={brands} type="checkbox" onOptionChange={onOptionChange}/>
          <Dropdown category='Features' options={features} type="checkbox" onOptionChange={onOptionChange}/>
          <Dropdown category='Price Range' type='slider'/>
      </FilterContainer>
    )
}

export default FilterMenu;  