import { useState } from 'react';

export const CounterState = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    // prevCounter - Garantir que o valor retornado é o atual.
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    if (counter <= 0) return;
    setCounter((counter) => counter - 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
