import classNames from "classnames/bind";
import style from "./TodoApp.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "../TodoList";
import { useState, useEffect } from "react";
import { ITodo } from "../Interface";
const cx = classNames.bind(style);
function TodoApp() {
  const [todoList, setTodoList] = useState<Array<ITodo>>([]);
  const [tempTodoList, setTempTodoList] = useState<Array<ITodo> | []>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [activeTodoCount, setActiveTodoCount] = useState<number>(0);
  useEffect(() => {
    if (localStorage["todoList"]) {
      let data = JSON.parse(localStorage.getItem("todoList") || "");
      setTodoList(data);
      setTempTodoList(data);
    }
  }, []);
  useEffect(() => {
    let checked = todoList.every((item) => item.complete === true);
    const countTodo = todoList.reduce(function (count: number, todo: ITodo) {
      return todo.complete ? count : count + 1;
    }, 0);
    setActiveTodoCount(countTodo);
    setSelectAll(checked);
    setTempTodoList(todoList);
  }, [todoList]);
  const clearAllTodo = () => {
    setTodoList([]);
    localStorage.setItem("todoList", JSON.stringify([]));
  };
  const switchTab = (tab: string) => {
    switch (tab) {
      case "Active": {
        let tempTodoList = todoList.filter((item) => item.complete === false);
        setTempTodoList(tempTodoList);
        break;
      }
      case "Completed": {
        let tempTodoList = todoList.filter((item) => item.complete === true);
        setTempTodoList(tempTodoList);
        break;
      }
      default:
        setTempTodoList(todoList);
    }
  };
  const addTask = (task: string): void => {
    const todo = {
      id: Math.floor(Math.random() * 100 + 1),
      task: task,
      complete: false,
    };
    setTodoList((pre) => {
      const newTodoList = [...pre, todo];
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      return newTodoList;
    });
  };
  const toggleSelect = (isSelectAll: boolean): void => {
    if (isSelectAll) {
      let tempTodoList = todoList.map((item, index) => {
        return {
          id: item.id,
          task: item.task,
          complete: true,
        };
      });
      setTodoList(tempTodoList);
      localStorage.setItem("todoList", JSON.stringify(tempTodoList));
    } else {
      let tempTodoList = todoList.map((item, index) => {
        return {
          id: item.id,
          task: item.task,
          complete: false,
        };
      });
      setTodoList(tempTodoList);
      localStorage.setItem("todoList", JSON.stringify(tempTodoList));
    }
  };
  const editTodo = (id: number, task: string) => {
    const tempTodoList = todoList.map((item) => {
      if (item.id === id) {
        item.task = task;
      }
      return item;
    });
    setTodoList(tempTodoList);
    localStorage.setItem("todoList", JSON.stringify(tempTodoList));
  };
  const completeTodo = (id: number, complete: boolean) => {
    const tempTodoList = todoList.map((item) => {
      if (item.id === id) {
        item.complete = complete;
      }
      return item;
    });
    setTodoList(tempTodoList);
    localStorage.setItem("todoList", JSON.stringify(tempTodoList));
  };
  const deleteTodo = (id: number) => {
    const tempTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(tempTodoList);
    localStorage.setItem("todoList", JSON.stringify(tempTodoList));
  };
  return (
    <div className={cx("wrapper")}>
      <Header
        addTask={addTask}
        toggleSelect={toggleSelect}
        selectAll={selectAll}
      />
      <TodoList
        data={tempTodoList}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
      <Footer
        switchTab={switchTab}
        clearAllTodo={clearAllTodo}
        activeTodoCount={activeTodoCount}
      />
    </div>
  );
}
export default TodoApp;