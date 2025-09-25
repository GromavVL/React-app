import React, { useState } from "react";

function CounterH() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  };
  const decrement = () => {
    setCount(count - step);
  };

  const handlerStepChange = ({ target: { value } }) => {
    setStep(Number(value))
  };
  return (
    <div>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="number" value={step} onChange={handlerStepChange} />
    </div>
  );
}

export default CounterH;
