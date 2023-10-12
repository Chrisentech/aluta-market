import React, { useState } from 'react';
import { Button, CounterContainer } from './ItemCounter.styles';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface ItemCounterProps {
    initialValue: number;
}
  
const ItemCounter: React.FC<ItemCounterProps> = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue);
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
  
    return (
      <CounterContainer>
        <Button onClick={handleDecrement}><AiOutlineMinus /></Button>
        <span>{count}</span>
        <Button onClick={handleIncrement}><AiOutlinePlus /></Button>
      </CounterContainer>
    );
};

export default ItemCounter;