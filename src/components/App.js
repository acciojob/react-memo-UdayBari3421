import React from "react";
import Counter from "./Counter";
import Todo from "./Todo";
import Memo from "./Memo";
const App = () => {
  return (
    <div>
      <h1>React.useMemo</h1>
      <Todo />
      <Counter />
      <Memo />
    </div>
  );
};

export default App;
