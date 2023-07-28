import React, { useState } from 'react';

interface IncrementDecrementInputProps {
    count?: number;
    setCount: (count: number) => void;
    min: number;
    max: number;
    step: number;
    defaultValue?: number;
  }
  

  const IncrementDecrementInput: React.FC<IncrementDecrementInputProps> = ({
    count,
    setCount,
    min,
    max,
    step,
    defaultValue,
  }) => {
    // If defaultValue is provided, use it as the initial value
    const [inputValue, setInputValue] = useState(defaultValue || count || min);
  
    const handleIncrement = () => {
      if (inputValue + step <= max) {
        setInputValue((prevValue) => prevValue + step);
      }
    };
  
    const handleDecrement = () => {
      if (inputValue - step >= min) {
        setInputValue((prevValue) => prevValue - step);
      }
    };
  
    // Handle input value changes and update the count in the parent component
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value);
      if (!isNaN(newValue) && newValue >= min && newValue <= max) {
        setInputValue(newValue);
        setCount(newValue);
      }
    };
  
    return (
      <div style={{ display: 'flex', alignItems: 'center', border: "1px solid #eaeaea", width: "25%", justifyContent: "center", borderRadius: 12 }}>
        <button onClick={handleDecrement} disabled={inputValue <= min} className='btn'>
          -
        </button>
        <input
          value={inputValue}
          min={min}
          max={max}
          step={step}
          onChange={handleInputChange}
          style={{ textAlign: 'center', width: '50px', border: "none" }}
        />
        <button onClick={handleIncrement} disabled={inputValue >= max} className='btn'>
          +
        </button>
      </div>
    );
  };
  
export default IncrementDecrementInput;