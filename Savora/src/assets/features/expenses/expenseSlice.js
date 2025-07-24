import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice ({
    name: "expense",
    initialState: {
        items: [], //Store all expenses
    },
    reducers: {
        addExpense: (state, action) => {
            state.items.push(action.payload)
        },
        deleteExpense: (state, action) => {
            state.items = state.items.filter((expense) => expense.id !== action.payload);
        },
    }
});

export const { addExpense, deleteExpense } = expenseSlice.actions;
export const selectTotalExpenses = (state) => {
    return state.expenses.items.reduce((sum, item) => sum + item.amount, 0)
}
export default expenseSlice.reducer;