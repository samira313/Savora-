import { createSlice } from "@reduxjs/toolkit";

const savedBudget = localStorage.getItem("budget");

const initialState = {
  amount: savedBudget ? JSON.parse(savedBudget) : 0,
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudget: (state, action) => {
      state.amount = action.payload;
      localStorage.setItem("budget", JSON.stringify(action.payload));
    },
  },
});

export const { setBudget } = budgetSlice.actions;
export default budgetSlice.reducer;