import React, { useState } from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";
import "./View.css";

const View = () => {
  const list = useSelector((state) => state);
  const [resView, setResView] = useState(list.todo);
  const today = new Date();

  //show upcoming
  const showUpcoming = () => {
    const res = list.todo.filter(
      (todo) => todo.deadLine.getDate() - today.getDate() <= 1
    );
    setResView(res);
  };

  //show All
  const showAll = () => {
    setResView(list.todo);
  };
  //show showActive
  const showActive = () => {
    const res = list.todo.filter((todo) => todo.isComplete === false);
    setResView(res);
  };
  //showCompleted
  const showCompleted = () => {
    const res = list.todo.filter((todo) => todo.isComplete === true);
    setResView(res);
  };

  return (
    <div className="view">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Title</th>
              <th scope="col">DeadLine</th>
            </tr>
          </thead>
          <tbody>
            {resView.map((todo) => (
              <Todo todo={todo} />
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <span>Show : </span>
        <button className="btn-view" type="button" onClick={showAll}>
          All
        </button>
        <button className="btn-view" type="button" onClick={showUpcoming}>
          Upcoming
        </button>
        <button className="btn-view" type="button" onClick={showActive}>
          Active
        </button>
        <button className="btn-view" type="button" onClick={showCompleted}>
          Completed
        </button>
      </div>
    </div>
  );
};
export default View;
