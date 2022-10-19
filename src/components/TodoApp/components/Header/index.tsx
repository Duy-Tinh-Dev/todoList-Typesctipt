import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { ITodo } from "../../../Interface";
import style from "./Header.module.scss";
import CheckBox from "../../../CheckBox";
import { FC, ChangeEvent, FormEvent, useState } from "react";
const cx = classNames.bind(style);
interface Props {
  selectAll: boolean;
  addTask(task: string): void;
  toggleSelect(isSelectAll: boolean): void;
}
function Header({ addTask, toggleSelect, selectAll }: Props) {
  const [valueInput, setValueInput] = useState<string>("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const trimValueInput = valueInput.trim();
    if (trimValueInput) {
      addTask(trimValueInput);
      setValueInput("");
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let contentTodo = event.target.value;
    setValueInput(contentTodo);
  };
  return (
    <form className={cx("wrapper")} onSubmit={handleSubmit}>
      <CheckBox toggleSelect={toggleSelect} checked={selectAll} />
      <input
        type="text"
        className={cx("search")}
        placeholder="What needs to be done?"
        onChange={handleChange}
        value={valueInput}
      />
    </form>
  );
}

export default Header;
