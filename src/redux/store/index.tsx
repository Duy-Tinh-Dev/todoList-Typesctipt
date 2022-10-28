import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../slices/filterSlice";
import todoSlice from "../slices/todoSlice";

const store = configureStore({
  reducer: {
    filter: filtersSlice,
    todoList: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
