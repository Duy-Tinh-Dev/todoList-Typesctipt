import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames/bind";

import { addTodo } from "../../../../redux/slices/todoSlice";
import CheckBox from "../../../CheckBox";
import { toggleCompleteTodoAll } from "../../../../redux/slices/todoSlice";
import style from "./index.module.scss";
import ITodo from "../../../../model/Todo";

const cx = classNames.bind(style);
function Header() {
  const [valueInput, setValueInput] = useState<string>("");
  const dispatch = useDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const contentTask = valueInput.trim();
    if (!contentTask) {
      return;
    }
    const newTodo: ITodo = {
      id: uuidv4(),
      nameTask: contentTask,
      complete: false,
    };
    dispatch(addTodo(newTodo));
    setValueInput("");
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    const valueInput: string = event.target.value;
    if (!valueInput.trim()) {
      setValueInput("");
      return;
    }
    setValueInput(valueInput);
  };

  const toggleSelect = (isCheck: boolean): void => {
    dispatch(toggleCompleteTodoAll(isCheck));
  };

  return (
    <form className={cx("wrapper")} onSubmit={handleSubmit}>
      <CheckBox toggleSelect={toggleSelect} />
      <input
        type="text"
        className={cx("search")}
        placeholder="What needs to be done?"
        onChange={handleChangeValue}
        value={valueInput}
      />
    </form>
  );
}

export default Header;
