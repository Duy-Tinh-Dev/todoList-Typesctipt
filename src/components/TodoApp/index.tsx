import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoItem from "../TodoItem";
import { remainingTodoList } from "../../redux/selectors";
import style from "./index.module.scss";

const cx = classNames.bind(style);
function TodoApp() {
  const todoList = useSelector(remainingTodoList);
  return (
    <>
      <h1 className={cx("heading")}>todos</h1>;
      <div className={cx("wrapper")}>
        <Header />
        <div>
          {todoList.map((item, index) => (
            <TodoItem key={index} todo={item} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
export default TodoApp;
