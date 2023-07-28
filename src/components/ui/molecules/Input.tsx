import React from 'react';

interface IncrementDecrementInputProps {
  count: number;
  setCount: (count: number) => void;
  min: number;
  max: number;
  step: number;
}

const IncrementDecrementInput2: React.FC<IncrementDecrementInputProps> = ({
  count,
  setCount,
  min,
  max,
  step,
}) => {
  const handleIncrement = () => {
    if (count + step <= max) {
      setCount(count + step);
    }
  };

  const handleDecrement = () => {
    if (count - step >= min) {
      setCount(count - step);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', border: "1px solid #eaeaea", width: "25%" , justifyContent: "center", borderRadius: 12}}>
      <button onClick={handleDecrement} disabled={count <= min} className='btn'>
        -
      </button>
      <input
        value={count}
        min={min}
        max={max}
        step={step}
        onChange={(e) => setCount(parseInt(e.target.value))}
        style={{ textAlign: 'center', width: '50px', border: "none" }}
      />
      <button onClick={handleIncrement} disabled={count >= max} className='btn'>
        +
      </button>
    </div>
  );
};

export default IncrementDecrementInput2;
