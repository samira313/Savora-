import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice ({
    name: "expense",
    initialState: {
        items: [],
    },
    reducers: {
        addExpense: (state, action) => {
            state.items.push(action.payload)
        }
    }
});

export const { addExpense } = expenseSlice.actions;
export const selectTotalExpenses = (state) => {
    return state.expenses.items.reduce((sum, item) => sum + item.amount, 0)
}
export default expenseSlice.reducer;