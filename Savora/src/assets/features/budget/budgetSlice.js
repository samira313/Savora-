// this file defines and manages the state for the user's budget.
// and autimatically generates a reducer using redux.toolkit createSlice.
import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
    name: 'budget',
    initialState: {
        amount: 0,
    },
    reducers: {
        setBudget: (state, action) => {
            state.amount = action.payload;
        }
    }
});
 
export const { setBudget } = budgetSlice.actions;
export default budgetSlice.reducer;