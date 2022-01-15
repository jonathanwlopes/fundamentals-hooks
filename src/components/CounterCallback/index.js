import P from 'prop-types';
import { useCallback, useMemo, useState } from 'react';

const Button = ({ incrementCounter }) => {
  console.log('Filho renderizou');
  return <button onClick={() => incrementCounter(10)}>+</button>;
};

Button.propTypes = {
  incrementCounter: P.func,
};

export const CounterCallback = () => {
  console.log('Pai renderizou');
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((counter) => counter + num);
  }, []);

  const btn = useMemo(() => {
    return <Button incrementCounter={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div>
      <div>{counter}</div>
      {btn}
    </div>
  );
};
