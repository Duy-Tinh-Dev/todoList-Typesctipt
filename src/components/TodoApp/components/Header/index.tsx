import classNames from "classnames/bind";
import style from "./Header.module.scss";
import CheckBox from "../../../CheckBox";
import { ChangeEvent, FormEvent, useState } from "react";
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
