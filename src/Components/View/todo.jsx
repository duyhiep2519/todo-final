import React from "react";
import "./View.css";

const Todo = (props) => {
  const { todo } = props;

  return (
    <tr>
      <td>{todo.category}</td>
      <td>{todo.title}</td>
      <td>{todo.deadLine.toLocaleDateString()}</td>
    </tr>
  );
};
export default Todo;
