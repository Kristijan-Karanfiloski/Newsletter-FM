import database from "../data/data.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: database.todos,
};

// console.log("Form the Slice :", database);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos(state) {
      state.data;
    },
    deleteItem(state, action) {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    addTodos(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const { getTodos, deleteItem, addTodos } = todosSlice.actions;

export default todosSlice.reducer;
