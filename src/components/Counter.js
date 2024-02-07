import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <div>
        <p id="incr-btn">Count:{count + 1}</p>
        <button id="incr-cnt" onClick={() => setCount(count + 1)}>
          {count === 0 ? count + 1 : count + 1}
        </button>
      </div>
      <div>
        <h1>Expensive Calculation</h1>
        <p>1000000000 </p>
        <hr />
      </div>
    </div>
  );
};

export default Counter;
