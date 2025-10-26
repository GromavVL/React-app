import { useState } from "react";
import React from "react";

function Practice() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const increment = () => {
    setCount(count + step);
  };
  const decrement = () => {
    setCount(count - step);
  };
  const handleChange = ({target: {value}}) => {
    setStep(+value);
  };
  return (
    <div>
      {count}
      <input type="number" value={step} onChange={handleChange} />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Practice;
