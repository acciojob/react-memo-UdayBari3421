import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([<p>New Todo</p>]);
  return (
    <div>
      <h2>My todos</h2>
      <div>
        {todo &&
          todo.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
      </div>
      <button onClick={() => setTodo([...todo, <p>New Todo</p>])}>
        Add Todo
      </button>
      <hr />
    </div>
  );
};

export default Todo;
