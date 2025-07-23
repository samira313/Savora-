import React from "react";
import { useSelector } from "react-redux";
function ExpenseList() {
    const expenses = useSelector((state) => state.expenses.items);

    return (
        <div>
            <h3>Expenses</h3> 
            <ul>
                {expenses.map((expense) => 
                <li key={expense.id}>
                    {expense.title} - €{expense.amount}
                </li>
            )}
            </ul>
        </div>
    )

}

export default ExpenseList;