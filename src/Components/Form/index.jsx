import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearTodo, editTodo } from "../../Action/todo";
import "./index.css";
import { Tooltip, Button } from "@assenti/rui-components";
import "@assenti/rui-components/css/index.css";

const Form = () => {
  const listTodo = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [deadLine, setDeadLine] = useState(null);
  const [category, setCategory] = useState("Business");
  const [edit, setEdit] = useState(null);

  //handle submit
  const handleSubmit = (e) => {
    if (!edit) {
      e.preventDefault();
      dispatch(addTodo(title, deadLine, category));
      setTitle("");
      setCategory("Business");
      setDeadLine(null);
    } else {
      e.preventDefault();
      dispatch(
        editTodo(edit.id, title, category, deadLine, edit.isComplete, edit.edit)
      );
      setEdit(null);
      setTitle("");
      setCategory("Business");
      setDeadLine(null);
    }
  };

  //handle onchange
  const handleOnchange = (e) => {
    setTitle(e.target.value);
  };
  //handle clear
  const handleClear = () => {
    dispatch(clearTodo());
  };
  //handle select
  const handleSelect = (e) => {
    setCategory(e.target.value);
  };
  //
  useEffect(() => {
    const tmp = listTodo.find((todo) => todo.edit === true);
    setEdit(tmp);
  }, [listTodo]);
  useEffect(() => {
    if (edit) {
      setTitle(edit.title);
      setCategory(edit.category);
      setDeadLine(edit.deadLine);
    } else {
      setTitle("");
      setCategory("Business");
      setDeadLine(null);
    }
  }, [edit]);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <Tooltip tooltip="Select category">
            <select onChange={handleSelect} className="category">
              <option>Business</option>
              <option>Family</option>
              <option>Work</option>
              <option>Personal</option>
            </select>
          </Tooltip>
        </div>
        <div>
          <Tooltip tooltip="Content">
            <input
              className="input-text"
              value={title}
              onChange={handleOnchange}
              placeholder="What you have to do?*"
              pattern="[\wZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{2,20}"
              title="Must be letters, numbers, underscores, and no special characters, 2 to 20 characters in length"
            />
          </Tooltip>
        </div>
        <div>
          <Tooltip tooltip="Deadline">
            <DatePicker
              className="picker"
              placeholderText="When?* (MM/dd/yyyy)"
              selected={deadLine}
              minDate={new Date()}
              onChange={(date) => setDeadLine(date)}
              dateFormat="MM/dd/yyyy"
            />
          </Tooltip>
        </div>
        <div className="required">
          <span
            className="required"
            style={{ color: "#e84118", fontFamily: "Arial" }}
          >
            *Required fields
          </span>
        </div>
        <div className="button">
          <Tooltip tooltip={edit ? "Update todo" : "Add todo"}>
            <Button
              size="medium"
              uppercase="true"
              light="true"
              outlined="false"
              className="btn btn-add"
              type="submit"
              disabled={!title || !deadLine}
              name={edit ? "UPDATE" : "ADD"}
            />
          </Tooltip>
          <Tooltip tooltip="Clear list">
            {" "}
            <Button
              className="btn btn-clear"
              size="medium"
              uppercase="true"
              light="true"
              outlined="false"
              type="button"
              onClick={handleClear}
              name="Clear"
            />
          </Tooltip>
        </div>
      </form>
    </div>
  );
};
export default Form;
