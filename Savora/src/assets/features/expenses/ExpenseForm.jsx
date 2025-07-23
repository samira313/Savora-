import {  useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "./expenseSlice";


function ExpenseForm() {
    const dispatch = useDispatch();
    const[title , setTitle] = useState("");
    const[amount, setAmount] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
        id: Date.now(),
        title,
        amount: Number(amount),
    }
    dispatch(addExpense(newExpense));

    setTitle("");
    setAmount("");
}
    return (
        <form onSubmit={handleSubmit}> 
            
            <label>
                Expense Title:
                <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            </label>
            <label>
                Amount:
                <input 
                type= "number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
/>            </label>
           
            <button type="submit">Add Expense</button>
        </form>
    )
}

export default ExpenseForm;