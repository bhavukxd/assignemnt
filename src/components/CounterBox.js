import React, { useState } from 'react';

function CounterBox() {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <h2>Counter</h2>
      <span>{count}</span>
      <div className="counter-controls">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterBox;
