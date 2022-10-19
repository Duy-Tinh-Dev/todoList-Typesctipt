import classNames from "classnames/bind";
import { ITodo } from "../Interface";
import TodoItem from "../TodoItem";
import style from "./Todo.module.scss";
const cx = classNames.bind(style);
interface Props {
  data: Array<ITodo>;
  completeTodo(id: number, complete: boolean): void;
  deleteTodo(id: number): void;
  editTodo(id: number, task: string): void;
}
function TodoList({ data, completeTodo, deleteTodo, editTodo }: Props) {
  return (
    <div className={cx("wrapper")}>
      {data.map((item, index) => (
        <TodoItem
          key={index}
          todo={item}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
