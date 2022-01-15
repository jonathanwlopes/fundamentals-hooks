import { useState } from 'react';

import './styles.css';

export const ReverseContainer = () => {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'container-light' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <div className={`container ${reverseClass}`}>
      <button onClick={handleClick}>Reverse Container</button>
    </div>
  );
};
