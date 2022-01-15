import { useContext } from 'react';
import { decrementCounter, incrementCounter } from '../../providers/CounterProvider/actions';
import { CounterContext } from '../../providers/CounterProvider/context';

export const CounterContextImplement = () => {
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  const handleIncrement = () => {
    incrementCounter(counterDispatch);
  };

  const handleDecrement = () => {
    decrementCounter(counterDispatch);
  };

  return (
    <div>
      <p>Counter: {counterState.counter}</p>
      <button onClick={handleIncrement}>Increment Counter</button>
      <button onClick={handleDecrement}>Decrement Counter</button>
    </div>
  );
};
