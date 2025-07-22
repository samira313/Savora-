//this file creates and configures the central Redux store.
//it combines all reducers (like bugdet or expenses), and makes the global state available to entire React app using Redux toolkit.

import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './assets/features/budget/budgetSlice';

export const store = configureStore({
    reducer: {
        budget: budgetReducer,
    }
})