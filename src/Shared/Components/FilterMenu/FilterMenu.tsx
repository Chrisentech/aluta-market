import React, { useEffect, useState } from  'react';
import { DropdownContainer, FilterContainer, OptionsContainer } from './FilterMenu.styles'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { RangeSlider } from '..';
// import { useDispatch } from 'react-redux';
import useProducts from '../../../Features/products/productActions';

const brands: string[] = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
const categories: string[] = ['Mobile Accessories', 'Electronics', 'Smartphones', 'Modern Tech'];
const features: string[] = ['Metallic', 'Plastic', '8GB RAM', 'Super Power', 'Large Memory'];
// const condition: string[] = ['Any', 'Refurbished', 'Fairly Used', 'New']

const Dropdown: React.FC<{ 
  category: string; 
  options?: string[]; 
  type?: 'radio' | 'checkbox' | 'slider' | 'ratings' | 'default'; 
  onOptionChange?: (category: string, selectedOption: string) => void;
  filters?: {[key: string]: string[]}; 
}> = ({ category, options, type, onOptionChange, filters }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const optionValue = event.target.value;
      const category = event.target.name
    
      if (onOptionChange) onOptionChange(category, optionValue)
    };
  
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
                    checked={filters ? filters[category]?.includes(option) : false}
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

const FilterMenu: React.FC<{ onOptionChange?: (category: string, selectedOption: string) => void, filters?: {[key: string]: string[]} }> 
= ({ onOptionChange, filters }) => {
  const { getCategories } = useProducts();
  const category = getCategories()

  useEffect(() => {
    console.log(category)
  }, [category])
  
  return (
      <FilterContainer>
          <Dropdown category='category' options={categories} type="default" onOptionChange={onOptionChange} filters={filters}/>
          <Dropdown category='brands' options={brands} type="checkbox" onOptionChange={onOptionChange} filters={filters}/>
          <Dropdown category='features' options={features} type="checkbox" onOptionChange={onOptionChange} filters={filters}/>
          <Dropdown category='price Range' type='slider'/>
      </FilterContainer>
    )
}

export default FilterMenu;  