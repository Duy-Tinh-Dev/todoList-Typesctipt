import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const filterSelector = (state: RootState) => state.filter;
const todoListSelector = (state: RootState) => state.todoList;

export const remainingTodoList = createSelector(
  todoListSelector,
  filterSelector,
  (todoList, filter) => {
    return todoList.filter((todo) => {
      if (filter.status === "All") {
        return true;
      }
      return filter.status === "Completed" ? todo.complete : !todo.complete;
    });
  }
);

export const counterTodo = createSelector(todoListSelector, (todoList) => {
  return todoList.reduce((total, todo) => {
    return todo.complete ? total : total + 1;
  }, 0);
});
