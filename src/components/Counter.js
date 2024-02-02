import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <div>
        <p>Count:{count}</p>
        <button id="incr-cnt" onClick={() => setCount(count + 1)}>
          {count > 0 ? count : "+"}
        </button>
      </div>
      <div>
        <h1>Expensive Calculation</h1>
        <p>1000000000</p>
        <hr />
      </div>
    </div>
  );
};

export default Counter;
