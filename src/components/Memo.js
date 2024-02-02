import React, { useState } from "react";

const Memo = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  function submitHandle(e) {
    e.preventDefault();
    setData([...data, value]);
  }
  return (
    <div>
      <hr />
      <div>
        <h2>React.memo</h2>
      </div>
      <form onSubmit={submitHandle}>
        <input
          id="skill-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" id="skill-btn">
          Add Skill
        </button>
      </form>
      <ul>
        {data &&
          data.map((item, ind) => {
            return item && <li key={"key" + ind}>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default Memo;
