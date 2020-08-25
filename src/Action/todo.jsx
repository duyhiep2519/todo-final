import { v4 as uuid } from "uuid";
export const addTodo = (title, deadLine, category) => {
  return {
    type: "ADD",
    id: uuid(),
    category: category,
    title: title,
    deadLine: deadLine,
    isComplete: false,
    edit: false,
  };
};
export const clearTodo = () => {
  return {
    type: "CLEAR",
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE",
    id: id,
  };
};

export const toggleComplete = (id, title, deadLine, category) => {
  return {
    type: "TOGGLE_COMPLETE",
    id: id,
    title: title,
    category: category,
    deadLine: deadLine,
  };
};
export const setEditTodo = (
  id,
  title,
  category,
  deadLine,
  isComplete,
  edit
) => {
  return {
    type: "SET_EDIT_TODO",
    id: id,
    title: title,
    category: category,
    deadLine: deadLine,
    isComplete: isComplete,
    edit: edit,
  };
};
export const editTodo = (id, title, category, deadLine, isComplete, edit) => {
  return {
    type: "EDIT_TODO",
    id: id,
    title: title,
    category: category,
    deadLine: deadLine,
    isComplete: isComplete,
    edit: !edit,
  };
};
