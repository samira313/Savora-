import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteExpense } from "./expenseSlice";
function ExpenseList() {
    const expenses = useSelector((state) => state.expenses.items);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Expenses</h3> 
            <ul>
                {expenses.map((expense) => 
                <li key={expense.id}>
                    {expense.title} - €{expense.amount}
                    <button onClick={() => dispatch(deleteExpense(expense.id))}>❌</button>
                </li>
            )}
            </ul>
        </div>
    )

}

export default ExpenseList;