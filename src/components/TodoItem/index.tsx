import { useRef, useState, KeyboardEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import ITodo from "../../model/Todo";
import CheckBox from "../CheckBox";
import {
  editTodo,
  removeTodo,
  toggleCompleteTodo,
} from "../../redux/slices/todoSlice";
import style from "./index.module.scss";

const cx = classNames.bind(style);
type Props = {
  todo: ITodo;
};
function TodoItem({ todo }: Props) {
  const [editing, setEditing] = useState<boolean>(false);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const complete: boolean = todo.complete;
  const classnames = cx("wrapper", {
    editing,
    complete,
  });

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const handleSubmit = (): void => {
    const valueEditTask = inputRef.current?.value;
    if (valueEditTask) {
      dispatch(editTodo({ id: todo.id, valueEditTask }));
    }
    setEditing(false);
  };

  const handleDeleteTodo = (): void => {
    dispatch(removeTodo(todo.id));
  };

  const toggleSelect = (): void => {
    dispatch(toggleCompleteTodo(todo.id));
  };

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter" || event.keyCode === 13) {
      setEditing(false);
    }
  };

  return (
    <div className={classnames} id={todo.id}>
      <div className={cx("todo-item")}>
        <CheckBox outline checked={complete} toggleSelect={toggleSelect} />
        <p className={cx("content")} onDoubleClick={() => setEditing(!editing)}>
          {todo.task}
        </p>
        <button className={cx("btn-delete")} onClick={handleDeleteTodo}>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
      </div>
      <input
        defaultValue={todo.task}
        ref={inputRef}
        type="text"
        className={cx("edit-todo")}
        onBlur={handleSubmit}
        onKeyDown={handleEnterPress}
      />
    </div>
  );
}
export default TodoItem;
