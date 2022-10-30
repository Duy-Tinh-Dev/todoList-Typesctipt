import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ITodo from "../../../model/Todo";

type SliceState = Array<ITodo>;

const initialState: SliceState = [
  {
    id: "1",
    nameTask: "Learn Redux",
    complete: false,
  },
  {
    id: "2",
    nameTask: "Learn Java",
    complete: false,
  },
  {
    id: "3",
    nameTask: "Learn Html",
    complete: true,
  },
];

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
    },

    editTodo: (
      state,
      action: PayloadAction<{ id: string; valueEditTask: string }>
    ) => {
      const indexEditTodo = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[indexEditTodo].nameTask = action.payload.valueEditTask;
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    toggleCompleteTodo: (state, action: PayloadAction<string>) => {
      state.map((todo) =>
        todo.id === action.payload ? (todo.complete = !todo.complete) : todo
      );
    },

    toggleCompleteTodoAll: (state, action: PayloadAction<boolean>) => {
      state.map((todo) =>
        action.payload ? (todo.complete = true) : (todo.complete = false)
      );
    },

    clearAllTodo: (state) => {
      return state.filter((todo) => todo.complete === false);
    },
  },
});

export const {
  addTodo,
  editTodo,
  removeTodo,
  toggleCompleteTodo,
  toggleCompleteTodoAll,
  clearAllTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
