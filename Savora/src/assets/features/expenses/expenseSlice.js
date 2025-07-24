import { createSlice } from "@reduxjs/toolkit";

const savedExpenses = localStorage.getItem("expenses");
const initialState = {
  items: savedExpenses ? JSON.parse(savedExpenses) : [],
};


const expenseSlice = createSlice ({
    name: "expense",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem("expenses", JSON.stringify(state.items));
        },
        deleteExpense: (state, action) => {
            state.items = state.items.filter((expense) => expense.id !== action.payload);
            localStorage.setItem("expenses", JSON.stringify(state.items));
        },
        setBudget: (state, action) => {
  state.amount = action.payload;
  localStorage.setItem("budget", JSON.stringify(action.payload)); 
},

    }

});


export const { addExpense, deleteExpense } = expenseSlice.actions;
export const selectTotalExpenses = (state) => {
    return state.expenses.items.reduce((sum, item) => sum + item.amount, 0)
}
export default expenseSlice.reducer;