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
 editExpense: (state, action) => {
            const { id, title, amount } = action.payload;
            const index = state.items.findIndex((expense) => expense.id === id);
            if (index !== -1) {
                state.items[index] = { id, title, amount };
                localStorage.setItem("expenses", JSON.stringify(state.items));
            }
          },
    }

});


export const { addExpense, deleteExpense, editExpense} = expenseSlice.actions;
export const selectTotalExpenses = (state) => {
    return state.expenses.items.reduce((sum, item) => sum + item.amount, 0)
}
export default expenseSlice.reducer;