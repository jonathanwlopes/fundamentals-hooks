import { useEffect, useState } from 'react';

const pClick = () => {
  console.log('p clicado');
};

export const CounterEffect = () => {
  const [counter, setCounter] = useState(0);

  // Executa todas as vezes que o component for atualizado
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });

  // Executa apenas uma vez
  useEffect(() => {
    console.log('ComponentDidMount');
    document.querySelector('p').addEventListener('click', pClick);

    // Realizar a limpeza de componentes que executam apenas uma vez, retornar função. (componenteWillAmount)
    return () => {
      document.querySelector('p').removeEventListener('click', pClick);
    };
  }, []);

  // Executa toda vez que a dependência mudar.
  useEffect(() => {
    console.log(`Contador mudou para ${counter}`);
  }, [counter]);

  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
};
