import { ChangeEvent, FormEvent, useState } from "react";
import classNames from "classnames/bind";

import CheckBox from "../../../CheckBox";

import style from "./index.module.scss";
const cx = classNames.bind(style);
type Props = {
  selectAll: boolean;
  addTask(task: string): void;
  toggleSelect(isSelectAll: boolean): void;
};
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
    let contentTodo: string = event.target.value;
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
