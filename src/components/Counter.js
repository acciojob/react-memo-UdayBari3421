import React, { useState } from "react";

const Counter = () => {
  const [data, setData] = useState(0);
  return (
    <div className="counter">
      <div>
        <p>Count:{data}</p>
        <button id="incr-cnt" onClick={() => setData(data + 1)}>
          +
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
