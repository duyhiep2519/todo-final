import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setEditTodo, toggleComplete } from "../../Action/todo";
import "./listTodo.css";
import { Tooltip } from "@assenti/rui-components";
import "@assenti/rui-components/css/index.css";

const Todo = (props) => {
  const { todo } = props;

  const dispatch = useDispatch();
  //handle delete
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  //handle toggle
  const handleToggle = (id, title, deadLine, category) => {
    dispatch(toggleComplete(id, title, deadLine, category));
  };
  //handle editTodo
  const handleSetEdit = (id, title, category, deadLine, isComplete, edit) => {
    dispatch(setEditTodo(id, title, category, deadLine, isComplete, edit));
  };

  return (
    <div className="container">
      <li
        className="table"
        key={todo.id}
        style={todo.isComplete ? { textDecoration: "line-through" } : {}}
      >
        <div style={{ color: "#e84118" }}>{todo.category}</div>

        <div className="title"> {todo.title}</div>

        <div className="deadline"> {todo.deadLine.toLocaleDateString()}</div>

        <div className="icon">
          <Tooltip className="tooltip" tooltip="Edit todo">
            <i
              className="fas fa-edit"
              onClick={() =>
                handleSetEdit(
                  todo.id,
                  todo.title,
                  todo.category,
                  todo.deadLine,
                  todo.isComplete,
                  todo.edit
                )
              }
            ></i>
          </Tooltip>
          <Tooltip className="tooltip" tooltip="Delete">
            <i
              className="fas fa-trash"
              onClick={() => handleDelete(todo.id)}
            ></i>
          </Tooltip>
          {todo.isComplete ? (
            <Tooltip className="tooltip" tooltip=" Completed!">
              {" "}
              <i className="fas fa-check"></i>
            </Tooltip>
          ) : (
            <Tooltip className="tooltip" tooltip="Completed?">
              {" "}
              <i
                className="fas fa-paperclip"
                onClick={() =>
                  handleToggle(
                    todo.id,
                    todo.title,
                    todo.deadLine,
                    todo.category
                  )
                }
              ></i>
            </Tooltip>
          )}
        </div>
      </li>
    </div>
  );
};
export default Todo;
