import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    todoAdded(state, action) {
      state.todo.push({
        id: action.payload.id,
        text: action.payload.text,
        isCompleted: action.payload.isCompleted,
      });
    },
    todoToggled(state, action) {
      const todoDone = state.todo.find((todo) => todo.id === action.payload.id);
      todoDone.isCompleted = !todoDone.isCompleted;
    },
    changeMode(state, action) {
      state.isDarkMode = action.payload.isDarkMode;
    },
  },
});

export const { todoAdded, todoToggled, changeMode } = todoSlice.actions;
export default todoSlice.reducer;
