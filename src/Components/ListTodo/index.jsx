import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./listTodo.css";
import Todo from "./todo";
import { Tooltip } from "@assenti/rui-components";
import "@assenti/rui-components/css/index.css";
const List = (props) => {
  const list = useSelector((state) => state);
  const [searchInput, setSearchInput] = useState("");

  const handleOnchangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  const input = searchInput.toLowerCase();
  const resSearch = list.todo.filter(
    (todo) =>
      (todo.title && todo.title.toLowerCase().includes(input)) ||
      (todo.category && todo.category.toLowerCase().includes(input))
  );

  return (
    <div className="list">
      <div>
        <Tooltip tooltip="Search todo">
          {" "}
          <input
            className="input search"
            type="text"
            placeholder="Search...."
            value={searchInput}
            onChange={handleOnchangeSearchInput}
          />{" "}
        </Tooltip>
      </div>
      <nav>
        {" "}
        <ul className="table">
          {resSearch.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default List;
