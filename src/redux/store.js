import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice.jsx";
import modalSlice from "./modalSlice.jsx";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    modal: modalSlice,
  },
});

export default store;
