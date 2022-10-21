import { useRef, useState, KeyboardEvent, useEffect } from "react";
import classNames from "classnames/bind";

import ITodo from "../../model/Todo";
import CheckBox from "../CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import style from "./index.module.scss";
const cx = classNames.bind(style);
type Props = {
  todo: ITodo;
  completeTodo(id: number, complete: boolean): void;
  deleteTodo(id: number): void;
  editTodo(id: number, task: string): void;
};
function TodoItem({ todo, completeTodo, deleteTodo, editTodo }: Props) {
  const [editing, setEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (editing) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [editing]);
  const complete: boolean = todo.complete;
  const classnames = cx("wrapper", {
    editing,
    complete,
  });
  const toggleSelect = (isCheck: boolean): void => {
    completeTodo(todo.id, isCheck);
  };
  const handleSubmit = (): void => {
    const trimValueInput = inputRef.current?.value;
    if (trimValueInput) {
      editTodo(todo.id, trimValueInput);
    }
    setEditing(false);
  };

  const enterPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter" || event.keyCode === 13) {
      const trimValueInput = inputRef.current?.value;
      if (trimValueInput) {
        editTodo(todo.id, trimValueInput);
      }
      setEditing(false);
    }
  };
  const handleToggleEdit = (): void => {
    setEditing(!editing);
  };
  return (
    <div className={classnames}>
      <div className={cx("todo-item")}>
        <CheckBox outline toggleSelect={toggleSelect} checked={complete} />
        <p className={cx("content")} onDoubleClick={handleToggleEdit}>
          {todo.task}
        </p>
        <button
          className={cx("btn-delete")}
          onClick={() => deleteTodo(todo.id)}
        >
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
      </div>
      <input
        defaultValue={todo.task}
        ref={inputRef}
        type="text"
        className={cx("edit-todo")}
        onBlur={handleSubmit}
        onKeyDown={enterPress}
      />
    </div>
  );
}

export default TodoItem;
